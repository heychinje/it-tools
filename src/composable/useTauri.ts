import { invoke } from '@tauri-apps/api/core'
import { isTauri } from './isTauri'

// Dynamic import for opener plugin to avoid web build issues
let open: (url: string) => Promise<void> = async (url: string) => {
  if (isTauri) {
    try {
      const opener = await import('@tauri-apps/plugin-opener')
      opener.open(url)
    } catch {
      window.open(url, '_blank')
    }
  } else {
    window.open(url, '_blank')
  }
}

export interface SystemInfo {
  platform: string
  arch: string
  version: string
}

export function useTauri() {
  const isDesktop = isTauri

  const showInFinder = async (path: string): Promise<void> => {
    if (!isDesktop) return
    
    try {
      await invoke('show_in_finder', { path })
    } catch (error) {
      console.error('Failed to show in Finder:', error)
    }
  }

  const getSystemInfo = async (): Promise<SystemInfo | null> => {
    if (!isDesktop) return null
    
    try {
      return await invoke<SystemInfo>('get_system_info')
    } catch (error) {
      console.error('Failed to get system info:', error)
      return null
    }
  }

  const openUrl = async (url: string): Promise<void> => {
    if (isDesktop) {
      try {
        await open(url)
      } catch (error) {
        console.error('Failed to open URL:', error)
        window.open(url, '_blank')
      }
    } else {
      window.open(url, '_blank')
    }
  }

  const greet = async (name: string): Promise<string | null> => {
    if (!isDesktop) return null
    
    try {
      return await invoke<string>('greet', { name })
    } catch (error) {
      console.error('Failed to greet:', error)
      return null
    }
  }

  const minimizeWindow = async (): Promise<void> => {
    if (!isDesktop) return
    
    try {
      await invoke('minimize_window')
    } catch (error) {
      console.error('Failed to minimize window:', error)
    }
  }

  const toggleFullscreen = async (): Promise<void> => {
    if (!isDesktop) return
    
    try {
      await invoke('toggle_fullscreen')
    } catch (error) {
      console.error('Failed to toggle fullscreen:', error)
    }
  }

  const setAlwaysOnTop = async (enabled: boolean): Promise<void> => {
    if (!isDesktop) return
    
    try {
      await invoke('always_on_top', { enabled })
    } catch (error) {
      console.error('Failed to set always on top:', error)
    }
  }

  return {
    isDesktop,
    showInFinder,
    getSystemInfo,
    openUrl,
    greet,
    minimizeWindow,
    toggleFullscreen,
    setAlwaysOnTop,
  }
}