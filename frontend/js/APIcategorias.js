const url = "http://localhost:3309/api/categorias";

export const obtainCategories = async () => {
    try {
        const categorias = await fetch(url);
        const datoCategorias = await categorias.json();
        return datoCategorias;
    } catch (error) {
        console.log(error,"No funshon :(");
    }
};

export const nuevaCategoria = async (categoria) => {
    try {
        await fetch(url,{
            method: "POST",
            body:JSON.stringify(categoria),
            headers:{'Content-Type':'application/json'}
        })
    } catch (error) {
        console.log(error,"No Funshion :(");
    }
};

export const deleteCategory = async (id) => {
  try {
        await fetch(`${url}/${id}`,{
            method:'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
};

export const obtenerCategory = async (id) => {
 
};

export const editarCategory = async (datos) => {
    try {
        await fetch(`${url}/${datos.CategoriaID}`, {
            method: "PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datos)
        }).then(response => response.json()).then(updatedDatos => {
            console.log('Datos actualizados:', updatedDatos);
        });
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
};