<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import dataPilotImage from '../assets/datapilot.png'
import { useSEO } from '../composables/useSEO'

const router = useRouter()
const { updateSEO, addStructuredData } = useSEO()

const goBack = () => {
  router.push('/#projects')
}

const openLandingPage = () => {
  window.open('https://datapilot.costubot.com', '_blank')
}

onMounted(() => {
  // Update SEO for this page
  updateSEO({
    title: 'Data Pilot - Platform Big Data Management & Machine Learning | Dio Saputra',
    description: 'Data Pilot adalah platform komprehensif untuk manajemen big data yang memungkinkan pengguna mengolah data dan melakukan training model Machine Learning. Dikembangkan menggunakan Next.js, Lumen, FastAPI, dan Sklearn.',
    keywords: 'Data Pilot, Big Data Management, Machine Learning, Next.js, Lumen, FastAPI, Sklearn, Dio Saputra, Portfolio',
    ogType: 'article',
    canonicalUrl: 'https://diosaputra.dev/project/data-pilot'
  })
  
  // Add structured data for the project
  addStructuredData({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Data Pilot",
    "description": "Platform komprehensif untuk manajemen big data yang memungkinkan pengguna mengolah data dan melakukan training model Machine Learning",
    "applicationCategory": "WebApplication",
    "operatingSystem": "Web",
    "programmingLanguage": ["JavaScript", "PHP", "Python"],
    "author": {
      "@type": "Person",
      "name": "Dio Saputra"
    },
    "dateCreated": "2024-12-01",
    "url": "https://datapilot.costubot.com"
  })
})
</script>

<template>
  <div class="min-h-screen bg-dark-bg text-dark-text">
    <!-- Header -->
    <div class="bg-dark-card/30 border-b border-dark-border">
      <div class="section-container !py-8">
        <button 
          @click="goBack"
          class="inline-flex items-center text-neon hover:text-neon/80 transition-colors duration-300 mb-6"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Proyek
        </button>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl lg:text-6xl font-bold mb-4">
              Data Pilot
            </h1>
            <p class="text-xl text-dark-muted mb-6">
              Platform Big Data Management & Machine Learning
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="bg-dark-bg border border-dark-border px-4 py-2 rounded-full text-sm text-neon">
                Next.js
              </span>
              <span class="bg-dark-bg border border-dark-border px-4 py-2 rounded-full text-sm text-neon">
                Lumen
              </span>
              <span class="bg-dark-bg border border-dark-border px-4 py-2 rounded-full text-sm text-neon">
                FastAPI
              </span>
              <span class="bg-dark-bg border border-dark-border px-4 py-2 rounded-full text-sm text-neon">
                Sklearn
              </span>
            </div>
            
            <div class="grid grid-cols-2 gap-4 text-sm mb-8">
              <div>
                <span class="text-dark-muted">Tipe Proyek:</span>
                <p class="text-neon font-medium">Proyek Magang</p>
              </div>
              <div>
                <span class="text-dark-muted">Ukuran Tim:</span>
                <p class="text-neon font-medium">2 orang</p>
              </div>
              <div>
                <span class="text-dark-muted">Peran Saya:</span>
                <p class="text-neon font-medium">Backend Developer</p>
              </div>
              <div>
                <span class="text-dark-muted">Tech Stack:</span>
                <p class="text-neon font-medium">Next.js, Lumen, FastAPI, Sklearn</p>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button 
                @click="openLandingPage"
                class="bg-neon text-dark-bg py-3 px-6 rounded-lg font-medium hover:bg-neon/90 transition-colors duration-300"
              >
                Lihat Landing Page
              </button>
              <div class="flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-orange-500/20 text-orange-400 border border-orange-500/30">
                Proyek Magang
              </div>
            </div>
          </div>
          
          <div class="relative">
            <img 
              :src="dataPilotImage"
              alt="Data Pilot"
              class="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Project Details -->
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Description -->
        <div>
          <h3 class="text-2xl font-bold mb-6 text-neon">
            Tentang Proyek
          </h3>
          <p class="text-dark-muted leading-relaxed mb-8">
            Data Pilot adalah platform komprehensif untuk manajemen big data yang memungkinkan pengguna untuk mengolah data dalam skala besar dan melakukan training model Machine Learning dengan mudah. Platform ini dirancang untuk membantu data scientist dan analyst dalam mengelola workflow data mereka dari preprocessing hingga deployment model.
          </p>
          
          <h4 class="text-xl font-semibold mb-4">
            Tujuan Pembuatan
          </h4>
          <p class="text-dark-muted leading-relaxed mb-8">
            Menyediakan platform terintegrasi untuk manajemen data dan machine learning yang mudah digunakan oleh data scientist dan analyst, dengan fokus pada kemudahan penggunaan dan skalabilitas.
          </p>

          <div class="p-6 bg-dark-card border border-dark-border rounded-xl">
            <h4 class="text-lg font-semibold mb-4 text-neon">
              Kontribusi Saya
            </h4>
            <p class="text-dark-muted leading-relaxed">
              Sebagai Backend Developer, saya bertanggung jawab mengembangkan API menggunakan 
              <span class="text-neon font-medium">Lumen</span> untuk manajemen data dan user management, serta 
              <span class="text-neon font-medium">FastAPI</span> untuk machine learning pipeline yang terintegrasi dengan 
              <span class="text-neon font-medium">Sklearn</span> untuk training berbagai algoritma ML.
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
              <span class="text-dark-muted">Database terpisah untuk setiap user dengan sistem isolasi data yang aman</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-dark-muted">Import data melalui file CSV atau Excel dengan validasi otomatis</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-dark-muted">Data preprocessing dan cleaning tools yang komprehensif</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-dark-muted">Visualisasi data interaktif untuk analisis eksploratori</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-dark-muted">Model evaluation dan comparison tools untuk optimasi performa</span>
            </li>
          </ul>

          <h4 class="text-xl font-semibold mb-4 text-neon">
            Algoritma Machine Learning
          </h4>
          <div class="grid grid-cols-2 gap-3 mb-8">
            <div class="bg-dark-bg border border-dark-border px-3 py-2 rounded-lg text-center">
              <span class="text-sm text-dark-muted">Naive Bayes</span>
            </div>
            <div class="bg-dark-bg border border-dark-border px-3 py-2 rounded-lg text-center">
              <span class="text-sm text-dark-muted">Support Vector Machine</span>
            </div>
            <div class="bg-dark-bg border border-dark-border px-3 py-2 rounded-lg text-center">
              <span class="text-sm text-dark-muted">K-Nearest Neighbors</span>
            </div>
            <div class="bg-dark-bg border border-dark-border px-3 py-2 rounded-lg text-center">
              <span class="text-sm text-dark-muted">Random Forest</span>
            </div>
          </div>

          <h4 class="text-xl font-semibold mb-4 text-neon">
            Arsitektur Sistem
          </h4>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span class="text-dark-muted"><span class="text-neon font-medium">Frontend:</span> Next.js untuk antarmuka pengguna yang responsif</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <span class="text-dark-muted"><span class="text-neon font-medium">API Gateway:</span> Lumen untuk manajemen data dan autentikasi</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span class="text-dark-muted"><span class="text-neon font-medium">ML Service:</span> FastAPI untuk machine learning pipeline</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span class="text-dark-muted"><span class="text-neon font-medium">ML Library:</span> Sklearn untuk algoritma machine learning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>