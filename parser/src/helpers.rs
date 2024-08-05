use std::{
    env,
    fs::{self, File, ReadDir},
    io::{self, BufRead, Write},
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
            ArticleType::CHAPTER => "Chapers".to_string(),
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

        if metadata.is_dir() && ends_with_article_number(&path, &article_type) {
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
        if file_name == "parent.emu" {
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
    start_line: usize,
    end_marker: &str,
    replace_str: &str,
) -> Result<isize, std::io::Error> {
    let mut lines: Vec<String> = Vec::new();

    // Read the file content into a vector of lines
    if let Ok(file) = File::open(&file_path) {
        for line in io::BufReader::new(file).lines() {
            lines.push(line?);
        }
    }

    // Find the end line
    let mut end_line = start_line;
    for (index, line) in lines.iter().enumerate().skip(start_line) {
        if line.trim().starts_with(end_marker) {
            end_line = index;
            println!("line iter {} end {}", start_line, end_line);

            break;
        }
    }

    println!("line iter {} end {}", start_line, end_line);

    // Replace the lines from start_line to end_line with new_content
    lines.splice(start_line..end_line, vec![replace_str.to_string()]);

    // Write the modified content back to the file
    let mut file = File::create(&file_path)?;
    for line in lines {
        // add line to file content
        file.write_all((line + "\n").as_bytes())?;
    }

    let fixed_lines_between_start_and_end: isize = 3;
    let diff_end_start: isize = (end_line - start_line).try_into().unwrap();

    let lines_diff: isize = fixed_lines_between_start_and_end - diff_end_start;

    Ok(lines_diff)
}
