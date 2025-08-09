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
  <section id="projects" itemscope itemtype="https://schema.org/ItemList">
    <div class="section-container">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold mb-4" itemprop="name">
          <span class="text-neon">Proyek</span> Unggulan
        </h2>
        <p class="text-dark-muted text-lg max-w-2xl mx-auto" itemprop="description">
          Berikut adalah beberapa proyek terbaru saya yang menunjukkan keahlian dan passion saya dalam pengembangan
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="group bg-dark-card border border-dark-border rounded-xl overflow-hidden card-hover"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/CreativeWork"
        >
          <meta :content="(index + 1).toString()" itemprop="position" />
          <div class="relative overflow-hidden">
            <img 
              :src="project.image" 
              :alt="`${project.title} - ${project.description}`"
              class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              itemprop="image"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Featured Badge -->
            <div v-if="project.featured" class="absolute top-4 right-4 bg-neon text-dark-bg px-2 py-1 rounded-full text-xs font-semibold">
              Unggulan
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-dark-text group-hover:text-neon transition-colors duration-300" itemprop="name">
              {{ project.title }}
            </h3>
            <p class="text-dark-muted mb-4 leading-relaxed" itemprop="description">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="bg-dark-bg border border-dark-border px-3 py-1 rounded-full text-xs text-neon"
              >
                {{ tag }}
              </span>
            </div>
            
            <div class="space-y-3">
              <!-- Main Action Button -->
              <router-link 
                v-if="project.hasDetailPage"
                :to="project.liveUrl"
                class="block w-full bg-neon text-dark-bg py-3 px-4 rounded-lg text-center font-medium hover:bg-neon/90 transition-colors duration-300"
              >
                Detail Proyek
              </router-link>
              <a 
                v-else
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full bg-neon text-dark-bg py-3 px-4 rounded-lg text-center font-medium hover:bg-neon/90 transition-colors duration-300"
              >
                Demo Langsung
              </a>
              
              <!-- Code button or project type info -->
              <div v-if="project.codeUrl">
                <a 
                  :href="project.codeUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block w-full border border-neon text-neon py-3 px-4 rounded-lg text-center font-medium hover:bg-neon hover:text-dark-bg transition-colors duration-300"
                >
                  Lihat Kode
                </a>
              </div>
              
              <!-- Project type badge if no code URL -->
              <div v-else class="flex items-center justify-center">
                <span 
                  class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                  :class="project.isPersonal 
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                    : project.isFreelance 
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : project.isTeam
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : project.isSchool
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'"
                >
                  {{ project.isPersonal ? 'Proyek Pribadi' : project.isFreelance ? 'Proyek Freelance' : project.isTeam ? 'Proyek Tim' : project.isSchool ? 'Proyek Sekolah' : 'Kode Privat' }}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>