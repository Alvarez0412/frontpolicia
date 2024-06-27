/* let datos = [9,'Juan','Arias','senadrive.com'] */

let datos = [{
    id: 123,
    first: "Juan",
    last: "Alvarez",
    handle:"senadrive@"
}
,
{
   id: 321,
    first: "Juan",
    last: "Steban",
    handle:"senadrive@"
}
,
{
   id: 346,
   first: "Diego",
   last: "Restrepo",
   handle:"senadrive@"
}
,
{
   id: 3789,
   first: "Juan",
   last: "Gonzalez",
   handle:"senadrive@"
}]
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