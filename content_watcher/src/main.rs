use notify::Config;
use notify::{EventKind, RecommendedWatcher, RecursiveMode, Result, Watcher};
use std::env;
use std::fs::OpenOptions;
use std::io::Write;
use std::path::Path;
use std::process::Command;
use std::sync::mpsc::channel;
use std::time::Duration;

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
                if let Ok(_) = event {
                    println!("Content changed !!");

                    let mut root = env::current_dir().unwrap();
                    root.pop();
                    let renderer_path = format!("{}/renderer", root.display());

                    let output = Command::new("cargo")
                        .current_dir(renderer_path)
                        .arg("run")
                        .output();

                    println!("{:?}", output)
                } else {
                    println!("Event error {:?}", event.err().unwrap())
                }
            }
            Err(e) => println!("Error watching files: {:?}", e),
        }
    }
}
