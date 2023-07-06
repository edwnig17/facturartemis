const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 5000; 

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'campus', 
    password: 'campus2023', 
    database: 'facturartemis' 
});


connection.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});


app.get('/api/categorias', (req, res) => {
    const query = 'SELECT * FROM categorias';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener los datos de la tabla categorias:', err);
            res.status(500).json({ error: 'Ocurrió un error al obtener los datos de la tabla categorias' });
        } else {
            res.json(results);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
