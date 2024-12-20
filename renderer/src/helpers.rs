use regex::Regex;
use std::{
    env,
    fs::{self, File, OpenOptions, ReadDir},
    io::{self, read_to_string, BufRead, Write},
    path::PathBuf,
};

#[derive(Clone, Copy)]
pub enum ArticleType {
    CHAPTER,
    BOOTCAMP,
}

impl ArticleType {
    pub fn from_str(_str: &str) -> Self {
        match _str {
            "chapters" => Self::CHAPTER,
            "bootcamps" => Self::BOOTCAMP,
            "chapter" => Self::CHAPTER,
            "bootcamp" => Self::BOOTCAMP,
            _ => Self::CHAPTER,
        }
    }
    fn to_str(&self) -> String {
        match self {
            ArticleType::CHAPTER => "chapter".to_string(),
            ArticleType::BOOTCAMP => "bootcamp".to_string(),
        }
    }
    pub fn to_title(&self) -> String {
        match self {
            ArticleType::CHAPTER => "Chapters".to_string(),
            ArticleType::BOOTCAMP => "Bootcamps".to_string(),
        }
    }
}

fn read_content_dir() -> ReadDir {
    let mut path = env::current_dir().unwrap();
    path.pop();
    let path_string = format!("{}/src/content", path.display());
    let entries = fs::read_dir(path_string);
    if entries.is_err() {
        panic!("Content dir not found")
    }
    entries.unwrap()
}

pub fn get_sorted_articles(article_type: ArticleType) -> Vec<(u8, PathBuf)> {
    let entries = read_content_dir();
    let mut articles = Vec::<(u8, PathBuf)>::new();
    for entry in entries {
        let entry = entry.unwrap();
        let path = entry.path();
        let metadata = fs::metadata(&path).unwrap();
        let path_str = path.to_str().unwrap();
        let file_name = path_str.split("/").last().unwrap();

        if !file_name.starts_with("#")
            && metadata.is_dir()
            && ends_with_article_number(&path, &article_type)
        {
            let last_char = path_str.chars().last().unwrap();
            let article_number = last_char.to_digit(10).unwrap() as u8;
            articles.push((article_number, path));
        };
    }
    articles.sort_by(|a, b| a.0.cmp(&b.0));
    articles
}

pub fn ends_with_article_number(path: &PathBuf, article_type: &ArticleType) -> bool {
    let path_str = path.to_str().unwrap_or("");

    let suffix = article_type.to_str();

    if path_str.ends_with(suffix.as_str()) {
        return false; // Ends exactly with " chapter ", which is not valid
    }

    if let Some(pos) = path_str.rfind(suffix.as_str()) {
        let remaining = &path_str[pos + suffix.len()..];

        return remaining.chars().all(|c| c.is_digit(10));
    }
    false
}
pub fn get_article_title(path: &PathBuf) -> (String, String) {
    let path_str = path.to_str().unwrap_or("");
    let entries = fs::read_dir(path_str);
    if entries.is_err() {
        panic!("Path not found {}", path_str)
    }

    let mut title = String::new();
    let mut mobile_title = String::new();
    for entry in entries.unwrap() {
        let entry = entry.unwrap();
        let path = entry.path();
        let file_name = path.file_name().unwrap().to_str().unwrap_or("");
        if file_name == "__parent.emu" {
            let parent_emu = fs::read_to_string(path);
            if parent_emu.is_err() {
                panic!("Path not found {}", path_str)
            }
            let parent_emu = parent_emu.unwrap();
            let lines = parent_emu.split("\n").collect::<Vec<&str>>();
            for line in lines {
                if line.trim().starts_with("title ") {
                    title += line.trim().split_once(" ").unwrap().1;
                } else if line.trim().starts_with("mobile_title ") {
                    mobile_title += line.trim().split_once(" ").unwrap().1;
                }
            }
            if title.is_empty() {
                panic!("title is empty");
            };
            return (title, mobile_title);
        }
    }
    if title.is_empty() {
        panic!("Could not find title attribute");
    };
    (title, mobile_title)
}

pub fn replace_content(
    file_path: &str,
    replace_str: &str,
    article_type: &str,
) -> Result<(), std::io::Error> {
    // Read the file content into a vector of lines
    let file_content = fs::read_to_string(file_path)?;

    let start = regex::escape(&format!("<div id=\"{article_type}\">"));
    let end = regex::escape(&format!("</div>"));

    let re = Regex::new(&format!(r"{}(.*?){}", start, end)).unwrap();

    // Replace the matched text with a desired replacement
    let replaced = re.replace_all(&file_content, |_: &regex::Captures| {
        format!("<div id=\"{article_type}\"> {replace_str} </div>")
    });

    let mut file = File::create(&file_path)?;
    file.write_all(replaced.as_bytes())?;
    Ok(())
}

pub fn add_imports(file: &PathBuf, numerated: bool) -> io::Result<()> {
    let imports = "
    import ArticleTitle from \"~/components/ArticleTitle\"
    import {Section, Example, NoBreak, CustomBlock, Pause} from \"~/components/Wrappers\"
    import {CenterDisplay, CentralItalicDisplay} from \"~/components/Delimiters\"
    import {Math, MathBlock} from \"~/components/Math\"
    import {ImageRight, ImageLeft} from \"~/components/SideImage\"
    import Image from \"~/components/Image\"
    import InlineImage from \"~/components/InlineImage\"
    import {Exercise, Exercises} from \"~/components/Exercises\"
    import Solution from \"~/components/Solution\"
    import Table from \"~/components/Table\"
    import Grid from \"~/components/Grid\"
    import {List, Item} from \"~/components/List\"
    import {SectionDivider, StarDivider} from \"~/components/SectionDivider\"
    import VerticalChunk from \"~/components/VerticalChunk\"\n";

    let mut file_name = file
        .to_str()
        .unwrap()
        .split("/")
        .last()
        .unwrap()
        .to_string();
    file_name.truncate(file_name.len() - 4);

    let article_component = format!(
        "
        const {} = (props: any) => {{
            return <>
            <ArticleTitle label={} on_mobile_label={}/>
            {{props.children}}</>
        }}\n
    ",
        if !numerated {
            remove_number(capitalize_first(&file_name).as_str())
        } else {
            capitalize_first(&file_name)
        },
        format!(
            "{{`{}: ` + props.title }}",
            add_space_between_word_and_digit(capitalize_first(&file_name).as_str())
        ),
        format!(
            "{{`{}: ` + props.mobile_title }}",
            add_space_between_word_and_digit(capitalize_first(&file_name).as_str())
        )
    );

    let existing_content = fs::read_to_string(file)?.replace(r"\up", r"\\up");

    let with_imports = format!("{imports}{article_component}{existing_content}");

    let mut file = OpenOptions::new().write(true).truncate(true).open(file)?;

    file.write_all(with_imports.as_bytes())?;
    Ok(())
}

fn capitalize_first(input: &str) -> String {
    if let Some(first_char) = input.chars().next() {
        let first_upper = first_char.to_uppercase().to_string();
        let rest = &input[first_char.len_utf8()..];
        format!("{}{}", first_upper, rest)
    } else {
        String::new()
    }
}

fn add_space_between_word_and_digit(input: &str) -> String {
    let re = Regex::new(r"(\p{L})(\d)").unwrap();
    re.replace_all(input, "$1 $2").to_string()
}

fn remove_number(input: &str) -> String {
    let re = Regex::new(r"(\p{L})(\d)").unwrap();
    re.replace_all(input, "$1").to_string()
}
