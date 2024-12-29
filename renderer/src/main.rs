pub mod helpers;
use helpers::{add_imports, get_article_title, get_sorted_articles, replace_content, ArticleType};
use std::fs::{read_to_string, File};
use std::io::Write;
use std::path::{Path, PathBuf};
use std::process::Command;
use std::str::FromStr;
use std::{env, fs};

fn main() {
    let mut args = env::args().skip(1);
    let mut root = env::current_dir().unwrap();
    root.pop();

    match (args.next().as_deref(), args.next().as_deref(), args.next()) {
        (Some("--article"), Some(path), inculde_math) => {
            let article_name = path.split("/").last().unwrap();
            let generated_tsx_path = &format!("{}/generated/{article_name}.tsx", root.display());

            //delete  content
            File::create(generated_tsx_path).unwrap();

            println!("🚀 Parsing {generated_tsx_path} markup to jsx 🚀");
            let _ = Command::new(format!("{}/parser_script", root.display()))
                .args([
                    path.to_string(),
                    "--emit".to_string(),
                    "solid".to_string(),
                    "--output".to_string(),
                    generated_tsx_path.to_string(),
                ])
                .output()
                .expect("Failed to run gleam parser script");

            println!("🚀 Add import lines for {generated_tsx_path} 🚀");
            add_imports(&PathBuf::from_str(generated_tsx_path).unwrap(), false)
                .expect(&format!("Error adding imports to {}", generated_tsx_path));

            if inculde_math.is_some_and(|i| i == "--mathjax") {
                println!("🚀 Render mathjax 🚀");
                let _ = Command::new("node")
                    .args([
                        format!("{}/render-mathjax.js", root.display()),
                        generated_tsx_path.to_string(),
                    ])
                    .output()
                    .expect("Failed to render mathjax");
            }

            // copy generated content to route file
            let route_file = &format!("{}/src/routes/article/{article_name}.tsx", root.display());
            let generated_content = read_to_string(generated_tsx_path).unwrap();
            let mut f = File::create(route_file).unwrap();
            f.write_all(generated_content.as_bytes()).unwrap();
        }
        (Some("--article"), None, _) => println!("Error: Path is missing after '--article'."),
        (inculde_math, _, _) => {
            println!("🚀 Parsing markup to jsx 🚀");
            let _ = Command::new(format!("{}/parser_script", root.display()))
                .args([
                    format!("{}/src/content", root.display()),
                    "--emit-book".to_string(),
                    "solid".to_string(),
                    "--output".to_string(),
                    format!("{}/generated", root.display()),
                ])
                .output()
                .expect("Failed to run gleam parser script");

            println!("🚀 Add import lines 🚀");
            let entries = fs::read_dir(format!("{}/generated", root.display())).unwrap();

            for entry in entries {
                let entry = entry.unwrap();
                let path = entry.path();
                add_imports(&path, true)
                    .expect(&format!("Error adding imports to {}", path.display()))
            }

            // render tabel of contents
            println!("🚀 Render tabel of contents 🚀");
            render_articles_list(&root, "TableOfContents");
            render_articles_list(&root, "Panel");

            if inculde_math.is_some_and(|i| i == "--mathjax") {
                println!("🚀 Render mathjax 🚀");
                let c = Command::new("node")
                    .args([
                        format!("{}/render-mathjax.js", root.display()),
                        format!("{}/src/routes/article", root.display()),
                    ])
                    .output()
                    .expect("Failed to render mathjax");
            }

            println!("🟢 Parsing done ! Running prettier 🟢");
            let _ = Command::new("npx")
                .arg("prettier")
                .arg("--write")
                .arg(format!("{}/generated", root.display(),))
                .output()
                .expect("Failed to execute command");

            // copy generated content to src/routes/article folder
            let entries = fs::read_dir(format!("{}/generated", root.display())).unwrap();
            for entry in entries {
                let entry = entry.unwrap();
                let path = entry.path();
                let file_name = path.file_name().unwrap().to_str().unwrap_or("");
                let route_file = &format!("{}/src/routes/article/{file_name}", root.display());
                let generated_content = read_to_string(&path).unwrap();
                let mut f = File::create(route_file).unwrap();
                f.write_all(generated_content.as_bytes()).unwrap();
            }
        }
    }
}

fn render_articles_list(root_path: &Path, component_name: &str) {
    // read table.tsx file
    let toc_path = format!(
        "{}/src/components/{component_name}.tsx",
        root_path.display()
    );
    let file_content = read_to_string(&toc_path);
    if file_content.is_err() {
        panic!("{component_name}.tsx does not exist");
    }

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
