const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Ruta del directorio donde se almacenan los JSON descargados
const jsonDirectory = 'ruta/del/directorio/con/json';

function cargarJSON() {
  const jsonData = [];
  fs.readdirSync(jsonDirectory).forEach((file) => {
    if (file.endsWith('.json')) {
      const filePath = path.join(jsonDirectory, file);
      const data = fs.readFileSync(filePath, 'utf8');
      jsonData.push(JSON.parse(data));
    }
  });
  return jsonData;
}

app.get('/json', (req, res) => {
  const jsonData = cargarJSON();
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});