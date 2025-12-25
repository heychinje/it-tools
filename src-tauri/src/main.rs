// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn show_in_finder(path: String) -> Result<(), String> {
    use std::process::Command;
    
    #[cfg(target_os = "macos")]
    {
        Command::new("open")
            .arg("-R")
            .arg(&path)
            .spawn()
            .map_err(|e| format!("Failed to show in Finder: {}", e))?;
    }
    
    Ok(())
}

#[tauri::command]
fn get_system_info() -> serde_json::Value {
    serde_json::json!({
        "platform": "macOS",
        "arch": std::env::consts::ARCH,
        "version": "2024.10.22"
    })
}

#[tauri::command]
fn minimize_window(window: tauri::Window) -> Result<(), String> {
    window.minimize().map_err(|e| e.to_string())
}

#[tauri::command]
fn toggle_fullscreen(window: tauri::Window) -> Result<(), String> {
    let is_fullscreen = window.is_fullscreen().map_err(|e| e.to_string())?;
    if is_fullscreen {
        window.set_fullscreen(false).map_err(|e| e.to_string())?;
    } else {
        window.set_fullscreen(true).map_err(|e| e.to_string())?;
    }
    Ok(())
}

#[tauri::command]
fn always_on_top(window: tauri::Window, enabled: bool) -> Result<(), String> {
    window.set_always_on_top(enabled).map_err(|e| e.to_string())
}

#[tauri::command]
fn close_window(window: tauri::Window) -> Result<(), String> {
    window.close().map_err(|e| e.to_string())
}

#[tauri::command]
fn quit(app: tauri::AppHandle) -> Result<(), String> {
    app.exit(0);
    Ok(())
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let window = app.get_webview_window("main").unwrap();
            window.set_title("IT Tools").unwrap();
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            greet, 
            show_in_finder, 
            get_system_info,
            minimize_window,
            toggle_fullscreen,
            always_on_top,
            close_window,
            quit
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}