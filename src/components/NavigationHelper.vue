<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronUp, Menu, X } from 'lucide-vue-next';

const showBackToTop = ref(false);
const showMobileMenu = ref(false);

// Show/hide back to top button based on scroll position
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 400;
};

// Scroll to top function - more robust for Astro
const scrollToTop = () => {
  window.scrollTo({ 
    top: 0, 
    behavior: 'smooth' 
  });
  showMobileMenu.value = false;
};

// Scroll to section function - improved for Astro
const scrollToSection = (sectionId: string) => {
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      showMobileMenu.value = false;
    }
  }, 10);
};

onMounted(() => {
  // Use passive listeners for better performance in Astro
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <!-- Back to Top Button -->
  <Transition
    enter-active-class="transition-all duration-300"
    enter-from-class="opacity-0 scale-95 translate-y-2"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition-all duration-200"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-95 translate-y-2"
  >
    <button
      v-show="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-40 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 hover:-translate-y-1"
      aria-label="Volver arriba"
    >
      <ChevronUp class="w-5 h-5" />
    </button>
  </Transition>

  <!-- Mobile Quick Navigation -->
  <div class="lg:hidden">
    <!-- Mobile menu button -->
    <button
      @click="showMobileMenu = !showMobileMenu"
      class="fixed bottom-6 left-6 z-40 p-3 bg-card border rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
      aria-label="Menú de navegación"
    >
      <Menu v-if="!showMobileMenu" class="w-5 h-5" />
      <X v-else class="w-5 h-5" />
    </button>

    <!-- Mobile menu overlay -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="showMobileMenu"
        class="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm"
        @click="showMobileMenu = false"
      >
        <div class="fixed bottom-20 left-6 right-6 bg-card border rounded-lg shadow-xl p-4">
          <h3 class="font-semibold mb-3">Navegación Rápida</h3>
          <div class="space-y-2">
            <button
              @click="scrollToSection('course-info')"
              class="w-full text-left p-2 rounded hover:bg-muted transition-colors"
            >
              📋 Información del Curso
            </button>
            <button
              @click="scrollToSection('syllabus')"
              class="w-full text-left p-2 rounded hover:bg-muted transition-colors"
            >
              📚 Contenido Semanal
            </button>
            <button
              @click="scrollToTop"
              class="w-full text-left p-2 rounded hover:bg-muted transition-colors"
            >
              ⬆️ Volver Arriba
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
