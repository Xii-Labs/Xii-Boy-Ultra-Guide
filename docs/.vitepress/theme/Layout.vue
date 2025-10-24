<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide, ref, watch } from 'vue'

const { Layout } = DefaultTheme
const { isDark } = useData()

const darkVideo = '/Xii-Boy-Ultra-360-Render-White.webm'
const darkSafari = '/Xii-Boy-Ultra-360-Render-White.mov'
const lightVideo = '/Xii-Boy-Ultra-360-Render.webm'
const lightSafari = '/Xii-Boy-Ultra-360-Render.mov'

const lightVideoRef = ref(null)
const darkVideoRef = ref(null)

function syncVideos(fromVideo, toVideo) {
    if (fromVideo && toVideo) {
        toVideo.currentTime = fromVideo.currentTime
        if (fromVideo.paused) {
            toVideo.pause()
        } else {
            const playPromise = toVideo.play()
            if (playPromise !== undefined) {
                playPromise.catch(() => {})
            }
        }
    }
}

watch(isDark, (dark) => {
    const fromVideo = dark ? lightVideoRef.value : darkVideoRef.value
    const toVideo = dark ? darkVideoRef.value : lightVideoRef.value
    syncVideos(fromVideo, toVideo)
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
      <!-- Light video -->
      <video
        ref="lightVideoRef"
        v-show="!isDark"
        preload="auto"
        class="hero-video"
        autoplay
        loop
        muted
        playsinline
      >
        <source :src="lightSafari" type="video/quicktime" />
        <source :src="lightVideo" type="video/webm" />
      </video>
      <!-- Dark video -->
      <video
        ref="darkVideoRef"
        v-show="isDark"
        preload="auto"
        class="hero-video"
        autoplay
        loop
        muted
        playsinline
      >
        <source :src="darkSafari" type="video/quicktime" />
        <source :src="darkVideo" type="video/webm" />
      </video>
    </template>
  </Layout>
</template>

<style scoped>
.hero-video {
  max-width: 100%;
  max-height: 280px;
  display: block;
  margin: 64px auto;
  border-radius: 8px;
}
@media (min-width: 640px) {
  .hero-video {
    max-height: 320px;
  }
}
@media (min-width: 960px) {
  .hero-video {
    margin: 0;
  }
}
</style>
