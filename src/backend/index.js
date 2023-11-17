const express = require('express');
//const { Pool } = require('@vercel/postgres');
const { Pool } = require('pg');

const app = express();

// Configura la conexión a PostgreSQL
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// Ruta para obtener los slots desde la base de datos
app.get('/slots', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM rooms'); // Modifica la consulta según tu estructura de base de datos
        const slots = result.rows;
        client.release();
        console.log(res.json(slots));
    } catch (err) {
        console.error('Error al obtener slots', err);
        res.status(500).json({ error: 'Error al obtener slots' });
    }
});

// Puerto en el que el servidor Express escuchará las solicitudes
const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
