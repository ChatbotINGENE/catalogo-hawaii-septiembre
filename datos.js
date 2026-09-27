/* Generado por catalogo/septiembre.py a partir del PDF de marketing.
   Para cambiar un precio o un nombre se toca PRODUCTOS allá y se
   vuelve a correr; lo que se edite aquí a mano se pierde. */
const CATALOGO = [];
const ESCENAS = {};
const ADORNOS = [];
const ADORNOS_CONTRA = [];
const PORTADA_PIEZAS = [
 {
  "sku": "12400717",
  "img": "img/secciones/portada-04a.webp",
  "izq": -10,
  "arriba": -3,
  "ancho": 52,
  "alto": 34.12,
  "seg": 7.4,
  "demora": -0.6,
  "giro": 2.0
 },
 {
  "sku": "11100700",
  "img": "img/secciones/portada-06c.webp",
  "izq": 76,
  "arriba": 66,
  "ancho": 26,
  "alto": 32.84,
  "seg": 6.8,
  "demora": -2.4,
  "giro": 2.6
 },
 {
  "sku": "112071",
  "img": "img/secciones/portada-07c.webp",
  "izq": -4,
  "arriba": 70,
  "ancho": 44,
  "alto": 20.84,
  "seg": 8.2,
  "demora": -1.3,
  "giro": 1.8
 }
];
const PORTADA_FONDO = "img/secciones/fondo-portada.webp";
const SECCIONES = [
 {
  "id": "flores",
  "nombre": "Flores",
  "portada": {
   "img": "img/secciones/fondo-flores.webp",
   "fondo": "#2F8F77",
   "hondo": "#0B4A3F",
   "texto": "Ramos, varas y botones para arreglos que duran todo el año.",
   "piezas": [
    {
     "sku": "11100700",
     "img": "img/secciones/flores-06c.webp",
     "izq": 4,
     "arriba": 14,
     "ancho": 36,
     "alto": 45.47,
     "seg": 6.4,
     "demora": -0.4,
     "giro": 2.4
    },
    {
     "sku": "112071",
     "img": "img/secciones/flores-07c.webp",
     "izq": 46,
     "arriba": 8,
     "ancho": 50,
     "alto": 23.68,
     "seg": 7.6,
     "demora": -3.1,
     "giro": 1.8
    },
    {
     "sku": "11105714",
     "img": "img/secciones/flores-10b.webp",
     "izq": 30,
     "arriba": 36,
     "ancho": 34,
     "alto": 62.25,
     "seg": 8.4,
     "demora": -1.7,
     "giro": 2.2
    }
   ]
  },
  "ahorro": 45,
  "productos": [
   {
    "id": "11105115-flor-de-cerezo",
    "nombre": "Flor de cerezo",
    "medida": null,
    "piezas": null,
    "ahorro": 40,
    "desc": "Disponible en 2 colores: blanco y rosado intenso. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "11105115",
      "color": "Blanco",
      "regular": 4.0,
      "preventa": 2.4,
      "ahorro": 40,
      "img": "img/productos/11105115-flor-de-cerezo-blanco.webp",
      "llena": false
     },
     {
      "sku": "11105115",
      "color": "Rosado intenso",
      "regular": 4.0,
      "preventa": 2.4,
      "ahorro": 40,
      "img": "img/productos/11105115-flor-de-cerezo-rosado-intenso.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "111053-flor-de-arana",
    "nombre": "Flor de araña",
    "medida": null,
    "piezas": null,
    "ahorro": 43,
    "desc": "Disponible en 4 colores: rojo, amarillo, rosado y blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "111053",
      "color": "Rojo",
      "regular": 1.15,
      "preventa": 0.65,
      "ahorro": 43,
      "img": "img/productos/111053-flor-de-arana.webp",
      "llena": true
     },
     {
      "sku": "111053",
      "color": "Amarillo",
      "regular": 1.15,
      "preventa": 0.65,
      "ahorro": 43,
      "img": "img/productos/111053-flor-de-arana.webp",
      "llena": true
     },
     {
      "sku": "111053",
      "color": "Rosado",
      "regular": 1.15,
      "preventa": 0.65,
      "ahorro": 43,
      "img": "img/productos/111053-flor-de-arana.webp",
      "llena": true
     },
     {
      "sku": "111053",
      "color": "Blanco",
      "regular": 1.15,
      "preventa": 0.65,
      "ahorro": 43,
      "img": "img/productos/111053-flor-de-arana.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "11207003-ramo-de-lirio-6-y-3-botones",
    "nombre": "Ramo de lirio × 6 y 3 botones",
    "medida": null,
    "piezas": null,
    "ahorro": 33,
    "desc": "Color blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "11207003",
      "color": "Blanco",
      "regular": 9.0,
      "preventa": 6.0,
      "ahorro": 33,
      "img": "img/productos/11207003-ramo-de-lirio-6-y-3-botones.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "11103514-vara-boton-de-pana-cerrado-52-cm",
    "nombre": "Vara botón de pana cerrado 52 cm",
    "medida": "52 cm",
    "piezas": null,
    "ahorro": 40,
    "desc": "Mide 52 cm. Color rojo. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "11103514",
      "color": "Rojo",
      "regular": 1.0,
      "preventa": 0.6,
      "ahorro": 40,
      "img": "img/productos/11103514-vara-boton-de-pana-cerrado-52-cm.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "112087-ramo-flor-de-durazno-9-de-55-cm",
    "nombre": "Ramo flor de durazno × 9 de 55 cm",
    "medida": "55 cm",
    "piezas": null,
    "ahorro": 36,
    "desc": "Mide 55 cm. Disponible en 4 colores: blanco, rosado, amarillo y rojo. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "112087",
      "color": "Blanco",
      "regular": 2.75,
      "preventa": 1.75,
      "ahorro": 36,
      "img": "img/productos/112087-ramo-flor-de-durazno-9-de-55-cm-blanco.webp",
      "llena": false
     },
     {
      "sku": "112087",
      "color": "Rosado",
      "regular": 2.75,
      "preventa": 1.75,
      "ahorro": 36,
      "img": "img/productos/112087-ramo-flor-de-durazno-9-de-55-cm-rosado.webp",
      "llena": true
     },
     {
      "sku": "112087",
      "color": "Amarillo",
      "regular": 2.75,
      "preventa": 1.75,
      "ahorro": 36,
      "img": "img/productos/112087-ramo-flor-de-durazno-9-de-55-cm-amarillo.webp",
      "llena": true
     },
     {
      "sku": "112087",
      "color": "Rojo",
      "regular": 2.75,
      "preventa": 1.75,
      "ahorro": 36,
      "img": "img/productos/112087-ramo-flor-de-durazno-9-de-55-cm-rojo.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "111099-vara-de-durazno-30-de-1-m",
    "nombre": "Vara de durazno × 30 de 1 m",
    "medida": "1 m",
    "piezas": null,
    "ahorro": 41,
    "desc": "Mide 1 m. Disponible en 2 colores: rosado y blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "111099",
      "color": "Rosado",
      "regular": 9.5,
      "preventa": 5.6,
      "ahorro": 41,
      "img": "img/productos/111099-vara-de-durazno-30-de-1-m.webp",
      "llena": true
     },
     {
      "sku": "111099",
      "color": "Blanco",
      "regular": 9.5,
      "preventa": 5.6,
      "ahorro": 41,
      "img": "img/productos/111099-vara-de-durazno-30-de-1-m.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "112002-gerbera-6",
    "nombre": "Gerbera × 6",
    "medida": null,
    "piezas": null,
    "ahorro": 35,
    "desc": "Disponible en 9 colores: rojo, naranja, amarillo, morado, celeste, azul, blanco, fucsia y rosado. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "112002",
      "color": "Rojo",
      "regular": 1.0,
      "preventa": 0.65,
      "ahorro": 35,
      "img": "img/productos/112002-gerbera-6.webp",
      "llena": false
     },
     {
      "sku": "112002",
      "color": "Naranja",
      "regular": 1.0,
      "preventa": 0.65,
      "ahorro": 35,
      "img": "img/productos/112002-gerbera-6.webp",
      "llena": false
     },
     {
      "sku": "112002",
      "color": "Amarillo",
      "regular": 1.0,
      "preventa": 0.65,
      "ahorro": 35,
      "img": "img/productos/112002-gerbera-6.webp",
      "llena": false
     },
     {
      "sku": "112002",
      "color": "Morado",
      "regular": 1.0,
      "preventa": 0.65,
      "ahorro": 35,
      "img": "img/productos/112002-gerbera-6.webp",
      "llena": false
     },
     {
      "sku": "112002",
      "color": "Celeste",
      "regular": 1.0,
      "preventa": 0.65,
      "ahorro": 35,
      "img": "img/productos/112002-gerbera-6.webp",
      "llena": false
     },
     {
      "sku": "112002",
      "color": "Azul",
      "regular": 1.0,
      "preventa": 0.65,
      "ahorro": 35,
      "img": "img/productos/112002-gerbera-6.webp",
      "llena": false
     },
     {
      "sku": "112002",
      "color": "Blanco",
      "regular": 1.0,
      "preventa": 0.65,
      "ahorro": 35,
      "img": "img/productos/112002-gerbera-6.webp",
      "llena": false
     },
     {
      "sku": "112002",
      "color": "Fucsia",
      "regular": 1.0,
      "preventa": 0.65,
      "ahorro": 35,
      "img": "img/productos/112002-gerbera-6.webp",
      "llena": false
     },
     {
      "sku": "112002",
      "color": "Rosado",
      "regular": 1.0,
      "preventa": 0.65,
      "ahorro": 35,
      "img": "img/productos/112002-gerbera-6.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "11100700-girasol-de-1-flor-mediana",
    "nombre": "Girasol de 1 flor mediana",
    "medida": null,
    "piezas": null,
    "ahorro": 40,
    "desc": "Color amarillo. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "11100700",
      "color": "Amarillo",
      "regular": 1.25,
      "preventa": 0.75,
      "ahorro": 40,
      "img": "img/productos/11100700-girasol-de-1-flor-mediana.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "112069-gladiola",
    "nombre": "Gladiola",
    "medida": null,
    "piezas": null,
    "ahorro": 32,
    "desc": "Disponible en 4 colores: amarillo, rojo, azul y morado. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "112069",
      "color": "Amarillo",
      "regular": 3.25,
      "preventa": 2.2,
      "ahorro": 32,
      "img": "img/productos/112069-gladiola-amarillo.webp",
      "llena": false
     },
     {
      "sku": "112069",
      "color": "Rojo",
      "regular": 3.25,
      "preventa": 2.2,
      "ahorro": 32,
      "img": "img/productos/112069-gladiola-rojo.webp",
      "llena": false
     },
     {
      "sku": "112069",
      "color": "Azul",
      "regular": 3.25,
      "preventa": 2.2,
      "ahorro": 32,
      "img": "img/productos/112069-gladiola-azul.webp",
      "llena": false
     },
     {
      "sku": "112069",
      "color": "Morado",
      "regular": 3.25,
      "preventa": 2.2,
      "ahorro": 32,
      "img": "img/productos/112069-gladiola-morado.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "112066-ramo-de-clavellina-12",
    "nombre": "Ramo de clavellina × 12",
    "medida": null,
    "piezas": null,
    "ahorro": 38,
    "desc": "Disponible en 4 colores: morado, naranja, rojo y perla. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "112066",
      "color": "Morado",
      "regular": 2.25,
      "preventa": 1.4,
      "ahorro": 38,
      "img": "img/productos/112066-ramo-de-clavellina-12-morado.webp",
      "llena": false
     },
     {
      "sku": "112066",
      "color": "Naranja",
      "regular": 2.25,
      "preventa": 1.4,
      "ahorro": 38,
      "img": "img/productos/112066-ramo-de-clavellina-12-naranja.webp",
      "llena": false
     },
     {
      "sku": "112066",
      "color": "Rojo",
      "regular": 2.25,
      "preventa": 1.4,
      "ahorro": 38,
      "img": "img/productos/112066-ramo-de-clavellina-12-rojo.webp",
      "llena": false
     },
     {
      "sku": "112066",
      "color": "Perla",
      "regular": 2.25,
      "preventa": 1.4,
      "ahorro": 38,
      "img": "img/productos/112066-ramo-de-clavellina-12-perla.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "112071-ramo-de-rosa-wanjun-12-con-baby",
    "nombre": "Ramo de rosa Wanjun × 12 con baby",
    "medida": null,
    "piezas": null,
    "ahorro": 40,
    "desc": "Disponible en 7 colores: amarillo, morado, fucsia, rojo, rosado, perla y melocotón. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "112071",
      "color": "Amarillo",
      "regular": 4.0,
      "preventa": 2.4,
      "ahorro": 40,
      "img": "img/productos/112071-ramo-de-rosa-wanjun-12-con-baby.webp",
      "llena": false
     },
     {
      "sku": "112071",
      "color": "Morado",
      "regular": 4.0,
      "preventa": 2.4,
      "ahorro": 40,
      "img": "img/productos/112071-ramo-de-rosa-wanjun-12-con-baby.webp",
      "llena": false
     },
     {
      "sku": "112071",
      "color": "Fucsia",
      "regular": 4.0,
      "preventa": 2.4,
      "ahorro": 40,
      "img": "img/productos/112071-ramo-de-rosa-wanjun-12-con-baby.webp",
      "llena": false
     },
     {
      "sku": "112071",
      "color": "Rojo",
      "regular": 4.0,
      "preventa": 2.4,
      "ahorro": 40,
      "img": "img/productos/112071-ramo-de-rosa-wanjun-12-con-baby.webp",
      "llena": false
     },
     {
      "sku": "112071",
      "color": "Rosado",
      "regular": 4.0,
      "preventa": 2.4,
      "ahorro": 40,
      "img": "img/productos/112071-ramo-de-rosa-wanjun-12-con-baby.webp",
      "llena": false
     },
     {
      "sku": "112071",
      "color": "Perla",
      "regular": 4.0,
      "preventa": 2.4,
      "ahorro": 40,
      "img": "img/productos/112071-ramo-de-rosa-wanjun-12-con-baby.webp",
      "llena": false
     },
     {
      "sku": "112071",
      "color": "Melocotón",
      "regular": 4.0,
      "preventa": 2.4,
      "ahorro": 40,
      "img": "img/productos/112071-ramo-de-rosa-wanjun-12-con-baby.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "111049-boton-de-rosa-natural",
    "nombre": "Botón de rosa natural",
    "medida": null,
    "piezas": null,
    "ahorro": 45,
    "desc": "Disponible en 2 colores: rojo y blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "111049",
      "color": "Rojo",
      "regular": 1.0,
      "preventa": 0.55,
      "ahorro": 45,
      "img": "img/productos/111049-boton-de-rosa-natural-rojo.webp",
      "llena": false
     },
     {
      "sku": "111049",
      "color": "Blanco",
      "regular": 1.0,
      "preventa": 0.55,
      "ahorro": 45,
      "img": "img/productos/111049-boton-de-rosa-natural-blanco.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "112065-ramo-de-rosa-7-con-follaje",
    "nombre": "Ramo de rosa × 7 con follaje",
    "medida": null,
    "piezas": null,
    "ahorro": 21,
    "desc": "Disponible en 2 colores: blanco y rosado. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "112065",
      "color": "Blanco",
      "regular": 7.0,
      "preventa": 5.5,
      "ahorro": 21,
      "img": "img/productos/112065-ramo-de-rosa-7-con-follaje.webp",
      "llena": false
     },
     {
      "sku": "112065",
      "color": "Rosado",
      "regular": 7.0,
      "preventa": 5.5,
      "ahorro": 21,
      "img": "img/productos/112065-ramo-de-rosa-7-con-follaje.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "111011-lisandro",
    "nombre": "Lisandro",
    "medida": null,
    "piezas": null,
    "ahorro": 43,
    "desc": "Disponible en 4 colores: azul, rosado, rojo y perla. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "111011",
      "color": "Azul",
      "regular": 1.15,
      "preventa": 0.65,
      "ahorro": 43,
      "img": "img/productos/111011-lisandro-azul.webp",
      "llena": true
     },
     {
      "sku": "111011",
      "color": "Rosado",
      "regular": 1.15,
      "preventa": 0.65,
      "ahorro": 43,
      "img": "img/productos/111011-lisandro-rosado.webp",
      "llena": false
     },
     {
      "sku": "111011",
      "color": "Rojo",
      "regular": 1.15,
      "preventa": 0.65,
      "ahorro": 43,
      "img": "img/productos/111011-lisandro-rojo.webp",
      "llena": true
     },
     {
      "sku": "111011",
      "color": "Perla",
      "regular": 1.15,
      "preventa": 0.65,
      "ahorro": 43,
      "img": "img/productos/111011-lisandro-perla.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "11100903-orquidea",
    "nombre": "Orquídea",
    "medida": null,
    "piezas": null,
    "ahorro": 35,
    "desc": "Color blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "11100903",
      "color": "Blanco",
      "regular": 1.0,
      "preventa": 0.65,
      "ahorro": 35,
      "img": "img/productos/11100903-orquidea.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "111010-boton-de-rosa-individual-20",
    "nombre": "Botón de rosa individual × 20",
    "medida": null,
    "piezas": null,
    "ahorro": 35,
    "desc": "Disponible en 4 colores: amarillo, rojo, fucsia/blanco y blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "111010",
      "color": "Amarillo",
      "regular": 2.0,
      "preventa": 1.3,
      "ahorro": 35,
      "img": "img/productos/111010-boton-de-rosa-individual-20-amarillo.webp",
      "llena": false
     },
     {
      "sku": "111010",
      "color": "Rojo",
      "regular": 2.0,
      "preventa": 1.3,
      "ahorro": 35,
      "img": "img/productos/111010-boton-de-rosa-individual-20-rojo.webp",
      "llena": true
     },
     {
      "sku": "111010",
      "color": "Fucsia/blanco",
      "regular": 2.0,
      "preventa": 1.3,
      "ahorro": 35,
      "img": "img/productos/111010-boton-de-rosa-individual-20-fucsia-blanco.webp",
      "llena": false
     },
     {
      "sku": "111010",
      "color": "Blanco",
      "regular": 2.0,
      "preventa": 1.3,
      "ahorro": 35,
      "img": "img/productos/111010-boton-de-rosa-individual-20-blanco.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "11104614-rosita-latina",
    "nombre": "Rosita latina",
    "medida": null,
    "piezas": null,
    "ahorro": 41,
    "desc": "Color rojo. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "11104614",
      "color": "Rojo",
      "regular": 1.1,
      "preventa": 0.65,
      "ahorro": 41,
      "img": "img/productos/11104614-rosita-latina.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "111059-lirio-1-y-un-boton",
    "nombre": "Lirio × 1 y un botón",
    "medida": null,
    "piezas": null,
    "ahorro": 42,
    "desc": "Disponible en 4 colores: blanco, rosado, morado y azul. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "111059",
      "color": "Blanco",
      "regular": 1.2,
      "preventa": 0.7,
      "ahorro": 42,
      "img": "img/productos/111059-lirio-1-y-un-boton-blanco.webp",
      "llena": false
     },
     {
      "sku": "111059",
      "color": "Rosado",
      "regular": 1.2,
      "preventa": 0.7,
      "ahorro": 42,
      "img": "img/productos/111059-lirio-1-y-un-boton-rosado.webp",
      "llena": false
     },
     {
      "sku": "111059",
      "color": "Morado",
      "regular": 1.2,
      "preventa": 0.7,
      "ahorro": 42,
      "img": "img/productos/111059-lirio-1-y-un-boton-morado.webp",
      "llena": false
     },
     {
      "sku": "111059",
      "color": "Azul",
      "regular": 1.2,
      "preventa": 0.7,
      "ahorro": 42,
      "img": "img/productos/111059-lirio-1-y-un-boton-azul.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "11105714-vara-hortensia-1",
    "nombre": "Vara hortensia × 1",
    "medida": null,
    "piezas": null,
    "ahorro": 33,
    "desc": "Color rojo. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "11105714",
      "color": "Rojo",
      "regular": 3.0,
      "preventa": 2.0,
      "ahorro": 33,
      "img": "img/productos/11105714-vara-hortensia-1.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "11207420-ramo-rosa-mondial-9",
    "nombre": "Ramo rosa Mondial × 9",
    "medida": null,
    "piezas": null,
    "ahorro": 21,
    "desc": "Color salmón. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "11207420",
      "color": "Salmón",
      "regular": 4.75,
      "preventa": 3.75,
      "ahorro": 21,
      "img": "img/productos/11207420-ramo-rosa-mondial-9.webp",
      "llena": false
     }
    ]
   }
  ]
 },
 {
  "id": "follajes-y-guias",
  "nombre": "Follajes y guías",
  "portada": {
   "img": "img/secciones/fondo-follajes-y-guias.webp",
   "fondo": "#5E9A55",
   "hondo": "#1C3F24",
   "texto": "Verde para rellenar, colgar y cubrir paredes.",
   "piezas": [
    {
     "sku": "12400717",
     "img": "img/secciones/follajes-y-guias-04a.webp",
     "izq": 3,
     "arriba": 6,
     "ancho": 44,
     "alto": 28.87,
     "seg": 7.2,
     "demora": -0.9,
     "giro": 2.2
    },
    {
     "sku": "12101517",
     "img": "img/secciones/follajes-y-guias-02c.webp",
     "izq": 60,
     "arriba": 4,
     "ancho": 32,
     "alto": 52.4,
     "seg": 8.0,
     "demora": -3.4,
     "giro": 1.6
    },
    {
     "sku": "12401017",
     "img": "img/secciones/follajes-y-guias-13b.webp",
     "izq": 14,
     "arriba": 40,
     "ancho": 40,
     "alto": 31.36,
     "seg": 6.8,
     "demora": -2.2,
     "giro": 2.4
    }
   ]
  },
  "ahorro": 50,
  "productos": [
   {
    "id": "12101803-lazo-compromiso-con-baby-1-60-m-9-cm",
    "nombre": "Lazo compromiso con baby 1.60 m × 9 cm",
    "medida": "1.60 m × 9 cm",
    "piezas": null,
    "ahorro": 39,
    "desc": "Mide 1.60 m × 9 cm. Color verde/blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "12101803",
      "color": "Verde/blanco",
      "regular": 14.0,
      "preventa": 8.5,
      "ahorro": 39,
      "img": "img/productos/12101803-lazo-compromiso-con-baby-1-60-m-9-cm.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "12101517-guirnalda-de-hojas",
    "nombre": "Guirnalda de hojas",
    "medida": null,
    "piezas": null,
    "ahorro": 40,
    "desc": "Color verde. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "12101517",
      "color": "Verde",
      "regular": 6.25,
      "preventa": 3.75,
      "ahorro": 40,
      "img": "img/productos/12101517-guirnalda-de-hojas.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "12303617-follaje-de-bambu-55-cm",
    "nombre": "Follaje de bambú 55 cm",
    "medida": "55 cm",
    "piezas": null,
    "ahorro": 42,
    "desc": "Mide 55 cm. Color verde oscuro. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "12303617",
      "color": "Verde oscuro",
      "regular": 3.25,
      "preventa": 1.9,
      "ahorro": 42,
      "img": "img/productos/12303617-follaje-de-bambu-55-cm.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "12400717-hoja-individual-de-mano-de-leon-grande",
    "nombre": "Hoja individual de mano de león grande",
    "medida": "34 × 16 cm",
    "piezas": null,
    "ahorro": 36,
    "desc": "Mide 34 × 16 cm. Color verde oscuro. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "12400717",
      "color": "Verde oscuro",
      "regular": 2.5,
      "preventa": 1.6,
      "ahorro": 36,
      "img": "img/productos/12400717-hoja-individual-de-mano-de-leon-grande.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "12302303-ramo-de-follaje-con-margarita",
    "nombre": "Ramo de follaje con margarita",
    "medida": null,
    "piezas": null,
    "ahorro": 37,
    "desc": "Color blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "12302303",
      "color": "Blanco",
      "regular": 1.75,
      "preventa": 1.1,
      "ahorro": 37,
      "img": "img/productos/12302303-ramo-de-follaje-con-margarita.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "113008-guia-de-cerezo-1-80-m",
    "nombre": "Guía de cerezo 1.80 m",
    "medida": "1.80 m",
    "piezas": null,
    "ahorro": 38,
    "desc": "Mide 1.80 m. Disponible en 2 colores: blanco y rosado. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "113008",
      "color": "Blanco",
      "regular": 2.0,
      "preventa": 1.25,
      "ahorro": 38,
      "img": "img/productos/113008-guia-de-cerezo-1-80-m.webp",
      "llena": true
     },
     {
      "sku": "113008",
      "color": "Rosado",
      "regular": 2.0,
      "preventa": 1.25,
      "ahorro": 38,
      "img": "img/productos/113008-guia-de-cerezo-1-80-m.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "12101917-guia-de-hoja-de-camote-2-40-m",
    "nombre": "Guía de hoja de camote 2.40 m",
    "medida": "2.40 m",
    "piezas": null,
    "ahorro": 41,
    "desc": "Mide 2.40 m. Color verde oscuro. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "12101917",
      "color": "Verde oscuro",
      "regular": 0.85,
      "preventa": 0.5,
      "ahorro": 41,
      "img": "img/productos/12101917-guia-de-hoja-de-camote-2-40-m.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "51308617-valla-de-follaje",
    "nombre": "Valla de follaje",
    "medida": "70 × 140 cm",
    "piezas": null,
    "ahorro": 41,
    "desc": "Mide 70 × 140 cm. Color verde. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "51308617",
      "color": "Verde",
      "regular": 8.5,
      "preventa": 5.0,
      "ahorro": 41,
      "img": "img/productos/51308617-valla-de-follaje.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "113009-cordon-de-rosas-con-hojas-2-m",
    "nombre": "Cordón de rosas con hojas 2 m",
    "medida": "2 m",
    "piezas": null,
    "ahorro": 43,
    "desc": "Mide 2 m. Disponible en 2 colores: blanco y rojo. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "113009",
      "color": "Blanco",
      "regular": 7.5,
      "preventa": 4.25,
      "ahorro": 43,
      "img": "img/productos/113009-cordon-de-rosas-con-hojas-2-m.webp",
      "llena": true
     },
     {
      "sku": "113009",
      "color": "Rojo",
      "regular": 7.5,
      "preventa": 4.25,
      "ahorro": 43,
      "img": "img/productos/113009-cordon-de-rosas-con-hojas-2-m.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "12201017-ficus-de-hoja-de-bambu",
    "nombre": "Ficus de hoja de bambú",
    "medida": null,
    "piezas": null,
    "ahorro": 40,
    "desc": "Color verde. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "12201017",
      "color": "Verde",
      "regular": 0.75,
      "preventa": 0.45,
      "ahorro": 40,
      "img": "img/productos/12201017-ficus-de-hoja-de-bambu.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "12401017-palma-individual",
    "nombre": "Palma individual",
    "medida": null,
    "piezas": null,
    "ahorro": 38,
    "desc": "Color verde. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "12401017",
      "color": "Verde",
      "regular": 0.8,
      "preventa": 0.5,
      "ahorro": 38,
      "img": "img/productos/12401017-palma-individual.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "12302503-ramo-follaje-blanco-con-baby",
    "nombre": "Ramo follaje blanco con baby",
    "medida": null,
    "piezas": null,
    "ahorro": 50,
    "desc": "Color blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "12302503",
      "color": "Blanco",
      "regular": 1.5,
      "preventa": 0.75,
      "ahorro": 50,
      "img": "img/productos/12302503-ramo-follaje-blanco-con-baby.webp",
      "llena": false
     }
    ]
   }
  ]
 },
 {
  "id": "macetas",
  "nombre": "Macetas",
  "portada": {
   "img": "img/secciones/fondo-macetas.webp",
   "fondo": "#D08A5C",
   "hondo": "#6A3620",
   "texto": "De copa, de pilar y de barro, del centro de mesa a la entrada.",
   "piezas": [
    {
     "sku": "53101103",
     "img": "img/secciones/macetas-14a.webp",
     "izq": 6,
     "arriba": 8,
     "ancho": 38,
     "alto": 52.19,
     "seg": 7.0,
     "demora": -1.2,
     "giro": 1.4
    },
    {
     "sku": "53100600",
     "img": "img/secciones/macetas-16a.webp",
     "izq": 50,
     "arriba": 26,
     "ancho": 42,
     "alto": 25.45,
     "seg": 6.6,
     "demora": -0.5,
     "giro": 1.8
    }
   ]
  },
  "ahorro": 45,
  "productos": [
   {
    "id": "53101103-maceta-alta-de-copa",
    "nombre": "Maceta alta de copa",
    "medida": "40 × 66",
    "piezas": null,
    "ahorro": 41,
    "desc": "Mide 40 × 66. Color blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "53101103",
      "color": "Blanco",
      "regular": 17.0,
      "preventa": 10.0,
      "ahorro": 41,
      "img": "img/productos/53101103-maceta-alta-de-copa.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "53101403-maceta-base-cuadrada-pequena",
    "nombre": "Maceta base cuadrada pequeña",
    "medida": "18 × 22",
    "piezas": null,
    "ahorro": 45,
    "desc": "Mide 18 × 22. Color blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "53101403",
      "color": "Blanco",
      "regular": 2.0,
      "preventa": 1.1,
      "ahorro": 45,
      "img": "img/productos/53101403-maceta-base-cuadrada-pequena.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "53101503-maceta-base-cuadrada-grande",
    "nombre": "Maceta base cuadrada grande",
    "medida": "34.50 × 42.50",
    "piezas": null,
    "ahorro": 42,
    "desc": "Mide 34.50 × 42.50. Color blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "53101503",
      "color": "Blanco",
      "regular": 12.5,
      "preventa": 7.25,
      "ahorro": 42,
      "img": "img/productos/53101503-maceta-base-cuadrada-grande.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "53101603-maceta-de-pilar-pequena",
    "nombre": "Maceta de pilar pequeña",
    "medida": "22.50 × 50",
    "piezas": null,
    "ahorro": 40,
    "desc": "Mide 22.50 × 50. Color blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "53101603",
      "color": "Blanco",
      "regular": 10.5,
      "preventa": 6.25,
      "ahorro": 40,
      "img": "img/productos/53101603-maceta-de-pilar-pequena.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "53101703-maceta-de-pilar-grande",
    "nombre": "Maceta de pilar grande",
    "medida": "26.50 × 59.50",
    "piezas": null,
    "ahorro": 41,
    "desc": "Mide 26.50 × 59.50. Color blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "53101703",
      "color": "Blanco",
      "regular": 18.5,
      "preventa": 11.0,
      "ahorro": 41,
      "img": "img/productos/53101703-maceta-de-pilar-grande.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "53101803-maceta-pintoresca-con-colgadero",
    "nombre": "Maceta pintoresca con colgadero",
    "medida": "17.60 × 6.70",
    "piezas": null,
    "ahorro": 44,
    "desc": "Mide 17.60 × 6.70. Color blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "53101803",
      "color": "Blanco",
      "regular": 1.6,
      "preventa": 0.9,
      "ahorro": 44,
      "img": "img/productos/53101803-maceta-pintoresca-con-colgadero.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "53100600-maceta-redonda",
    "nombre": "Maceta redonda",
    "medida": "19 × 14 cm",
    "piezas": null,
    "ahorro": 45,
    "desc": "Mide 19 × 14 cm. Color café. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "53100600",
      "color": "Café",
      "regular": 1.0,
      "preventa": 0.55,
      "ahorro": 45,
      "img": "img/productos/53100600-maceta-redonda.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "53100400-maceta-tradicional",
    "nombre": "Maceta tradicional",
    "medida": "15.5 × 13 cm",
    "piezas": null,
    "ahorro": 40,
    "desc": "Mide 15.5 × 13 cm. Color café. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "53100400",
      "color": "Café",
      "regular": 0.5,
      "preventa": 0.3,
      "ahorro": 40,
      "img": "img/productos/53100400-maceta-tradicional.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "53100200-maceta-lisa-pequena",
    "nombre": "Maceta lisa pequeña",
    "medida": "7 × 8.5 cm",
    "piezas": null,
    "ahorro": 25,
    "desc": "Mide 7 × 8.5 cm. Color café. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "53100200",
      "color": "Café",
      "regular": 0.2,
      "preventa": 0.15,
      "ahorro": 25,
      "img": "img/productos/53100200-maceta-lisa-pequena.webp",
      "llena": false
     }
    ]
   }
  ]
 },
 {
  "id": "coronas-y-disfraces",
  "nombre": "Coronas y disfraces",
  "portada": {
   "img": "img/secciones/fondo-coronas-y-disfraces.webp",
   "fondo": "#5B7FB5",
   "hondo": "#1D2D55",
   "texto": "Para la reina de la fiesta, el ángel del acto y el vaquero.",
   "piezas": [
    {
     "sku": "323007",
     "img": "img/secciones/coronas-y-disfraces-18a.webp",
     "izq": 4,
     "arriba": 6,
     "ancho": 56,
     "alto": 23.27,
     "seg": 6.2,
     "demora": -0.7,
     "giro": 1.6
    },
    {
     "sku": "32302103",
     "img": "img/secciones/coronas-y-disfraces-20c.webp",
     "izq": 46,
     "arriba": 30,
     "ancho": 50,
     "alto": 26.03,
     "seg": 7.4,
     "demora": -2.9,
     "giro": 2.0
    },
    {
     "sku": "33202113",
     "img": "img/secciones/coronas-y-disfraces-17c.webp",
     "izq": 2,
     "arriba": 47,
     "ancho": 42,
     "alto": 12.36,
     "seg": 8.0,
     "demora": -1.5,
     "giro": 2.2
    }
   ]
  },
  "ahorro": 43,
  "productos": [
   {
    "id": "33202006-corona-de-reina",
    "nombre": "Corona de reina",
    "medida": "5 × 13.5 cm",
    "piezas": null,
    "ahorro": 42,
    "desc": "Mide 5 × 13.5 cm. Color dorado. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "33202006",
      "color": "Dorado",
      "regular": 6.5,
      "preventa": 3.75,
      "ahorro": 42,
      "img": "img/productos/33202006-corona-de-reina.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "33202113-tiara-sencilla",
    "nombre": "Tiara sencilla",
    "medida": "4 × 13 cm",
    "piezas": null,
    "ahorro": 43,
    "desc": "Mide 4 × 13 cm. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "33202113",
      "color": "",
      "regular": 1.75,
      "preventa": 1.0,
      "ahorro": 43,
      "img": "img/productos/33202113-tiara-sencilla.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "323007-peluca-lisa-larga",
    "nombre": "Peluca lisa larga",
    "medida": null,
    "piezas": null,
    "ahorro": 29,
    "desc": "Disponible en 3 colores: café, blanco y negro. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "323007",
      "color": "Café",
      "regular": 3.5,
      "preventa": 2.5,
      "ahorro": 29,
      "img": "img/productos/323007-peluca-lisa-larga-cafe.webp",
      "llena": false
     },
     {
      "sku": "323007",
      "color": "Blanco",
      "regular": 3.5,
      "preventa": 2.5,
      "ahorro": 29,
      "img": "img/productos/323007-peluca-lisa-larga-blanco.webp",
      "llena": true
     },
     {
      "sku": "323007",
      "color": "Negro",
      "regular": 3.5,
      "preventa": 2.5,
      "ahorro": 29,
      "img": "img/productos/323007-peluca-lisa-larga-negro.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "32302103-alas-de-angel-grande-blanca",
    "nombre": "Alas de ángel grande blanca",
    "medida": "60 × 45 cm",
    "piezas": null,
    "ahorro": 39,
    "desc": "Mide 60 × 45 cm. Color blanco. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "32302103",
      "color": "Blanco",
      "regular": 4.5,
      "preventa": 2.75,
      "ahorro": 39,
      "img": "img/productos/32302103-alas-de-angel-grande-blanca.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "312017-sombrero-tipo-vaquero-terciopelo-adulto",
    "nombre": "Sombrero tipo vaquero terciopelo adulto",
    "medida": "38 × 35 cm",
    "piezas": null,
    "ahorro": 40,
    "desc": "Mide 38 × 35 cm. Disponible en 5 colores: azul, naranja, rosado, café oscuro y negro. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "312017",
      "color": "Azul",
      "regular": 3.0,
      "preventa": 1.8,
      "ahorro": 40,
      "img": "img/productos/312017-sombrero-tipo-vaquero-terciopelo-adulto.webp",
      "llena": true
     },
     {
      "sku": "312017",
      "color": "Naranja",
      "regular": 3.0,
      "preventa": 1.8,
      "ahorro": 40,
      "img": "img/productos/312017-sombrero-tipo-vaquero-terciopelo-adulto.webp",
      "llena": true
     },
     {
      "sku": "312017",
      "color": "Rosado",
      "regular": 3.0,
      "preventa": 1.8,
      "ahorro": 40,
      "img": "img/productos/312017-sombrero-tipo-vaquero-terciopelo-adulto.webp",
      "llena": true
     },
     {
      "sku": "312017",
      "color": "Café oscuro",
      "regular": 3.0,
      "preventa": 1.8,
      "ahorro": 40,
      "img": "img/productos/312017-sombrero-tipo-vaquero-terciopelo-adulto.webp",
      "llena": true
     },
     {
      "sku": "312017",
      "color": "Negro",
      "regular": 3.0,
      "preventa": 1.8,
      "ahorro": 40,
      "img": "img/productos/312017-sombrero-tipo-vaquero-terciopelo-adulto.webp",
      "llena": true
     }
    ]
   }
  ]
 },
 {
  "id": "juguetes",
  "nombre": "Juguetes",
  "portada": {
   "img": "img/secciones/fondo-juguetes.webp",
   "fondo": "#F0A23B",
   "hondo": "#A8431C",
   "texto": "Los de siempre, para piñatas, bolsitas y el recreo.",
   "piezas": [
    {
     "sku": "43102900",
     "img": "img/secciones/juguetes-19a.webp",
     "izq": 4,
     "arriba": 5,
     "ancho": 54,
     "alto": 31.51,
     "seg": 6.2,
     "demora": -0.7,
     "giro": 3.0
    },
    {
     "sku": "43104200",
     "img": "img/secciones/juguetes-19b.webp",
     "izq": 50,
     "arriba": 30,
     "ancho": 40,
     "alto": 24.67,
     "seg": 8.0,
     "demora": -1.5,
     "giro": 2.2
    }
   ]
  },
  "ahorro": 50,
  "productos": [
   {
    "id": "43102200-triki-traka-grande",
    "nombre": "Triki traka grande",
    "medida": null,
    "piezas": null,
    "ahorro": 43,
    "desc": "Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "43102200",
      "color": "Multicolor",
      "regular": 0.35,
      "preventa": 0.2,
      "ahorro": 43,
      "img": "img/productos/43102200-triki-traka-grande.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "43104700-mini-triki-traka",
    "nombre": "Mini triki traka",
    "medida": null,
    "piezas": null,
    "ahorro": 50,
    "desc": "Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "43104700",
      "color": "Multicolor",
      "regular": 0.2,
      "preventa": 0.1,
      "ahorro": 50,
      "img": "img/productos/43104700-mini-triki-traka.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "43102900-cometa-arcoiris",
    "nombre": "Cometa arcoíris",
    "medida": "110 cm",
    "piezas": null,
    "ahorro": 35,
    "desc": "Mide 110 cm. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "43102900",
      "color": "",
      "regular": 2.0,
      "preventa": 1.3,
      "ahorro": 35,
      "img": "img/productos/43102900-cometa-arcoiris.webp",
      "llena": false
     }
    ]
   },
   {
    "id": "43104200-helicoptero-led-tres-componentes",
    "nombre": "Helicóptero LED tres componentes",
    "medida": null,
    "piezas": null,
    "ahorro": 33,
    "desc": "Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "43104200",
      "color": "Multicolor",
      "regular": 0.3,
      "preventa": 0.2,
      "ahorro": 33,
      "img": "img/productos/43104200-helicoptero-led-tres-componentes.webp",
      "llena": false
     }
    ]
   }
  ]
 },
 {
  "id": "detalles-y-manualidades",
  "nombre": "Detalles y manualidades",
  "portada": {
   "img": "img/secciones/fondo-detalles-y-manualidades.webp",
   "fondo": "#3FA3B5",
   "hondo": "#11465A",
   "texto": "Pétalos, velas, limpiapipas y bolsas para envolver.",
   "piezas": [
    {
     "sku": "51318106",
     "img": "img/secciones/detalles-y-manualidades-20b.webp",
     "izq": 56,
     "arriba": 6,
     "ancho": 34,
     "alto": 46.02,
     "seg": 6.6,
     "demora": -0.7,
     "giro": 2.0
    },
    {
     "sku": "51306500",
     "img": "img/secciones/detalles-y-manualidades-12a.webp",
     "izq": 6,
     "arriba": 16,
     "ancho": 50,
     "alto": 34.41,
     "seg": 8.0,
     "demora": -1.5,
     "giro": 1.6
    }
   ]
  },
  "ahorro": 50,
  "productos": [
   {
    "id": "51306500-petalos-de-flores-multicolor",
    "nombre": "Pétalos de flores multicolor",
    "medida": null,
    "piezas": null,
    "ahorro": 50,
    "desc": "Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "51306500",
      "color": "",
      "regular": 0.3,
      "preventa": 0.15,
      "ahorro": 50,
      "img": "img/productos/51306500-petalos-de-flores-multicolor.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "51318024-petalos-saturno",
    "nombre": "Pétalos saturno",
    "medida": null,
    "piezas": null,
    "ahorro": 43,
    "desc": "Disponible en 2 colores: dorado y plateado. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "51318024",
      "color": "Dorado",
      "regular": 0.35,
      "preventa": 0.2,
      "ahorro": 43,
      "img": "img/productos/51318024-petalos-saturno-dorado.webp",
      "llena": true
     },
     {
      "sku": "51318024",
      "color": "Plateado",
      "regular": 0.35,
      "preventa": 0.2,
      "ahorro": 43,
      "img": "img/productos/51318024-petalos-saturno-plateado.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "42100700-velas-religiosas-led",
    "nombre": "Velas religiosas LED",
    "medida": null,
    "piezas": null,
    "ahorro": 45,
    "desc": "Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "42100700",
      "color": "",
      "regular": 0.55,
      "preventa": 0.3,
      "ahorro": 45,
      "img": "img/productos/42100700-velas-religiosas-led.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "211006-ciento-de-limpiapipas",
    "nombre": "Ciento de limpiapipas",
    "medida": null,
    "piezas": null,
    "ahorro": 32,
    "desc": "Disponible en 7 colores: amarillo mostaza, verde oscuro, verde claro, café oscuro, blanco, celeste y negro. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "211006",
      "color": "Amarillo mostaza",
      "regular": 1.25,
      "preventa": 0.85,
      "ahorro": 32,
      "img": "img/productos/211006-ciento-de-limpiapipas.webp",
      "llena": true
     },
     {
      "sku": "211006",
      "color": "Verde oscuro",
      "regular": 1.25,
      "preventa": 0.85,
      "ahorro": 32,
      "img": "img/productos/211006-ciento-de-limpiapipas.webp",
      "llena": true
     },
     {
      "sku": "211006",
      "color": "Verde claro",
      "regular": 1.25,
      "preventa": 0.85,
      "ahorro": 32,
      "img": "img/productos/211006-ciento-de-limpiapipas.webp",
      "llena": true
     },
     {
      "sku": "211006",
      "color": "Café oscuro",
      "regular": 1.25,
      "preventa": 0.85,
      "ahorro": 32,
      "img": "img/productos/211006-ciento-de-limpiapipas.webp",
      "llena": true
     },
     {
      "sku": "211006",
      "color": "Blanco",
      "regular": 1.25,
      "preventa": 0.85,
      "ahorro": 32,
      "img": "img/productos/211006-ciento-de-limpiapipas.webp",
      "llena": true
     },
     {
      "sku": "211006",
      "color": "Celeste",
      "regular": 1.25,
      "preventa": 0.85,
      "ahorro": 32,
      "img": "img/productos/211006-ciento-de-limpiapipas.webp",
      "llena": true
     },
     {
      "sku": "211006",
      "color": "Negro",
      "regular": 1.25,
      "preventa": 0.85,
      "ahorro": 32,
      "img": "img/productos/211006-ciento-de-limpiapipas.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "51318106-porta-tarjetas-metalico-de-formas",
    "nombre": "Porta tarjetas metálico de formas",
    "medida": null,
    "piezas": null,
    "ahorro": 47,
    "desc": "Color dorado. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "51318106",
      "color": "Dorado",
      "regular": 1.5,
      "preventa": 0.8,
      "ahorro": 47,
      "img": "img/productos/51318106-porta-tarjetas-metalico-de-formas.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "22200822-bolsa-de-papel-celofan-para-taza",
    "nombre": "Bolsa de papel celofán para taza",
    "medida": "18 × 25 cm",
    "piezas": null,
    "ahorro": 39,
    "desc": "Mide 18 × 25 cm. Color rojo. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "22200822",
      "color": "Rojo",
      "regular": 1.8,
      "preventa": 1.1,
      "ahorro": 39,
      "img": "img/productos/22200822-bolsa-de-papel-celofan-para-taza.webp",
      "llena": true
     }
    ]
   },
   {
    "id": "22200522-bolsa-de-papel-celofan-para-taza",
    "nombre": "Bolsa de papel celofán para taza",
    "medida": "20 × 30 cm",
    "piezas": null,
    "ahorro": 25,
    "desc": "Mide 20 × 30 cm. Color rojo. Precio de preventa por unidad.",
    "variantes": [
     {
      "sku": "22200522",
      "color": "Rojo",
      "regular": 2.0,
      "preventa": 1.5,
      "ahorro": 25,
      "img": "img/productos/22200522-bolsa-de-papel-celofan-para-taza.webp",
      "llena": true
     }
    ]
   }
  ]
 }
];
