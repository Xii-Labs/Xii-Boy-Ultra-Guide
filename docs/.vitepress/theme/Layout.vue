<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide, ref, watch, onMounted } from 'vue'

const { Layout } = DefaultTheme
const { isDark } = useData()

const darkVideo = '/Xii-Boy-Ultra-360-Render-White.webm'
const darkSafari = '/Xii-Boy-Ultra-360-Render-White.mov'
const lightVideo = '/Xii-Boy-Ultra-360-Render.webm'
const lightSafari = '/Xii-Boy-Ultra-360-Render.mov'

const lightVideoRef = ref<HTMLVideoElement | null>(null)
const darkVideoRef = ref<HTMLVideoElement | null>(null)
const activeVideo = ref(isDark.value ? 'dark' : 'light')

onMounted(() => {
  if (isDark.value) {
    lightVideoRef.value?.pause()
  } else {
    darkVideoRef.value?.pause()
  }
})

function syncVideos(fromVideo: HTMLVideoElement | null, toVideo: HTMLVideoElement | null, targetMode: 'dark' | 'light') {
  if (fromVideo && toVideo) {
    const syncTime = fromVideo.currentTime
    
    const finalizeSync = () => {
      activeVideo.value = targetMode
      // Give the CSS opacity transition a moment to fade in the new video before pausing the old video
      setTimeout(() => {
        fromVideo.pause()
      }, 400)
    }

    // Always play the new video immediately so it's ready
    const playPromise = toVideo.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => { })
    }

    if (Math.abs(toVideo.currentTime - syncTime) > 0.1) {
      const handleSeeked = () => {
        toVideo.removeEventListener('seeked', handleSeeked)
        finalizeSync()
      }
      toVideo.addEventListener('seeked', handleSeeked)
      toVideo.currentTime = syncTime
      
      // Fallback in case seeked doesn't fire
      setTimeout(() => {
        toVideo.removeEventListener('seeked', handleSeeked)
        finalizeSync()
      }, 200)
    } else {
      finalizeSync()
    }
  }
}

watch(isDark, (dark) => {
  const fromVideo = dark ? lightVideoRef.value : darkVideoRef.value
  const toVideo = dark ? darkVideoRef.value : lightVideoRef.value
  syncVideos(fromVideo, toVideo, dark ? 'dark' : 'light')
})

// This function checks if the browser supports the View Transitions API.
const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

// This provides the logic to the theme's dark mode toggle button.
provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  // If the browser doesn't support the animation, switch themes instantly.
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  // Gets the click position and sets it as CSS variables for the animation.
  document.documentElement.style.setProperty('--darkX', x + 'px')
  document.documentElement.style.setProperty('--darkY', y + 'px')

  // Triggers the View Transition API.
  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready
})
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <div class="video-container">
        <!-- Light video -->
        <video ref="lightVideoRef" :class="{ 'is-active': activeVideo === 'light' }" preload="auto" class="hero-video" autoplay loop muted playsinline>
          <source :src="lightSafari" type="video/quicktime" />
          <source :src="lightVideo" type="video/webm" />
        </video>
        <!-- Dark video -->
        <video ref="darkVideoRef" :class="{ 'is-active': activeVideo === 'dark' }" preload="auto" class="hero-video" autoplay loop muted playsinline>
          <source :src="darkSafari" type="video/quicktime" />
          <source :src="darkVideo" type="video/webm" />
        </video>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.video-container {
  display: grid;
  margin: 64px auto;
}

.hero-video {
  grid-area: 1 / 1;
  max-width: 100%;
  max-height: 280px;
  display: block;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.hero-video.is-active {
  opacity: 1;
  z-index: 2;
}

@media (min-width: 640px) {
  .hero-video {
    max-height: 320px;
  }
}

@media (min-width: 960px) {
  .video-container {
    margin: 0;
  }
}
</style>
