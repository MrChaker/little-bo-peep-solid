pub mod helpers;
pub mod merge_content;
use helpers::{add_imports, get_article_title, get_sorted_articles, replace_content, ArticleType};
use std::fs::read_to_string;
use std::path::Path;
use std::process::Command;
use std::{env, fs};

fn main() {
    let mut root = env::current_dir().unwrap();
    root.pop();
    let content_path = format!("{}/src/content", root.display());

    //let articles = get_articles_content(content_path.as_str());

    println!("🚀 Parsing markup to jsx 🚀");
    let _ = Command::new(format!("{}/parser_script", root.display()))
        .args([
            format!("{}/src/content", root.display()),
            "--emit-book".to_string(),
            "solid".to_string(),
            "--output".to_string(),
            format!("{}/src/routes/article", root.display()),
        ])
        .output()
        .expect("Failed to run gleam parser script");

    println!("🚀 Add import lines 🚀");
    let entries = fs::read_dir(format!("{}/src/routes/article", root.display())).unwrap();

    for entry in entries {
        let entry = entry.unwrap();
        let path = entry.path();
        add_imports(&path).expect(&format!("Error adding imports to {}", path.display()))
    }

    // render tabel of contents
    println!("🚀 Render tabel of contents 🚀");
    render_table_of_contents(&root);

    println!("🟢 Parsing done ! Running prettier 🟢");
    let _ = Command::new("npx")
        .arg("prettier")
        .arg("--write")
        .arg(format!("{}/src", root.display(),))
        .output()
        .expect("Failed to execute command");
}

fn render_table_of_contents(root_path: &Path) {
    // read table.tsx file
    let toc_path = format!("{}/src/components/TableOfContents.tsx", root_path.display());
    let file_content = read_to_string(&toc_path);
    if file_content.is_err() {
        panic!("TableOfContents.tsx does not exist");
    }
    let file_content = file_content.unwrap();

    let lines = file_content.lines();
    let mut lines_diff: isize = 0;
    for (i, line) in lines.enumerate() {
        if line.trim().starts_with("{/* render ") {
            // cut string on 11th character until theres a space
            let render_type = &line.trim()[11..line.trim().len() - 4];

            let article_type = ArticleType::from_str(render_type);
            //let article_type_abrv = article_type.to_abrv();
            let mut list = String::new();
            let articles = get_sorted_articles(article_type);

            if articles.len() > 0 {
                list.push_str(&format!("<Title label=\"{}\" />", article_type.to_title()));
                list.push_str("<ItemsList>");

                for (i, path) in articles {
                    println!("path: {}", path.display());

                    let (title, mobile_title) = get_article_title(&path);
                    list.push_str(&format!(
                        r#"
                        <MenuItem article_type="{i}" label="{title}" on_mobile="{mobile_title}" href="{render_type}{i}"/>
                        "#
                    ));
                }
                list.push_str("</ItemsList>");
            }
            let start_line = lines_diff.checked_add_unsigned(1 + i).unwrap();
            if let Ok(start_line) = start_line.try_into() {
                if let Ok(diff) = replace_content(toc_path.as_str(), start_line, "{/* end ", &list)
                {
                    lines_diff = diff;
                }
            }
        }
    }
}
