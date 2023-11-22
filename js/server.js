const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Ruta del directorio donde se almacenan los JSON descargados




function cargarJSON(jsonDirectory) {
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


app.get('/json/cats/', (req, res) => {
  const jsonDirectorycats = '../jsons/cats';
  const jsonDatacats = cargarJSON(jsonDirectorycats);
  res.json(jsonDatacats);
});
app.get('/json/cats_products/', (req, res) => {
  const jsonDirectorycats_products = '../jsons/cats_products';
  const jsonDatacats1 = cargarJSON(jsonDirectorycats_products);
  res.json(jsonDatacats1);
});
app.get('/json/products/', (req, res) => {
  const jsonDirectoryproducts = '../jsons/products';
  const jsonDatacats1 = cargarJSON(jsonDirectoryproducts);
  res.json(jsonDatacats1);
});
app.get('/json/products_comments/', (req, res) => {
  const jsonDirectoryproductscomments = '../jsons/products_comments';
  const jsonDatacats1 = cargarJSON(jsonDirectoryproductscomments);
  res.json(jsonDatacats1);
});
app.get('/json/sell/', (req, res) => {
  const jsonDirectorycats_sell = '../jsons/sell';
  const jsonDatacats1 = cargarJSON(jsonDirectorycats_sell);
  res.json(jsonDatacats1);
});
app.get('/json/user_cart/', (req, res) => {
  const jsonDirectorycatsuser_cart = '../jsons/user_cart';
  const jsonDatacats1 = cargarJSON(jsonDirectorycatsuser_cart);
  res.json(jsonDatacats1);
});



// const jsonDatacats_products = cargarJSON(jsonDirectorycats_products);

// const jsonDirectorycats_products = '../jsons/cats';
//   const jsonDirectoryproducts = '../jsons/cats';
//   const jsonDirectoryproducts_comments = '../jsons/cats';
//   const jsonDirectorysell = '../jsons/cats';
//   const jsonDirectoryuser_cart = '../jsons/cats';


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

