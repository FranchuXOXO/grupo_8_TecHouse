const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");




const productCont={
    detailMethod: (req, res) => {
        res.render("products/Detalle", {
            siteTitle: "Detalle",
        });
    },

    cartMethod: (req, res) => {
        res.render("products/productCart", {
            siteTitle: "Carrito",
        });
    },

    stockMethod: (req, res) => {
        res.render("products/productCreate", {
            siteTitle: "Manejo de Stock"
        });
    },

    listMethod: (req, res) => {

        products 




        res.render("products/productList", {
            siteTitle: "Lista de Productos"
        });
    }
}

module.exports=productCont