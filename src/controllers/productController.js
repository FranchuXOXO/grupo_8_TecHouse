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
        let idProducto = req.params.id;
        const result = db.Product.findByPk(idProducto, { 
            include: [
                "product_colors", "product_compatibilities"
            ] })
        .then(productToEdit => {    
        if(productToEdit!=null)
            res.render("products/productEdit", { productToEdit, siteTitle: "Edición del producto" })
        else
            res.send("Este producto no existe en la base de datos")
        }).catch(error => res.send(error))
    },

    update: (req, res) => {
        const idProducto = req.params.id;
    db.Product.update( {  
            product_name: req.body.product_name,
            product_description: req.body.product_description,
            product_image: req.file ? req.file.filename : req.body.oldImagen,
            id_compatibility: req.body.id_compatibility,
            id_color: req.body.id_color,
            product_price: req.body.product_price 
        },
       {  where: 
       {  id:idProducto  }
         }
    )
        .then(()=> {
            return res.redirect('/list')})            
        .catch(error => res.send(error)) 
    },

    delete: (req, res) => {
        const productIdToFind = req.params.id;
        db.Product.destroy({ where: {id: productIdToFind} })
        
        .then(()=> {
            return res.redirect('/list')})            
        .catch(error => res.send(error)) 
    },

    search: (req, res) => {
        const productToFind = req.body;
        db.Product.findOne({where: { product_name: productToFind.word },
                include: [
                    "product_colors", "product_compatibilities"
                ]
            }).then(article =>
                res.render('products/productList', { article, siteTitle: 'Resultado de la búsqueda', user: req.session.userLogged })
            )
    }
}

module.exports = productController;