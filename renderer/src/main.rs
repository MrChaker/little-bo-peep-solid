pub mod helpers;
use helpers::{add_imports, get_article_title, get_sorted_articles, replace_content, ArticleType};
use std::fs::read_to_string;
use std::path::Path;
use std::process::Command;
use std::{env, fs};

fn main() {
    let mut root = env::current_dir().unwrap();
    root.pop();

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
    println!("🚀 Render mathjax 🚀");
    let c = Command::new("node")
        .args([
            format!("{}/render-mathjax.js", root.display()),
            format!("{}/src/routes/article", root.display()),
        ])
        .output()
        .expect("Failed to render mathjax");

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

    for article_type_str in ["chapter", "bootcamp"].to_vec() {
        //  let article_type = ArticleType::from_str(render_type);
        //let article_type_abrv = article_type.to_abrv();
        let mut list = String::new();
        let article_type = ArticleType::from_str(&article_type_str);
        let articles = get_sorted_articles(article_type);

        if articles.len() > 0 {
            list.push_str(&format!(
                "<Title label=\"{}\" />\n",
                article_type.to_title()
            ));
            list.push_str("<ItemsList>\n");

            for (i, path) in articles {
                let (title, mobile_title) = get_article_title(&path);
                list.push_str(&format!(
                        r#"
                        <MenuItem article_type="{i}" label="{title}" on_mobile="{mobile_title}" href="{article_type_str}{i}"/>
                        "#
                    ));
            }
            list.push_str("</ItemsList>\n");
        }

        replace_content(&toc_path, &list, article_type_str)
            .expect("Error updating table of contents")
    }
}
