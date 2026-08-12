import { Especie } from "./types";

export const pecesBasicos: Especie[] = [

  {
    id: "vieja",
    nombreComun: "Vieja",
    nombresAlternativos: ["Pez loro"],
    nombreCientifico: "Sparisoma cretense",
    familia: "Scaridae",

    categoria: "Fauna",
    grupo: "Marinos",
    subgrupo: "Peces",

    descripcion:
      "Pez loro herbívoro de fondos rocosos del Atlántico oriental y Macaronesia. Raspa algas con sus mandíbulas fusionadas y es muy habitual en arrecifes poco profundos de Canarias.",

    imagen: "",

    alimentacion: "Herbívoro",
    interaccion: "Inofensivo",

    conservacion: "Preocupación menor",
    frecuenciaCanarias: "comun",

    longitud: "Hasta 50 cm",
    peso: "Hasta 2 kg",

    habitat: "Fondos rocosos con algas",
    vida: "Hasta 15 años",

    zonaCanarias: "Todas las islas",
    profundidad: "0 - 50 metros",

    curiosidades: [
      "Ayuda a crear arena marina al triturar algas y roca con sus mandíbulas.",
      "Nace hembra y puede transformarse en macho al crecer.",
      "Es uno de los herbívoros más importantes en los fondos rocosos de Canarias.",
    ],

    wikipedia: "https://es.wikipedia.org/"
  },


  {
    id: "salema",
    nombreComun: "Salema",
    nombresAlternativos: [],

    nombreCientifico: "Sarpa salpa",
    familia: "Sparidae",

    categoria: "Fauna",
    grupo: "Marinos",
    subgrupo: "Peces",

    descripcion:
      "Pez costero del Atlántico oriental y Mediterráneo que forma grandes bancos. Se alimenta principalmente de algas y pequeños invertebrados en praderas marinas y fondos rocosos.",

    imagen: "",

    alimentacion: "Herbívoro",
    interaccion: "Inofensivo",

    conservacion: "Preocupación menor",
    frecuenciaCanarias: "comun",

    longitud: "Hasta 50 cm",
    peso: "Hasta 2 kg",

    habitat: "Praderas marinas y fondos rocosos",
    vida: "Hasta 10 años",

    zonaCanarias: "Todas las islas",
    profundidad: "0 - 30 metros",

    curiosidades: [
      "Se alimenta sobre todo de algas y restos vegetales del fondo.",
      "Sus rayas longitudinales le ayudan a confundirse dentro del banco.",
      "Si se consume, puede provocar alucinaciones; no es un pez comestible seguro.",
    ],

    wikipedia: "https://es.wikipedia.org/"
  },


  {
    id: "sargo-comun",
    nombreComun: "Sargo común",
    nombresAlternativos: [],

    nombreCientifico: "Diplodus sargus",
    familia: "Sparidae",

    categoria: "Fauna",
    grupo: "Marinos",
    subgrupo: "Peces",

    descripcion:
      "Espárido costero muy común en el Atlántico oriental y Mediterráneo. Habita fondos rocosos poco profundos y tiene dieta omnívora, alimentándose de algas, invertebrados y pequeños peces.",

    imagen: "",

    alimentacion: "Omnívoro",
    interaccion: "Inofensivo",

    conservacion: "Preocupación menor",
    frecuenciaCanarias: "comun",

    longitud: "Hasta 45 cm",
    peso: "Hasta 2 kg",

    habitat: "Fondos rocosos costeros",
    vida: "Hasta 10 años",

    zonaCanarias: "Todas las islas",
    profundidad: "0 - 50 metros",

    curiosidades: [
      "De joven muestra franjas verticales que van desapareciendo con la edad.",
      "Rasca algas e invertebrados de las rocas con sus dientes incisivos.",
      "En primavera forma parejas para reproducirse cerca del fondo rocoso.",
    ],

    wikipedia: "https://es.wikipedia.org/"
  },


  {
    id: "pejeverde",
    nombreComun: "Pejeverde",
    nombresAlternativos: [],

    nombreCientifico: "Thalassoma pavo",
    familia: "Labridae",

    categoria: "Fauna",
    grupo: "Marinos",
    subgrupo: "Peces",

    descripcion:
      "Lábrido multicolor de aguas poco profundas del Atlántico oriental y Mediterráneo. Los adultos son carnívoros activos y muy visibles sobre fondos rocosos costeros.",

    imagen: "",

    alimentacion: "Carnívoro",
    interaccion: "Inofensivo",

    conservacion: "Preocupación menor",
    frecuenciaCanarias: "comun",

    longitud: "Hasta 25 cm",
    peso: "Hasta 300 g",

    habitat: "Fondos rocosos poco profundos",
    vida: "Hasta 5 años",

    zonaCanarias: "Todas las islas",
    profundidad: "0 - 20 metros",

    curiosidades: [
      "Los machos adultos son mucho más coloridos que las hembras y los jóvenes.",
      "Nace hembra y puede convertirse en macho al alcanzar cierto tamaño.",
      "Caza activamente crustáceos y gusanos en las grietas de las rocas.",
    ],

    wikipedia: "https://es.wikipedia.org/"
  },


  {
    id: "morena-negra",
    nombreComun: "Morena negra",
    nombresAlternativos: [],

    nombreCientifico: "Muraena augusti",
    familia: "Muraenidae",

    categoria: "Fauna",
    grupo: "Marinos",
    subgrupo: "Peces",

    descripcion:
      "Morena endémica de Macaronesia, presente en Canarias y otras islas del Atlántico oriental. De hábitos nocturnos, vive escondida en cuevas y grietas rocosas y es carnívora.",

    imagen: "",

    alimentacion: "Carnívoro",
    interaccion: "Precaución",

    conservacion: "Preocupación menor",
    frecuenciaCanarias: "escaso",
    notaFrecuencia:
      "Activa sobre todo de noche; suele estar oculta en grietas.",

    longitud: "Hasta 130 cm",
    peso: "Hasta 5 kg",

    habitat: "Cuevas y grietas rocosas",
    vida: "Hasta 20 años",

    zonaCanarias: "Todas las islas",
    profundidad: "0 - 100 metros",

    curiosidades: [
      "Es endémica de Macaronesia; en Canarias es la morena autóctona más conocida.",
      "Abre y cierra la boca de forma continua para hacer circular el agua y respirar.",
      "Sale de noche a cazar peces, cefalópodos y crustáceos cerca de su guarida.",
    ],

    wikipedia: "https://es.wikipedia.org/"
  }

];
