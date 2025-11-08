<script setup lang="ts">
import { ref, onMounted } from 'vue'

const roles = ['Back-End Developer', 'AI Enthusiast', 'Web Developer', 'Inovator']
const currentRole = ref('')
const roleIndex = ref(0)

const typewriterEffect = () => {
  const role = roles[roleIndex.value]
  let charIndex = 0

  const typeInterval = setInterval(() => {
    if (charIndex < role.length) {
      currentRole.value = role.substring(0, charIndex + 1)
      charIndex++
    } else {
      clearInterval(typeInterval)

      // Wait 2 seconds, then delete and move to next role
      setTimeout(() => {
        const deleteInterval = setInterval(() => {
          if (currentRole.value.length > 0) {
            currentRole.value = currentRole.value.substring(0, currentRole.value.length - 1)
          } else {
            clearInterval(deleteInterval)
            roleIndex.value = (roleIndex.value + 1) % roles.length
            setTimeout(() => typewriterEffect(), 500)
          }
        }, 50)
      }, 2000)
    }
  }, 100)
}

const scrollToProjects = () => {
  const element = document.getElementById('projects')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  setTimeout(() => typewriterEffect(), 1000)
})
</script>

<template>
  <section class="min-h-screen flex items-center justify-center relative" itemscope itemtype="https://schema.org/Person">
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="space-y-8 z-10">
          <!-- Glass Card Container -->
          <div class="glass-card p-8 rounded-2xl backdrop-blur-xl bg-dark-card/40 border border-white/10 shadow-2xl">
            <div class="space-y-6">
              <div class="inline-block">
                <span class="text-neon text-sm font-mono tracking-wider uppercase px-4 py-2 rounded-full bg-neon/10 border border-neon/30">
                  Halo, saya
                </span>
              </div>

              <h1 class="text-5xl lg:text-7xl font-bold text-white leading-tight" itemprop="name">
                Dio Saputra
              </h1>

              <div class="h-20 flex items-center">
                <div class="text-2xl lg:text-3xl">
                  <span class="text-dark-muted">Saya seorang</span>
                  <div class="text-neon font-semibold mt-2 min-h-[2.5rem]">
                    {{ currentRole }}<span class="animate-blink text-neon">|</span>
                  </div>
                </div>
              </div>

              <p class="text-lg text-dark-muted leading-relaxed" itemprop="description">
                Mengembangkan back-end website menggunakan Laravel, Node.js, dan n8n. Saat ini saya sangat tertarik dengan
                perkembangan AI, dan memiliki visi untuk menciptakan inovasi teknologi yang bermanfaat.
              </p>

              <div class="flex flex-col sm:flex-row gap-4 pt-4">
                <button @click="scrollToProjects" class="group relative px-8 py-4 bg-neon rounded-xl font-semibold text-dark-bg overflow-hidden transition-all duration-400 hover:shadow-neon-lg hover:scale-105">
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    Lihat Proyek
                    <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>

                <a href="#contact" class="px-8 py-4 border-2 border-neon text-neon rounded-xl font-semibold hover:bg-neon hover:text-dark-bg transition-all duration-400 text-center">
                  Hubungi Saya
                </a>
              </div>
            </div>
          </div>

          <!-- Stats Cards -->
          <div class="grid grid-cols-3 gap-4">
            <div class="glass-card p-4 rounded-xl bg-dark-card/30 border border-white/5 text-center hover:border-neon transition-all duration-400">
              <div class="text-3xl font-bold text-neon">5+</div>
              <div class="text-sm text-dark-muted mt-1">Proyek</div>
            </div>
            <div class="glass-card p-4 rounded-xl bg-dark-card/30 border border-white/5 text-center hover:border-neon transition-all duration-400">
              <div class="text-3xl font-bold text-neon">8+</div>
              <div class="text-sm text-dark-muted mt-1">Teknologi</div>
            </div>
            <div class="glass-card p-4 rounded-xl bg-dark-card/30 border border-white/5 text-center hover:border-neon transition-all duration-400">
              <div class="text-3xl font-bold text-neon">2+</div>
              <div class="text-sm text-dark-muted mt-1">Tahun</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Profile Image -->
        <div class="flex justify-center lg:justify-end z-10">
          <div class="relative group">
            <!-- Animated Rings -->
            <div class="absolute inset-0 rounded-full bg-neon opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-400 animate-pulse-slow"></div>
            <div class="absolute -inset-4 rounded-full bg-neon opacity-10 blur-xl animate-spin-slow"></div>

            <!-- Profile Image Container -->
            <div class="relative">
              <div class="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-dark-card/20 shadow-2xl group-hover:border-neon/50 transition-all duration-400 relative">
                <div class="absolute inset-0 bg-neon/5"></div>
                <img
                  src="../assets/dio.png"
                  alt="Dio Saputra - Full Stack Developer"
                  class="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                  style="transform: scale(1.2) translateX(0px) translateY(25px);"
                />
              </div>

              <!-- Decorative Elements -->
              <div class="absolute -top-6 -right-6 w-16 h-16 bg-neon rounded-2xl animate-float shadow-neon opacity-80"></div>
              <div class="absolute -bottom-8 -left-8 w-20 h-20 border-4 border-neon/50 rounded-2xl animate-bounce-slow rotate-45"></div>

              <!-- Floating Particles -->
              <div class="absolute top-10 -left-10 w-3 h-3 bg-neon rounded-full animate-ping"></div>
              <div class="absolute bottom-20 -right-8 w-2 h-2 bg-neon rounded-full animate-ping" style="animation-delay: 1s;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.glass-card {
  backdrop-filter: blur(16px);
}
</style>