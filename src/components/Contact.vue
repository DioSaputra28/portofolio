<script setup lang="ts">
const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    url: 'https://www.linkedin.com/in/dio-saputra/',
    color: '#0077B5'
  },
  {
    name: 'GitHub',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    url: 'https://github.com/DioSaputra28',
    color: '#333'
  },
  {
    name: 'WhatsApp',
    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488',
    url: 'https://wa.me/6282138530723',
    color: '#25D366'
  },
  {
    name: 'Email',
    icon: 'M0 4l8 5 8-5v12l-8-5-8 5V4z M0 4l8 5 8-5H0z',
    url: 'mailto:diosaputra20201@gmail.com',
    color: '#EA4335'
  }
]
</script>

<template>
  <section id="contact" class="relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 bg-dark-bg"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-neon/10 rounded-full blur-3xl"></div>

    <div class="section-container relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-block mb-4">
            <span class="text-neon text-sm font-mono tracking-wider uppercase px-4 py-2 rounded-full bg-neon/10 border border-neon/30">
              Hubungi
            </span>
          </div>
          <h2 class="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Mari Berkolaborasi
          </h2>
          <p class="text-lg lg:text-xl text-dark-muted mb-8 leading-relaxed max-w-2xl mx-auto">
            Saya selalu tertarik dengan peluang baru dan proyek yang menarik.
            Baik Anda ingin mendiskusikan kolaborasi potensial atau hanya ingin menyapa,
            saya akan senang mendengar dari Anda!
          </p>
        </div>

        <!-- Main CTA Card -->
        <div class="relative group mb-12">
          <!-- Glow effect -->
          <div class="absolute -inset-1 bg-neon rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition duration-400"></div>

          <!-- Card content -->
          <div class="relative bg-dark-card/80 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12">
            <!-- Social Links Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="group/social relative"
                :title="social.name"
              >
                <!-- Hover glow -->
                <div class="absolute -inset-0.5 bg-neon rounded-2xl opacity-0 group-hover/social:opacity-30 blur transition duration-400"></div>

                <!-- Social card -->
                <div class="relative bg-dark-bg/60 border border-white/10 rounded-2xl p-6 text-center transition-all duration-400 group-hover/social:border-neon/50 group-hover/social:-translate-y-2 group-hover/social:shadow-neon">
                  <svg
                    class="w-8 h-8 mx-auto mb-3 text-dark-muted group-hover/social:text-neon transition-colors duration-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path :d="social.icon" />
                  </svg>
                  <p class="text-xs font-semibold text-dark-muted group-hover/social:text-neon transition-colors">
                    {{ social.name }}
                  </p>

                  <!-- Decorative corner -->
                  <div class="absolute -top-1 -right-1 w-3 h-3 bg-neon rounded-full opacity-0 group-hover/social:opacity-100 group-hover/social:animate-ping transition-opacity"></div>
                </div>
              </a>
            </div>

            <!-- Divider -->
            <div class="relative my-8">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-white/10"></div>
              </div>
              <div class="relative flex justify-center">
                <span class="bg-dark-card px-4 text-sm text-dark-muted">atau</span>
              </div>
            </div>

            <!-- CTA Section -->
            <div class="text-center space-y-6">
              <div class="inline-block px-6 py-3 bg-neon/10 border border-neon/30 rounded-full">
                <p class="text-neon font-semibold flex items-center gap-2">
                  <svg class="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Tersedia untuk freelance & full-time
                </p>
              </div>

              <!-- Email CTA Button -->
              <a
                href="mailto:diosaputra20201@gmail.com"
                class="group/btn relative inline-block"
              >
                <div class="absolute -inset-1 bg-neon rounded-2xl opacity-70 group-hover/btn:opacity-100 blur transition duration-400 group-hover/btn:blur-xl"></div>
                <div class="relative bg-neon px-10 py-5 rounded-2xl font-bold text-lg text-dark-bg transition-all duration-400 group-hover/btn:scale-105">
                  <span class="flex items-center gap-3">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Mari Bekerja Sama
                    <svg class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </a>

              <p class="text-sm text-dark-muted mt-4">
                Response time: <span class="text-neon font-semibold">24 jam</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>