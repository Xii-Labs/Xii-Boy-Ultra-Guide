<script setup>
// Define the images for this specific carousel right here.
const gettingStartedImages = [
  {
    src: '/images/diagrams/1.png',
    alt: 'A metal bracket with two tabs, viewed from the top.',
    description: 'First, orient the main bracket as shown.'
  },
  {
    src: '/images/diagrams/2.png',
    alt: 'The same metal bracket viewed from an angle.',
    description: 'Note the orientation of the side tabs.'
  }
];
</script>

# Getting Started with the Xii-Boy Ultra

Welcome! This guide provides a complete, step-by-step walkthrough for assembling your Xii-Boy Ultra kit from start to finish.

# Section 1: Preparing the Main Bracket


The first physical assembly step involves preparing the main internal bracket that holds the shoulder buttons.

<Carousel :images="gettingStartedImages" />

With the main bracket correctly identified, you are ready to proceed with installing the shoulder buttons.

## Step 1: yuh

<Carousel :images="[
  {
    src: '/images/diagrams/1.png',
    alt: 'A metal bracket with two tabs, viewed from the top.',
    description: 'First, orient the main bracket as shown.'
  },
  {
    src: '/images/diagrams/2.png',
    alt: 'The same metal bracket viewed from an angle.',
    description: 'Note the orientation of the side tabs.'
  }
]" />

wjhfblqejrgblkerqgbjqge

<Carousel :images="[
  {
    src: '/images/diagrams/2.png',
    alt: 'A metal bracket with two tabs, viewed from the top.',
    description: 'First, orient the main bracket as shown.'
  }
]" />

## Section 2

# Custom Container Test Page

Here are all the default custom containers available in VitePress.

---

## Info Container

:::info
This is the default `info` container. It's great for general notes and information that stands out from the main text. This is the replacement for `note`.
:::

:::info Important Information
This is an `info` container with a custom title.
:::

---

## Tip Container

:::tip
This is the default `tip` container. Use this for helpful advice, shortcuts, or suggestions that can make the user's life easier.
:::

:::tip Pro-Tip: Soldering
For a better connection, always apply flux to the pad before applying solder.
:::

---

## Warning Container

:::warning
This is the default `warning` container. It's used for things that might cause unexpected issues, errors, or require caution.
:::

:::warning Compatibility Notice
Ensure your Wii is a 4-layer revision before proceeding with the trim. Using a 6-layer board will not work with this guide.
:::

---

## Danger Container

:::danger
This is the default `danger` container. Use this for critical information about actions that could cause hardware damage, data loss, or personal injury.
:::

:::danger **CRITICAL**: Battery Safety
Inserting the batteries backward can cause permanent damage to the components and is a potential fire hazard. Double-check the orientation.
:::

---

## Details Container (Collapsible)

:::details
This is a `details` container. The content inside is hidden by default and can be expanded by clicking the summary text. It's useful for long code blocks, logs, or supplementary information that isn't critical to the main flow.
- Here is a list item inside.
- And another one.
:::

:::details Click to View Full Parts List
This is a `details` container with a custom title. The title becomes the clickable summary.
- Part A
- Part B
- Part C
:::