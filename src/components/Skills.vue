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
  <section id="skills" class="relative" itemscope itemtype="https://schema.org/ItemList">
    <div class="section-container">
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <span class="text-neon text-sm font-mono tracking-wider uppercase px-4 py-2 rounded-full bg-neon/10 border border-neon/30">
            Kemampuan
          </span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold mb-4 text-white" itemprop="name">
          Keahlian & Teknologi
        </h2>
        <p class="text-dark-muted text-lg max-w-2xl mx-auto">
          Ini adalah teknologi yang saya gunakan untuk mewujudkan ide-ide menjadi kenyataan
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="group relative cursor-pointer"
          @mouseenter="hoveredSkill = skill.name"
          @mouseleave="hoveredSkill = null"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <meta :content="(index + 1).toString()" itemprop="position" />

          <!-- Hover glow effect -->
          <div class="absolute -inset-0.5 bg-neon rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition duration-400"></div>

          <!-- Card -->
          <div class="relative bg-dark-card/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center transition-all duration-400 group-hover:border-neon/40 group-hover:shadow-2xl group-hover:-translate-y-2">
            <!-- Icon container with animated background -->
            <div class="relative w-20 h-20 mb-4 mx-auto">
              <div class="absolute inset-0 bg-neon/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 group-hover:animate-pulse-slow"></div>
              <div class="relative w-full h-full p-3 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-6">
                <img
                  :src="skill.logo"
                  :alt="`${skill.name} - ${skill.category} Technology`"
                  class="w-full h-full object-contain drop-shadow-lg"
                  itemprop="image"
                />
              </div>
            </div>

            <!-- Skill name -->
            <h3 class="font-bold text-lg text-white mb-1 group-hover:text-neon transition-colors duration-400" itemprop="name">
              {{ skill.name }}
            </h3>

            <!-- Category badge -->
            <div class="inline-block">
              <span class="text-xs text-dark-muted group-hover:text-neon/80 px-3 py-1 rounded-full bg-dark-bg/50 border border-transparent group-hover:border-neon/30 transition-all duration-400" itemprop="category">
                {{ skill.category }}
              </span>
            </div>

            <!-- Decorative corner accents -->
            <div class="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-neon/0 group-hover:border-neon/40 rounded-tr-xl transition-all duration-400"></div>
            <div class="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-neon/0 group-hover:border-neon/40 rounded-bl-xl transition-all duration-400"></div>

            <!-- Floating particles on hover -->
            <div class="absolute -top-1 -right-1 w-2 h-2 bg-neon rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></div>
            <div class="absolute -bottom-1 -left-1 w-2 h-2 bg-neon rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" style="animation-delay: 0.5s;"></div>
          </div>

          <!-- Enhanced Tooltip -->
          <Transition name="tooltip">
            <div
              v-show="hoveredSkill === skill.name"
              class="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20"
            >
              <div class="relative bg-neon p-0.5 rounded-xl shadow-neon">
                <div class="bg-dark-bg rounded-xl px-4 py-2">
                  <p class="text-sm font-bold text-white whitespace-nowrap">{{ skill.name }}</p>
                  <p class="text-xs text-neon">{{ skill.category }}</p>
                </div>
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-neon"></div>
              </div>
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
  transition: opacity 400ms ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
}
</style>