const productos = [
    {
      nombre: "Barbie en El Cascanueces",
      descripcion: "La primera película animada de Barbie, donde interpreta a Clara en una mágica aventura con el Príncipe Cascanueces.",
      precio: 129.99,
      imagen: "img1.PNG"
    },
    {
      nombre: "Barbie como Rapunzel",
      descripcion: "Barbie da vida a Rapunzel, una artista con un pincel mágico que pinta la libertad.",
      precio: 139.99,
      imagen: "img2.PNG"
    },
    {
      nombre: "Barbie y el Lago de los Cisnes",
      descripcion: "Basada en el ballet clásico, Barbie se transforma en Odette y enfrenta al malvado Rothbart.",
      precio: 149.99,
      imagen: "img3.PNG"
    },
    {
      nombre: "Barbie Princesa y la Plebeya",
      descripcion: "Dos chicas idénticas, una princesa y una plebeya, descubren el poder de la amistad y la libertad.",
      precio: 159.99,
      imagen: "img4.PNG"
    }
  ];
  
  const catalogo = document.getElementById("catalogo");
  
  function crearTarjetaProducto(producto) {
    const card = document.createElement("div");
    card.className = "producto-card";
  
    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
  
    const titulo = document.createElement("h2");
    titulo.textContent = producto.nombre;
  
    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;
  
    const precio = document.createElement("span");
    precio.className = "precio";
    precio.textContent = `$${producto.precio.toFixed(2)}`;
  
    const boton = document.createElement("button");
    boton.className = "btn-comprar";
    boton.textContent = "Ver más";
  
    card.append(imagen, titulo, descripcion, precio, boton);
    return card;
  }
  
  function renderizarCatalogo() {
    productos.forEach(producto => {
      const tarjeta = crearTarjetaProducto(producto);
      catalogo.appendChild(tarjeta);
    });
  }
  
  window.onload = renderizarCatalogo;

  
