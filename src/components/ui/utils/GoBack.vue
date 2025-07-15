<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import Button from '../button/Button.vue';
// Go back to main page
const goBack = () => {
    const basePath = import.meta.env.BASE_URL || '/';
    window.location.href = basePath;
};
</script>
<template>
    <Button variant="outline" size="sm" @click="goBack" class="flex items-center gap-2">
        <ArrowLeft class="w-4 h-4" />
        Volver al Curso
    </Button>
</template>