<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const handleMouseMove = (e: MouseEvent) => {
  const shapes = document.querySelectorAll('.parallax-shape')
  const x = e.clientX / window.innerWidth
  const y = e.clientY / window.innerHeight
  
  shapes.forEach((shape, index) => {
    const element = shape as HTMLElement
    const speed = (index + 1) * 0.1
    const xPos = x * speed * 20
    const yPos = y * speed * 20
    
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
    <!-- Floating Shapes -->
    <div class="parallax-shape w-96 h-96 top-10 left-10"></div>
    <div class="parallax-shape w-64 h-64 top-1/2 right-20"></div>
    <div class="parallax-shape w-80 h-80 bottom-20 left-1/3"></div>
    
    <!-- Additional decorative elements -->
    <div class="absolute top-1/4 right-1/4 w-2 h-2 bg-neon rounded-full animate-pulse-slow"></div>
    <div class="absolute bottom-1/3 left-1/4 w-3 h-3 border border-neon rounded-full animate-bounce-slow"></div>
    <div class="absolute top-2/3 right-1/3 w-1 h-1 bg-neon rounded-full animate-ping"></div>
  </div>
</template>