use std::fs;

use leptos::error::Error;

pub fn merge_content(path_str: &str) -> Result<String, Error> {
    //read directory files

    let entries = fs::read_dir(path_str).unwrap();
    let mut chapter = String::new();
    let mut book = String::new();

    for entry in entries {
        let entry = entry?;
        let path = entry.path();
        let metadata = fs::metadata(&path)?;

        if entry.file_name() == "parent.emu" {
            let file_content = fs::read_to_string(path).unwrap();
            // file_content = remove_comment_symbols(&file_content);
            book.push_str(&file_content);
        } else if entry.file_name() == "content.emu" {
            let file_content = fs::read_to_string(path).unwrap();
            //file_content = remove_comment_symbols(&file_content);
            let with_indent = add_indent(&file_content);
            chapter.push_str(&with_indent);
        } else if metadata.is_dir() {
            if let Ok(nested_content) = merge_content(&path.to_str().unwrap()) {
                let with_indent = add_indent(&nested_content);
                book.push_str(&with_indent);
            }
        };
    }
    book.push_str(&chapter);
    Ok(book)
}

pub struct ContentFile {
    pub content: String,
    pub name: String,
}
pub fn get_articles_content(path_str: &str) -> Result<Vec<ContentFile>, Error> {
    //read directory files

    let entries = fs::read_dir(path_str).unwrap();
    let mut articles = Vec::new();

    for entry in entries {
        let entry = entry?;
        let path = entry.path();
        let metadata = fs::metadata(&path)?;

        if metadata.is_dir() {
            let files = fs::read_dir(path.to_str().unwrap()).unwrap();
            for file in files {
                let file = file?;

                if file.file_name() == "content.emu" {
                    let file_content = fs::read_to_string(file.path()).unwrap();
                    articles.push(ContentFile {
                        content: file_content,
                        name: entry.file_name().to_str().unwrap().to_string(),
                    });
                }
            }
        };
    }

    Ok(articles)
}

// fn remove_comment_symbols(content: &str) -> String {
//     let mut output = String::new();
//     let lines = content.lines();

//     // Iterate over the remaining lines, excluding the last line
//     for line in lines.clone() {
//         output.push_str(line);
//         output.push('\n');
//     }
//     output
// }

fn add_indent(content: &str) -> String {
    let mut indented_first_line = String::new();
    let lines = content.lines();

    // add indent
    for line in lines.clone().take(lines.count()) {
        indented_first_line.push_str(&format!("    {}", line));
        indented_first_line.push('\n');
    }
    indented_first_line
}
