# IT Tools Mac App

This directory contains the Mac app version of IT Tools, built with Tauri.

## 🚀 Getting Started

### Prerequisites
- Rust (latest stable version)
- Node.js 18+
- npm

### Development

To run the Mac app in development mode:

```bash
npm run tauri:dev
```

This will:
1. Start the Vite development server
2. Compile the Rust backend
3. Launch the Mac app with hot reload

### Building

To build the Mac app for distribution:

```bash
# Using the build script (recommended)
./build-mac-app.sh

# Or manually
npm run tauri:build
```

The built app will be available in `src-tauri/target/release/bundle/macos/`.

## 🍎 Mac App Features

### Native Integration
- **Window Controls**: Minimize, fullscreen, and always-on-top toggle
- **System Integration**: Native macOS window management
- **Desktop Detection**: App detects if running in desktop environment
- **Performance**: Optimized for desktop usage with improved scrolling

### Desktop-Specific Components
- **DesktopControls.vue**: Floating window controls in the top-right corner
- **useTauri.ts**: Composable for desktop-specific functionality
- **isTauri.ts**: Utility to detect desktop environment

### Available Functions
```typescript
import { useTauri } from '@/composable/useTauri'

const {
  isDesktop,
  minimizeWindow,
  toggleFullscreen,
  setAlwaysOnTop,
  showInFinder,
  getSystemInfo,
  openUrl
} = useTauri()
```

## 📁 Project Structure

```
src-tauri/
├── src/
│   └── main.rs              # Rust backend
├── Cargo.toml               # Rust dependencies
├── tauri.conf.json          # Tauri configuration
├── build.rs                 # Build script
├── icons/                   # App icons
└── Info.plist              # macOS app metadata
```

## 🔧 Configuration

### App Metadata
- **Bundle ID**: `com.ittools.app`
- **Category**: Developer Tool
- **Minimum macOS**: 10.13+
- **Architecture**: Universal (Apple Silicon + Intel)

### Window Settings
- **Default Size**: 1200x800
- **Minimum Size**: 800x600
- **Resizable**: Yes
- **Title Bar**: Overlay style
- **Theme**: Light (adapts to system)

## 📦 Distribution

### For Development
```bash
npm run tauri:build-debug
```

### For Production
```bash
npm run tauri:build
```

### Code Signing (Optional)
To distribute the Mac app outside the App Store, you'll need to:

1. Get a Apple Developer certificate
2. Update `tauri.conf.json` with your signing identity
3. Build with code signing enabled

### App Store Distribution (Advanced)
For App Store distribution, additional steps are required:
- App Store Connect setup
- Specific entitlements configuration
- App Store submission guidelines compliance

## 🐛 Troubleshooting

### Common Issues

1. **Build fails with "icon is not RGBA"**
   - Ensure icons are in RGBA PNG format
   - Use the provided 128x128 and 256x256 icons

2. **"Port is in use" error**
   - The app will automatically try alternative ports
   - No action needed

3. **Rust compilation errors**
   - Run `rustup update` to get the latest Rust version
   - Clean with `cargo clean` in src-tauri directory

### Development Tips

- The app automatically detects desktop vs web environment
- Desktop-specific features are only shown in the Mac app
- All original web functionality is preserved
- Hot reload works for both Vue and Rust changes

## 🎯 Next Steps

### Potential Enhancements
- [ ] System tray integration
- [ ] Global keyboard shortcuts
- [ ] Native file dialogs
- [ ] Auto-updater
- [ ] App Store submission
- [ ] Notarization for distribution

### Performance Optimizations
- [ ] Lazy loading for tools
- [ ] Background processing
- [ ] Memory usage optimization
- [ ] Startup time improvements

## 📞 Support

For issues specific to the Mac app:
1. Check the [Tauri documentation](https://tauri.app/)
2. Review the main project README
3. Open an issue on the GitHub repository

---

**Note**: This Mac app version maintains 100% feature parity with the web version while adding native desktop capabilities.