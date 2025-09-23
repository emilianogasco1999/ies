import TSCRimg from '../../assets/img/carreras/2.jpg'
import TSBimg from '../../assets/img/carreras/1.jpg'
import TFPMimg from '../../assets/img/carreras/3.jpg'
import TSDSimg from '../../assets/img/carreras/4.jpg'
import Progrsarimg from '../../assets/img/logo/progresar.jpg'

export const carreras = [
  {
    id: 1,
    duarcion: '3 años',
    title: "Técnico Superior en Computación y Redes",
    body: "El Técnico Superior en Computación y Redes, contará con sólidos conocimientos científicos y técnicos que lo habilitarán para desempeñar con idoneidad en el ámbito de la infraestructura de la tecnología de la información.",
    img: TSCRimg,
    tareas:[
      'Instalar o reemplazar componentes de la infraestructura de TI o adaptarlas a nuevas condiciones de servicios externos minimizando riesgos para la seguridad y continuidad del servicio.',
      'Migrar o convertir sistemas, aplicaciones o datos tratando de minimizar riesgos para la seguridad y continuidad del servicio.',
      'Solucionar problemas elementales de programación y base de datos de manera de asegurar la continuidad de los servicios.',
      'Administrar servidores, software de base, comunicaciones y de más subsistemas, maximizando el aprovechamiento de los recursos y anticipando posibles problemas.',
      'Administrar redes de comunicación de datos, cableadas o no, asegurando la accesivilidad de los servicios y optimizando los recursos.',
      'Atender incidentes que afectan a la infraestructura de TI, diagnosticar la causa que lo originan, resolverlos o coordinar su solución.'
    ],
    planDeEstudio: {
      '1': {
        id: 'primero',
        title: 'Primer Año',
        materias: [
          'Ingles',
          'Matemática I',
          'Arquietctura de Computadoras I',
          'Sistema Operativo I',
          'Tecnología de la Información y la Comunicación',
          'Fundamentos de Física y Electrónica',
          'Problematica Social y del Trabajo',
          'Prácticas Profesionalizantes'
        ],
      },
      '2': {
        id: 'segundo',
        title: 'Segundo Año',
        materias: [
          'Inglés Técnico',
          'Matemática II',
          'Arquietctura de Computadoras II',
          'Sistema Operativo II',
          'Ética Profesional',
          'Redes I',
          'Prácticas Profesionalizantes II'
        ]
      },
      '3': {
        id: 'tercero',
        title: 'Tercer Año',
        materias: [
          'Programación y Base de Datos',
          'Estadistica Aplicada',
          'Arquietctura de Computadoras III',
          'Informática y Legislación',
          'Nuevas Tecnologías',
          'Seguridad Informática',
          'Redes II',
          'Prácticas Profesionalizantes III'
        ]
      }
    },

  },
  {
    id: 2,
    duarcion: '3 años',
    title: "Técnico Superior en Bioenergia",
    body: "El Técnico Superior en Bioenergía, contará con sólidos conocimientos científicos, técnicos y humanísticos, que le harán posible desempeñarse con idoneidad y compromiso ético y social en los diferentes ámbitos relacionados al proceso de genereación de bioenergía.",
    img: TSBimg,
    tareas:[
      'Implementacion y control de normas y parametros relacionados con la normativa ambiental que regulan la actividad.',
      'Instalación y operación de módulos de producción de biogas en función de demandas específicas.',
      'Coordinación de equipos de trabajo para la atención de procesos de generación de bioenergía.',
      'Asesoramiento en el área de la generación de bioenergía, del cuidado y sustentabilidad del medio ambiente y del desarrollo social y regional.',
      'Supervisión de procesos de generación de bioenergía y equipos de trabajo.',
      'Recepción de materia prima, control, dimensionamiento y disponibilidad.',
      'Procesamiento de la materia prima, implementción, control y monitoreo.',
      'Uso de diferentes tipos de instrumentos utilizados en el proceso de producción de bioenergía, dentro de sus diferentes etapas: mecánicas , biotérmicas y eléctricas.',
      'Medición analítica de la composición, características y calidad de los biocumbustibles producidos para cumplir con los estándares de calidad normalizados.',
      'Operación, control y mantenimiento auxiliar de equipamiento mecánico, eléctrico y/o térmicos propios del proceso.',
    ],
    planDeEstudio: {
      '1': {
        id: 'primero',
        title: 'Primer Año',
        materias: [
          'Matemática y Física Aplicada',
          'Portugués Técnico',
          'Química',
          'Química Biológica',
          'Agronomía',
          'Mundo del Trabajo',
          'Microbiología',
          'Seguridad Industrial'
        ],
      },
      '2': {
        id: 'segundo',
        title: 'Segundo Año',
        materias: [
          'Termodinámica',
          'Gestión Ambiental',
          'Legislación',
          'Mecánica Aplicada',
          'Inglés Técnico',
          'Electrotecnia',
          'Uso Térmico y Produccién de EE',
          'Prácticas Profesionalizantes I'
        ]
      },
      '3': {
        id: 'tercero',
        title: 'Tercer Año',
        materias: [
          'Informática Aplicada',
          'Innovación y Desarrollo Tecnologico',
          'Bioetanol',
          'Biogas',
          'Biodiesel',
          'Biorefinería',
          'Prácticas Profesionalizantes II',
        ]
      }
    },

  },
  {
    id: 3,
    duarcion: '1 años',
    title: "Trayecto de Formación Profesional en Máquinas Industriales",
    body: "Contará con una formación que te permitirá ejecutar tareas técnicas relacionadas con la fabricación, construcción, montaje, funcionamiento, mantenimiento y reparación de máquinas, equipos e instalaciones mecánicas.",
    img: TFPMimg,
    tareas:[
      'Participar en el manejo, control y mantenimiento de equipos mecánicos, eléctricos y/o térmicos.',
      'Implementación y control de las normas y parámetros relacionados con la normativa ambiental que regulan la actividad.',
      'Integrar equipo de trabajo para la elaboración y planificación del mantenimiento preventivo del equipo mecánico, eléctrico y/o térmico.',
      'Operar, controlar y realizar mantenimiento de equipamiento mecánico, eléctrico y/o térmico.',
      'Participar en las diferentes fases del mantenimiento auxiliar del equipamiento mecánico, eléctrico y/o térmico, bajo las normas de seguridad e higiene.',
    ],
    planDeEstudio: {
      '1': {
        id: 'primero',
        title: 'Primer Año',
        materias: [
          'Matemática Y Física Aplicada',
          'Mecánica Aplicada',
          'Ingles Técnico',
          'Electrotecnia',
          'Informática Aplicada',
          'Prácticas Profesionalizantes',
          'Seguridad Industrial',
        ],
      }
    },

  },
  {
    id: 4,
    duarcion: '3 años',
    title: "Técnico Superior en Desarrollo de Software",
    body: "",
    img: TSDSimg,
    tareas:[],
    planDeEstudio: {
      '1': {
        id: 'primero',
        title: 'Primer Año',
        materias: [
          'Ciudadanía y espacio público',
          'Introducción a la informática',
          'Introducción a redes',
          'Base de datos I',
          'Matemática I',
          'Programación I',
          'Inglés técnico I',
          'Estructura de datos y algoritmos',
          'Taller de programación I',
        ],
      },
      '2': {
        id: 'segundo',
        title: 'Segundo Año',
        materias: [
          'Programación II',
          'Estadística aplicada',
          'Base de datos II',
          'Matemática II',
          'Sistema informacion empresarial',
          'Inglés técnico II',
          'Redes y seguridad informática',
          'Análisis y diseño de sistemas',
          'Laboratorio de programación',
          'Taller de programación II'
        ]
      },
      '3': {
        id: 'tercero',
        title: 'Tercer Año',
        materias: [
          'Emprendimiento tecnológicos',
          'Gestión de proyectos y software de calidad',
          'Desarrollo empresarial I.',
          'Programación III',
          'Ingles tecnico III',
          'Etica y deontología profesional',
          'Legislación de software',
          'Técnicas avanzadas de programación',
          'Taller de programacion III',
        ]
      }
    },

  },
]

export const progresar = [
  {
    title: "Progresar",
    body: "Buscamos garantizar el derecho a la educación y fortalecer las trayectorias educativas de jóvenes que quieran formarse profesionalmente, finalizar su educación obligatoria o estén estudiando una carrera del nivel superior.",
    img: Progrsarimg,
    link: 'https://www.argentina.gob.ar/educacion/progresar'
  },
]


