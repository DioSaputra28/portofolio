<script setup lang="ts">
import { onMounted } from 'vue'
import Navigation from '../components/Navigation.vue'
import Hero from '../components/Hero.vue'
import Skills from '../components/Skills.vue'
import Experience from '../components/Experience.vue'
import Certifications from '../components/Certifications.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
import ScrollToTop from '../components/ScrollToTop.vue'
import ParallaxBackground from '../components/ParallaxBackground.vue'
import ScrollReveal from 'scrollreveal'

onMounted(() => {
  // Initialize ScrollReveal
  ScrollReveal().reveal('.reveal', {
    delay: 200,
    distance: '50px',
    duration: 600,
    easing: 'ease-out',
    origin: 'bottom',
    reset: false,
    mobile: true
  })
})
</script>

<template>
  <div class="min-h-screen bg-dark-bg text-dark-text relative overflow-x-hidden">
    <ParallaxBackground />
    
    <Navigation />
    
    <main>
      <Transition name="fade" appear>
        <Hero id="home" />
      </Transition>
      
      <Skills id="skills" class="reveal" />
      
      <Experience id="experience" class="reveal" />
      
      <Certifications id="certifications" class="reveal" />
      
      <Projects id="projects" class="reveal" />
      
      <Contact id="contact" class="reveal" />
    </main>
    
    <ScrollToTop />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
