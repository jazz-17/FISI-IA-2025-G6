<script setup>
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Info, ExternalLink, Film, FileText, FileType, Download, Users, User } from 'lucide-vue-next' // Use lucide-vue-next
import Logo from "@/assets/unmsm.png"
import ProfesorPhoto from "@/assets/profesor.avif"

// No need for useState or useEffect, Vue's reactivity handles data
const courseInfo = {
  title: "Inteligencia Artificial 2025-I ",
  code: "CS4080",
  instructor: "Dr. Hugo Vega Huerta",
  semester: "Spring 2025",
  description:
    "Este curso abarca los fundamentos de la Inteligencia Artificial (IA) para el desarrollo de sistemas informáticos inteligentes. Explora conceptos, paradigmas y aplicaciones de la IA, incluyendo la representación del conocimiento, los métodos de búsqueda, los sistemas expertos, los motores de inferencia y la ingeniería del conocimiento. También incluye juegos hombre-máquina, la metodología CommonKADS y la validación de sistemas expertos.",
  objectives: [
    "Understand modern web architecture and design patterns",
    "Build responsive web applications using React and Next.js",
    "Implement accessibility best practices",
    "Deploy and manage web applications in production environments",
  ],
}

// Sample weeks data - directly usable in the template
const weeks = [
  {
    number: 1,
    title: "Fundamentos de la IA",
    description: "",
    topics: ["Conceptos, Historia", "Áreas", "Aprendizaje automático", "Niveles de la IA"],
    classes: [
      { name: "Fundamentos de la IA", type: "slides", url: "https://drive.google.com/file/d/14yhuqM8RVraOoP-9kVHPgKzCLI8U5vRX/view" },
    ],
    homeworks: [
      { name: "Sistemas Inteligentes", type: "slides", url: "https://drive.google.com/file/d/12TYvaGH2WHvvc6AM5zZfQeqdVknL-0MG/view" },
      // { name: "CSS3 Features Documentation", type: "doc", url: "#" },
    ],
    labs: [
      //  { name: "HTML5 Semantics Slides", type: "slides", url: "#" },
      //  { name: "Responsive Design Exercise", type: "pdf", url: "#" },
    ],
  },
  {
    number: 2,
    title: "Agentes",
    description: "",
    topics: ["Conceptos, Tipos, Arquitectura", "Diseño de un agente", "Aplicaciones"],
    classes: [
      { name: "IA - Agentes", type: "slides", url: "https://drive.google.com/file/d/1w_zwMjRLThvoz_fPhnMZpU9Q57mfg1Jx/view" },
    ],
    homeworks: [
      // { name: "HTML5 Semantics Slides", type: "slides", url: "#" },
      // { name: "Responsive Design Exercise", type: "pdf", url: "#" },
    ],
    labs: [
      // { name: "HTML5 Semantics Slides", type: "slides", url: "#" },
      // { name: "CSS3 Features Documentation", type: "doc", url: "#" },
    ],
  },
  {
    number: 3,
    title: "Búsquedas",
    description: "",
    topics: ["Resolución de problemas como búsqueda", "Espacios de estados", "Búsqueda ciega", "Búsqueda informada"],
    classes: [
      { name: "Búsquedas", type: "slides", url: "https://www.canva.com/design/DAGjya74K84/r00sDBiBRJShDouxPhvpcw/edit" },
    ],
    homeworks: [
    ],
    labs: [
    ],
  },
  {
    number: 4,
    title: "Juegos de estrategia",
    description: "",
    topics: ["Juego de estrategia humano - máquina", "Algoritmo de juego de estrategia humano – máquina", "Juegos de estrategia con aprendizaje automático "],
    classes: [
      // { name: "HTML5 Semantics Slides", type: "slides", url: "#" },
    ],
    homeworks: [
    ],
    labs: [
    ],
  },
  {
    number: 5,
    title: "Métodos supervisados",
    description: "",
    topics: ["Fundamentos de Machine Learning", "Problemas de aprendizaje", "Fundamentos del aprendizaje supervisado", "Modelos básicos de aprendizaje supervisado", "Aplicaciones"],
    classes: [
      // { name: "HTML5 Semantics Slides", type: "slides", url: "#" },
    ],
    homeworks: [
    ],
    labs: [
    ],
  },
  {
    number: 6,
    title: "Métodos no supervisados",
    description: "",
    topics: ["Problemas de aprendizaje", "Fundamentos del aprendizaje no supervisado", "Modelos básicos de aprendizaje supervisado", "Aplicaciones", "Limitaciones"],
    classes: [
      // { name: "HTML5 Semantics Slides", type: "slides", url: "#" },
    ],
    homeworks: [
    ],
    labs: [
    ],
  },
  {
    number: 7,
    title: "Métodos por refuerzo",
    description: "",
    topics: ["Problemas de aprendizaje", "Fundamentos del aprendizaje por refuerzo", "Modelos básicos de aprendizaje por refuerzo", "Aplicaciones", "Limitaciones"],
    classes: [
      // { name: "HTML5 Semantics Slides", type: "slides", url: "#" },
    ],
    homeworks: [
    ],
    labs: [
    ],
  },
  {
    number: 9,
    title: "Fundamentos del Deep Learning",
    description: "",
    topics: ["Fundamentos del Deep learning", "Diferencias con ML clásico.", "Redes neuronales artificiales", "Arquitectura de una red"],
    classes: [
      // { name: "HTML5 Semantics Slides", type: "slides", url: "#" },
    ],
    homeworks: [
    ],
    labs: [
    ],
  },
  {
    number: 10,
    title: "Algoritmos de entrenamiento",
    description: "",
    topics: ["Forward & backward propagation", "TensorFlow, Keras"],
    classes: [
      // { name: "HTML5 Semantics Slides", type: "slides", url: "#" },
    ],
    homeworks: [
    ],
    labs: [
    ],
  },
  {
    number: 11,
    title: "Redes",
    description: "",
    topics: ["Redes convolucionales (CNNs) para visión por computadora.", "Redes recurrentes (RNNs, LSTM) para secuencias y texto.", "Overfitting y regularización: dropout, batch normalization"],
    classes: [
      // { name: "HTML5 Semantics Slides", type: "slides", url: "#" },
    ],
    homeworks: [
    ],
    labs: [
    ],
  },
  {
    number: 12,
    title: "IA generativa (GAI)",
    description: "",
    topics: ["Conceptos", "Diferencias con la IA tradicional", "Fundamentos y aplicaciones.", "Transformers"],
    classes: [
      // { name: "HTML5 Semantics Slides", type: "slides", url: "#" },
    ],
    homeworks: [
    ],
    labs: [
    ],
  },
  {
    number: 13,
    title: "Redes generativas adversarias",
    description: "",
    topics: ["Generación de imágenes", "Transferencia de estilo", "Aumento de datos", "Generación de texto", "Traducción automática", "Generación de diálogos"],
    classes: [
      // { name: "HTML5 Semantics Slides", type: "slides", url: "#" },
    ],
    homeworks: [
    ],
    labs: [
    ],
  },
  {
    number: 14,
    title: "IA creativa",
    description: "",
    topics: ["Concepto", "Fundamentos y aplicaciones", "Generación de obras de arte, música, poesía, y narraciones", "Marco legal en IA", "Ética y futuro en la IA"],
    classes: [
      // { name: "HTML5 Semantics Slides", type: "slides", url: "#" },
    ],
    homeworks: [
    ],
    labs: [
    ],
  },
]

