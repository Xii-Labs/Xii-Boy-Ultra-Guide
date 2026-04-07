<script setup>
import { ref, onMounted, computed } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import 'glightbox/dist/css/glightbox.min.css';

// The component accepts the 'images' array directly as a property from the Markdown.
// NOTE: 'images' is now handled internally via the 'step' prop.
const props = defineProps({
  step: {
    type: String,
    required: true,
  },
});

// Template refs for controlling the Splide instance and tracking the active index.
const mainSplide = ref(null);
const activeIndex = ref(0);

// Use a broader glob to ensure Vite sees the files. 
// The path must be relative to THIS component file.
const allStepImages = import.meta.glob('../../assets/**/*.{png,jpg,jpeg,webp}', { 
  eager: true, 
  import: 'default' 
});

// Filter images based on the 'step' prop and sort them by filename
const resolvedImages = computed(() => {
  const targetFolder = `/assets/${props.step}/`;
  
  return Object.keys(allStepImages)
    .filter((path) => path.includes(targetFolder))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map((path) => ({
      src: allStepImages[path],
      alt: '',
      description: ''
    }));
});

// Configuration for the main Splide carousel instance.
const mainOptions = {
  type: 'fade',
  rewind: true,
  pagination: false,
  arrows: true,
  speed: 400,
  easing: 'ease',
};

// Navigates the main carousel to a specific slide index.
const goToSlide = (index) => {
  mainSplide.value?.splide.go(index);
};

// Initializes and opens the GLightbox modal.
const openLightbox = async () => {
  if (!resolvedImages.value.length) return;
  const GLightbox = (await import('glightbox')).default;
  const lightbox = GLightbox({
    openEffect: 'fade',
    elements: resolvedImages.value.map(image => ({
      href: image.src,
      type: 'image',
      description: image.description || '',
    })),
    startAt: activeIndex.value,
    touchNavigation: true,
    loop: true,
    slideEffect: 'fade',
  });
  lightbox.open();
};

// Sets up Splide event listeners after the component has mounted.
onMounted(() => {
  const splideInstance = mainSplide.value?.splide;
  if (splideInstance) {
    // Synchronizes the active index with the carousel's state.
    activeIndex.value = splideInstance.index;
    splideInstance.on('moved', (newIndex) => {
      activeIndex.value = newIndex;
    });
  }
});
</script>

<template>
  <div class="ImageCarousel">
    <template v-if="resolvedImages.length > 0">
      <Splide
        class="main-carousel"
        :options="mainOptions"
        ref="mainSplide"
      >
        <SplideSlide v-for="image in resolvedImages" :key="image.src">
          <a :href="image.src" @click.prevent="openLightbox">
            <img :src="image.src" :alt="image.alt" loading="lazy" decoding="async">
          </a>
        </SplideSlide>
      </Splide>

      <div v-if="resolvedImages && resolvedImages.length > 1" class="thumbnail-gallery">
        <img
          v-for="(image, index) in resolvedImages"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          loading="lazy"
          decoding="async"
          class="thumbnail-image"
          :class="{ 'is-active': index === activeIndex }"
          tabindex="0"
          @click="goToSlide(index)"
          @keydown.enter.space.prevent="goToSlide(index)"
        >
      </div>
    </template>

    <div v-else class="debug-box">
      <p>⚠️ <strong>Carousel Debug Information:</strong></p>
      <p>Targeting Step: <code>{{ step }}</code></p>
      <p>Folder expected: <code>docs/assets/{{ step }}/</code></p>
    </div>
  </div>
</template>

<style scoped>
/* Main carousel container styling. */
.main-carousel {
  border-radius: 8px;
  overflow: hidden;
  line-height: 0;
}

.main-carousel :deep(.splide__slide) {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-carousel .splide__slide a {
  cursor: zoom-in;
  display: block;
}

/* Main carousel image styling. */
.main-carousel .splide__slide img {
  display: block;
  max-width: 100%;
  height: auto;
  max-height: 75vh;
  border-radius: 8px;
  /* Lifts the image to a new stacking layer above the theme's background grid. */
  position: relative;
  z-index: 1;
  /* Blocks the theme's background pattern from showing through any transparency. */
  background-color: var(--vp-c-bg);
}

/* Container for the thumbnail navigation. */
.thumbnail-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
  justify-content: center;
}

/* Individual thumbnail image styling. */
.thumbnail-image {
  height: 60px;
  width: auto;
  max-width: 100px;
  object-fit: contain;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid transparent;
  opacity: 0.6;
  transition: opacity 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.thumbnail-image.is-active:focus {
  outline: none;
}
.thumbnail-image:focus-visible {
  outline: 2px solid #5c8dff;
  outline-offset: 2px;
}

.thumbnail-image:hover {
  opacity: 1;
  transform: scale(1.05);
}

.thumbnail-image.is-active {
  border-color: #5c8dff;
  opacity: 1;
  transform: scale(1.05);
}

/* Custom styles for the main carousel navigation arrows. */
.main-carousel :deep(.splide__arrow) {
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  width: 2.25rem;
  height: 4rem;
  border-radius: 0.5rem;
  transition: opacity 0.2s ease, background-color 0.2s ease;
}

.main-carousel:hover :deep(.splide__arrow) {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .main-carousel :deep(.splide__arrow) {
    opacity: 0.7;
  }
}

.main-carousel :deep(.splide__arrow:hover) {
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
}

.main-carousel :deep(.splide__arrow svg) {
  fill: white;
  width: 1rem;
  height: 1rem;
}

.main-carousel :deep(.splide__arrow:disabled) {
  opacity: 0;
}

.debug-box {
  background: #2a2a2a;
  border: 2px dashed #ff5c5c;
  color: #ff5c5c;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  font-family: monospace;
}

/* Forces GLightbox navigation arrows to be visible on desktop. */
@media (min-width: 769px) {
  :global(.gnext),
  :global(.gprev) {
    display: block !important;
  }
}

/* Hides GLightbox navigation arrows on mobile in favor of swiping. */
@media (max-width: 768px) {
  :global(.gnext),
  :global(.gprev) {
      display: none !important;
  }
}
</style>