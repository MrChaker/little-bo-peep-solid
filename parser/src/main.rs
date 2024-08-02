pub mod elm_to_jsx;
pub mod helpers;
pub mod merge_content;
use elm_parser::counter::counters::Counters;
use elm_to_jsx::*;
use merge_content::get_articles_content;
use std::env;
use std::fs::File;
use std::io::Write;
use std::process::Command;

fn main() {
    let mut root = env::current_dir().unwrap();
    root.pop();
    let content_path = format!("{}/src/content", root.display());
    // let res = merge_content(path_string.as_str());
    // if res.is_err() {
    //     panic!("Error");
    // }
    // let elm_string = res.unwrap();

    let articles = get_articles_content(content_path.as_str());

    if let Ok(articles) = articles {
        print!("article: {}", articles.len());

        for article in articles {
            let mut counters = Counters::new();
            let jsx = elm_to_jsx(&article.content, &mut counters);
            // write to file
            let path_to_write = format!(
                "{}/src/routes/articles/{}.tsx",
                root.display(),
                article.name
            );

            let mut file = match File::create(path_to_write) {
                Ok(file) => file,
                Err(error) => {
                    println!("Error creating file: {}", error);
                    return;
                }
            };

            let tsx_content = format!(
                r#"
        const Article = () => {{
            return <>{jsx}</>;
        }};
        
        export default Article;
    "#
            );

            match file.write_all(tsx_content.as_bytes()) {
                Ok(_) => {
                    let _ = Command::new("npx")
                        .arg("prettier")
                        .arg("--write")
                        .arg(format!("{}/src/routes/articles", root.display(),))
                        .output()
                        .expect("Failed to execute command");
                }
                Err(error) => println!("Error writing to json_output.json: {}", error),
            }
        }
    }
}
