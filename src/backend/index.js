const express = require('express');
const { Pool } = require('pg');

const app = express();

// Configura la conexión a PostgreSQL
const pool = new Pool({
  user: 'useraws',
  host: 'roomaws.cgwc0bqmobtd.eu-west-3.rds.amazonaws.com',
  database: 'dbreservationrooms',
  password: 'KaraokeRoom',
  port: 5432, // Puerto por defecto de PostgreSQL
});

// Ruta para obtener los slots desde la base de datos
app.get('/slots', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM rooms'); // Modifica la consulta según tu estructura de base de datos
    const slots = result.rows;
    client.release();
    res.json(slots);
  } catch (err) {
    console.error('Error al obtener slots', err);
    res.status(500).json({ error: 'Error al obtener slots' });
  }
});

// Puerto en el que el servidor Express escuchará las solicitudes
const PORT = 3008;
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});