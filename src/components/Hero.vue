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
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <p class="text-neon text-lg font-mono">Halo, aku</p>
            <h1 class="text-5xl lg:text-7xl font-bold text-dark-text" itemprop="name">
              Dio Saputra
            </h1>
            <div class="h-16 flex items-center">
              <span class="text-2xl lg:text-3xl text-dark-muted">
                Saya seorang <span class="text-neon font-medium typewriter-container">
                  {{ currentRole }}<span class="animate-blink">|</span>
                </span>
              </span>
            </div>
          </div>

          <p class="text-lg text-dark-muted leading-relaxed max-w-md" itemprop="description">
            Mengembangkan back-end website menggunakan Laravel, Node.js, dan n8n. Saat ini saya sangat tertarik dengan
            perkembangan AI, dan memiliki visi untuk menciptakan inovasi teknologi yang bermanfaat.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <button @click="scrollToProjects" class="btn-primary">
              Lihat Proyek
            </button>
          </div>
        </div>

        <!-- Right Content - Profile Image -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative">
            <div
              class="w-80 h-80 rounded-full overflow-hidden border-4 border-neon/30 hover:border-neon transition-colors duration-300">
              <img
                src="../assets/dio.png"
                alt="Dio Saputra - Full Stack Developer"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                style="
                  /* KONTROL ZOOM GAMBAR: Ubah nilai scale untuk memperbesar/memperkecil */
                  transform: scale(1.2);
                  
                  /* KONTROL POSISI GAMBAR: Ubah nilai translate untuk menggeser gambar */
                  /* translateX: negatif = kiri, positif = kanan */
                  /* translateY: negatif = atas, positif = bawah */
                  transform: scale(1.2) translateX(0px) translateY(25px);
                  
                  /* CONTOH PENGGUNAAN: */
                  /* Zoom lebih besar: scale(1.5) */
                  /* Geser ke atas: translateY(-30px) */
                  /* Geser ke kanan: translateX(20px) */
                " />
            </div>

            <!-- Floating Elements -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-neon rounded-full animate-pulse-slow"></div>
            <div class="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-neon rounded-full animate-bounce-slow">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>