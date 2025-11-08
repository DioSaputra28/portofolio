<script setup lang="ts">
interface Experience {
  id: number
  title: string
  company: string
  location: string
  period: string
  type: string
  description: string
  current?: boolean
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Fullstack Developer',
    company: 'Tintasoft',
    location: 'Remote',
    period: 'November 2025 - Sekarang',
    type: 'Magang',
    description: 'Mengembangkan layout design web dan mempelajari Docker untuk containerization aplikasi. Terlibat dalam pengembangan fullstack menggunakan teknologi modern.',
    current: true
  },
  {
    id: 2,
    title: 'Web Developer & Workflow Automation Developer',
    company: 'Freelance',
    location: 'Remote',
    period: 'Maret 2025 - November 2025',
    type: 'Freelance',
    description: 'Mengembangkan aplikasi web kustom dan workflow otomasi untuk berbagai klien. Spesialisasi dalam pengembangan Vue.js dan solusi otomasi workflow n8n.'
  },
  {
    id: 3,
    title: 'Magang',
    company: 'PT. Traspac Makmur Sejahtera',
    location: 'Office Park Thamrin City, Jl. Kebon Kacang Raya Blok AA - 02, RT.9/RW.9, Kebon Melati, Kec. Tanah Abang, Jakarta Pusat, Jakarta 10230',
    period: 'Desember 2024 - Maret 2025',
    type: 'Magang',
    description: 'Mendapatkan pengalaman langsung dalam pengembangan web dan mempelajari praktik terbaik industri. Bekerja pada berbagai proyek yang melibatkan teknologi web modern dan berkontribusi pada inisiatif pengembangan tim.'
  }
]
</script>

<template>
  <section id="experience" class="relative">
    <div class="section-container">
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <span class="text-neon text-sm font-mono tracking-wider uppercase px-4 py-2 rounded-full bg-neon/10 border border-neon/30">
            Karir
          </span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold mb-4 text-white">
          Pengalaman Kerja
        </h2>
        <p class="text-dark-muted text-lg max-w-2xl mx-auto">
          Perjalanan profesional saya dan pengalaman yang membentuk kemampuan pengembangan saya
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-8 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-1 bg-neon opacity-30"></div>

          <div class="space-y-16">
            <div
              v-for="(experience, index) in experiences"
              :key="experience.id"
              class="relative"
              :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
            >
              <!-- Timeline dot with animation -->
              <div class="absolute left-8 md:left-1/2 md:-ml-3 flex items-center justify-center z-10">
                <div class="relative">
                  <div
                    class="w-6 h-6 rounded-full border-4 transition-all duration-400"
                    :class="experience.current
                      ? 'bg-neon border-neon shadow-neon'
                      : 'bg-dark-bg border-purple-500/50'"
                  ></div>
                  <div
                    v-if="experience.current"
                    class="absolute -inset-3 rounded-full bg-neon/20 animate-ping"
                  ></div>
                  <div
                    v-if="experience.current"
                    class="absolute -inset-2 rounded-full bg-gradient-to-r from-neon to-purple-500 opacity-50 blur-md animate-pulse"
                  ></div>
                </div>
              </div>

              <!-- Experience card -->
              <div class="ml-20 md:ml-0 md:w-[calc(50%-3rem)]" :class="index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'">
                <div class="group relative">
                  <!-- Hover glow effect -->
                  <div class="absolute -inset-0.5 bg-neon rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-400"></div>

                  <!-- Card content -->
                  <div class="relative bg-dark-card/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-400 hover:border-neon/30 hover:shadow-2xl">
                    <!-- Period badge -->
                    <div class="flex items-center justify-between mb-4">
                      <span class="inline-flex items-center gap-2 bg-dark-bg/50 border border-neon/30 px-4 py-2 rounded-full text-sm text-neon font-mono">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {{ experience.period }}
                      </span>

                      <span
                        class="px-3 py-1.5 text-xs font-semibold rounded-full"
                        :class="experience.current
                          ? 'bg-neon text-dark-bg animate-pulse-slow'
                          : 'bg-neon/20 text-neon border border-neon/30'"
                      >
                        {{ experience.current ? '● Saat Ini' : experience.type }}
                      </span>
                    </div>

                    <!-- Title and company -->
                    <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-neon transition-colors">
                      {{ experience.title }}
                    </h3>

                    <h4 class="text-lg font-semibold text-neon mb-3">
                      {{ experience.company }}
                    </h4>

                    <div class="flex items-start gap-2 text-sm text-dark-muted mb-4">
                      <svg class="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{{ experience.location }}</span>
                    </div>

                    <p class="text-dark-muted leading-relaxed">
                      {{ experience.description }}
                    </p>

                    <!-- Decorative corner -->
                    <div class="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-neon/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div class="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-neon/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Timeline responsive adjustments */
@media (max-width: 768px) {
  .section-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>