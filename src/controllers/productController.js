const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../../db/models")

const productController = {
    detailMethod: (req, res) => {

        const productIdToFind = req.params.id;
        db.Product.findByPk(productIdToFind,
            {
                include: [
                    "product_colors", "product_compatibilities"
                ]
            }).then(article =>
            res.render('products/Detalle', { article, siteTitle: 'Detalle del producto', user: req.session.userLogged })
        )
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
        const created = req.body
        created.product_price = Number(created.product_price)
        created.product_image = req.file.filename
        created.id_color = Number(created.id_color)
        created.id_compatibility = Number(created.id_compatibility)
        db.Product.create(created).then(() => {
            return res.redirect('/list')
        })
            .catch(error => res.send(error))
    },

    listMethod: (req, res) => {
        db.Product.findAll({
            include: [
                "product_colors", "product_compatibilities"
            ]
        })
            .then(article => {
                res.render("products/productList", { article, siteTitle: "Lista de Productos" })
                console.log(article)
            })

    },

    /*(req, res) => {
        const products=db.Product.findAll().then( results =>
                 results
            )
        res.render("products/productList", {
            siteTitle: "Lista de Productos",
            products
        });
    }, */

    edit: (req, res) => {
        const idProducto = req.params.id;
        const productToEdit = products.find((product) => product.id == idProducto);
        if (!productToEdit) {
            return res.send("ESTE PRODUCTO NO EXISTE")
        }
        return res.render("products/productEdit", { productToEdit, siteTitle: "Edición del producto" })

    },

    update: (req, res) => {
        const idProducto = req.params.id;
        const indiceDelProducto = products.findIndex((product) => product.id == idProducto);
        products[indiceDelProducto] = { ...products[indiceDelProducto], ...req.body };
        products[indiceDelProducto].image = req.file.filename
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect("/list")

    },

    delete: (req, res) => {
        const idProducto = req.params.id;
        const productToDelete = products.find((product) => product.id == idProducto);
        const productoEncontrado = products.findIndex((product) => product.id == productToDelete.id);
        products.splice(productoEncontrado, 1);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect("/list")
    }
}

module.exports = productController;