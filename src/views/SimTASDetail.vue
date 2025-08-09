<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/#projects')
}

const openSourceCode = () => {
  window.open('https://github.com/DioSaputra28/ProjectTAS', '_blank')
}
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
              SimTAS
            </h1>
            <p class="text-xl text-dark-muted mb-6">
              Sistem Manajemen Administratif Sekolah
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="bg-dark-bg border border-dark-border px-4 py-2 rounded-full text-sm text-neon">
                Laravel
              </span>
              <span class="bg-dark-bg border border-dark-border px-4 py-2 rounded-full text-sm text-neon">
                Tailwind CSS
              </span>
            </div>
            
            <div class="grid grid-cols-2 gap-4 text-sm mb-8">
              <div>
                <span class="text-dark-muted">Tipe Proyek:</span>
                <p class="text-neon font-medium">Proyek Sekolah</p>
              </div>
              <div>
                <span class="text-dark-muted">Ukuran Tim:</span>
                <p class="text-neon font-medium">3 orang (2 siswa + 1 guru)</p>
              </div>
              <div>
                <span class="text-dark-muted">Peran Saya:</span>
                <p class="text-neon font-medium">Full Stack Developer</p>
              </div>
              <div>
                <span class="text-dark-muted">Tech Stack:</span>
                <p class="text-neon font-medium">Laravel, Tailwind CSS</p>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button 
                @click="openSourceCode"
                class="bg-neon text-dark-bg py-3 px-6 rounded-lg font-medium hover:bg-neon/90 transition-colors duration-300"
              >
                Lihat Source Code
              </button>
              <div class="flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                Proyek Sekolah
              </div>
            </div>
          </div>
          
          <div class="relative">
            <img 
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="SimTAS"
              class="w-full rounded-xl shadow-2xl bg-white p-8"
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
            SimTAS (Sistem Manajemen Tugas) adalah website yang dirancang khusus untuk mengelola data karyawan sekolah, 
            terutama karyawan kebersihan. Sistem ini memungkinkan admin untuk memberikan tugas kepada karyawan dan 
            melakukan monitoring terhadap penyelesaian tugas tersebut dengan sistem konfirmasi berbasis waktu.
          </p>
          
          <h4 class="text-xl font-semibold mb-4">
            Tujuan Pembuatan
          </h4>
          <p class="text-dark-muted leading-relaxed mb-8">
            Meningkatkan efisiensi manajemen tugas karyawan sekolah dengan sistem digital yang memungkinkan 
            tracking real-time, dokumentasi foto sebagai bukti penyelesaian tugas, dan enforcement deadline 
            yang ketat untuk memastikan kedisiplinan.
          </p>

          <div class="p-6 bg-dark-card border border-dark-border rounded-xl">
            <h4 class="text-lg font-semibold mb-4 text-neon">
              Kontribusi Saya
            </h4>
            <p class="text-dark-muted leading-relaxed">
              Sebagai Full Stack Developer, saya bertanggung jawab membuat tampilan untuk 
              <span class="text-neon font-medium">Manajemen Karyawan</span>, 
              <span class="text-neon font-medium">Admin</span>, dan 
              <span class="text-neon font-medium">Master Admin</span>. 
              Selain itu, saya juga mengembangkan 
              <span class="text-neon font-medium">logic bisnis</span> untuk ketiga modul tersebut menggunakan Laravel.
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
              <span class="text-dark-muted">Manajemen data karyawan dengan sistem role-based access</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-dark-muted">Sistem penugasan dengan deadline yang dapat dikonfigurasi</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-dark-muted">Konfirmasi penyelesaian tugas dengan upload foto sebagai bukti</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-dark-muted">Sistem waktu yang ketat - tidak bisa submit setelah deadline</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-neon rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-dark-muted">Dashboard monitoring untuk tracking progress tugas real-time</span>
            </li>
          </ul>

          <h4 class="text-xl font-semibold mb-4 text-neon">
            Sistem Role & Akses
          </h4>
          <div class="space-y-3 mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <span class="text-dark-muted"><span class="text-neon font-medium">Master Admin:</span> Kontrol penuh sistem dan manajemen admin</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span class="text-dark-muted"><span class="text-neon font-medium">Admin:</span> Manajemen karyawan dan penugasan</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <span class="text-dark-muted"><span class="text-neon font-medium">Karyawan:</span> Melihat tugas dan submit konfirmasi</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>