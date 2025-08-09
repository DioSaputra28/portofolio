<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const activeSection = ref('home')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Update active section based on scroll position
  const sections = ['home', 'skills', 'experience', 'projects', 'contact']
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section
        break
      }
    }
  }
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-dark-bg/95 backdrop-blur-sm border-b border-dark-border' : 'bg-transparent'">
    <div class="section-container !py-4">
      <div class="flex items-center justify-between">
        <div class="text-xl font-bold text-neon">
          Dio Saputra
        </div>

        <div class="hidden md:flex space-x-8">
          <button v-for="item in [
            { id: 'home', label: 'Beranda' },
            { id: 'skills', label: 'Keahlian' },
            { id: 'experience', label: 'Pengalaman' },
            { id: 'projects', label: 'Proyek' },
            { id: 'contact', label: 'Kontak' }
          ]" :key="item.id" @click="scrollToSection(item.id)" class="nav-link"
            :class="{ active: activeSection === item.id }">
            {{ item.label }}
          </button>
        </div>

        <div class="flex items-center space-x-4">
        </div>
      </div>
    </div>
  </nav>
</template>