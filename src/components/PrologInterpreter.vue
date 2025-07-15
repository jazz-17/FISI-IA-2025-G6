<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ArrowLeft, Play, Download, RotateCcw } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import GoBack from "@/components/ui/utils/GoBack.vue";
// Props for the Prolog program
interface PrologWeekContent {
    title: string;
    description: string;
    initialProgram: string;
    sampleQueries?: string[];
}
const props = defineProps<PrologWeekContent>();

// Reactive state
const prologCode = ref(props.initialProgram);

const query = ref("likes(sam, X).");
const output = ref("");
const isLoading = ref(false);
const session = ref<any>(null);

// Initialize Tau Prolog session
const initializeSession = () => {
    if (typeof window !== "undefined" && (window as any).pl) {
        session.value = (window as any).pl.create();
        output.value = "Sesión de Prolog inicializada correctamente.\n";
    } else {
        output.value = "Error: Tau Prolog no está cargado.\n";
    }
};

// Load program into Prolog session
const loadProgram = () => {
    if (!session.value) {
        output.value += "Error: Sesión no inicializada.\n";
        return;
    }

    isLoading.value = true;

    session.value.consult(prologCode.value, {
        success: function () {
            output.value += "Programa cargado correctamente.\n";
            isLoading.value = false;
        },
        error: function (err: any) {
            output.value += `Error al cargar programa: ${err}\n`;
            isLoading.value = false;
        },
    });
};

// Execute query
const executeQuery = () => {
    if (!session.value) {
        output.value +=
            "Error: Sesión no inicializada. Carga primero el programa.\n";
        return;
    }

    isLoading.value = true;
    output.value += `?- ${query.value}\n`;

    session.value.query(query.value, {
        success: function (goal: any) {
            findAnswers();
        },
        error: function (err: any) {
            output.value += `Error en consulta: ${err}\n`;
            isLoading.value = false;
        },
    });
};

// Find all answers for the query
const findAnswers = () => {
    session.value.answer({
        success: function (answer: any) {
            output.value += `${session.value.format_answer(answer)}\n`;
            // Continue looking for more answers
            setTimeout(findAnswers, 100);
        },
        fail: function () {
            output.value += "false.\n\n";
            isLoading.value = false;
        },
        error: function (err: any) {
            output.value += `Error: ${err}\n`;
            isLoading.value = false;
        },
        limit: function () {
            output.value += "Límite de respuestas excedido.\n";
            isLoading.value = false;
        },
    });
};

// Clear output
const clearOutput = () => {
    output.value = "";
};

// Sample queries for Week 4 Tic-Tac-Toe
// const sampleQueries = [
//   "tablero_inicial(X).",
//   "mostrar_tablero([x,o,3,4,x,6,7,8,o]).",
//   "ganador([x,x,x,4,5,6,7,8,9], x).",
//   "movimientos_validos([x,o,3,4,x,6,7,8,o], M).",
// ];

const sampleQueries = props.sampleQueries
const useSampleQuery = (sampleQuery: string) => {
    query.value = sampleQuery;
};

// Initialize Prolog when component mounts
onMounted(() => {
    // Wait a bit for the script to load, then initialize
    setTimeout(() => {
        initializeSession();
    }, 500);
});
</script>

<template>
    <div class="min-h-screen bg-background flex flex-col grow">
        <!-- Header -->
        <header class="border-b bg-card">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center gap-4">
                    <GoBack></GoBack>
                    <div class="flex items-center gap-3">
                        <img src="/src/assets/swi_logo.svg" alt="SWI Prolog" class="w-8 h-8" />
                        <div>
                            <h1 class="text-xl font-bold">{{ title }}</h1>
                            <p v-if="description" class="text-sm text-muted-foreground">
                                {{ description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class=" px-4 py-6 grow flex">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 grow">
                <!-- Code Editor -->
                <div class="space-y-4 min-h-full flex flex-col">
                    <div class="bg-card border rounded-lg p-4 flex flex-col grow ">
                        <div class="flex items-center justify-between mb-4">
                            <h2 class="text-lg font-semibold">Editor Prolog</h2>
                            <div class="flex gap-2">
                                <Button size="sm" @click="loadProgram" :disabled="isLoading"
                                    class="flex items-center gap-2">
                                    <Download class="w-4 h-4" />
                                    Cargar Programa
                                </Button>
                            </div>
                        </div>

                        <textarea v-model="prologCode"
                            class="p-3 bg-background border grow  rounded-md font-mono text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Escribe tu programa Prolog aquí..."></textarea>
                    </div>

                    <!-- Query Section -->
                    <div class="bg-card border rounded-lg p-4">
                        <h3 class="text-lg font-semibold mb-4">Consultas</h3>

                        <div class="space-y-3">
                            <div class="flex gap-2">
                                <input v-model="query" type="text"
                                    class="flex-1 p-2 bg-background border rounded-md font-mono text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
                                    placeholder="?- likes(sam, X)." @keyup.enter="executeQuery" />
                                <Button @click="executeQuery" :disabled="isLoading" class="flex items-center gap-2">
                                    <Play class="w-4 h-4" />
                                    Ejecutar
                                </Button>
                            </div>

                            <!-- Sample Queries -->
                            <div>
                                <p class="text-sm text-muted-foreground mb-2">
                                    Consultas de ejemplo:
                                </p>
                                <div class="flex flex-wrap gap-2">
                                    <Button v-for="sample in sampleQueries" :key="sample" variant="outline" size="sm"
                                        @click="useSampleQuery(sample)" class="font-mono text-xs">
                                        {{ sample }}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Output Console -->
                <div class="bg-card border rounded-lg p-4 flex flex-col">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-semibold">Consola de Salida</h2>
                        <Button variant="outline" size="sm" @click="clearOutput" class="flex items-center gap-2">
                            <RotateCcw class="w-4 h-4" />
                            Limpiar
                        </Button>
                    </div>

                    <div class="bg-background border rounded-md p-4 grow overflow-y-auto">
                        <pre class="font-mono text-sm whitespace-pre-wrap">{{
                            output || "Ejecuta una consulta para ver los resultados..."
                        }}</pre>
                        <div v-if="isLoading" class="flex items-center gap-2 mt-2 text-muted-foreground">
                            <div class="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin">
                            </div>
                            <span class="text-sm">Ejecutando...</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Instructions -->
            <!-- <div
        class="mt-6 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6"
      >
        <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">
          Instrucciones de Uso
        </h3>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-800 dark:text-blue-400"
        >
          <div>
            <h4 class="font-medium mb-2">1. Cargar Programa</h4>
            <p class="text-sm">
              Escribe tu código Prolog en el editor y presiona "Cargar Programa"
              para compilarlo.
            </p>
          </div>
          <div>
            <h4 class="font-medium mb-2">2. Hacer Consultas</h4>
            <p class="text-sm">
              Escribe una consulta en el campo de texto y presiona "Ejecutar" o
              Enter.
            </p>
          </div>
          <div>
            <h4 class="font-medium mb-2">3. Ver Resultados</h4>
            <p class="text-sm">
              Los resultados aparecerán en la consola de salida con todas las
              soluciones posibles.
            </p>
          </div>
          <div>
            <h4 class="font-medium mb-2">4. Ejemplos</h4>
            <p class="text-sm">
              Usa los botones de consultas de ejemplo para probar diferentes
              tipos de preguntas.
            </p>
          </div>
        </div>
      </div> -->
        </div>
    </div>
</template>
