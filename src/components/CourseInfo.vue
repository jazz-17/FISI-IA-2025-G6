<script setup lang="ts">
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Users } from "lucide-vue-next";
import type { CourseInfo, GroupMember, OtherGroup } from '@/types/course';
import ProfesorPhoto from "@/assets/profesor.avif";

defineProps<{
  courseInfo: CourseInfo;
  groupMembers: GroupMember[];
  otherGroups: OtherGroup[];
}>();
</script>

<template>
  <section
    id="course-info"
    class="mb-12 p-6 border rounded-lg bg-card text-card-foreground"
  >
    <h2 class="text-2xl font-semibold mb-6">
      Información del Curso y Grupo
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-32">
      <!-- Professor Info -->
      <div class="md:col-span-1">
        <h3 class="font-medium mb-3 text-lg flex items-center gap-2">
          <User class="w-5 h-5 text-primary" /> Profesor
        </h3>
        <div class="flex items-center gap-4">
          <Avatar class="h-20 w-20">
            <img :src="ProfesorPhoto.src" alt="Foto del Profesor" />
            <AvatarFallback>{{
              courseInfo.instructor.substring(0, 2)
            }}</AvatarFallback>
          </Avatar>
          <div>
            <p class="font-semibold">{{ courseInfo.instructor }}</p>
            <p class="text-sm text-muted-foreground">
              Experto en IA y Sistemas Inteligentes
            </p>
          </div>
        </div>
      </div>

      <!-- Group Members -->
      <div class="md:col-span-1">
        <h3 class="font-medium mb-3 text-lg flex items-center gap-2">
          <Users class="w-5 h-5 text-primary" /> Integrantes (Grupo 06)
        </h3>
        <ul class="space-y-2 text-sm">
          <li
            v-for="member in groupMembers"
            :key="member.code"
            class="flex justify-between items-center p-2 rounded hover:bg-muted/50"
          >
            <span>{{ member.name }}</span>
            <span class="text-xs text-muted-foreground font-mono">{{
              member.code
            }}</span>
          </li>
        </ul>
      </div>

      <!-- Other Groups -->
      <div class="md:col-span-1">
        <h3 class="font-medium mb-3 text-lg flex items-center gap-2">
          <Users class="w-5 h-5 text-primary" /> Otros Grupos
        </h3>
        <ul class="space-y-2 text-sm">
          <li
            v-for="group in otherGroups"
            :key="group.id"
            class="flex justify-between items-center p-2 rounded hover:bg-muted/50"
          >
            <a
              :href="group.url"
              class="text-blue-800 underline underline-offset-1 w-full"
            >
              <span>{{ group.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
