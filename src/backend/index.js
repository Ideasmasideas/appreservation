const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

// Configura la conexión a la base de datos MySQL en AWS
const pool = mysql.createPool({
  host: 'roomawsmysql.cgwc0bqmobtd.eu-west-3.rds.amazonaws.com',
  user: 'useraws',
  password: 'KaraokeRoom',
  database: 'db_karaokeroom',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Ruta para obtener todos los registros de la tabla Rooms
app.get('/rooms', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM Rooms');
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener registros de la tabla Rooms', error);
    res.status(500).json({ error: 'Error al obtener registros de la tabla Rooms' });
  }
});
app.get('/locations', async (req, res) => {
    try {
      const connection = await pool.getConnection();
      const [rows] = await connection.query('SELECT * FROM Locations');
      connection.release();
      res.json(rows);
    } catch (error) {
      console.error('Error al obtener registros de la tabla Rooms', error);
      res.status(500).json({ error: 'Error al obtener registros de la tabla Rooms' });
    }
  });

// Puerto en el que el servidor Express escuchará las solicitudes
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});