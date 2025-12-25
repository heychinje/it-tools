#!/bin/bash

# IT Tools Mac App Build Script
echo "🚀 Building IT Tools Mac App for All Architectures..."

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

# Build for Apple Silicon (M1/M2/M3/M4)
echo "🍎 Building for Apple Silicon (aarch64)..."
npm run tauri build -- --target aarch64-apple-darwin

# Build for Intel Macs
echo "💻 Building for Intel (x86_64)..."
npm run tauri build -- --target x86_64-apple-darwin

# Build Universal Binary (supports both Apple Silicon and Intel)
echo "🌐 Building Universal Binary (both architectures)..."
npm run tauri build -- --target universal-apple-darwin

echo "✅ All Mac app builds complete!"
echo ""
echo "📁 Find your installable packages:"
echo "   Apple Silicon: src-tauri/target/aarch64-apple-darwin/release/bundle/dmg/"
echo "   Intel Macs:    src-tauri/target/x86_64-apple-darwin/release/bundle/dmg/"
echo "   Universal:     src-tauri/target/universal-apple-darwin/release/bundle/dmg/"
echo ""
echo "🎯 Use the Universal binary for distribution (works on all Macs)!"