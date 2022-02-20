const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/products.json');
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

    createProduct: (req, res) => {
        let producto = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            color: req.body.color,
            categoria: req.body.categoria,
            precio: req.body.precio
        }

        return res.send(producto);
    },
    
    listMethod: (req, res) => {
        res.render("products/productList", {
            siteTitle: "Lista de Productos",
            products: products
        });
    },

    edit: (req, res) => {
        const idProducto=req.params.id;
        const productToEdit = products.find((product) => product.id == idProducto);
        if (!productToEdit) {
          return res.send("ESTE PRODUCTO NO EXISTE")  
        }
        
        return res.render("productEdit", {productToEdit})

    },

    update: (req,res) => {
        const idProducto=req.params.id;
        const indiceDelProducto=products.findIndex((product) => product.id == idProducto);

        products[indiceDelProducto] = {...products[indiceDelProducto], ...req.body}

        return res.send(products)
    }

}

module.exports = productCont;