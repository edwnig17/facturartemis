import { obtainCategories, nuevaCategoria, deleteCategory, obtenerCategory, editarCategory } from "./APIcategorias.js";

document.addEventListener("DOMContentLoaded", () => {
 listar()
});

/* LISTAR CATEGORIAS  - CRUD (R) */
async function listar(){
    const categorias = await obtainCategories();
    const tabla = document.querySelector('#Categorias');
    categorias.forEach(element => {
        const {CategoriaID, CategoriaNombre, Descripcion, Imagen} = element
        tabla.innerHTML += `
        <tr>
            <td>${CategoriaID}</td>
            <td>${CategoriaNombre}</td>
            <td>${Descripcion}</td>
            <td>${Imagen}</td>
            <td><button type="button" class="btn btn-outline-danger eliminar" id="${CategoriaID}" onClick="window.location.reload();">Eliminar</button></td>
            <td><button type="button" class="btn btn-outline-info"  data-bs-toggle="modal" data-bs-target="#staticBackdrop${CategoriaID}">Editar</button></td>
        </tr>

    <div class="modal fade" id="staticBackdrop${CategoriaID}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Editar Categoria</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="rd-form rd-form-variant-2 rd-mailform" id="nuevo" data-form-output="form-output-global" data-form-type="contact-modal" method="post">
                    <div class="row row-14 gutters-14">
                      <div class="col-12">
                        <div class="form-wrap">
                          <label for="newNombre${CategoriaID}">Nombre Categoria</label>
                          <input class="form-input" id="newNombre${CategoriaID}" type="text" data-constraints="@Required" value="${CategoriaNombre}">
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-wrap">
                          <label for="newDescripcion${CategoriaID}">Descripcion</label>
                          <textarea class="form-input" id="newDescripcion${CategoriaID}" type="text">${Descripcion}</textarea>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-wrap">
                          <label for="newImg${CategoriaID}">Imagen</label>
                          <input class="form-input" id="newImg${CategoriaID}" type="file">
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-success actualizar" type="submit" href="./" id="${CategoriaID}" onClick="window.location.reload();">Editar</button>
                </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
    </div>
        `;
    });
}

const opciones = document.querySelector('#Categorias');
opciones.addEventListener('click', borrar)
opciones.addEventListener('click', editar)

function borrar(e){
    if(e.target.classList.contains('eliminar')){
        const idCatego = e.target.getAttribute('id');
        const confir = confirm("desea Eliminarlo?");
        if(confir){
            deleteCategory(idCatego);
        }
    }
}

const formulario = document.getElementById('nuevo');
formulario.addEventListener('submit',newCategoria)
function newCategoria(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const img = document.getElementById('img').value;
    const categoria = {
        CategoriaNombre: nombre,
        Descripcion: descripcion,
        Imagen: img
    }
    console.log(categoria);
    nuevaCategoria(categoria)
}

function editar(e){
    if(e.target.classList.contains('actualizar')){
        const id = e.target.getAttribute('id');
        const nombre = document.getElementById(`newNombre${id}`).value;
        const descripcion = document.getElementById(`newDescripcion${id}`).value;
        const img = document.getElementById(`newImg${id}`).value;
        const datos = {
            CategoriaID: id,
            CategoriaNombre: nombre,
            Descripcion: descripcion,
            Imagen: img
        }
        console.log(datos);
        editarCategory(datos);
    }
}


/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */



/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)

