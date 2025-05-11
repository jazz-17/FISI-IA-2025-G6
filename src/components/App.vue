<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"; // Import Avatar for professor
import {
  Info,
  ExternalLink,
  Film,
  FileText,
  FileType,
  Download,
  Users,
  User,
  CalendarDays,
  BookOpen,
  Github,
} from "lucide-vue-next";
import Logo from "@/assets/unmsm.png";
import ProfesorPhoto from "@/assets/profesor.avif";

// --- Data remains the same ---
const courseInfo = {
  title: "Inteligencia Artificial 2025-I ",
  code: "CS4080",
  instructor: "Dr. Hugo Vega Huerta",
  semester: "Spring 2025",
  description:
    "Este curso abarca los fundamentos de la Inteligencia Artificial (IA) para el desarrollo de sistemas informáticos inteligentes. Explora conceptos, paradigmas y aplicaciones de la IA, incluyendo la representación del conocimiento, los métodos de búsqueda, los sistemas expertos, los motores de inferencia y la ingeniería del conocimiento. También incluye juegos hombre-máquina, la metodología CommonKADS y la validación de sistemas expertos.",
  objectives: [
    // Kept in data, though not displayed in this version
    "Understand modern web architecture and design patterns",
    "Build responsive web applications using React and Next.js",
    "Implement accessibility best practices",
    "Deploy and manage web applications in production environments",
  ],
};

