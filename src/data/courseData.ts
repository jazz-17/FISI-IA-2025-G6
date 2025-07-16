import type { CourseInfo, Week, GroupMember, OtherGroup } from "@/types/course";

export const courseInfo: CourseInfo = {
  title: "Inteligencia Artificial 2025-I ",
  code: "CS4080",
  instructor: "Dr. Hugo Vega Huerta",
  semester: "Spring 2025",
  description:
    "Esta asignatura corresponde al área de formación especializada, es de naturaleza teórico y práctico; tiene el propósito de desarrollar los fundamentos prácticos y teóricos para el desarrollo de sistemas de computación que presentan características inteligentes. Los contenidos principales son: La Inteligencia Artificial, conceptos, paradigmas y aplicaciones en la industria y servicios. Representación oel conocimiento. Representación de problemas de ÍA como búsqueda en el espacio de estado. Métodos de búsqueda ciegos e informados. juegos inteligentes hombre-máquina. Sistemas expertos, arquitectura, taxonomía y aplicaciones. Motor de inferencia. Ingeniería de conocimiento, conceptos, su evolución. Common KADS. Verificación y validación de sistemas expertos",
  objectives: [
    "Understand modern web architecture and design patterns",
    "Build responsive web applications using React and Next.js",
    "Implement accessibility best practices",
    "Deploy and manage web applications in production environments",
  ],
};

