// Capturando la entrada del usuario
function getInput(mensaje) {
  return prompt(mensaje);
}

// Objeto para almacenar productos
const productos = [];

// Función para agregar un nuevo producto
function agregarProducto(nombre, precio) {
  productos.push({ nombre, precio });
}

// Función para mostrar todos los productos
function mostrarProductos() {
  console.log("Lista de productos:");
  productos.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto.nombre} - Precio: $${producto.precio}`);
  });
}

// Función para buscar productos por nombre
function buscarProducto(nombre) {
  const resultados = productos.filter(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()));
  return resultados;
}

// Función principal del simulador
function simulador() {
  const nombreProducto = getInput("Ingrese el nombre del producto:");
  const precioProducto = parseFloat(getInput("Ingrese el precio del producto:"));

  agregarProducto(nombreProducto, precioProducto);

  console.log(`Producto "${nombreProducto}" agregado con éxito.`);

  const buscarNombre = getInput("Ingrese un término para buscar productos por nombre:");
  const resultadosBusqueda = buscarProducto(buscarNombre);

  if (resultadosBusqueda.length > 0) {
    console.log("Resultados de búsqueda:");
    resultadosBusqueda.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto.nombre} - Precio: $${producto.precio}`);
    });
  } else {
    console.log("No se encontraron productos que coincidan con la búsqueda.");
  }

  mostrarProductos();
}

// Llamada a la función principal
simulador();