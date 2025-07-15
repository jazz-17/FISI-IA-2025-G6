<script setup lang="ts">
import WeekItem from '@/components/WeekItem.vue';
import type { Week } from '@/types/course';

defineProps<{
  weeks: Week[];
}>();
</script>

<template>
  <section id="syllabus" class="mb-12">
    <h2 class="text-3xl font-bold mb-8 text-center">
      Contenido Semanal del Curso
    </h2>

    <div class="space-y-10 relative pl-6  border-primary/20">
      <!-- Timeline Indicator -->


      <!-- Loop Through Weeks -->
      <WeekItem
        v-for="week in weeks"
        :key="week.number"
        :week="week"
      />
    </div>
  </section>
</template>
