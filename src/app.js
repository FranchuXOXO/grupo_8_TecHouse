const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, '../public');
const rutasIndex=require("./routes/indexRoutes")

app.set("view engine", "ejs")

app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

app.use('/', rutasIndex);

app.get('/Carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});

app.get('/Detalle', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/Detalle.html'));
});

app.get('/Login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/Signup', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/signup.html'));
});