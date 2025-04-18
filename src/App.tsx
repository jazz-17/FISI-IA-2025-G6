
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Info, ExternalLink, Film, FileText, FileType, Download, Users, User } from 'lucide-react'
import Logo from "@/assets/unmsm.png"
import ProfesorPhoto from "@/assets/profesor.avif"
function App() {
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


  // Sample weeks data - replace with your actual weekly content
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

  // Sample group members - replace with your actual group members
  const groupMembers = [
    { name: "Quispe Carbajal, Kevin", avatar: "22200137" },
    { name: "Ordóñez Neyra Andrés Rafael", avatar: "22200174" },
    { name: "Ttito Carhuas Carolhay ", avatar: "22200136" },
    { name: "Segura Pérez, Gerson", avatar: "22200043" },
    { name: "Tantahuillca Navarro Alexander ", avatar: "19200145" },
    { name: "Contreras Auqui Erikson", avatar: "13200151" },
  ]
  // Sample other groups - replace with actual groups
  const otherGroups = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* University Header */}
      <header className="bg-white pb-2 dark:bg-slate-900 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <img
                  src={Logo}
                  alt="Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                ></img>
              </div>
              <div>
                <h2 className="font-bold text-xl">Universidad Nacional Mayor de San Marcos</h2>
                <p className="text-sm text-muted-foreground">Facultad de ingeniería de sistemas e informática</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">Escuela de Ingeniería de Sistemas</p>
              <p className="text-xs text-muted-foreground">Año académico 2025 - I</p>
            </div>
          </div>
        </div>
      </header>
      {/* Hero section with course info */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 z-0" />
        <div className="relative z-10 container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{courseInfo.title}</h1>
          <div className="flex flex-wrap gap-3 mb-6">
            {/* <div className="flex items-center text-sm bg-primary/10 px-3 py-1 rounded-full">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>{courseInfo.code}</span>
            </div>
            <div className="flex items-center text-sm bg-primary/10 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{courseInfo.semester}</span>
            </div> */}
            <div className="flex items-center text-sm bg-primary/10 font-semibold px-3 py-1 rounded-full">
              <Info className="w-4 h-4 mr-2" />
              <span>Grupo 06</span>
            </div>
          </div>
          <p className="text-lg opacity-80 mb-8">{courseInfo.description}</p>
          <Button asChild>
            <a href="syllabus.pdf" download>
              Descargar Syllabus
              <Download></Download>
            </a>
          </Button>
        </div>
      </section>

      {/* Course information section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Professor Information */}
          <Card className="md:col-span-3">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profesor
              </CardTitle>
            </CardHeader>
            <CardContent className="flex min-h-full flex-col items-center text-center">
              <div className="w-36 h-36  relative rounded-full overflow-hidden ">
                <img
                  src={ProfesorPhoto}
                  alt="Professor"
                />
              </div>
              <h3 className="text-xl font-bold">{courseInfo.instructor}</h3>
            </CardContent>
          </Card>

          {/* Group Members */}
          <Card className="md:col-span-6">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Integrantes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {groupMembers.map((member, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{member.name}</h4>
                    </div>
                    {member.avatar}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Other Groups */}
          <Card className="md:col-span-3">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                Otros Grupos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {otherGroups.map((group) => (
                  <a
                    key={group.id}
                    href={`#group-${group.id}`}
                    className="flex flex-col   rounded-lg hover:bg-muted/50 transition-colors"
                  >

                    <span className="text-sm bg-primary/10 self-start px-2 py-1 rounded-full">Grupo {group.id}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Syllabus section */}
      <section id="syllabus" className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contenido del Curso</h2>

          <div className="space-y-12">
            {weeks.map((week) => (
              <Card key={week.number} className="overflow-hidden">
                <CardHeader className="bg-primary/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>
                        Semana {week.number}: {week.title}
                      </CardTitle>
                      <CardDescription className="mt-1">{week.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className='mb-3'>
                    <h4 className="font-semibold mb-1">Temas:</h4>
                    <ul className="list-disc pl-5  space-y-1">
                      {week.topics.map((topic, index) => (
                        <li key={index} className="opacity-80">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='flex gap-12 justify-between'>
                    <div>
                      <h4 className="font-semibold mb-1">Clases:</h4>
                      <div className="grid gap-2">
                      </div>
                      {week.classes.map((_class, index) => (
                        <a
                          key={index}
                          href={_class.url}
                          target='_blank'
                          className="flex items-center p-2 border rounded-md hover:bg-muted transition-colors my-2"
                        >
                          <FileText className="w-4 h-4 mr-2 text-primary" />
                          <span className="text-sm">{_class.name}</span>
                        </a>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Tarea:</h4>
                      <div className="grid gap-2">
                      </div>
                      {week.homeworks.map((homework, index) => (
                        <a
                          key={index}
                          href={homework.url}
                          target='_blank'
                          className="flex items-center p-2 border rounded-md hover:bg-muted transition-colors my-2"
                        >
                          {homework.type === "slides" && <Film className="w-4 h-4 mr-2 text-primary" />}
                          {homework.type === "doc" && <FileText className="w-4 h-4 mr-2 text-primary" />}
                          {homework.type === "pdf" && <FileType className="w-4 h-4 mr-2 text-primary" />}
                          <span className="text-sm">{homework.name}</span>
                        </a>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Laboratorio:</h4>
                      <div className="grid gap-2">
                      </div>
                      {/* {week.labs.map((lab, index) => (
                        <a
                          key={index}
                          href={lab.url}
                          className="flex items-center p-2 border rounded-md hover:bg-muted transition-colors my-2"
                        >
                          {lab.type === "slides" && <Film className="w-4 h-4 mr-2 text-primary" />}
                          {lab.type === "doc" && <FileText className="w-4 h-4 mr-2 text-primary" />}
                          {lab.type === "pdf" && <FileType className="w-4 h-4 mr-2 text-primary" />}
                          <span className="text-sm">{lab.name}</span>
                        </a>
                      ))} */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
export default App


