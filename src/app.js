const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
const rutasIndex = require("./routes/indexRoutes");
const rutasProduct = require("./routes/productRoutes"); 
const rutasUser = require("./routes/userRoutes");

const methodOverride = require('method-override');
const session = require("express-session")
const cookies = require('cookie-parser');

app.use(express.static(publicPath));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: 'Nombre del sitio',
    resave: false,
    saveUninitialized: true,
    }));
app.use(cookies());

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

app.use('/', rutasIndex);

app.use('/', rutasProduct);

app.use("/", rutasUser);