const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, '../public');
<<<<<<< HEAD
const rutasIndex = require("./routes/indexRoutes");
const rutasProduct = require("./routes/productRoutes");
const rutasUser = require("./routes/userRoutes");
=======
const rutasIndex = require("./routes/indexRoutes")
const rutasProduct = require("./routes/productRoutes") 
const rutasUser = require("./routes/userRoutes")

app.set('views', path.join(__dirname, 'views'));
>>>>>>> 40af39fd874a7136d89a6a4b2514061ee275f386

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

app.use('/', rutasIndex);

app.use('/', rutasProduct);

app.use("/", rutasUser);