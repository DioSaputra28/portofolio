<script setup lang="ts">


interface Certification {
  id: number
  title: string
  issuer: string
  issueDate: string
  validUntil: string
  credentialUrl: string
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Belajar Machine Learning untuk Pemula',
    issuer: 'Dicoding',
    issueDate: '28 Mei 2024',
    validUntil: '28 Mei 2027',
    credentialUrl: 'https://www.dicoding.com/certificates/2VX3RR0QQZYQ'
  }
]
</script>

<template>
  <section id="certifications" class="bg-dark-card/30">
    <div class="section-container">
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <span class="text-neon text-sm font-mono tracking-wider uppercase px-4 py-2 rounded-full bg-neon/10 border border-neon/30">
            Sertifikasi
          </span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold mb-4 text-white">
          Sertifikasi & Sertifikat
        </h2>
        <p class="text-dark-muted text-lg max-w-2xl mx-auto">
          Pengakuan profesional yang saya peroleh untuk memperkuat kompetensi serta kredibilitas saya di bidang teknologi.
        </p>
      </div>

      <div class="max-w-4xl mx-auto space-y-8">
        <article
          v-for="cert in certifications"
          :key="cert.id"
          class="group relative"


        >
          <!-- Glow effect on hover -->
          <div class="absolute -inset-0.5 bg-neon rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-400"></div>

          <!-- Card content -->
          <div class="relative bg-dark-card/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-400 hover:border-neon/30"
        >
          <header class="mb-6">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h3 class="text-2xl font-semibold text-white group-hover:text-neon transition-colors duration-400">
                  {{ cert.title }}
                </h3>
                <p class="text-neon font-medium mt-2">
                  {{ cert.issuer }}
                </p>
              </div>

              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/40 bg-neon/10 text-neon text-sm font-medium">
                Resmi Dicoding
              </div>
            </div>
          </header>

          <dl class="grid gap-4 md:grid-cols-2 text-dark-muted mb-6">
            <div>
              <dt class="text-sm uppercase tracking-wide text-dark-muted/70">
                Diterbitkan
              </dt>
              <dd class="text-lg text-white">
                {{ cert.issueDate }}
              </dd>
            </div>
            <div>
              <dt class="text-sm uppercase tracking-wide text-dark-muted/70">
                Berlaku Hingga
              </dt>
              <dd class="text-lg text-white">
                {{ cert.validUntil }}
              </dd>
            </div>
          </dl>

          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p class="text-dark-muted leading-relaxed">
              Sertifikat ini diperoleh setelah menyelesaikan kelas dan evaluasi <span class="text-white font-medium">{{ cert.title }}</span> untuk menguatkan dasar Machine Learning.
            </p>

            <a
              :href="cert.credentialUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 bg-neon text-dark-bg px-6 py-3 rounded-xl font-semibold hover:shadow-neon hover:scale-105 transition-all duration-400"
            >
              Lihat Sertifikat
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 768px) {
  .section-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
