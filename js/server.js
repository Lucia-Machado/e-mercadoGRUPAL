const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;
const key = 'clave';

// Middleware para cargar datos desde archivos JSON
function cargarJSON(jsonDirectory) {
  const jsonData = [];
  try {
    const files = fs.readdirSync(jsonDirectory);
    files.forEach((file) => {
      if (file.endsWith('.json')) {
        const filePath = path.join(jsonDirectory, file);
        const data = fs.readFileSync(filePath, 'utf8');
        jsonData.push(JSON.parse(data));
      }
    });
  } catch (error) {
    console.error('Error al leer el directorio:', error.message);
  }
  return jsonData;
}


// Endpoint para obtener datos de categoria desde archivos JSON
app.get('/json/cats', (req, res) => {
  const jsonDirectorycats = path.join(__dirname, 'jsons', 'cats');
  const jsonDatacats = cargarJSON(jsonDirectorycats);
  res.json(jsonDatacats);
});

// Configuración de CORS
const corsOptions = {
  origin: 'http://localhost:5500', // Cambiar al dominio de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); // Middleware para parsear el cuerpo de las solicitudes en formato JSON.

// Nos inventamos datos de usuarios
let usuarios = [
  { id: 1, usuario: "juan", clave: "clavejuan" },
  { id: 2, usuario: "maria", clave: "clavemaria" },
  { id: 3, usuario: "bruno", clave: "clavebruno" }
];

// Middleware que chequea el login
function mwLogin(req, res, next) {
  const { usuario, clave } = req.body;

  // ¿Hay usuario y clave?
  if (!usuario || !clave) {
    return res.status(401).json({ msj: 'Falta usuario o clave' });
  }

  // ¿Existe el usuario y la clave en mi lista?
  const usuarioExiste = usuarios.find(user => user.usuario === usuario && user.clave === clave);
  if (!usuarioExiste) {
    return res.status(401).json({ msj: 'Usuario o clave no válidos' });
  }

  // Genero el Token JWT
  const token = jwt.sign({ userId: usuario.id, username: usuarioExiste.usuario }, key, { expiresIn: Math.floor(Date.now() / 1000) + 10 });
  console.log(token);
  res.token = token;
  next();
}

// Protejo la ruta '/login' con el middleware mwLogin y luego devuelve un mensaje y el token.
app.post('/login', mwLogin, (req, res) => {
  res.json({ msj: 'Te dejo ingresar y te di un token.', token: res.token });
});

// Ruta protegida con token
app.get('/lista-protegida', (req, res) => {
  const token = req.headers['authorization'];

  // Si no hay token
  if (!token) {
    return res.status(401).json({ msj: 'No tenés permiso!!!' });
  }

  // Si hay token, verifico si no está vencido.
  jwt.verify(token, key, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msj: 'Token vencido, anda a comprar otro.' });
    }

    // Si llego acá es porque está todo bien.
    res.json({ msj: 'Acceso permitido', usuario: decoded });
  });
});

// Pongo el servidor a funcionar
app.listen(port, () => {
  console.log('HUMANOS, HEMOS REGRESADO \n CON HIPERSEGURIDAD');
});
