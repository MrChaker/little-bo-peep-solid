use notify::Config;
use notify::{EventKind, RecommendedWatcher, RecursiveMode, Result, Watcher};
use regex::Regex;
use std::env;
use std::fs::OpenOptions;
use std::io::Write;
use std::path::{Path, PathBuf};
use std::process::Command;
use std::sync::mpsc::channel;
use std::time::Duration;

fn get_changed_article(path: &mut PathBuf) -> PathBuf {
    if let Some(last_component) = path.file_name().and_then(|name| name.to_str()) {
        let pattern = regex::Regex::new(r"^(chapter|bootcamp)\d+$").unwrap();
        if pattern.is_match(last_component) {
            return path.to_path_buf();
        }
    }
    path.pop();
    get_changed_article(path)
}

fn main() -> Result<()> {
    // Create a channel to receive the events.
    let (tx, rx) = channel();

    let config = Config::default().with_poll_interval(Duration::from_secs(1));

    // Automatically select the best implementation for your platform.
    let mut watcher: RecommendedWatcher = Watcher::new(tx, config)?;

    // Watch the directory recursively for changes.
    let path_to_watch = "../src/content"; // specify your directory path here
    watcher.watch(Path::new(path_to_watch), RecursiveMode::Recursive)?;

    println!("Watching for changes in: {}", path_to_watch);

    // Process events.
    loop {
        match rx.recv() {
            Ok(event) => {
                if let Ok(mut event) = event {
                    println!("Content changed !!");

                    let mut root = env::current_dir().unwrap();
                    root.pop();

                    // get changed articles path
                    for path in event.paths.iter_mut() {
                        let path = get_changed_article(path);
                        println!("path {}", path.display());

                        let renderer_path = format!("{}/renderer", root.display());

                        let _ = Command::new("cargo")
                            .current_dir(renderer_path)
                            .args(["run", "--mathjax"])
                            .output()
                            .expect("Failed to update content");
                    }
                } else {
                    println!("Event error {:?}", event.err().unwrap())
                }
            }
            Err(e) => println!("Error watching files: {:?}", e),
        }
    }
}
