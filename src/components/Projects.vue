<script setup lang="ts">
import costubotPage from '../assets/costubot.png'
import karoseriPage from '../assets/mgmkaroseri.png'
import dataPilotImage from '../assets/datapilot.png'


interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  codeUrl: string
  featured?: boolean
  isPersonal?: boolean
  isFreelance?: boolean
  isTeam?: boolean
  isSchool?: boolean
  hasDetailPage?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Costubot',
    description: 'Website yang menyediakan jasa customer service berbasis AI dengan harga terjangkau.',
    image: costubotPage,
    tags: ['Vue.js', 'Express.js', 'PostgreSQL', 'Redis'],
    liveUrl: 'https://costubot.com',
    codeUrl: '',
    featured: true,
    isPersonal: true
  },
  {
    id: 2,
    title: 'MGM Karoseri',
    description: 'Website untuk perusahaan yang berfokus pada karoseri mobil besar.',
    image: karoseriPage,
    tags: ['Laravel', 'Tailwind CSS'],
    liveUrl: 'https://mgmkaroseri.com',
    codeUrl: '',
    isFreelance: true
  },
  {
    id: 3,
    title: 'Data Pilot',
    description: 'Platform big data management yang memungkinkan user mengolah data dan training model Machine Learning.',
    image: dataPilotImage,
    tags: ['Next.js', 'Lumen', 'FastAPI', 'Sklearn'],
    liveUrl: '/project/data-pilot',
    codeUrl: '',
    isTeam: true,
    hasDetailPage: true
  },
  {
    id: 4,
    title: 'SimTAS',
    description: 'Website manajemen data karyawan sekolah dengan sistem penugasan dan konfirmasi berbasis waktu.',
    image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    tags: ['Laravel', 'Tailwind CSS'],
    liveUrl: '/project/simtas',
    codeUrl: '',
    isSchool: true,
    hasDetailPage: true
  },
  {
    id: 5,
    title: 'AI Admin WhatsApp',
    description: 'Bot WhatsApp otomatis yang beroperasi 24/7 sebagai admin dengan kemampuan mengirim gambar.',
    image: 'https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png',
    tags: ['n8n', 'WhatsApp Gateway'],
    liveUrl: '/project/ai-admin-whatsapp',
    codeUrl: '',
    isFreelance: true,
    hasDetailPage: true
  }
]
</script>

<template>
  <section id="projects" class="relative bg-dark-card/20" itemscope itemtype="https://schema.org/ItemList">
    <div class="section-container">
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <span class="text-neon text-sm font-mono tracking-wider uppercase px-4 py-2 rounded-full bg-neon/10 border border-neon/30">
            Portfolio
          </span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold mb-4 text-white" itemprop="name">
          Proyek Unggulan
        </h2>
        <p class="text-dark-muted text-lg max-w-2xl mx-auto" itemprop="description">
          Berikut adalah beberapa proyek terbaru saya yang menunjukkan keahlian dan passion saya dalam pengembangan
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="group relative"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/CreativeWork"
         
         
        >
          <meta :content="(index + 1).toString()" itemprop="position" />

          <!-- Glow effect on hover -->
          <div class="absolute -inset-0.5 bg-neon rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition duration-400"></div>

          <!-- Card content -->
          <div class="relative bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-400 hover:border-neon/30 h-full flex flex-col">
            <!-- Image section -->
            <div class="relative overflow-hidden h-56">
              <div class="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10"></div>
              <img
                :src="project.image"
                :alt="`${project.title} - ${project.description}`"
                class="w-full h-full object-cover transition-all duration-400 group-hover:scale-110 group-hover:rotate-2"
                itemprop="image"
              />

              <!-- Featured Badge -->
              <div v-if="project.featured" class="absolute top-4 right-4 z-20 bg-neon text-dark-bg px-3 py-1.5 rounded-full text-xs font-bold shadow-neon flex items-center gap-1">
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Unggulan
              </div>

              <!-- Overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent opacity-60"></div>
            </div>

            <!-- Content section -->
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-neon transition-colors duration-400" itemprop="name">
                {{ project.title }}
              </h3>

              <p class="text-dark-muted mb-4 leading-relaxed line-clamp-3" itemprop="description">
                {{ project.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="bg-dark-bg/50 border border-neon/20 px-3 py-1 rounded-full text-xs text-neon/80 hover:text-neon hover:border-neon/40 transition-colors"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Actions - pushed to bottom -->
              <div class="mt-auto space-y-3">
                <!-- Main Action Button -->
                <router-link
                  v-if="project.hasDetailPage"
                  :to="project.liveUrl"
                  class="group/btn relative block w-full bg-neon text-dark-bg py-3 px-4 rounded-xl text-center font-semibold overflow-hidden transition-all duration-400 hover:shadow-neon hover:scale-105"
                >
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    Detail Proyek
                    <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </router-link>
                <a
                  v-else
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group/btn relative block w-full bg-neon text-dark-bg py-3 px-4 rounded-xl text-center font-semibold overflow-hidden transition-all duration-400 hover:shadow-neon hover:scale-105"
                >
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    Demo Langsung
                    <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </a>

                <!-- Code button or project type info -->
                <div v-if="project.codeUrl">
                  <a
                    :href="project.codeUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block w-full border-2 border-neon/50 text-neon py-3 px-4 rounded-xl text-center font-semibold hover:bg-neon hover:text-dark-bg transition-all duration-400"
                  >
                    Lihat Kode
                  </a>
                </div>

                <!-- Project type badge if no code URL -->
                <div v-else class="flex items-center justify-center">
                  <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-neon/20 text-neon border border-neon/30">
                    {{ project.isPersonal ? 'Proyek Pribadi' : project.isFreelance ? 'Proyek Freelance' : project.isTeam ? 'Proyek Tim' : project.isSchool ? 'Proyek Sekolah' : 'Kode Privat' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>