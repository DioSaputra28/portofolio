<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX / window.innerWidth
  mouseY.value = e.clientY / window.innerHeight

  const gradients = document.querySelectorAll('.gradient-orb')

  gradients.forEach((orb, index) => {
    const element = orb as HTMLElement
    const speed = (index + 1) * 15
    const xPos = mouseX.value * speed
    const yPos = mouseY.value * speed

    element.style.transform = `translate(${xPos}px, ${yPos}px)`
  })
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <!-- Gradient Mesh Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-dark-card"></div>

    <!-- Animated Gradient Orbs -->
    <div class="gradient-orb absolute top-0 -left-40 w-96 h-96 bg-neon/15 rounded-full blur-3xl animate-pulse-slow"></div>
    <div class="gradient-orb absolute top-1/4 -right-40 w-[32rem] h-[32rem] bg-neon/10 rounded-full blur-3xl animate-float" style="animation-delay: -2s;"></div>
    <div class="gradient-orb absolute bottom-0 left-1/3 w-[28rem] h-[28rem] bg-neon/12 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: -4s;"></div>

    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

    <!-- Floating Particles -->
    <div class="absolute top-1/4 left-1/4 w-1 h-1 bg-neon/60 rounded-full animate-ping" style="animation-duration: 3s;"></div>
    <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-neon/60 rounded-full animate-ping" style="animation-duration: 4s; animation-delay: 1s;"></div>
    <div class="absolute bottom-1/4 left-1/2 w-1 h-1 bg-neon/60 rounded-full animate-ping" style="animation-duration: 5s; animation-delay: 2s;"></div>
    <div class="absolute top-2/3 right-1/4 w-1 h-1 bg-neon/60 rounded-full animate-ping" style="animation-duration: 3.5s; animation-delay: 1.5s;"></div>

    <!-- Subtle Line Elements -->
    <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon/10 to-transparent"></div>
    <div class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-neon/10 to-transparent"></div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-30px) rotate(120deg);
  }
  66% {
    transform: translateY(-15px) rotate(240deg);
  }
}

.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(100, 255, 218, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(100, 255, 218, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}
</style>