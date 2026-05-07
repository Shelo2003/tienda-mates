const productos = [
  { nombre: "TORPEDO CLASICO", precio: 34990, categoria: "mates", img: "img/mate1.jpeg", desc: "Mate torpedo clásico cuero negro liso, virola cincelada con interior de calabaza." },
  { nombre: "TORPEDO CLASICO EN BRONCE", precio: 34990, categoria: "mates", img: "img/mate2.jpeg", desc: "Mate torpedo clásico, cuero negro liso, virola en bronce cincelada con interior de calabaza." },
  { nombre: "IMPERIAL LILA", precio: 44990, categoria: "mates", img: "img/mate3.jpeg", desc: "Mate imperial lila cuero liso, interior de calabaza y virola cincelada." },
  { nombre: "CAMIONERO DELUXE NEGRO", precio: 39990, categoria: "mates", img: "img/mate4.jpeg", desc: "Mate camionero cuero negro, interior de acero inoxidable y virola invertida cincelada." },
  { nombre: "CAMIONERO DELUXE ROSA", precio: 39990, categoria: "mates", img: "img/mate5.jpeg", desc: "Mate camionero cuero rosa, interior de acero inoxidable y virola invertida cincelada." },
  { nombre: "IMPERIAL NEGRO", precio: 39990, categoria: "mates", img: "img/mate6.jpeg", desc: "Mate imperial cuero negro labrado, interior de calabaza y virola lisa." },
  { nombre: "IMPERIAL BLANCO", precio: 39990, categoria: "mates", img: "img/mate7.jpeg", desc: "Mate imperial cuero blanco, interior acero inoxidable y virola lisa." },
  { nombre: "IMPERIAL PREMIUM", precio: 54990, categoria: "mates", img: "img/mate8.jpeg", desc: "Mate imperial premium, cuero labrado, interior de calabaza, virola lisa y base completa bolitas de bronce." },
  { nombre: "IMPERIAL ROMA", precio: 49990, categoria: "mates", img: "img/mate9.jpeg", desc: "Mate imperial roma negro cuero labrado, virola de cincelada, interior de calabaza y base de alpaca cincelada." },
  { nombre: "IMPERIAL ANIMAL PRINT", precio: 44990, categoria: "mates", img: "img/mate10.jpeg", desc: "Mate imperial cuero animal print, interior de acero inoxidable virola lisa." },
  { nombre: "TORPEDO CUERO VAQUITA", precio: 44990, categoria: "mates", img: "img/mate11.jpeg", desc: "Mate torpedo cuero vaquita, interior de calabaza, virola cincelada." },
  { nombre: "TORPEDO CUERO BORRAVINO", precio: 49990, categoria: "mates", img: "img/mate12.jpeg", desc: "Mate cuero liso, virola cincelada, interior de calabaza y base de alpaca." },
  { nombre: "TORPEDO CUERO", precio: 49990, categoria: "mates", img: "img/mate13.jpeg", desc: "Mate cuero labrado, interior de calabaza,virola cincelada y base bolitas de bronce." },
  { nombre: "TORPEDO PREMIUM ", precio: 54990, categoria: "mates", img: "img/mate14.jpeg", desc: "Mate en cuero negro labrado, con interior de calabaza, virola cincelada y anillo de bronce, base de bolitas de bronce." },
  { nombre: "IMPERIAL FUCSIA", precio: 39990, categoria: "mates", img: "img/mate15.jpeg", desc: "Mate imperial fucsia cuero labrado, interior de calabaza y virola cincelada." },
  { nombre: "TORPEDO EN CUERO CRUDO", precio: 54990, categoria: "mates", img: "img/mate16.jpeg", desc: "Mate cuero crudo con virola cincelada y base bolitas de bronce." },
  { nombre: "IMPERIAL EN CUERO CRUDO", precio: 54990, categoria: "mates", img: "img/mate17.jpeg", desc: "Mate Cuero crudo con virola cincelada." },

  { nombre: "YERBA BALDO", precio: 12000, categoria: "yerbas", img: "img/yerba1.jpeg", desc: "Yerba tradicional Baldo." },
  { nombre: "YERBA ESMERALDA", precio: 12000, categoria: "yerbas", img: "img/yerba2.jpeg", desc: "Yerba tradicional Esmeralda." },

  { nombre: "BOMBILLON DE ALPACA TRENZADO ", precio: 27990, categoria: "bombillones", img: "img/bombilla3.jpeg", desc: "Bombillon de alpaca pico de loro en bronce macizo." },
  { nombre: "BOMBILLON DE ALPACA CAMINO DEL INCA", precio: 27990, categoria: "bombillones", img: "img/bombilla4.jpeg", desc: "Bombillon de alpaca pico de loro en bronce macizo." },


  { nombre: "TERMOS", precio: 20990, categoria: "termo", img: "img/termo1.jpeg", desc: "Termo + Mate + Bombilla." },


  { nombre: "MATERA DE CUERO FUTBOL", precio: 44990, categoria: "matera", img: "img/matera4.jpeg", desc: "De 4 compartimientos, labrado balón de futbol." },
  { nombre: "MATERA DE CUERO NEGRO", precio: 40990, categoria: "matera", img: "img/matera5.jpeg", desc: "De 4 compartimientos." },
  { nombre: "MATERA DE CUERO CAFE", precio: 44990, categoria: "matera", img: "img/matera7.jpeg", desc: "De  4 compartimientos." },
  { nombre: "MATERA DE CUERO NEGRO", precio: 36990, categoria: "matera", img: "img/matera6.jpeg", desc: "De 2 compartimientos." },
  { nombre: "MATERA DE CUERO CAFE", precio: 37990, categoria: "matera", img: "img/matera1.jpeg", desc: "De 2 compartimientos cuero café." },
  { nombre: "MATERA DE CUERO DE VACUNO ", precio: 44990, categoria: "matera", img: "img/matera2.jpeg", desc: "De 2 compartimientos cuero de vacuno café." },
  { nombre: "MATERA DE CUERO DE VACUNO", precio: 44990, categoria: "matera", img: "img/matera3.jpeg", desc: "De 2 compartimientos cuero de vacuno negro." }
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