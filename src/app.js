const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, './public');

app.set("view engine", "ejs")

app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/index.html'));
});

app.get('/Carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/productCart.html'));
});

app.get('/Detalle', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/Detalle.html'));
});

app.get('/Login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'));
});

app.get('/Signup', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/signup.html'));
});