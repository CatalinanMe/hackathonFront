// $(document).ready(function () {
//   fetch("http://localhost:8080/cliente/lista").then((res) => {
//     res.json().then((data) => {
//       if (data.length > 0) {
//         var temp = "";
//         data.forEach((itemData) => {
//           temp += "<tr>";
//           temp += "<td>" + itemData.cliente_id + "</td>";
//           temp += "<td>" + itemData.nombre + "</td>";
//           temp += "<td>" + itemData.rut + "</td>";
//         });
//         document.getElementById("myDataTable").innerHTML = temp;
//       }
//     });
//   });
// });

// $(document).ready(function () {
//   $("#myDataTable").DataTable({
//     dom: "Bfrtip",
//     buttons: ["copy", "csv", "excel", "pdf", "print"],
//   });
// });
$(document).ready(function () {
  // Datos de ejemplo
  fetch("http://localhost:8080/cliente/lista").then((res) => {
    res.json().then((data) => {
      let myData = [];
      data.forEach((element) => {
        console.log(element);
        var row = [
          element.clienteNombre,
          element.clienteRut,
          element.cliente_id,
          "Nueva York",
          "Toyota",
          "Sí",
          "Sí",
        ];
        myData.push(row);
      });
      var datos = myData;

      // Inicializar la DataTable
      var tabla = $("#myDataTable").DataTable({
        dom: "Bfrtip",
        buttons: ["copy", "csv", "excel", "pdf", "print"],
      });

      // Llenar la tabla con los datos
      tabla.rows.add(datos).draw();
    });
  });
});
