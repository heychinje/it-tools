#!/bin/bash

# IT Tools Mac App Build Script
echo "🚀 Building IT Tools Mac App..."

# Check if Rust is installed
if ! command -v rustc &> /dev/null; then
    echo "❌ Rust is not installed. Please install Rust first."
    exit 1
fi

# Check if Node.js dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing Node.js dependencies..."
    npm install --legacy-peer-deps
fi

# Build the Vue app
echo "🔨 Building Vue app..."
npm run build

# Build the Mac app
echo "🍎 Building Mac app..."
npm run tauri:build

echo "✅ Mac app build complete!"
echo "📁 Find your app in: src-tauri/target/release/bundle/macos/"