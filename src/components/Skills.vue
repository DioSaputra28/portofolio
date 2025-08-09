<script setup lang="ts">
import { ref } from 'vue'

// Import logo assets
import htmlLogo from '../assets/html.png'
import jsLogo from '../assets/js.png'
import laravelLogo from '../assets/laravel.png'
import n8nLogo from '../assets/n8n.png'
import nodeLogo from '../assets/node.png'
import postgresLogo from '../assets/potsgre.png'
import tailwindLogo from '../assets/tailwind.png'
import vueLogo from '../assets/vue.png'

interface Skill {
  name: string
  logo: string
  category: string
  color: string
}

const skills: Skill[] = [
  { name: 'HTML5', logo: htmlLogo, category: 'Frontend', color: '#E34F26' },
  { name: 'JavaScript', logo: jsLogo, category: 'Frontend', color: '#F7DF1E' },
  { name: 'Vue.js', logo: vueLogo, category: 'Frontend', color: '#4FC08D' },
  { name: 'Tailwind CSS', logo: tailwindLogo, category: 'Frontend', color: '#06B6D4' },
  { name: 'Node.js', logo: nodeLogo, category: 'Backend', color: '#339933' },
  { name: 'Laravel', logo: laravelLogo, category: 'Backend', color: '#FF2D20' },
  { name: 'PostgreSQL', logo: postgresLogo, category: 'Database', color: '#336791' },
  { name: 'n8n', logo: n8nLogo, category: 'Automation', color: '#EA4B71' },
]

const hoveredSkill = ref<string | null>(null)
</script>

<template>
  <section id="skills" class="bg-dark-card/30" itemscope itemtype="https://schema.org/ItemList">
    <div class="section-container">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold mb-4" itemprop="name">
          <span class="text-neon">Keahlian</span> & Teknologi
        </h2>
        <p class="text-dark-muted text-lg max-w-2xl mx-auto">
          Ini adalah teknologi yang saya gunakan untuk mewujudkan ide-ide menjadi kenyataan
        </p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="group relative bg-dark-card border border-dark-border rounded-xl p-6 text-center cursor-pointer card-hover"
          @mouseenter="hoveredSkill = skill.name"
          @mouseleave="hoveredSkill = null"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <meta :content="(index + 1).toString()" itemprop="position" />
          <div class="w-16 h-16 mb-3 mx-auto transition-transform duration-300 group-hover:scale-110">
            <img 
              :src="skill.logo" 
              :alt="`${skill.name} - ${skill.category} Technology`"
              class="w-full h-full object-contain"
              itemprop="image"
            />
          </div>
          
          <h3 class="font-semibold text-dark-text mb-1" itemprop="name">{{ skill.name }}</h3>
          <p class="text-sm text-dark-muted" itemprop="category">{{ skill.category }}</p>
          
          <!-- Tooltip -->
          <Transition name="tooltip">
            <div 
              v-show="hoveredSkill === skill.name"
              class="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-dark-bg border border-neon rounded-lg px-3 py-2 text-sm font-medium text-neon whitespace-nowrap z-10"
            >
              {{ skill.name }}
              <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-neon"></div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tooltip-enter-active,
.tooltip-leave-active {
  transition: opacity 0.2s ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
}
</style>