<script setup lang="ts">
import { ref } from "vue";
import { ExternalLink } from "lucide-vue-next";
import type { Week } from "@/types/course";

// Import SVG assets
import CanvaIcon from "@/assets/canva-icon.svg";
import DocsIcon from "@/assets/Docs-icon.svg";
import SwiLogo from "@/assets/swi_logo.svg";
import VsCodeLogo from "@/assets/vscode.svg";
import GraphIcon from "@/assets/graph.svg";
const props = defineProps<{
  week: Week;
}>();

// Helper function to get SVG icon for content type
const getIconForType = (type: string) => {
  switch (type) {
    case "slides":
      return CanvaIcon;
    case "doc":
      return DocsIcon;
    case "prolog":
      return SwiLogo;
    case "code":
      return VsCodeLogo;
    case "graph":
      return GraphIcon;
    default:
      return DocsIcon;
  }
};

// Helper function to get background color for content type
const getBackgroundForType = (type: string) => {
  switch (type) {
    case "slides":
      return "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800";
    case "doc":
      return "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800";
    case "prolog":
      return "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800";
    case "code":
      return "bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800";
    case "graph":
      return "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800";
    default:
      return "bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800";
  }
};

// Helper function to get text color for content type
const getTextColorForType = (type: string) => {
  switch (type) {
    case "slides":
      return "text-blue-900 dark:text-blue-300";
    case "doc":
      return "text-green-900 dark:text-green-300";
    case "prolog":
      return "text-orange-900 dark:text-orange-300";
    default:
      return "text-gray-900 dark:text-gray-300";
  }
};

// Handle homework item click
const handleHomeworkClick = (item: any) => {
  if (item.type === "prolog") {
    // Navigate to dedicated Prolog page with path-based routing
    const homeworkId = item.id || "default";
    const basePath = import.meta.env.BASE_URL || "/";
    window.location.href = `${basePath}prolog/${props.week.number}/${homeworkId}`;
  } else {
    // Open external link
    window.open(item.url, "_blank", "noopener,noreferrer");
  }
};

// Helper function to format week number
const formatWeekNumber = (num: number) => {
  return num.toString().padStart(2, "0");
};
</script>

<template>
  <article
    :id="`week-${week.number}`"
    class="relative py-6 pl-24 bg-white rounded-lg border-1"
  >
    <!-- Timeline Dot for each week -->
    <div
      class="absolute left-[-20px] top-8 w-10 h-10 bg-muted rounded-full border-4 border-background ring-1 ring-primary/20"
    >
      <span
        class="absolute inset-0 flex items-center justify-center text-xs font-mono text-muted-foreground"
        >{{ formatWeekNumber(week.number) }}</span
      >
    </div>

    <div>
      <!-- Week Header -->
      <header class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">
          Semana {{ formatWeekNumber(props.week.number) }}:
          {{ props.week.title }}
        </h3>
        <p v-if="props.week.description" class="text-muted-foreground text-sm">
          {{ props.week.description }}
        </p>
      </header>

      <div class="flex justify-between border-t p-6 gap-16 items-start">
        <!-- Left Column: Topics -->
        <div class="min-w-[200px] max-w-[200px]">
          <h4 class="font-medium mb-3 text-primary">Temas:</h4>
          <ul
            class="list-disc list-outside pl-5 space-y-2 text-muted-foreground"
          >
            <li
              v-for="(topic, idx) in week.topics"
              :key="`${week.number}-topic-${idx}`"
            >
              {{ topic }}
            </li>
          </ul>
        </div>

        <!-- Right Column: Materials -->
        <div v-if="week.homework.length" class="mr-auto">
          <h4 class="font-medium mb-3 text-primary">
            Materiales y Actividades:
          </h4>
          <div class="flex flex-wrap gap-6">
            <div
              v-for="(item, idx) in week.homework"
              :key="`${week.number}-homework-${idx}`"
              class="max-w-[210px]"
              :class="[
                'border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md',
                getBackgroundForType(item.type),
              ]"
              @click="handleHomeworkClick(item)"
            >
              <!-- Content Header -->
              <div class="flex flex-col items-start gap-3 mb-3">
                <div class="flex gap-2">
                  <img
                    :src="getIconForType(item.type).src"
                    :alt="`${item.type} icon`"
                    class="w-8 h-8 object-contain"
                  />
                  <h5
                    :class="[
                      'font-medium text-sm leading-tight',
                      getTextColorForType(item.type),
                    ]"
                  >
                    {{ item.name }}
                  </h5>
                </div>
                <div class="flex-1 min-w-0">
                  <p
                    v-if="item.description"
                    class="text-xs text-muted-foreground mt-1"
                  >
                    {{ item.description }}
                  </p>
                </div>
              </div>

              <!-- Content Type Badge -->
              <div class="flex justify-between items-center">
                <!-- <ExternalLink
                  v-if="item.type !== 'prolog'"
                  class="w-4 h-4 text-muted-foreground/50 flex-shrink-0"
                /> -->
                <span
                  :class="[
                    'text-xs px-2 py-1 rounded-full font-medium',
                    item.type === 'slides'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      : item.type === 'doc'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : item.type === 'prolog'
                      ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                      : item.type === 'graph'
                      ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400',
                  ]"
                >
                  {{
                    item.type === "slides"
                      ? "Presentación"
                      : item.type === "doc"
                      ? "Documento"
                      : item.type === "prolog"
                      ? "Programa Prolog"
                      : item.type === "graph"
                      ? "Gráfico"
                      : "Archivo"
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
