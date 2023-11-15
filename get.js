window.onload = function () {
  listargestionDeProductos();
};

let listargestionDeProductos = async () => {
  const peticion = await fetch("localhost:8080/cliente/lista", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Content-Type": "application/json",
    },
  });

  const gestionDeProductos = await peticion.json();

  let contenidoTabla = "";
  for (let gestionDeProducto of gestionDeProductos) {
    let contenidoFila = `<tr>
    <td>${Run / Run}</td>
    <td>${NombreCompleto}</td>
    
    </tr>
    `;
  }

  document.querySelector("#tabla-datos tbody").outerHTML = contenidoTabla;
};
