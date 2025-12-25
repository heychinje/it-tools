<template>
  <div v-if="isDesktop" class="desktop-controls">
    <n-button-group size="small">
      <n-button @click="minimizeWindow" quaternary circle>
        <template #icon>
          <icon:mdi:minus />
        </template>
      </n-button>
      
      <n-button @click="toggleFullscreen" quaternary circle>
        <template #icon>
          <icon:mdi:fullscreen v-if="!isFullscreen" />
          <icon:mdi:fullscreen-exit v-else />
        </template>
      </n-button>
      
      <n-button @click="setAlwaysOnTop(!isAlwaysOnTop)" quaternary circle>
        <template #icon>
          <icon:mdi:pin :class="{ 'text-primary': isAlwaysOnTop }" />
        </template>
      </n-button>
    </n-button-group>
  </div>
</template>

<script setup lang="ts">
import { NButtonGroup, NButton } from 'naive-ui'
import { useTauri } from '@/composable/useTauri'

const { 
  isDesktop, 
  minimizeWindow, 
  toggleFullscreen, 
  setAlwaysOnTop 
} = useTauri()

const isAlwaysOnTop = ref(false)
const isFullscreen = ref(false)

onMounted(() => {
  // Listen for fullscreen changes
  if (isDesktop) {
    window.addEventListener('fullscreenchange', () => {
      isFullscreen.value = !!document.fullscreenElement
    })
  }
})
</script>

<style scoped>
.desktop-controls {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.25rem;
  -webkit-app-region: no-drag;
}

.dark .desktop-controls {
  background-color: rgba(0, 0, 0, 0.2);
}

.desktop-controls .n-button {
  margin: 0 0.125rem;
}

.text-primary {
  color: var(--primary-color) !important;
}
</style>