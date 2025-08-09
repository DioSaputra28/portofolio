<script setup lang="ts">
import { useRouter } from 'vue-router'
import adminImage from '../assets/admin.png'

const router = useRouter()

const goBack = () => {
  router.push('/#projects')
}
</script>

<template>
  <div class="min-h-screen bg-dark-bg text-dark-text">
    <!-- Header -->
    <div class="bg-dark-card/30 border-b border-dark-border">
      <div class="section-container !py-8">
        <button @click="goBack"
          class="inline-flex items-center text-neon hover:text-neon/80 transition-colors duration-300 mb-6">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Proyek
        </button>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl lg:text-6xl font-bold mb-4">
              AI Admin WhatsApp
            </h1>
            <p class="text-xl text-dark-muted mb-6">
              Bot WhatsApp Otomatis 24/7
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span class="bg-dark-bg border border-dark-border px-4 py-2 rounded-full text-sm text-neon">
                n8n
              </span>
              <span class="bg-dark-bg border border-dark-border px-4 py-2 rounded-full text-sm text-neon">
                WhatsApp Gateway
              </span>
            </div>

            <div class="grid grid-cols-2 gap-4 text-sm mb-8">
              <div>
                <span class="text-dark-muted">Tipe Proyek:</span>
                <p class="text-neon font-medium">Proyek Freelance</p>
              </div>
              <div>
                <span class="text-dark-muted">Status:</span>
                <p class="text-neon font-medium">Aktif 24/7</p>
              </div>
              <div>
                <span class="text-dark-muted">Peran Saya:</span>
                <p class="text-neon font-medium">Automation Developer</p>
              </div>
              <div>
                <span class="text-dark-muted">Tech Stack:</span>
                <p class="text-neon font-medium">n8n, WhatsApp Gateway</p>
              </div>
            </div>

            <!-- Project Type Badge -->
            <div
              class="flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
              Proyek Freelance
            </div>
          </div>

          <div class="relative">
            <img 
              :src="adminImage"
              alt="AI Admin WhatsApp"
              class="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>



    <!-- Project Details -->
    <div class="bg-dark-card/30">
      <div class="section-container">
        <div class="max-w-4xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16">
            <!-- Description -->
            <div>
              <h3 class="text-2xl font-bold mb-6 text-neon">
                Tentang Proyek
              </h3>
              <p class="text-dark-muted leading-relaxed mb-8">
                AI Admin WhatsApp adalah bot otomatis yang beroperasi 24/7 untuk menangani pesan WhatsApp sebagai admin.
                Bot ini dibangun menggunakan n8n workflow automation dan WhatsApp Gateway untuk memberikan respons
                otomatis yang cerdas kepada pengguna.
              </p>

              <h4 class="text-xl font-semibold mb-4">
                Tujuan Pembuatan
              </h4>
              <p class="text-dark-muted leading-relaxed mb-8">
                Menyediakan layanan customer service otomatis yang dapat beroperasi tanpa henti,
                mengurangi waktu respons, dan meningkatkan kepuasan pelanggan dengan respons yang konsisten.
              </p>

              <div class="p-6 bg-dark-card border border-dark-border rounded-xl">
                <h4 class="text-lg font-semibold mb-4 text-neon">
                  Kontribusi Saya
                </h4>
                <p class="text-dark-muted leading-relaxed">
                  Sebagai Automation Developer, saya merancang dan mengimplementasikan seluruh workflow automation
                  menggunakan <span class="text-neon font-medium">n8n</span> dan mengintegrasikannya dengan
                  <span class="text-neon font-medium">WhatsApp Gateway</span> untuk menciptakan sistem respons otomatis
                  yang efektif.
                </p>
              </div>
            </div>

            <!-- Features -->
            <div>
              <h3 class="text-2xl font-bold mb-6 text-neon">
                Fitur Utama
              </h3>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-dark-muted">Respons otomatis 24/7 tanpa intervensi manual</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-dark-muted">Kemampuan mengirim gambar sebagai respons</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-dark-muted">Integrasi dengan WhatsApp Gateway yang stabil</span>
                </li>
                <li class="flex items-start space-x-3">
                  <div class="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-dark-muted">Workflow automation yang dapat dikustomisasi</span>
                </li>
              </ul>

              <h4 class="text-xl font-semibold mb-4 text-neon">
                Teknologi yang Digunakan
              </h4>
              <div class="space-y-3 mb-8">
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span class="text-dark-muted"><span class="text-neon font-medium">n8n:</span> Platform workflow
                    automation untuk logika bot</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-dark-muted"><span class="text-neon font-medium">WhatsApp Gateway:</span> API untuk
                    integrasi WhatsApp</span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure n8n component fits well in dark theme */
:deep(.n8n-workflow-visualization) {
  border-radius: 0.75rem;
}
</style>