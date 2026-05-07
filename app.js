const productos = [
  { nombre: "TORPEDO CLASICO", precio: 34990, categoria: "mates", img: "img/mate1.jpeg", desc: "Virola cincelada de alpaca." },
  { nombre: "TORPEDO CLASICO", precio: 34990, categoria: "mates", img: "img/mate2.jpeg", desc: "Virola cincelada de bronce." },
  { nombre: "IMPERIAL LILA", precio: 44990, categoria: "mates", img: "img/mate3.jpeg", desc: "Interior de calabaza natural." },
  { nombre: "CAMIONERO", precio: 39990, categoria: "mates", img: "img/mate4.jpeg", desc: "Interior de acero inoxidable." },
  { nombre: "CAMIONERO", precio: 39990, categoria: "mates", img: "img/mate5.jpeg", desc: "Diseño rosa con acero inox." },
  { nombre: "IMPERIAL", precio: 39990, categoria: "mates", img: "img/mate6.jpeg", desc: "Cuero negro labrado." },
  { nombre: "IMPERIAL", precio: 39990, categoria: "mates", img: "img/mate7.jpeg", desc: "Blanco con acero inoxidable." },
  { nombre: "IMPERIAL PREMIUM", precio: 54990, categoria: "mates", img: "img/mate8.jpeg", desc: "Cuero repujado y base de bronce." },
  { nombre: "IMPERIAL ROMA", precio: 49990, categoria: "mates", img: "img/mate9.jpeg", desc: "Full alpaca con detalles finos." },
  { nombre: "IMPERIAL CUERO", precio: 44990, categoria: "mates", img: "img/mate10.jpeg", desc: "Animal print con acero inox." },
  { nombre: "TORPEDO CUERO", precio: 44990, categoria: "mates", img: "img/mate11.jpeg", desc: "Diseño vaquita artesanal." },
  { nombre: "TORPEDO CUERO", precio: 49990, categoria: "mates", img: "img/mate12.jpeg", desc: "Cuero marrón con base alpaca." },
  { nombre: "TORPEDO CUERO", precio: 49990, categoria: "mates", img: "img/mate13.jpeg", desc: "Cuero labrado con base bronce." },
  { nombre: "TORPEDO NEGRO ", precio: 54990, categoria: "mates", img: "img/mate14.jpeg", desc: "Negro con detalles metálicos." },
  { nombre: "IMPERIAL FUCSIA", precio: 39990, categoria: "mates", img: "img/mate15.jpeg", desc: "Color fucsia con virola fina." },
  { nombre: "TORPEDO EN CUERO CRUDO", precio: 54990, categoria: "mates", img: "img/mate16.jpeg", desc: "Cuero crudo con base de bronce." },
  { nombre: "IMPERIAL EN CUERO CRUDO", precio: 54990, categoria: "mates", img: "img/mate17.jpeg", desc: "Cuero crudo con virola cincelada." },

  { nombre: "YERBA BALDO", precio: 12000, categoria: "yerbas", img: "img/yerba1.jpeg", desc: "Yerba tradicional Baldo." },
  { nombre: "YERBA ESMERALDA", precio: 12000, categoria: "yerbas", img: "img/yerba2.jpeg", desc: "Yerba tradicional Esmeralda." },

  { nombre: "BOMBILLON DE ALPACA TRENZADO ", precio: 27990, categoria: "bombillones", img: "img/bombilla3.jpeg", desc: "Bombillon de alpaca pico de loro en bronce macizo." },
  { nombre: "BOMBILLON DE ALPACA CAMINO DEL INCA", precio: 27990, categoria: "bombillones", img: "img/bombilla4.jpeg", desc: "Bombillon de alpaca pico de loro en bronce macizo." },


  { nombre: "TERMOS", precio: 20990, categoria: "termo", img: "img/termo1.jpeg", desc: "Termo + Mate + Bombilla" },

  { nombre: "CANASTA CAFE", precio: 37990, categoria: "matera", img: "img/matera1.jpeg", desc: "De 2 compartimientos cuero café" },
  { nombre: "CANASTA DE CUERO", precio: 44990, categoria: "matera", img: "img/matera2.jpeg", desc: "De 2 compartimientos cuero de vacuno café" },
  { nombre: "CANASTA DE CUERO", precio: 44990, categoria: "matera", img: "img/matera3.jpeg", desc: "De 2 compartimientos cuero de vacuno negro" }
];

// 🔥 orden personalizado
const ordenCategorias = ["mates", "bombillones", "yerbas", "termo", "matera"];

function mostrarProductos(lista) {
  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  // 🔥 no modifica el array original
  const ordenados = [...lista].sort((a, b) => {
    return ordenCategorias.indexOf(a.categoria) - ordenCategorias.indexOf(b.categoria);
  });

  ordenados.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.onclick = () => abrirModal(p);

    card.innerHTML = `
      <img src="${p.img}" class="img-producto">
      <div class="info">
        <h3>${p.nombre}</h3>
        <p>$${p.precio.toLocaleString('es-CL')} 🇨🇱</p>
      </div>
    `;

    contenedor.appendChild(card);
  });
}

function filtrar(categoria) {
  const titulo = document.getElementById("titulo-categoria");

  if (categoria === "todos") {
    mostrarProductos(productos);
    titulo.textContent = "Todos los productos";
  } else {
    const filtrados = productos.filter(p => p.categoria === categoria);
    mostrarProductos(filtrados);

    if (categoria === "mates") titulo.textContent = "Mates";
    if (categoria === "yerbas") titulo.textContent = "Yerbas";
    if (categoria === "bombillones") titulo.textContent = "Bombillones";
    if (categoria === "termo") titulo.textContent = "Termos";
    if (categoria === "matera") titulo.textContent = "Materas";
  }
}

// 🔥 MODAL
function abrirModal(p) {
  document.getElementById("modal").style.display = "flex";

  document.getElementById("modal-img").src = p.img;
  document.getElementById("modal-nombre").innerText = p.nombre;
  document.getElementById("modal-precio").innerText = "$" + p.precio.toLocaleString("es-CL");
  document.getElementById("modal-desc").innerText = p.desc || "Sin descripción";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// cargar productos al inicio
mostrarProductos(productos);