// Sample group members - directly usable in the template
const groupMembers = [
  { name: "Quispe Carbajal, Kevin", avatar: "22200137" },
  { name: "Ordóñez Neyra Andrés Rafael", avatar: "22200174" },
  { name: "Ttito Carhuas Carolhay ", avatar: "22200136" },
  { name: "Segura Pérez, Gerson", avatar: "22200043" },
  { name: "Tantahuillca Navarro Alexander ", avatar: "19200145" },
  { name: "Contreras Auqui Erikson", avatar: "13200151" },
]

// Sample other groups - directly usable in the template
const otherGroups = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
]

// Helper function to get icon based on type (optional, could do inline)
const getIconForType = (type) => {
  switch (type) {
    case 'slides':
      return Film;
    case 'doc':
      return FileText;
    case 'pdf':
      return FileType;
    default:
      return FileText; // Default icon
  }
}

</script>

<template>
  <main class="min-h-screen bg-slate-50 dark:bg-slate-950">
    <!-- University Header -->
    <header class="bg-white pb-2 dark:bg-slate-900 border-b">
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 relative">
              <img :src="Logo" alt="Logo" width="64" height="64" class="object-contain">
            </div>
            <div>
              <h2 class="font-bold text-xl">Universidad Nacional Mayor de San Marcos</h2>
              <p class="text-sm text-muted-foreground">Facultad de ingeniería de sistemas e informática</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm font-medium">Escuela de Ingeniería de Sistemas</p>
            <p class="text-xs text-muted-foreground">Año académico 2025 - I</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero section with course info -->
    <section class="relative">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 z-0" />
      <div class="relative z-10 container mx-auto px-4 py-12">
        <h1 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">{{ courseInfo.title }}</h1>
        <div class="flex flex-wrap gap-3 mb-6">
          <!-- Example static info -->
          <div class="flex items-center text-sm bg-primary/10 font-semibold px-3 py-1 rounded-full">
            <Info class="w-4 h-4 mr-2" />
            <span>Grupo 06</span>
          </div>
        </div>
        <p class="text-lg opacity-80 mb-8">{{ courseInfo.description }}</p>
        <Button as-child> <!-- Use as-child prop for links inside buttons -->
          <a href="syllabus.pdf" download>
            Descargar Syllabus
            <Download class="ml-2 h-4 w-4" /> <!-- Add spacing if needed -->
          </a>
        </Button>
      </div>
    </section>

    <!-- Course information section -->
    <section class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <!-- Professor Information -->
        <Card class="md:col-span-3">
          <CardHeader class="pb-4">
            <CardTitle class="flex items-center gap-2">
              <User class="h-5 w-5" />
              Profesor
            </CardTitle>
          </CardHeader>
          <CardContent class="flex min-h-full flex-col items-center text-center">
            <div class="w-36 h-36 relative rounded-full overflow-hidden mb-4"> <!-- Added margin-bottom -->
              <img :src="ProfesorPhoto" alt="Professor" class="object-cover w-full h-full" <!-- Ensure image covers the
                area -->
              />
            </div>
            <h3 class="text-xl font-bold">{{ courseInfo.instructor }}</h3>
            <!-- Removed description as it wasn't used -->
          </CardContent>
        </Card>

        <!-- Group Members -->
        <Card class="md:col-span-6">
          <CardHeader class="pb-4">
            <CardTitle class="flex items-center gap-2">
              <Users class="h-5 w-5" />
              Integrantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Use v-for to loop through groupMembers -->
              <div v-for="(member, index) in groupMembers" :key="index"
                class="flex items-center gap-3 p-3 border rounded-lg">
                <div>
                  <h4 class="font-medium">{{ member.name }}</h4>
                  <!-- Displaying avatar text directly, adjust if it's meant to be an image path -->
                  <p class="text-sm text-muted-foreground">{{ member.avatar }}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <!-- Other Groups -->
        <Card class="md:col-span-3">
          <CardHeader class="pb-4">
            <CardTitle class="flex items-center gap-2">
              <ExternalLink class="h-5 w-5" />
              Otros Grupos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <!-- Use v-for to loop through otherGroups -->
              <a v-for="group in otherGroups" :key="group.id" :href="`#group-${group.id}`"
                class="flex flex-col rounded-lg hover:bg-muted/50 transition-colors p-2" <!-- Added padding -->
                >
                <span class="text-sm bg-primary/10 self-start px-2 py-1 rounded-full">Grupo {{ group.id }}</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- Syllabus section -->
    <section id="syllabus" class="container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">Contenido del Curso</h2>

        <div class="space-y-12">
          <!-- Use v-for to loop through weeks -->
          <Card v-for="week in weeks" :key="week.number" class="overflow-hidden">
            <CardHeader class="bg-primary/5">
              <div class="flex justify-between items-start">
                <div>
                  <CardTitle>
                    Semana {{ week.number }}: {{ week.title }}
                  </CardTitle>
                  <CardDescription v-if="week.description" class="mt-1">{{ week.description }}</CardDescription>
                  <!-- Conditionally render description -->
                </div>
                <!-- Add any other header content if needed -->
              </div>
            </CardHeader>
            <CardContent class="pt-6">
              <div class='mb-4'> <!-- Increased margin -->
                <h4 class="font-semibold mb-2">Temas:</h4> <!-- Increased margin -->
                <ul class="list-disc pl-5 space-y-1">
                  <!-- Use v-for to loop through topics -->
                  <li v-for="(topic, index) in week.topics" :key="index" class="opacity-80">
                    {{ topic }}
                  </li>
                </ul>
              </div>
              <div class='flex flex-col sm:flex-row gap-6 sm:gap-12 justify-between'> <!-- Adjusted layout and gap -->
                <!-- Classes Section -->
                <div class="flex-1"> <!-- Allow sections to grow -->
                  <h4 class="font-semibold mb-2">Clases:</h4>
                  <div v-if="week.classes && week.classes.length > 0" class="space-y-2">
                    <!-- Use space-y for consistency -->
                    <!-- Use v-for to loop through classes -->
                    <a v-for="(_class, index) in week.classes" :key="index" :href="_class.url" target='_blank'
                      rel="noopener noreferrer"
                      class="flex items-center p-2 border rounded-md hover:bg-muted transition-colors"
                      >
                      <FileText class="w-4 h-4 mr-2 text-primary" /> <!-- Consistent icon for class links -->
                      <span class="text-sm">{{ _class.name }}</span>
                    </a>
                  </div>
                  <p v-else class="text-sm text-muted-foreground italic">No hay clases listadas.</p>
                  <!-- Placeholder if empty -->
                </div>

                <!-- Homeworks Section -->
                <div class="flex-1">
                  <h4 class="font-semibold mb-2">Tarea:</h4>
                  <div v-if="week.homeworks && week.homeworks.length > 0" class="space-y-2">
                    <!-- Use v-for to loop through homeworks -->
                    <a v-for="(homework, index) in week.homeworks" :key="index" :href="homework.url" target='_blank'
                      rel="noopener noreferrer"
                      class="flex items-center p-2 border rounded-md hover:bg-muted transition-colors">
                      <!-- Conditional icon rendering -->
                      <Film v-if="homework.type === 'slides'" class="w-4 h-4 mr-2 text-primary" />
                      <FileText v-else-if="homework.type === 'doc'" class="w-4 h-4 mr-2 text-primary" />
                      <FileType v-else-if="homework.type === 'pdf'" class="w-4 h-4 mr-2 text-primary" />
                      <FileText v-else class="w-4 h-4 mr-2 text-primary" /> <!-- Default icon -->
                      <span class="text-sm">{{ homework.name }}</span>
                    </a>
                  </div>
                  <p v-else class="text-sm text-muted-foreground italic">No hay tareas listadas.</p>
                </div>

                <!-- Labs Section (Translated even if commented out originally) -->
                <div class="flex-1">
                  <h4 class="font-semibold mb-2">Laboratorio:</h4>
                  <div v-if="week.labs && week.labs.length > 0" class="space-y-2">
                    <!-- Use v-for to loop through labs -->
                    <a v-for="(lab, index) in week.labs" :key="index" :href="lab.url" target='_blank'
                      rel="noopener noreferrer" <!-- Target added -->
                      class="flex items-center p-2 border rounded-md hover:bg-muted transition-colors"
                      >
                      <Film v-if="lab.type === 'slides'" class="w-4 h-4 mr-2 text-primary" />
                      <FileText v-else-if="lab.type === 'doc'" class="w-4 h-4 mr-2 text-primary" />
                      <FileType v-else-if="lab.type === 'pdf'" class="w-4 h-4 mr-2 text-primary" />
                      <FileText v-else class="w-4 h-4 mr-2 text-primary" /> <!-- Default icon -->
                      <span class="text-sm">{{ lab.name }}</span>
                    </a>
                  </div>
                  <p v-else class="text-sm text-muted-foreground italic">No hay laboratorios listados.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* Add any component-specific styles here if needed */
/* For example: */
/* img {
  max-width: 100%;
  height: auto;
} */
</style>
