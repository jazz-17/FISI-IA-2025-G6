<script setup lang="ts">
import { Info } from "lucide-vue-next";
import type { CourseInfo } from '@/types/course';

defineProps<{
  courseInfo: CourseInfo;
}>();
</script>

<template>
  <section class="mb-12">
    <h1
      class="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight"
    >
      {{ courseInfo.title }}
    </h1>
    <div
      class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-6"
    >
      <span class="flex items-center gap-1.5 font-semibold text-primary">
        <Info class="w-4 h-4" /> Grupo 06
      </span>
    </div>
    <p class="text-lg text-muted-foreground max-w-4xl">
      {{ courseInfo.description }}
    </p>
  </section>
</template>
