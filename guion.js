/* ════════════════════════════════════════════════════════════════
   Almacén Hawaii — Catálogo de Preventa de Septiembre 2026

   Misma maqueta que el catálogo navideño (04-vitrina), sin lo navideño.
   Los datos vienen de datos.js, que lo escribe catalogo/septiembre.py
   a partir del PDF de marketing. Acá solo se arman las páginas, se
   mueve el libro y se lleva la cuenta del pedido.
   ════════════════════════════════════════════════════════════════ */

'use strict';

const TIENDA = {
  nombre:     'Almacén Hawaii',
  whatsapp:   '50379516056',            // el número tal como lo quiere wa.me
  telVisible: '+503 7951-6056',
  // En renglones, para que el corte de línea no caiga a mitad de
  // "Edificio Byssa". Son dos direcciones distintas y van separadas: la
  // tienda es donde se retira y se paga; el centro de distribución, no.
  direccion:  ['Pasaje Montalvo', 'Edificio Byssa, Local #7'],
  ciudad:     'Centro Histórico, San Salvador',
  // Todo en un renglón por línea: el nombre y la dirección se muestran
  // igual de destacados, que es como el cliente los necesita para llegar.
  bodega:       ['Don Rua', 'Edificio Moreno', '5 Avenida Nte. 1135', 'San Salvador'],
  // Cómo llegar. Son dos cosas distintas a propósito:
  //
  //   mapsTienda / mapsBodega  Los enlaces que compartió la tienda desde
  //     su propia ficha de Google. Caen en el punto exacto, sin que
  //     ningún buscador tenga que adivinar.
  //
  //   wazeTienda / wazeBodega  Waze no entiende un enlace de Google, así
  //     que va con la dirección escrita y la busca. Para que caiga
  //     exacto haría falta la coordenada; mientras tanto, la dirección
  //     con ciudad y país es lo más fiable.
  mapsTienda: 'https://share.google/QvlfcP4zYmuUkCU0i',
  mapsBodega: 'https://share.google/BGDx38qoRTvQgeZKC',
  wazeTienda: 'Pasaje Montalvo, Edificio Byssa Local 7, Centro Histórico, San Salvador, El Salvador',
  wazeBodega: 'Edificio Moreno, 5a Avenida Norte 1135, San Salvador, El Salvador',
  temporada:  'Preventa de Septiembre 2026',
  limite:     '5 de octubre de 2026',   // la reserva vale hasta este día
  coleccion:  'Nuevo producto',           // el título que va debajo de "Colección"
};

/* Las condiciones de la preventa, copiadas tal cual de la última hoja
   del PDF de marketing. La página 2 lleva esto y nada más: sin rótulo
   ni recuadro de instrucciones (lo pidió Fernando). */
const CONDICIONES = [
  ['Respecto a la reserva', [
    'Monto mínimo de compra de $100',
    'Reserva de pedido válida hasta el 5 de octubre',
  ]],
  ['Respecto al pago', [
    'Pago contra entrega',
    'Medios de pago autorizados: Transferencias y efectivo',
    'No válido pago con tarjeta',
  ]],
  ['Para la entrega del pedido', [
    'Retiro puede ser en tienda o en centro de distribución Don Rua',
    'Disponible entrega a domicilio',
  ]],
];

const LLAVE = 'hawaii-pedido-septiembre-2026';     // dónde se guarda el pedido en el navegador

/* ── Utilerías ───────────────────────────────────────────────── */

const $  = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

