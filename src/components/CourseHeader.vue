<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Download, Users, Github } from "lucide-vue-next";
import Logo from "@/assets/unmsm.png";
</script>

<template>
  <header
    class="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div
      class="container mx-auto h-16 flex items-center justify-between px-4"
    >
      <div class="flex items-center gap-3">
        <img
          :src="Logo.src"
          alt="UNMSM Logo"
          class="h-10 w-auto object-contain"
        />
        <div>
          <h1 class="font-semibold text-lg hidden sm:block">UNMSM - FISI</h1>
          <p class="text-xs text-muted-foreground hidden sm:block">
            Inteligencia Artificial 2025-I
          </p>
          <h1 class="font-semibold text-lg sm:hidden">IA 2025-I</h1>
        </div>
      </div>
      <nav class="flex items-center gap-4">
        <Button size="sm" as-child>
          <a href="https://github.com/jazz-17/FISI-IA-2025-G6">
            <Github class="h-4 w-4 mr-2" /> Repositorio
          </a>
        </Button>
        <Button size="sm" as-child>
          <a href="syllabus.pdf" download>
            <Download class="h-4 w-4 mr-2" /> Syllabus PDF
          </a>
        </Button>
      </nav>
    </div>
  </header>
</template>
