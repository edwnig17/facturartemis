

fetch('URL_DE_TU_API')
    .then(response => response.json())
    .then(data => {
        const tablaCuerpo = document.getElementById('tabla-cuerpo');
        data.forEach(categoria => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${categoria.CategoriaID}</td>
                <td>${categoria.CategoriaNombre}</td>
                <td>${categoria.Descripcion}</td>
                <td><img src="${categoria.Imagen}" alt="Imagen" width="100"></td>
            `;
            tablaCuerpo.appendChild(fila);
        });
    })
    .catch(error => console.log(error));
