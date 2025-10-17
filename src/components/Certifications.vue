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
        <h2 class="text-4xl lg:text-5xl font-bold mb-4">
          Sertifikasi <span class="text-neon">& Sertifikat</span>
        </h2>
        <p class="text-dark-muted text-lg max-w-2xl mx-auto">
          Pengakuan profesional yang saya peroleh untuk memperkuat kompetensi serta kredibilitas saya di bidang teknologi.
        </p>
      </div>

      <div class="max-w-4xl mx-auto space-y-8">
        <article
          v-for="cert in certifications"
          :key="cert.id"
          class="bg-dark-card border border-dark-border rounded-xl p-8 card-hover"
        >
          <header class="mb-6">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h3 class="text-2xl font-semibold text-dark-text">
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
              <dd class="text-lg text-dark-text">
                {{ cert.issueDate }}
              </dd>
            </div>
            <div>
              <dt class="text-sm uppercase tracking-wide text-dark-muted/70">
                Berlaku Hingga
              </dt>
              <dd class="text-lg text-dark-text">
                {{ cert.validUntil }}
              </dd>
            </div>
          </dl>

          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p class="text-dark-muted leading-relaxed">
              Sertifikat ini diperoleh setelah menyelesaikan kelas dan evaluasi <span class="text-dark-text font-medium">{{ cert.title }}</span> untuk menguatkan dasar Machine Learning.
            </p>

            <a
              :href="cert.credentialUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 bg-neon text-dark-bg px-6 py-3 rounded-lg font-medium hover:bg-neon/90 transition-colors duration-300"
            >
              Lihat Sertifikat
              <span aria-hidden="true">↗</span>
            </a>
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
