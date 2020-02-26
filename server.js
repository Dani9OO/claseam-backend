const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors');
const app = express();
const db = require('./app/config/db');

// Load .env config file

dotenv.config()

// Database

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser : true } )
  .then(() => console.log('La conexión a la base de datos ha sido establecida.'))
  .catch(err => console.error(err));

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);

// Routes

require('./app/routes/UserRoutes.js')(app);

// Start Server

app.listen(3000, () => console.log('El servidor ha sido inicializado en el puerto 3000...'));