export const weeks: Week[] = [
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
        description:
          "Presentación introductoria sobre los conceptos básicos de la Inteligencia Artificial",
      },
      {
        name: "Sistemas Inteligentes",
        type: "slides",
        url: "https://drive.google.com/file/d/12TYvaGH2WHvvc6AM5zZfQeqdVknL-0MG/view",
        description:
          "Clasificación y características de los sistemas inteligentes modernos",
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
    ],
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
        description:
          "Presentación sobre algoritmos y estrategias para juegos humano-máquina",
      },
      {
        name: "Implementación Minimax",
        type: "code",
        url: "/FISI-IA-2025-G6/tictactoe",
        description:
          "Implementación práctica del algoritmo Minimax en Tic-Tac-Toe. Poda alfa-beta para optimizar el rendimiento.",
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
      {
        name: "Random Forest",
        type: "code",
        url: "https://drive.google.com/file/d/1qMvrvA0W4g6QwGeMQzr12u8heffOwEEZ/view?usp=drive_link",
        description:
          "Modelo de clasificación implementado en Python que utiliza el algoritmo Random Forest para predecir la presencia de enfermedad cardíaca",
      },
      {
        name: "Random Forest- código fuente",
        type: "doc",
        url: "https://github.com/jazz-17/random-forest-app",
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
        name: "Implementación Aprendizaje Supervisado",
        type: "code",
        url: "https://colab.research.google.com/drive/1IuofstSudmztLOF_3aZle1Bva0obVId_?usp=sharing",
        description:
          "Análisis y clasificación del dataset Iris usando varios modelos de machine learning (KNN, Árboles, etc.).",
      },
      {
        name: "Implementación Aprendizaje no Supervisado",
        type: "code",
        url: "https://colab.research.google.com/drive/1QGLaoB-dFCg37mnJ9w7vhHnpH9uTHFTS?usp=sharing",
        description:
          "Análisis del dataset de vinos con PCA. Se normalizan los datos, se reduce la dimensionalidad a 2 componentes principales y se visualiza la distribución de clases.",
      },
    ],
  },
  {
    number: 8,
    title: "Examen Parcial",
    description:
      "Evaluación de los temas cubiertos en la primera mitad del curso.",
    topics: ["Repaso general", "Evaluación"],
    homework: [
      {
        name: "Examen 1",
        type: "doc",
        url: "https://docs.google.com/document/d/1B3T7lOn-JKTK-T6MB0aAONR3YuZnurgzJGcLIYGajzE/edit?usp=drivesdk",
      },
      {
        name: "Examen 2",
        type: "doc",
        url: "https://docs.google.com/document/d/1Wz_8nAPV700izQ2xX6_Y5_0CHctFwFCh/edit",
      },
    ],
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
    homework: [
      {
        name: "Deep learning",
        type: "slides",
        url: "https://www.canva.com/design/DAGoCezYiEQ/acjvdSq53U2Ujwr31uS-Nw/edit?utm=",
      },
    ],
  },
  {
    number: 10,
    title: "Algoritmos de Entrenamiento en Deep Learning",
    description: "Mecanismos clave para entrenar redes neuronales.",
    topics: ["Forward & backward propagation", "TensorFlow, Keras"],
    homework: [
      {
        name: "Algoritmos de entrenamiento",
        type: "slides",
        url: "https://www.canva.com/design/DAGoxOgyLgU/jvbxpIl5dpnDcHriI2N3rw/edit",
      },
      {
        name: "Árbol genealógico",
        type: "prolog",
        id: "arbol-genealogico",
      },
      {
        name: "Sistema experto - Reino Fungi",
        type: "slides",
        url: "https://www.canva.com/design/DAGox8cgOqE/ZgSJ4qhcsELHOk9BMoBReQ/edit",
      },
      {
        name: "Sistema experto - Reino Fungi",
        type: "prolog",
        id: "sistema-experto-reino-fungi",
        description:"Modela la clasificación científica (taxonomía) de los hongos. Permite identificar especies según sus características y consultar sus propiedades, como si son comestibles, tóxicas o tienen usos medicinales."
      },
    ],
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
    homework: [
      {
        name: "Arquitecturas de Redes Neuronales Avanzadas",
        type: "slides",
        url: "https://www.canva.com/design/DAGpZo0hDqs/FCOS6lInPyYCdiMgXDRFlA/edit",
      },
    ],
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
    homework: [
      {
        name: "Introducción a la IA Generativa",
        type: "slides",
        url: "https://www.canva.com/design/DAGp9HxtA-8/hpbirQ26dXCSU-AEYDXrSg/edit?ui=eyJEIjp7IlQiOnsiQSI6IlBCbUMzbkNQcVBiTGo2bFQifX19",
      },
    ],
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
    homework: [
      {
        name: "Redes Generativas Adversarias",
        type: "slides",
        url: "https://www.canva.com/design/DAGqG0KSfhc/vCQYbb9O6th56slLc-AkGQ/edit",
      },
    ],
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
    homework: [
      {
        name: "IA Creativa, Ética y Futuro",
        type: "slides",
        url: "https://www.canva.com/design/DAGrN5liS80/G0DL8l_rbs_tH0LbtmI_gQ/edit?utm_content=DAGrN5liS80&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
      {
        id: "sistema-combinado",
        name: "Sistema Experto de Paraderos y Árbol Genealógico",
        type: "prolog",
        description:
          "Sistema que combina un árbol genealógico y un sistema experto de paraderos de transporte público. Permite consultar relaciones familiares y ubicaciones de paraderos.",
      },
    ],
  },
  {
    number: 15,
    title: "Presentación de Proyectos Finales",
    description:
      "Exposición y evaluación de los trabajos desarrollados durante el curso.",
    topics: ["Presentaciones", "Discusión", "Feedback"],
    homework: [
      {
        type: "slides",
        url: "https://www.canva.com/design/DAGr9OsvHgQ/bwcsoJtzZEJlp-s9kzn-OA/edit",
        // what name to put the canva where we desiplay ai generative capabiliites, like creating stories and follow them up with image, videos and music
        name: "Inteligencia Artificial Generativa",
        description:
          "Presentación de las capacidades generativas de IA, incluyendo creación de historias y generación de imágenes, videos y música.",
      },
      {
        id: "sistema-legal",
        name: "Sistema experto legal",
        type: "prolog",
        description:
          "Sistema que analiza casos legales para descubrir estadísticas, identificar patrones y marcar a individuos de alto riesgo según factores como la edad y  el tipo de caso.",
      },
    ],
  },
  {
    number: 16,
    title: "Examen Final",
    description: "Evaluación final cubriendo todo el material del curso.",
    topics: ["Repaso general", "Evaluación final"],
    homework: [],
  },
];

export const groupMembers: GroupMember[] = [
  { name: "Quispe Carbajal, Kevin", code: "22200137" },
  { name: "Ordóñez Neyra Andrés Rafael", code: "22200174" },
  { name: "Ttito Carhuas Carolhay ", code: "22200136" },
  { name: "Segura Pérez, Gerson", code: "22200043" },
  { name: "Tantahuillca Navarro Alexander ", code: "19200145" },
  { name: "Contreras Auqui Erikson", code: "13200151" },
];

export const otherGroups: OtherGroup[] = [
  {
    id: 1,
    name: "Grupo 1",
    url: "https://iagrupo1.wordpress.com/",
  },
  {
    id: 2,
    name: "Grupo 2",
    url: "https://yonatanbartolo.wixsite.com/grupo02inteligenciaa",
  },
  {
    id: 3,
    name: "Grupo 3",
    url: "https://grupo3ia.wordpress.com/",
  },
  {
    id: 4,
    name: "Grupo 4",
    url: "https://inteligenciaartificial2025.wordpress.com",
  },
  {
    id: 5,
    name: "Grupo 5",
    url: "https://michaelliza.wixsite.com/my-site ",
  },
];