type Week = {
  number: number,
  title: string,
  description: string,
  topics: string[],
  homework: Array<{
    name: string,
    type: string,
    url: string,
  }>
}
const weeks: Week[] = [
  {
    number: 1,
    title: "Fundamentos de la IA",
    description:
      "Introducción a los conceptos básicos, historia y áreas de la IA.",
    topics: [
      "Conceptos, Historia",
      "Áreas",
      "Aprendizaje automático",
      "Niveles de la IA",
    ],
    homework: [
      {
        name: "Fundamentos de la IA",
        type: "slides",
        url: "https://drive.google.com/file/d/14yhuqM8RVraOoP-9kVHPgKzCLI8U5vRX/view",
      },
      {
        name: "Sistemas Inteligentes",
        type: "slides",
        url: "https://drive.google.com/file/d/12TYvaGH2WHvvc6AM5zZfQeqdVknL-0MG/view",
      },
    ],
  },
  {
    number: 2,
    title: "Agentes Inteligentes",
    description:
      "Exploración de agentes, sus tipos, arquitecturas y aplicaciones.",
    topics: [
      "Conceptos, Tipos, Arquitectura",
      "Diseño de un agente",
      "Aplicaciones",
    ],
    homework: [
      {
        name: "IA - Agentes",
        type: "slides",
        url: "https://drive.google.com/file/d/1w_zwMjRLThvoz_fPhnMZpU9Q57mfg1Jx/view",
      },
    ]
  },
  {
    number: 3,
    title: "Resolución de Problemas Mediante Búsqueda",
    description:
      "Técnicas de búsqueda ciega e informada para la resolución de problemas.",
    topics: [
      "Resolución de problemas como búsqueda",
      "Espacios de estados",
      "Búsqueda ciega",
      "Búsqueda informada",
    ],
    homework: [
      {
        name: "Búsquedas",
        type: "slides",
        url: "https://www.canva.com/design/DAGjya74K84/r00sDBiBRJShDouxPhvpcw/edit",
      },
    ],
  },
  // ... (rest of the weeks data) ...
  {
    number: 4,
    title: "Juegos de estrategia",
    description: "Algoritmos y enfoques para juegos humano-máquina.",
    topics: [
      "Juego de estrategia humano - máquina",
      "Algoritmo de juego de estrategia humano – máquina",
      "Juegos de estrategia con aprendizaje automático ",
    ],
    homework: [
      {
        name: "Juegos Humano-Máquina",
        type: "slides",
        url: "https://www.canva.com/design/DAGkSWZ2frs/VXP-6ktcDCw6siQpx64nZQ/edit?utm_content=DAGkSWZ2frs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
      {
        name: "Implementación Minimax",
        type: "doc",
        url: "/FISI-IA-2025-G6/tictactoe",
      },
    ],
  },
  {
    number: 5,
    title: "Métodos Supervisados de Machine Learning",
    description: "Fundamentos y modelos básicos del aprendizaje supervisado.",
    topics: [
      "Fundamentos de Machine Learning",
      "Problemas de aprendizaje",
      "Fundamentos del aprendizaje supervisado",
      "Modelos básicos de aprendizaje supervisado",
      "Aplicaciones",
    ],
    homework: [
      {
        name: "Métodos Supervisados",
        type: "slides",
        url: "https://www.canva.com/design/DAGlLnuKdY8/ZW8VXBr-uYrpE3hG1yiY9A/edit",
      },
    ],
  },
  {
    number: 6,
    title: "Métodos No Supervisados de Machine Learning",
    description: "Exploración de técnicas de aprendizaje sin etiquetas.",
    topics: [
      "Problemas de aprendizaje",
      "Fundamentos del aprendizaje no supervisado",
      "Modelos básicos de aprendizaje supervisado",
      "Aplicaciones",
      "Limitaciones",
    ],
    homework: [
      {
        name: "Métodos No Supervisados",
        type: "slides",
        url: "https://www.canva.com/design/DAGlk25Rnng/oPhTylDEh0AhbiKfZ_1NPg/edit",
      },
    ],
  },
  {
    number: 7,
    title: "Aprendizaje por Refuerzo",
    description:
      "Introducción a los modelos y aplicaciones del aprendizaje por refuerzo.",
    topics: [
      "Problemas de aprendizaje",
      "Fundamentos del aprendizaje por refuerzo",
      "Modelos básicos de aprendizaje por refuerzo",
      "Aplicaciones",
      "Limitaciones",
    ],
    homework: [
      {
        name: "Aprendizaje por Refuerzo",
        type: "slides",
        url: "https://www.canva.com/design/DAGmOxnKQkI/H8yKUFlY8t_66LKxCFKm8Q/edit",
      },
      {
        name: "Random Forest",
        type: "doc",
        url: "https://drive.google.com/file/d/1qMvrvA0W4g6QwGeMQzr12u8heffOwEEZ/view?usp=drive_link",
      },
      {
        name: "Random Forest- código fuente",
        type: "doc",
        url: "https://github.com/jazz-17/random-forest-app",
      },
    ],
  },
  {
    // Assuming week 8 is Exam Parcial or similar - skipped in original data
    number: 8,
    title: "Examen Parcial",
    description:
      "Evaluación de los temas cubiertos en la primera mitad del curso.",
    topics: ["Repaso general", "Evaluación"],
    homework: [],
  },
  {
    number: 9,
    title: "Fundamentos del Deep Learning",
    description:
      "Introducción a las redes neuronales y el aprendizaje profundo.",
    topics: [
      "Fundamentos del Deep learning",
      "Diferencias con ML clásico.",
      "Redes neuronales artificiales",
      "Arquitectura de una red",
    ],
    homework: [],
  },
  {
    number: 10,
    title: "Algoritmos de Entrenamiento en Deep Learning",
    description: "Mecanismos clave para entrenar redes neuronales.",
    topics: ["Forward & backward propagation", "TensorFlow, Keras"],
    homework: [],
  },
  {
    number: 11,
    title: "Arquitecturas de Redes Neuronales Avanzadas",
    description: "CNNs para visión y RNNs/LSTMs para secuencias.",
    topics: [
      "Redes convolucionales (CNNs) para visión por computadora.",
      "Redes recurrentes (RNNs, LSTM) para secuencias y texto.",
      "Overfitting y regularización: dropout, batch normalization",
    ],
    homework: [],
  },
  {
    number: 12,
    title: "Introducción a la IA Generativa (GAI)",
    description: "Conceptos fundamentales y diferencias con IA tradicional.",
    topics: [
      "Conceptos",
      "Diferencias con la IA tradicional",
      "Fundamentos y aplicaciones.",
      "Transformers",
    ],
    homework: [],
  },
  {
    number: 13,
    title: "Redes Generativas Adversarias (GANs)",
    description: "Aplicaciones de GANs en generación de imágenes, texto y más.",
    topics: [
      "Generación de imágenes",
      "Transferencia de estilo",
      "Aumento de datos",
      "Generación de texto",
      "Traducción automática",
      "Generación de diálogos",
    ],
    homework: [],
  },
  {
    number: 14,
    title: "IA Creativa, Ética y Futuro",
    description:
      "Explorando la generación artística, el marco legal y las implicaciones éticas.",
    topics: [
      "Concepto",
      "Fundamentos y aplicaciones",
      "Generación de obras de arte, música, poesía, y narraciones",
      "Marco legal en IA",
      "Ética y futuro en la IA",
    ],
    homework: [],
  },
  {
    // Assuming week 15 is Project presentations or similar
    number: 15,
    title: "Presentación de Proyectos Finales",
    description:
      "Exposición y evaluación de los trabajos desarrollados durante el curso.",
    topics: ["Presentaciones", "Discusión", "Feedback"],
    homework: [],
  },
  {
    // Assuming week 16 is Exam Final
    number: 16,
    title: "Examen Final",
    description: "Evaluación final cubriendo todo el material del curso.",
    topics: ["Repaso general", "Evaluación final"],
    homework: [],
  },
];

const groupMembers = [
  { name: "Quispe Carbajal, Kevin", code: "22200137" },
  { name: "Ordóñez Neyra Andrés Rafael", code: "22200174" },
  { name: "Ttito Carhuas Carolhay ", code: "22200136" },
  { name: "Segura Pérez, Gerson", code: "22200043" },
  { name: "Tantahuillca Navarro Alexander ", code: "19200145" },
  { name: "Contreras Auqui Erikson", code: "13200151" },
];

const otherGroups = [
  {
    id: 1,
    name: "Grupo 1",
    url: "https://iagrupo1.wordpress.com/"
  },
  {
    id: 2,
    name: "Grupo 2",
    url: "https://yonatanbartolo.wixsite.com/grupo02inteligenciaa"
  },
  {
    id: 3,
    name: "Grupo 3",
    url: "https://grupo3ia.wordpress.com/"
  },
  {
    id: 4,
    name: "Grupo 4",
    url: "https://inteligenciaartificial2025.wordpress.com"
  },
  {
    id: 5,
    name: "Grupo 5",
    url: "https://michaelliza.wixsite.com/my-site "
  },

]


// No longer need 'otherGroups' for this style
// Helper function for icons (optional, but keeps template cleaner)
const getIconForType = (type: string) => {
  switch (type) {
    case "slides":
      return Film;
    case "doc":
      return FileText;
    case "pdf":
      return FileType;
    default:
      return FileText;
  }
};

// Helper function to format week number (e.g., 01, 02, ..., 10, 11)
const formatWeekNumber = (num: number) => {
  return num.toString().padStart(2, "0");
};
</script>

<template>
  <div class="min-h-screen bg-background text-foreground grow">
    <!-- Simplified Header or keep the original -->
    <header
      class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container mx-auto h-16 flex items-center justify-between px-4">
        <div class="flex items-center gap-3">
          <img :src="Logo.src" alt="UNMSM Logo" class="h-10 w-auto object-contain" />
          <div>
            <h1 class="font-semibold text-lg hidden sm:block">UNMSM - FISI</h1>
            <p class="text-xs text-muted-foreground hidden sm:block">
              Inteligencia Artificial 2025-I
            </p>
            <h1 class="font-semibold text-lg sm:hidden">IA 2025-I</h1>
            <!-- Shorter title for mobile -->
          </div>
        </div>
        <nav class="flex items-center gap-4">
          <Button size="sm" as-child>
            <a href="Repositorio" download>
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

    <main class="container mx-auto px-4 py-8 md:py-12">
      <!-- Article Header / Hero -->
      <section class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
          {{ courseInfo.title }}
        </h1>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-6">
          <!-- <span class="flex items-center gap-1.5"><BookOpen class="w-4 h-4" /> {{ courseInfo.code }}</span>
          <span class="flex items-center gap-1.5"><CalendarDays class="w-4 h-4" /> {{ courseInfo.semester }}</span> -->
          <span class="flex items-center gap-1.5 font-semibold text-primary">
            <Info class="w-4 h-4" /> Grupo 06
          </span>
        </div>
        <p class="text-lg text-muted-foreground max-w-3xl">
          {{ courseInfo.description }}
        </p>
      </section>

      <!-- Course Info Section (Integrated) -->
      <section id="course-info" class="mb-12 p-6 border rounded-lg bg-card text-card-foreground">
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
                <!-- Add contact/office hours if available -->
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
              <li v-for="member in groupMembers" :key="member.code"
                class="flex justify-between items-center p-2 rounded hover:bg-muted/50">
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
              <li v-for="group in otherGroups" :key="group.id"
                class="flex justify-between items-center p-2 rounded hover:bg-muted/50">
                <a :href="group.url" class="text-blue-800 underline underline-offset-1 w-full">
                  <span>{{ group.name }}</span>

                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Syllabus / Weekly Content -->
      <section id="syllabus" class="mb-12">
        <h2 class="text-3xl font-bold mb-8 text-center">
          Contenido Semanal del Curso
        </h2>

        <div class="space-y-10 relative pl-6 border-l-2 border-primary/20">
          <!-- Timeline Indicator -->
          <div class="absolute left-[-12px] top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>

          <!-- Loop Through Weeks -->
          <article v-for="(week, index) in weeks" :key="week.number" class="relative pb-10">
            <!-- Timeline Dot for each week -->
            <div
              class="absolute left-[-12px] top-1 w-6 h-6 bg-muted rounded-full border-4 border-background ring-1 ring-primary/20">
              <span class="absolute inset-0 flex items-center justify-center text-xs font-mono text-muted-foreground">{{
                formatWeekNumber(week.number) }}</span>
            </div>

            <div class="ml-8">
              <!-- Indent content to the right of the timeline -->
              <header class="mb-4">
                <h3 class="text-2xl font-semibold mb-1">
                  Semana {{ formatWeekNumber(week.number) }}: {{ week.title }}
                </h3>
                <p v-if="week.description" class="text-muted-foreground text-sm">
                  {{ week.description }}
                </p>
              </header>

              <div class="space-y-5">
                <!-- Topics -->
                <div>
                  <h4 class="font-medium mb-2 text-primary">Temas:</h4>
                  <ul class="list-disc list-outside pl-5 space-y-1 text-sm text-muted-foreground">
                    <li v-for="(topic, idx) in week.topics" :key="`${week.number}-topic-${idx}`">
                      {{ topic }}
                    </li>
                  </ul>
                </div>

                <!-- Materials (Combined Classes, HW, Labs) -->
                <div v-if="
                  week.homework.length
                ">
                  <h4 class="font-medium mb-2 text-primary">
                    Materiales y Actividades:
                  </h4>
                  <div class="space-y-2">
                    <!-- Classes -->
                    <a v-for="(item, idx) in week.homework" :key="`${week.number}-class-${idx}`" :href="item.url"
                      target="_blank" rel="noopener noreferrer"
                      class="flex items-center gap-2 p-2 text-sm border rounded-md hover:bg-muted transition-colors group">
                      <component :is="getIconForType(item.type)"
                        class="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span>{{ item.name }}</span>
                      <ExternalLink
                        class="w-3 h-3 ml-auto text-muted-foreground/50 group-hover:text-muted-foreground transition-opacity opacity-0 group-hover:opacity-100" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer class="border-t bg-muted/40">
      <div class="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        © {{ new Date().getFullYear() }} Grupo 06 - FISI, UNMSM. Todos los
        derechos reservados.
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Add minor scoped styles if needed, but rely on Tailwind */
h2,
h3 {
  scroll-margin-top: 80px;
  /* Offset for sticky header */
}
</style>
