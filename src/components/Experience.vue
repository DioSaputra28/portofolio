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
    title: 'Web Developer & Workflow Automation Developer',
    company: 'Freelance',
    location: 'Remote',
    period: 'Maret 2025 - Sekarang',
    type: 'Freelance',
    description: 'Mengembangkan aplikasi web kustom dan workflow otomasi untuk berbagai klien. Spesialisasi dalam pengembangan Vue.js dan solusi otomasi workflow n8n.',
    current: true
  },
  {
    id: 2,
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
  <section id="experience">
    <div class="section-container">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold mb-4">
          Pengalaman <span class="text-neon">Kerja</span>
        </h2>
        <p class="text-dark-muted text-lg max-w-2xl mx-auto">
          Perjalanan profesional saya dan pengalaman yang membentuk kemampuan pengembangan saya
        </p>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-border"></div>
          
          <div class="space-y-12">
            <div
              v-for="experience in experiences"
              :key="experience.id"
              class="relative flex items-start space-x-8"
            >
              <!-- Timeline dot -->
              <div class="relative z-10 flex-shrink-0">
                <div 
                  class="w-4 h-4 rounded-full border-2 transition-colors duration-300"
                  :class="experience.current ? 'bg-neon border-neon' : 'bg-dark-bg border-dark-border'"
                ></div>
                <div 
                  v-if="experience.current"
                  class="absolute -inset-2 rounded-full bg-neon/20 animate-pulse"
                ></div>
              </div>
              
              <!-- Experience card -->
              <div class="flex-1 bg-dark-card border border-dark-border rounded-xl p-6 card-hover">
                <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                      <h3 class="text-xl font-semibold text-dark-text">
                        {{ experience.title }}
                      </h3>
                      <span 
                        class="px-2 py-1 text-xs font-medium rounded-full"
                        :class="experience.current 
                          ? 'bg-neon/20 text-neon border border-neon/30' 
                          : experience.type === 'Freelance' 
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'"
                      >
                        {{ experience.current ? 'Saat Ini' : experience.type }}
                      </span>
                    </div>
                    
                    <h4 class="text-lg font-medium text-neon mb-1">
                      {{ experience.company }}
                    </h4>
                    
                    <p class="text-sm text-dark-muted mb-2">
                      {{ experience.location }}
                    </p>
                  </div>
                  
                  <div class="lg:text-right">
                    <span class="inline-block bg-dark-bg border border-dark-border px-3 py-1 rounded-full text-sm text-dark-muted">
                      {{ experience.period }}
                    </span>
                  </div>
                </div>
                
                <p class="text-dark-muted leading-relaxed">
                  {{ experience.description }}
                </p>
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