<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { BookOpen, Film, FileText, Code, Trophy, Presentation } from 'lucide-vue-next';
import type { Week } from '@/types/course';

defineProps<{
    weeks: Week[];
}>();

const activeWeek = ref<number | null>(null);

// Helper function to format week number
const formatWeekNumber = (num: number) => {
    return num.toString().padStart(2, "0");
};

// Scroll to week function - make it more robust for Astro
const scrollToWeek = (weekNumber: number) => {
    setTimeout(() => {
        const element = document.getElementById(`week-${weekNumber}`);
        if (element) {
            const headerOffset = 120;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }, 50);
};

// Track active section based on scroll position
const updateActiveWeek = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    let currentWeek = null;

    for (let i = 1; i <= 16; i++) {
        const element = document.getElementById(`week-${i}`);
        if (element) {
            const elementTop = element.offsetTop;
            const elementBottom = elementTop + element.offsetHeight;

            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                currentWeek = i;
                break;
            }
        }
    }

    if (currentWeek === null) {
        let closestWeek = 1;
        let closestDistance = Infinity;

        for (let i = 1; i <= 16; i++) {
            const element = document.getElementById(`week-${i}`);
            if (element) {
                const elementTop = element.offsetTop;
                const distance = Math.abs(scrollPosition - elementTop);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestWeek = i;
                }
            }
        }
        currentWeek = closestWeek;
    }

    activeWeek.value = currentWeek - 2;
};

onMounted(() => {
    window.addEventListener('scroll', updateActiveWeek, { passive: true });
    setTimeout(updateActiveWeek, 100);
});

onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveWeek);
});



</script>

<template>
    <div class="sticky top-20 bg-card border rounded-lg p-1 h-fit max-h-[calc(100vh-6rem)]">
        <div class="flex items-center gap-2 mb-3 pb-2 border-b">
            <BookOpen class="w-4 h-4 text-primary" />
            <h3 class="font-semibold text-base">Índice del Curso</h3>
        </div>

        <!-- Compact grid layout -->
        <div class="grid grid-cols-1 gap-1">
            <button v-for="week in weeks" :key="week.number" @click="scrollToWeek(week.number)" :class="[
                'w-full text-left p-2 rounded transition-all duration-200 group hover:bg-muted/50',
            ]">
                <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-2 min-w-0 flex-1">
                        <!-- Week number -->
                        <span :class="[
                            'text-xs font-mono px-1.5 py-0.5 rounded flex-shrink-0 bg-muted text-muted-foreground'
                        ]">
                            {{ formatWeekNumber(week.number) }}
                        </span>

                        <!-- Week title - truncated for compactness -->
                        <span :class="[
                            'text-xs font-medium truncate text-foreground'
                        ]" :title="week.title">
                            {{ week.title }}
                        </span>
                    </div>

                    <!-- Content type indicators -->
                    <!-- <div class="flex items-center gap-1 flex-shrink-0">
                        <component v-for="(indicator, idx) in getContentIndicators(week)" :key="idx"
                            :is="indicator.icon" class="w-4 h-4" :class="indicator.color" :title="indicator.title" />
                    </div> -->
                </div>
            </button>
        </div>

        <!-- Legend -->
        <!-- <div class="mt-3 pt-2 border-t">
            <div class="text-xs text-muted-foreground mb-1">Contenido:</div>
            <div class="grid grid-cols-2 gap-1 text-xs">
                <div class="flex items-center gap-1">
                    <Film class="w-3 h-3 text-blue-500" />
                    <span>Diapositiva</span>
                </div>
                <div class="flex items-center gap-1">
                    <FileText class="w-3 h-3 text-green-500" />
                    <span>Docs</span>
                </div>
                <div class="flex items-center gap-1">
                    <Code class="w-3 h-3 text-orange-500" />
                    <span>Prolog</span>
                </div>
            </div>
        </div> -->
    </div>
</template>
