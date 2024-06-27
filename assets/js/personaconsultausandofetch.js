// leer un rchivo externo , tipo json 
// JavaScript Object Notation: notacion de objetos en js

// //usamos los fetch para leer archivos y apis
// fetch ("./assets/js/aprendiz.json")
// // Parseo de los datos o serializacion
// .then(function(res){return res.json()})
// // accion a realizar con los datos seriados
// .then(function (res) {
//     console.log(res)
// })

    //============================================================================
//usamos los fetch para leer archivos y apis
fetch ("./assets/js/aprendiz.json")
// Parseo de los datos o serializacion
.then(datos=>datos.json())
// accion a realizar con los datos seriados
.then(datos => {
    // capturamos el elemento html a interactuar 
let mitabla = document.getElementById("mitabla")
for (let i = 0; i < datos.length; i++) {
    //crear la fila 
    let fila = `
    <tr>
    <th scope="row">${datos[i].id}</th>
    <td>${datos[i].first}</td>
    <td>${datos[i].last}</td>
    <td>${datos[i].handle}</td>
    <td><a href="#"><i class="bi bi-pencil"></i><a></td>
    <td><a href="#"><i class="bi bi-trash3"></i></a></td>
    </tr>
    `
    //actualizamos el elemento DOM (la pagina html, especificamente la tabla
    mitabla.innerHTML += fila 
    
}
})





