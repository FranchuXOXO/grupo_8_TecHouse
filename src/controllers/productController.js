const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {
    detailMethod: (req, res) => {

        const productIdToFind = req.params.id;
        const product = products.find((p) => p.id == productIdToFind);

        return res.render('products/Detalle', { product, siteTitle: 'Detalle del producto' })
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
        lastId = products[products.length - 1].id + 1;
        created.id = lastId
        products.push(created)
        created.price = Number(created.price)
        created.image = req.file.filename
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
 
        res.redirect("/list")
    },

    listMethod: (req, res) => {
        res.render("products/productList", {
            siteTitle: "Lista de Productos",
            products: products
        });
    },

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
        products[indiceDelProducto].image=req.file.filename
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