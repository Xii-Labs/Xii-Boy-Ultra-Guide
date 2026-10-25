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
const activeVideo = ref<'light' | 'dark'>('light')

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

onMounted(() => {
  activeVideo.value = isDark.value ? 'dark' : 'light'

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    lightVideoRef.value?.pause()
    darkVideoRef.value?.pause()
  } else {
    lightVideoRef.value?.play().catch(() => { })
    darkVideoRef.value?.play().catch(() => { })
  }
})

watch(isDark, (dark) => {
  activeVideo.value = dark ? 'dark' : 'light'
})

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  document.documentElement.style.setProperty('--darkX', `${x}px`)
  document.documentElement.style.setProperty('--darkY', `${y}px`)

  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })

  await transition.ready
})
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <div class="video-container">
        <!-- Light video – always playing -->
        <video ref="lightVideoRef" :class="{ 'is-active': activeVideo === 'light' }" autoplay preload="auto"
          class="hero-video" loop muted playsinline>
          <source :src="lightSafari" type="video/quicktime" />
          <source :src="lightVideo" type="video/webm" />
        </video>

        <!-- Dark video – always playing -->
        <video ref="darkVideoRef" :class="{ 'is-active': activeVideo === 'dark' }" autoplay preload="auto"
          class="hero-video" loop muted playsinline>
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