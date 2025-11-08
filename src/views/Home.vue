<script setup lang="ts">
import Navigation from '../components/Navigation.vue'
import Hero from '../components/Hero.vue'
import Skills from '../components/Skills.vue'
import Experience from '../components/Experience.vue'
import Certifications from '../components/Certifications.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'
import ScrollToTop from '../components/ScrollToTop.vue'
import ParallaxBackground from '../components/ParallaxBackground.vue'
</script>

<template>
  <div class="min-h-screen bg-dark-bg text-dark-text relative overflow-x-hidden">
    <ParallaxBackground />

    <Navigation />

    <main>
      <Hero id="home" />

      <Skills id="skills" />

      <Experience id="experience" />

      <Certifications id="certifications" />

      <Projects id="projects" />

      <Contact id="contact" />
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