const esc = s => String(s ?? '').replace(/[&<>"']/g,
  c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const money = n => '$' + Number(n).toFixed(2);

const sinTildes = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

/* ── El color en el chip ─────────────────────────────────────────
   El Excel nombra los colores en español y a veces junta varios con
   guion: "ROJO-VERDE-DORADO". Cada parte se busca en la tabla y si
   son varias se arma una rueda con los tonos, sin degradado suave:
   se quieren ver los colores que trae, no una mezcla. */

const TONOS = {
  'amarillo':           '#F2C230',
  'amarillo mostaza':   '#C9A233',
  'azul':               '#2E5F9E',
  'cafe':               '#7A4A2E',
  'cafe oscuro':        '#4A2D1C',
  'celeste':            '#8CC7E8',
  'fucsia':             '#E5197B',   // el color del producto, no el de la marca
  'melocoton':          '#F4B08A',
  'morado':             '#7B3F9E',
  'naranja':            '#EE7A2B',
  'negro':              '#222222',
  'perla':              '#F1EADB',
  'rosado':             '#F2A7C3',
  'rosado intenso':     '#E0508E',
  'verde claro':        '#8CC66B',
  'verde oscuro':       '#1F4D2E',
  'azul rayada':        '#3E74B5',
  'blanco':             '#F5F2EA',
  'blanco tornasol':    '#E9E5F1',
  'champana':           '#E3CFA4',
  'dorado':             '#C9A227',
  'mocha':              '#8A6A50',
  'perlado':            '#EFE7D8',
  'plateado':           '#BFC5CA',
  'rojo':               '#C0392B',
  'rojo felpa':         '#A82D26',
  'rojo oscuro':        '#7C1D22',
  'rosa vintage':       '#CE8296',
  'verde':              '#1E6B45',
  'verde matcha':       '#8AA86A',
  'verde musgo':        '#5B6B3A',
  'verde oscuro felpa': '#123F2B',
};

function tonos(nombreColor) {
  return sinTildes(nombreColor).split(/[-\/]/).map(parte => {
    const p = parte.trim();
    if (TONOS[p]) return TONOS[p];
    // "verde oscuro felpa" no está pero "verde oscuro" sí: se recorta
    // palabra por palabra desde el final hasta encontrar algo conocido.
    const pal = p.split(/\s+/);
    for (let n = pal.length; n > 0; n--) {
      const cand = pal.slice(0, n).join(' ');
      if (TONOS[cand]) return TONOS[cand];
    }
    for (const pa of pal) if (TONOS[pa]) return TONOS[pa];
    return '#C9BFAE';
  });
}

// "Multicolor" no es un tono: se pinta como arcoíris.
const ARCOIRIS = 'conic-gradient(#E5197B, #F2C230, #1E6B45, #2E5F9E, #7B3F9E, #E5197B)';

function fondoColor(nombreColor) {
  if (sinTildes(nombreColor || '') === 'multicolor') return ARCOIRIS;
  const c = tonos(nombreColor);
  if (c.length === 1) return c[0];
  const paso = 100 / c.length;
  const tramos = c.map((h, i) => `${h} ${(i * paso).toFixed(1)}% ${((i + 1) * paso).toFixed(1)}%`);
  return `linear-gradient(135deg, ${tramos.join(', ')})`;
}

/* ── Índice de variantes por código, para los puntos de las escenas ── */

/* Los adornos vienen con la misma forma que un modelo de esfera —con su
   lista de variantes, aunque tengan una sola—, así que de aquí para
   abajo no hay dos tipos de producto: hay modelos. */
const MODELOS = [...CATALOGO, ...SECCIONES.flatMap(s => s.productos)];

const POR_SKU = new Map();
MODELOS.forEach(m => m.variantes.forEach(v => POR_SKU.set(v.sku, { modelo: m, variante: v })));

const POR_ID = new Map(MODELOS.map(m => [m.id, m]));

// El descuento mayor del catálogo, para el sello de la portada. Sale de
// los datos y no escrito a mano: con cada lista nueva cambia.
const AHORRO_MAX = Math.max(...MODELOS.map(m => m.ahorro));

/* ── Piezas de marca ─────────────────────────────────────────── */

const flor = cls => `<svg class="${cls}" viewBox="0 0 230 230" aria-hidden="true"><use href="#flor-completa" width="230" height="230"/></svg>`;

/* ════════════════════════════════════════════════════════════════
   Las páginas
   ════════════════════════════════════════════════════════════════ */


/* Los dos botones de "cómo llegar". Maps y Waze aceptan una dirección
   escrita como búsqueda; no hace falta coordenada. Se abren en la app si
   está instalada y en el navegador si no. */
function comoLlegar(enlaceMaps, direccionWaze) {
  const q = encodeURIComponent(direccionWaze);
  return `<div class="ir-a">
    <a href="${esc(enlaceMaps)}" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>
      Google Maps
    </a>
    <a href="https://waze.com/ul?q=${q}&navigate=yes" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="11" r="7.5"/><path d="M9.5 9.5h.01M14.5 9.5h.01M9 14a4 4 0 0 0 6 0"/><path d="M7 18.5 6 21M17 18.5 18 21"/></svg>
      Waze
    </a>
  </div>`;
}

/* Las tiras de la guía de cerezo cuelgan del borde de arriba, cada una
   con su propio tiempo de vaivén: si todas se mecieran igual parecería un
   carrusel, y con tiempos distintos parece aire. */
function guirnaldaColgante(adornos) {
  const piezas = adornos.map(a => `
    <span class="colgante" style="
      --izq:${a.izq}%; --tam:${a.tam}; --largo:${a.largo};
      --seg:${a.seg}s; --demora:${a.demora}s; --alto:${a.alto}">
      <i class="hilo"></i>
      <img src="${esc(a.img)}" alt="" loading="eager">
    </span>`).join('');
  return `<div class="guirnalda" aria-hidden="true">${piezas}</div>`;
}

/* Septiembre no lleva nieve ni nada que caiga: la portada queda limpia.
   Se deja la función vacía para no tocar el resto de la maqueta. */
const capasNieve = () => '';

/* La foto de ambiente de portada y contraportada, con un velo verde
   encima para que el texto blanco se lea. */
const fotoFondo = (clase = '') => typeof PORTADA_FONDO === 'undefined' ? '' :
  `<div class="portada-foto ${clase}" aria-hidden="true"><img src="${esc(PORTADA_FONDO)}" alt="" loading="eager"></div>`;

/* Los productos que flotan en la portada. Mismo mecanismo que las
   portadas de sección, y se pueden tocar igual. */
function piezasFlotantes(piezas) {
  return (piezas || []).map(x => {
    const par = POR_SKU.get(x.sku);
    return `<button class="flota" data-modelo="${par ? esc(par.modelo.id) : ''}"
      style="left:${x.izq}%; top:${x.arriba}%; width:${x.ancho}%; height:${x.alto}%;
             --seg:${x.seg}s; --demora:${x.demora}s; --giro:${x.giro}deg"
      aria-label="${par ? `Ver ${esc(par.modelo.nombre)}` : ''}">
      <img src="${esc(x.img)}" alt="" loading="eager">
    </button>`;
  }).join('');
}

function pagPortada() {
  return `<div class="pagina portada" data-density="hard"><div class="pagina-interior">
    ${fotoFondo()}
    ${piezasFlotantes(typeof PORTADA_PIEZAS !== 'undefined' ? PORTADA_PIEZAS : [])}
    <div class="portada-centro">
      <p class="antetitulo">${esc(TIENDA.ciudad)}</p>
      <span class="logotipo">Hawaii${flor('flor-grande')}</span>
      <div class="filete"></div>
      <h1>Catálogo de<br><em>Preventa de Septiembre</em><br>Nuevo producto 2026</h1>
      <span class="moneda-ahorro">Hasta ${AHORRO_MAX}% menos</span>
    </div>
    ${capasNieve('frente')}
  </div></div>`;
}

function pagBienvenida(n) {
  const bloques = CONDICIONES.map(([titulo, puntos]) => `
    <div class="condicion">
      <h3>${esc(titulo)}</h3>
      <ul>${puntos.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
    </div>`).join('');

  return `<div class="pagina aviso-pagina"><div class="pagina-interior">
    <div>
      <h2 class="titulo-seccion">Condiciones</h2>
    </div>
    <div class="condiciones">${bloques}</div>
    <div class="numero-pagina">${n}</div>
  </div></div>`;
}

function pagEscena(id, n) {
  const e = ESCENAS[id];
  if (!e) return '';

  // Colgadas: la esfera pende de un hilo y se mece desde donde se ata.
  // Apoyadas: no se mecen —una esfera sobre una mesa no se balancea—,
  // así que van horneadas en la foto y encima solo va el punto.
  const piezas = e.piezas.map(p => {
    const par = POR_SKU.get(p.sku);
    if (!par) return '';
    const { modelo, variante } = par;
    const rotulo = `Ver ${esc(modelo.nombre)}, color ${esc(variante.color)}`;
    const sitio = `left:${p.izq}%;top:${p.top}%;width:${p.ancho}%;height:${p.alto}%`;

    if (e.modo !== 'colgar') {
      return `<button class="punto" data-modelo="${esc(modelo.id)}" data-sku="${esc(p.sku)}"
        style="${sitio};--w:${p.ancho}" aria-label="${rotulo}"></button>`;
    }

    const largo = p.hilo + p.alto;
    return `<span class="colgante-esc" style="
        left:${p.izq}%; top:${p.ata}%; width:${p.ancho}%; height:${largo}%;
        --amp:${p.amp}deg; --seg:${p.seg}s; --demora:${p.demora}s;
        --w:${p.ancho}; --lejos:${p.lejos};
        --sombra:${(0.5 * (1 - p.lejos * 0.55)).toFixed(2)}">
        <i class="hilo-esc" style="height:${(p.hilo / largo * 100).toFixed(2)}%"></i>
        <button class="pieza" data-modelo="${esc(modelo.id)}" data-sku="${esc(p.sku)}"
          style="height:${(p.alto / largo * 100).toFixed(2)}%" aria-label="${rotulo}">
          <img src="${esc(p.img)}" alt="" loading="lazy">
        </button>
      </span>`;
  }).join('');

  const deriva = e.modo === 'colgar' ? '' : ' deriva';

  return `<div class="pagina escena"><div class="pagina-interior">
    <div class="escena-lienzo${deriva}">
      <div class="escena-foto ${e.rotulo === 'arriba' ? 'velo-arriba' : ''}"><img src="${esc(e.img)}" alt="${esc(e.titulo)}" loading="lazy"></div>
      ${piezas}
    </div>
    <div class="escena-pie ${e.rotulo === 'arriba' ? 'arriba' : ''}">
      <h3>${esc(e.titulo)}</h3>
      <p>${esc(e.texto)}</p>
      <span class="pista"><i></i> Tocá los puntos para ver el producto</span>
    </div>
    <div class="numero-pagina">${n}</div>
  </div></div>`;
}

function tarjeta(m, grande) {
  const v = m.variantes[0];
  const chips = m.variantes.slice(0, 7).map(x =>
    `<span class="chip" style="background:${fondoColor(x.color)}" title="${esc(x.color)}"></span>`).join('');
  const mas = m.variantes.length > 7 ? `<span class="mas">+${m.variantes.length - 7}</span>` : '';
  const cuantos = m.variantes.length > 1
    ? `${m.variantes.length} colores` : esc(v.color);

  return `<button class="tarjeta${grande ? ' grande' : ''}" data-modelo="${esc(m.id)}">
    <div class="tarjeta-foto">
      <img src="${esc(v.img)}" alt="${esc(m.nombre)}" loading="lazy">
      <span class="sello">−${m.ahorro}%</span>
    </div>
    <div class="tarjeta-cuerpo">
      <span class="medida">${esc(m.medida || '')}${m.medida && m.piezas ? ' · ' : ''}${m.piezas ? m.piezas + ' pzs' : ''}</span>
      <h3>${esc(m.nombre)}</h3>
      <div class="precio-linea">
        <span class="preventa">${money(v.preventa)}</span>
        <span class="regular">${money(v.regular)}</span>
      </div>
      <div class="chips">${chips}${mas}<span class="mas" style="margin-left:6px">${cuantos}</span></div>
      <span class="ver">Ver y agregar
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>
      </span>
    </div>
  </button>`;
}

/* Los modelos de cinco colores o más llevan página propia: foto grande
   arriba y abajo la paleta completa con el nombre de cada color. Cada
   muestra abre la ficha ya parada en ese color, que es lo que la gente
   quiere cuando ve once tonos del mismo tubo. */
function pagDestacado(m, n) {
  const v = m.variantes[0];
  const paleta = m.variantes.map((x, k) => `
    <button class="tono" data-modelo="${esc(m.id)}" data-sku="${esc(x.sku)}" title="${esc(x.color)}">
      <span class="chip-g" style="background:${fondoColor(x.color)}"></span>
      <small>${esc(x.color)}</small>
    </button>`).join('');

  return `<div class="pagina productos destacada"><div class="pagina-interior">
    <div class="cabecera-seccion">
      <p class="rotulo">${m.variantes.length} colores · −${m.ahorro}%</p>
      <h2 class="titulo-seccion">${esc(m.nombre)}</h2>
    </div>
    <div class="destacado">
      <div class="destacado-foto">
        <img src="${esc(v.img)}" alt="${esc(m.nombre)}" loading="lazy">
        <span class="sello">−${m.ahorro}%</span>
      </div>
      <div class="destacado-cuerpo">
        <div class="destacado-cifras">
          <span class="medida">${esc(m.medida || '')}${m.medida && m.piezas ? ' · ' : ''}${m.piezas ? m.piezas + ' pzs' : ''}</span>
          <div class="precio-linea">
            <span class="preventa">${money(v.preventa)}</span>
            <span class="regular">${money(v.regular)}</span>
          </div>
        </div>
        <p class="destacado-pie">Tocá un color para ver su ficha y agregarlo al pedido.</p>
        <div class="paleta">${paleta}</div>
      </div>
    </div>
    <div class="numero-pagina">${n}</div>
  </div></div>`;
}

/* Las secciones de adornos van en cuadrícula. Son 134 piezas: con la
   maqueta de las esferas —dos por página, con su paleta— harían falta
   casi setenta hojas. De a seis entran en veintitrés. */
function celda(m) {
  const v = m.variantes[0];
  // Los colores, en puntitos junto al precio: que se sepa desde la
  // cuadrícula que la gerbera viene en nueve y no hay que abrirla para eso.
  const cs = m.variantes.filter(x => x.color);
  const puntos = cs.length > 1
    ? `<span class="celda-color">${cs.slice(0, 4).map(x =>
        `<i style="background:${fondoColor(x.color)}"></i>`).join('')}${cs.length > 4 ? `<small>+${cs.length - 4}</small>` : ''}</span>`
    : '';
  return `<button class="celda" data-modelo="${esc(m.id)}">
    <span class="celda-foto">
      <img src="${esc(v.img)}" alt="${esc(m.nombre)}" loading="lazy"${v.llena ? ' class="llena"' : ''}>
      <span class="sello">−${m.ahorro}%</span>
    </span>
    <span class="celda-nombre">${esc(m.nombre)}</span>
    <span class="celda-precio">
      <b>${money(v.preventa)}</b><s>${money(v.regular)}</s>${puntos}
    </span>
  </button>`;
}

/* La portada de cada sección: una foto de ambiente con dos o tres piezas
   reales encima, meciéndose cada una a su tiempo. Sirve para dos cosas a
   la vez —dividir el catálogo y mostrar el producto en su ambiente— y
   las piezas se pueden tocar como cualquier otra. */
function pagSeccion(seccion, n) {
  const p = seccion.portada;
  const desde = Math.min(...seccion.productos.map(x => x.variantes[0].preventa));

  const piezas = (p.piezas || []).map(x => {
    const par = POR_SKU.get(x.sku);
    const rotulo = par ? `Ver ${esc(par.modelo.nombre)}` : '';
    return `<button class="flota" data-modelo="${par ? esc(par.modelo.id) : ''}"
      style="left:${x.izq}%; top:${x.arriba}%; width:${x.ancho}%; height:${x.alto}%;
             --seg:${x.seg}s; --demora:${x.demora}s; --giro:${x.giro}deg"
      aria-label="${rotulo}">
      <img src="${esc(x.img)}" alt="" loading="lazy">
    </button>`;
  }).join('');

  return `<div class="pagina seccion"><div class="pagina-interior">
    <div class="seccion-lienzo">
      ${p.img
        ? `<div class="seccion-foto"><img src="${esc(p.img)}" alt="" loading="lazy"></div>`
        : `<div class="seccion-foto lisa" style="--fondo:${p.fondo};--hondo:${p.hondo}"></div>`}
      ${piezas}
    </div>
    <div class="seccion-rotulo">
      <p class="rotulo">${seccion.productos.length} artículos · desde ${money(desde)}</p>
      <h2>${esc(seccion.nombre)}</h2>
      <p class="seccion-texto">${esc(p.texto)}</p>
    </div>
    <div class="numero-pagina">${n}</div>
  </div></div>`;
}

function pagCuadricula(seccion, piezas, n, cual, cuantas) {
  return `<div class="pagina productos"><div class="pagina-interior">
    <div class="cabecera-seccion">
      <p class="rotulo">${esc(seccion.nombre)}${cuantas > 1 ? ` · ${cual} de ${cuantas}` : ''}</p>
      <h2 class="titulo-seccion">${esc(TIENDA.coleccion)}</h2>
    </div>
    <div class="cuadricula">${piezas.map(celda).join('')}</div>
    <div class="numero-pagina">${n}</div>
  </div></div>`;
}

function pagProductos(modelos, rotulo, n) {
  const solo = modelos.length === 1;
  return `<div class="pagina productos"><div class="pagina-interior">
    <div class="cabecera-seccion">
      <p class="rotulo">${esc(rotulo)}</p>
      <h2 class="titulo-seccion">${solo ? esc(modelos[0].nombre) : esc(TIENDA.coleccion)}</h2>
    </div>
    <div class="ficha-lista ${solo ? 'solo' : 'dupla'}">
      ${modelos.map(m => tarjeta(m, solo)).join('')}
    </div>
    <div class="numero-pagina">${n}</div>
  </div></div>`;
}

function pagContra() {
  return `<div class="pagina contra" data-density="hard"><div class="pagina-interior">
    ${capasNieve()}
    ${guirnaldaColgante(ADORNOS_CONTRA)}
    ${fotoFondo('contra')}
    <div class="resplandor" aria-hidden="true"></div>

    <div class="portada-centro">
      <span class="logotipo" style="font-size:clamp(30px,10cqw,64px)">Hawaii${flor('flor-grande')}</span>
      <div class="filete"></div>
      <div class="dato">
        <span>Pedidos</span>
        <b>${esc(TIENDA.telVisible)}</b>
        <small>WhatsApp · escribinos con tu pedido armado</small>
      </div>
      <div class="dato">
        <span>La tienda</span>
        <b>${TIENDA.direccion.map(esc).join('<br>')}</b>
        <small>${esc(TIENDA.ciudad)}</small>
        ${comoLlegar(TIENDA.mapsTienda, TIENDA.wazeTienda)}
      </div>
      <div class="dato">
        <span>Centro de distribución</span>
        <b>${TIENDA.bodega.map(esc).join('<br>')}</b>
        ${comoLlegar(TIENDA.mapsBodega, TIENDA.wazeBodega)}
      </div>
    </div>
    ${capasNieve('frente')}
  </div></div>`;
}

/* ── El orden del catálogo ───────────────────────────────────────
   Los modelos con cinco colores o más van solos a una página: con
   once colores, meterlos en media hoja obliga a achicar la foto
   hasta que no se distingue el producto. El resto va de a dos, y
   cada tres páginas entra una escena para cortar el ritmo. */

function armarPaginas() {
  const grandes = CATALOGO.filter(m => m.variantes.length >= 5);
  const resto   = CATALOGO.filter(m => m.variantes.length < 5);

  const duplas = [];
  for (let i = 0; i < resto.length; i += 2) duplas.push(resto.slice(i, i + 2));

  const ambientes = Object.keys(ESCENAS);
  const html = [];
  const indice = [];
  let n = 0;

  const meter = h => { html.push(h); n++; };
  // El índice guarda dónde empieza cada sección, no cada página.
  const marcar = (nombre, cuantos) => indice.push({ n, nombre, cuantos });

  meter(pagPortada());
  meter(pagBienvenida(n + 1));
  // En septiembre no hay esferas: CATALOGO viene vacío y todo va por secciones.
  if (CATALOGO.length) marcar('Esferas y bolitas', CATALOGO.reduce((a, m) => a + m.variantes.length, 0));

  let d = 0, g = 0;
  ambientes.forEach((amb, i) => {
    meter(pagEscena(amb, n + 1));
    if (i === ambientes.length - 1) return;          // la última escena cierra
    for (let k = 0; k < 2 && d < duplas.length; k++, d++) {
      meter(pagProductos(duplas[d], 'Colección', n + 1));
    }
    if (g < grandes.length) {
      meter(pagDestacado(grandes[g], n + 1));
      g++;
    }
  });

  // Lo que haya quedado fuera del reparto entra antes de la contraportada.
  while (d < duplas.length) { meter(pagProductos(duplas[d], 'Colección', n + 1)); d++; }
  while (g < grandes.length) { meter(pagDestacado(grandes[g], n + 1)); g++; }

  // Las secciones de adornos, en cuadrícula de seis.
  const POR_HOJA = 6;
  SECCIONES.forEach(sec => {
    marcar(sec.nombre, sec.productos.length);
    if (sec.portada) meter(pagSeccion(sec, n + 1));
    const hojas = Math.ceil(sec.productos.length / POR_HOJA);
    for (let h = 0; h < hojas; h++) {
      meter(pagCuadricula(sec, sec.productos.slice(h * POR_HOJA, (h + 1) * POR_HOJA),
                          n + 1, h + 1, hojas));
    }
  });

  marcar('Contacto', 0);
  meter(pagContra());
  return { html, indice };
}

/* ════════════════════════════════════════════════════════════════
   El libro
   ════════════════════════════════════════════════════════════════ */

const libroEl = $('#libro');
const { html: PAGINAS, indice: INDICE } = armarPaginas();
libroEl.innerHTML = PAGINAS.join('');
$('#cargando').hidden = true;

let libro = null;
const RATIO = 1.414;

function medidas() {
  const caja = $('.libro-caja');
  const W = caja.clientWidth || window.innerWidth;
  const H = caja.clientHeight || window.innerHeight;
  const doble = window.innerWidth >= 860;
  const ancho = Math.max(240, Math.floor(Math.min(W, (H / RATIO) * (doble ? 2 : 1))));
  return { ancho, alto: Math.floor((doble ? ancho / 2 : ancho) * RATIO), doble };
}

let ultimoAncho = 0;

function ajustar(forzar) {
  const { ancho } = medidas();
  if (!forzar && ancho === ultimoAncho) return;
  ultimoAncho = ancho;
  libroEl.style.width = ancho + 'px';
  if (libro) { try { libro.update(); } catch (_) {} }
}

function iniciarLibro() {
  if (typeof St === 'undefined' || !St.PageFlip) throw new Error('sin librería');
  const { ancho, doble } = medidas();
  libroEl.style.width = ancho + 'px';

  libro = new St.PageFlip(libroEl, {
    width: 500,
    height: Math.round(500 * RATIO),
    size: 'stretch',
    minWidth: 240, maxWidth: 900,
    minHeight: 340, maxHeight: 1280,
    showCover: true,
    usePortrait: true,
    drawShadow: true,
    flippingTime: 750,
    maxShadowOpacity: 0.45,
    mobileScrollSupport: false,
    // Tiene que quedar en false, aunque suene al revés: `flipPrev()`
    // pasa por el mismo filtro que el clic y, en modo de una sola
    // página, su punto no se reconoce como esquina —la librería le
    // olvida sumar el desplazamiento del libro—. Con el filtro puesto,
    // se podía avanzar pero nunca retroceder con animación.
    //
    // Que los clics sobre productos no pasen hoja se resuelve más
    // abajo, atajando el mousedown en fase de captura.
    disableFlipByClick: false,
    swipeDistance: 30,
  });

  libro.loadFromHTML(document.querySelectorAll('.pagina'));
  libro.on('flip', () => { ultimoPase = Date.now(); pintarAvance(); });
  libro.on('changeOrientation', () => setTimeout(pintarAvance, 60));
  pintarAvance();
}

/* Las fotos van con carga diferida, y una página oculta no baja las
   suyas: al llegar a ella se ven los huecos un instante. Así que al
   pasar de hoja se marcan como urgentes las de las páginas vecinas,
   que bajan aunque estén ocultas. Con 196 imágenes, bajarlas todas de
   entrada serían cinco megas antes de ver la portada. */
function adelantarFotos(i) {
  const hojas = $$('.pagina');
  for (let k = i - 1; k <= i + 2; k++) {
    const hoja = hojas[k];
    if (!hoja) continue;
    hoja.querySelectorAll('img[loading="lazy"]').forEach(img => {
      img.loading = 'eager';
    });
  }
}

function pintarAvance() {
  const total = libro ? libro.getPageCount() : PAGINAS.length;
  const i = libro ? libro.getCurrentPageIndex() : 0;
  $('#folio').textContent = `${i + 1} / ${total}`;
  adelantarFotos(i);
  $('.regleta i').style.width = ((i + 1) / total * 100) + '%';
  $('#anterior').disabled = i <= 0;
  $('#siguiente').disabled = i >= total - 1;

  // Se resalta la última sección que ya empezó.
  let aqui = -1;
  INDICE.forEach((x, k) => { if (x.n <= i) aqui = k; });
  $$('#indice-lista button').forEach((b, k) => b.classList.toggle('aqui', k === aqui));
}

function irA(n) {
  if (libro) {
    try {
      // Saltar de categoría son treinta hojas: animarlas no aporta nada y
      // encima falla si el libro todavía no asentó. Cerca, se pasa la
      // hoja con su animación; lejos, se va directo.
      const salto = Math.abs(n - libro.getCurrentPageIndex());
      if (salto > 2) libro.turnToPage(n); else libro.flip(n);
      ultimoPase = Date.now();
      pintarAvance();
      return;
    } catch (_) {}
  }
  const p = $$('.pagina')[n];
  if (p) p.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

try {
  iniciarLibro();
} catch (e) {
  // Sin la librería el catálogo sigue sirviendo: las páginas se
  // apilan y se bajan con el dedo. Es peor, pero funciona.
  console.warn('El flipbook no cargó, se muestra apilado:', e.message);
  document.body.classList.add('sin-libreria');
}

/* ── Pasar hoja con la rueda y con el dedo ────────────────────────
   Un pase por gesto, en los dos sentidos. Hay dos cosas que cuidar:

   · El trackpad no manda un evento por gesto sino una lluvia de
     eventos chiquitos, así que no se puede pasar hoja con cada uno.
     Se van sumando hasta llegar a un umbral, y la suma se borra
     cuando el usuario levanta los dedos.

   · Después de pasar hay que quedarse quieto mientras dura la
     animación, o el envión del trackpad se lleva cuatro hojas de
     corrido. El candado también se pone cuando la hoja la pasa la
     librería —arrastrando la esquina o deslizando—, para que un
     mismo gesto no cuente dos veces. */

const UMBRAL_RUEDA = 55;   // cuánto hay que girar para que pase una hoja
const ESPERA       = 900;  // ms de candado, un poco más que la animación

let ultimoPase = 0;
let envion = 0;
let borraEnvion;

/* La hoja tiene que estar quieta. Si llega un gesto a mitad de la
   animación, la librería la corta por lo sano y el libro salta de a dos
   hojas o para el lado contrario. El cronómetro solo no alcanza: lo que
   manda es el estado real. */
function enReposo() {
  try { return libro.getFlipController().getState() === 'read'; }
  catch (_) { return true; }
}

function pasar(haciaAdelante) {
  if (!libro || !enReposo()) return false;
  const ahora = Date.now();
  if (ahora - ultimoPase < ESPERA) return false;
  const i = libro.getCurrentPageIndex();
  if (haciaAdelante ? i >= libro.getPageCount() - 1 : i <= 0) return false;
  ultimoPase = ahora;
  if (haciaAdelante) libro.flipNext(); else libro.flipPrev();
  return true;
}

const ocupado = () => $$('.telon:not([hidden])').length > 0;

$('.escenario').addEventListener('wheel', e => {
  // Sin librería las páginas se apilan y el scroll de siempre sirve.
  if (!libro || ocupado()) return;
  e.preventDefault();

  const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
  if (Math.sign(delta) !== Math.sign(envion)) envion = 0;   // cambió de sentido
  envion += delta;

  clearTimeout(borraEnvion);
  borraEnvion = setTimeout(() => { envion = 0; }, 220);

  if (Math.abs(envion) >= UMBRAL_RUEDA && pasar(envion > 0)) envion = 0;
}, { passive: false });

/* En teléfono el equivalente de la rueda es deslizar de arriba abajo.
   El deslizamiento horizontal se lo deja a la librería, que ya lo usa
   para agarrar la hoja de la esquina. */
let toqueX = 0, toqueY = 0, toqueT = 0;

$('.escenario').addEventListener('touchstart', e => {
  if (e.touches.length !== 1) return;
  toqueX = e.touches[0].clientX;
  toqueY = e.touches[0].clientY;
  toqueT = Date.now();
}, { passive: true });

$('.escenario').addEventListener('touchend', e => {
  if (!libro || ocupado() || !e.changedTouches.length) return;
  if (Date.now() - toqueT > 700) return;                 // fue un arrastre lento
  const dx = e.changedTouches[0].clientX - toqueX;
  const dy = e.changedTouches[0].clientY - toqueY;
  if (Math.abs(dy) < 55 || Math.abs(dy) < Math.abs(dx) * 1.6) return;
  pasar(dy < 0);                                          // hacia arriba, avanza
}, { passive: true });

$('#anterior').addEventListener('click', () => libro ? libro.flipPrev() : irA(0));
$('#siguiente').addEventListener('click', () => libro ? libro.flipNext() : null);
/* El libro se remide cuando cambia el espacio disponible. No alcanza con
   escuchar `resize` de la ventana: no siempre llega —el panel puede
   cambiar de tamaño sin que la ventana lo haga, y en un teléfono la
   barra del navegador aparece y desaparece sin avisar—. El observador
   mira la caja misma, que es lo que de verdad importa. */
const remedir = () => { clearTimeout(ajustar._t); ajustar._t = setTimeout(ajustar, 160); };
addEventListener('resize', remedir);
addEventListener('orientationchange', remedir);
if (window.ResizeObserver) new ResizeObserver(remedir).observe($('.libro-caja'));

document.addEventListener('keydown', e => {
  if ($$('.telon:not([hidden])').length) {
    if (e.key === 'Escape') cerrarTodo();
    return;
  }
  if (e.key === 'ArrowRight' && libro) libro.flipNext();
  if (e.key === 'ArrowLeft'  && libro) libro.flipPrev();
});

/* ── Índice de secciones ──────────────────────────────────────────
   No lista páginas sino secciones: con 180 productos repartidos en
   treinta y nueve hojas, un listado plano no ayuda a nadie a encontrar
   una malla. */

$('#indice-lista').innerHTML = INDICE.map(x => `
  <li><button data-n="${x.n}">
    <span>${esc(x.nombre)}</span>
    ${x.cuantos ? `<i>${x.cuantos}</i>` : ''}
  </button></li>`).join('');

$('#indice-lista').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  cerrarTodo();
  irA(Number(b.dataset.n));
});

$('#abrir-indice').addEventListener('click', () => abrir('indice'));


/* ════════════════════════════════════════════════════════════════
   Ficha del producto
   ════════════════════════════════════════════════════════════════ */

let fichaActual = null;   // { modelo, i }

function abrirFicha(idModelo, sku) {
  const m = POR_ID.get(idModelo);
  if (!m) return;
  const i = Math.max(0, sku ? m.variantes.findIndex(v => v.sku === sku) : 0);
  fichaActual = { modelo: m, i };

  $('#ficha-nombre').textContent = m.nombre;
  $('#ficha-desc').textContent = m.desc || '';
  $('#ficha-desc').hidden = !m.desc;

  const specs = [];
  if (m.medida) specs.push(['Tamaño', m.medida]);
  if (m.piezas) specs.push(['Piezas', m.piezas]);
  // "Colores: 1" no informa nada; solo se muestra si de verdad hay varios.
  if (m.variantes.length > 1) specs.push(['Colores', m.variantes.length]);
  $('#ficha-specs').innerHTML = specs.map(([k, v]) =>
    `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');

  $('#campo-color').hidden = m.variantes.length < 2;
  $('#ficha-colores').innerHTML = m.variantes.map((v, k) =>
    `<button class="muestra" role="radio" data-k="${k}" aria-checked="${k === i}"
       title="${esc(v.color)}" aria-label="${esc(v.color)}"
     ><span style="background:${fondoColor(v.color)}"></span></button>`).join('');

  $('#ficha-cantidad').value = 1;
  pintarVariante();
  abrir('ficha');
}

function pintarVariante() {
  const { modelo, i } = fichaActual;
  const v = modelo.variantes[i];
  $('#ficha-img').src = v.img;
  $('#ficha-img').alt = `${modelo.nombre} — ${v.color}`;
  $('#ficha-sku').textContent = `Código ${v.sku}`;
  $('#ficha-regular').textContent = money(v.regular);
  $('#ficha-preventa').textContent = money(v.preventa);
  $('#ficha-ahorro').textContent = `Ahorrás ${money(v.regular - v.preventa)}`;
  $('#ficha-sello').textContent = `−${v.ahorro}%`;
  $('#color-elegido').textContent = modelo.variantes.length > 1 ? `· ${v.color}` : '';
  $$('#ficha-colores .muestra').forEach(b =>
    b.setAttribute('aria-checked', String(Number(b.dataset.k) === i)));
}

$('#ficha-colores').addEventListener('click', e => {
  const b = e.target.closest('.muestra');
  if (!b) return;
  fichaActual.i = Number(b.dataset.k);
  pintarVariante();
});

$$('[data-cant]').forEach(b => b.addEventListener('click', () => {
  const inp = $('#ficha-cantidad');
  inp.value = Math.min(99, Math.max(1, (Number(inp.value) || 1) + Number(b.dataset.cant)));
}));

$('#agregar').addEventListener('click', () => {
  const { modelo, i } = fichaActual;
  const v = modelo.variantes[i];
  const cant = Math.min(99, Math.max(1, Number($('#ficha-cantidad').value) || 1));
  agregar(modelo, v, cant);
  cerrarTodo();
  brindis(`${cant} × ${modelo.nombre}${v.color ? ` (${v.color})` : ''} al pedido`);
});

/* Los clics de producto: en las tarjetas y en los puntos de las escenas.
   Se atajan en fase de captura y se corta la propagación, para que el
   libro no interprete el toque como un intento de pasar la hoja. */
libroEl.addEventListener('click', e => {
  const destino = e.target.closest('.tarjeta, .celda, .punto, .tono, .pieza, .flota');
  if (!destino) return;
  e.preventDefault();
  e.stopPropagation();
  abrirFicha(destino.dataset.modelo, destino.dataset.sku);
}, true);

['mousedown', 'mouseup', 'touchstart', 'touchend', 'pointerdown'].forEach(ev =>
  libroEl.addEventListener(ev, e => {
    if (e.target.closest('.tarjeta, .celda, .punto, .tono, .pieza, .flota')) e.stopPropagation();
  }, true));

/* ════════════════════════════════════════════════════════════════
   El pedido
   ════════════════════════════════════════════════════════════════ */

let pedido = [];
try { pedido = JSON.parse(localStorage.getItem(LLAVE)) || []; } catch (_) { pedido = []; }

function guardar() {
  try { localStorage.setItem(LLAVE, JSON.stringify(pedido)); } catch (_) {}
}

/* En esta lista un mismo código trae varios colores (la gerbera es un
   solo código en nueve colores), así que el renglón del pedido se
   distingue por código y color, no solo por código. */
const claveDe = v => `${v.sku}|${v.color}`;

function agregar(modelo, v, cant) {
  const clave = claveDe(v);
  const ya = pedido.find(x => x.clave === clave);
  if (ya) ya.cant = Math.min(99, ya.cant + cant);
  else pedido.push({
    clave, sku: v.sku, nombre: modelo.nombre, color: v.color,
    medida: modelo.medida || '', regular: v.regular, preventa: v.preventa,
    img: v.img, cant,
  });
  guardar();
  pintarPedido();
  const g = $('#contador');
  g.classList.remove('late'); void g.offsetWidth; g.classList.add('late');
}

function cambiarCant(clave, delta) {
  const it = pedido.find(x => x.clave === clave);
  if (!it) return;
  it.cant += delta;
  if (it.cant < 1) pedido = pedido.filter(x => x.clave !== clave);
  guardar();
  pintarPedido();
}

function quitar(clave) {
  pedido = pedido.filter(x => x.clave !== clave);
  guardar();
  pintarPedido();
}

const totales = () => pedido.reduce((a, x) => ({
  piezas:   a.piezas   + x.cant,
  regular:  a.regular  + x.regular  * x.cant,
  preventa: a.preventa + x.preventa * x.cant,
}), { piezas: 0, regular: 0, preventa: 0 });

function pintarPedido() {
  const t = totales();
  const g = $('#contador');
  g.textContent = t.piezas;
  g.hidden = t.piezas === 0;

  const cuerpo = $('#carrito-cuerpo');
  if (!pedido.length) {
    cuerpo.innerHTML = `<div class="vacio">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2.2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2"/><circle cx="10" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/></svg>
      <p>Todavía no agregaste nada. Tocá cualquier producto del catálogo para verlo y apartarlo.</p>
    </div>`;
    $('#carrito-pie').hidden = true;
    return;
  }

  cuerpo.innerHTML = pedido.map(x => `<div class="renglon">
    <img src="${esc(x.img)}" alt="${esc(x.nombre)}">
    <div class="renglon-datos">
      <b>${esc(x.nombre)}</b>
      <small>${[x.color, x.medida, x.sku].filter(Boolean).map(esc).join(' · ')}</small>
      <span class="precio">${money(x.preventa * x.cant)}</span>
    </div>
    <div class="renglon-mando">
      <div class="mini-cant">
        <button data-menos="${esc(x.clave)}" aria-label="Quitar uno">−</button>
        <span>${x.cant}</span>
        <button data-mas="${esc(x.clave)}" aria-label="Agregar uno">+</button>
      </div>
      <button class="quitar" data-quitar="${esc(x.clave)}">Quitar</button>
    </div>
  </div>`).join('');

  $('#carrito-pie').hidden = false;
  $('#total-regular').textContent  = money(t.regular);
  $('#total-ahorro').textContent   = '−' + money(t.regular - t.preventa);
  $('#total-preventa').textContent = money(t.preventa);
}

$('#carrito-cuerpo').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.dataset.menos)  cambiarCant(b.dataset.menos, -1);
  if (b.dataset.mas)    cambiarCant(b.dataset.mas, 1);
  if (b.dataset.quitar) quitar(b.dataset.quitar);
});

/* ── El mensaje de WhatsApp ──────────────────────────────────── */

function armarMensaje(nombre, tel) {
  const t = totales();
  const lineas = pedido.map(x => {
    const detalle = [x.color && `Color: ${x.color}`, x.medida && `Tamaño: ${x.medida}`]
      .filter(Boolean).join(', ');
    return `- ${x.cant}x [${x.sku}] ${x.nombre}${detalle ? ` (${detalle})` : ''} - ${money(x.preventa * x.cant)}`;
  });
  return [
    `¡Hola ${TIENDA.nombre}! Quiero realizar la siguiente reserva de ${TIENDA.temporada}:`,
    '',
    ...lineas,
    '',
    `Total de la compra: ${money(t.preventa)}`,
    `Cliente: ${nombre} | Teléfono: ${tel}`,
  ].join('\n');
}

/* El botón es un enlace de verdad y no un window.open: los navegadores
   dentro de apps —y cualquier visor con sandbox— bloquean los pop-ups
   que abre un script, pero dejan pasar el clic sobre un enlace. El
   destino se arma en el momento del clic, justo antes de que el
   navegador lo siga. */
$('#enviar').addEventListener('click', e => {
  const enlace = e.currentTarget;
  const nombre = $('#cli-nombre').value.trim();
  const tel    = $('#cli-tel').value.trim();
  const aviso  = $('#aviso-carrito');
  const telOk  = tel.replace(/\D/g, '').length >= 8;

  $('#cli-nombre').classList.toggle('mal', !nombre);
  $('#cli-tel').classList.toggle('mal', !telOk);

  if (!pedido.length || !nombre || !telOk) {
    e.preventDefault();
    aviso.textContent = !pedido.length
      ? 'Tu pedido está vacío.'
      : !nombre
        ? 'Poné tu nombre para que sepamos de quién es el pedido.'
        : 'El teléfono necesita al menos 8 dígitos.';
    aviso.hidden = false;
    (!nombre ? $('#cli-nombre') : $('#cli-tel')).focus();
    return;
  }

  aviso.hidden = true;
  enlace.href = `https://wa.me/${TIENDA.whatsapp}?text=`
    + encodeURIComponent(armarMensaje(nombre, tel));
});

/* ════════════════════════════════════════════════════════════════
   Telones y avisos
   ════════════════════════════════════════════════════════════════ */

function abrir(cual) {
  cerrarTodo();
  $('#telon-' + cual).hidden = false;
  document.body.style.overflow = 'hidden';
}

function cerrarTodo() {
  $$('.telon').forEach(t => t.hidden = true);
  document.body.style.overflow = '';
}

$('#abrir-carrito').addEventListener('click', () => abrir('carrito'));
$$('[data-cerrar]').forEach(b => b.addEventListener('click', cerrarTodo));
$$('.telon').forEach(t => t.addEventListener('click', e => { if (e.target === t) cerrarTodo(); }));

$('.marca').addEventListener('click', e => { e.preventDefault(); irA(0); });

let brindisT;
function brindis(txt) {
  const b = $('#brindis');
  b.textContent = txt;
  b.hidden = false;
  requestAnimationFrame(() => b.classList.add('visible'));
  clearTimeout(brindisT);
  brindisT = setTimeout(() => {
    b.classList.remove('visible');
    setTimeout(() => { b.hidden = true; }, 260);
  }, 2600);
}

/* ── Arranque ────────────────────────────────────────────────── */

pintarPedido();
ajustar();
