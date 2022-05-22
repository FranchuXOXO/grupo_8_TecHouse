const fs = require('fs');
const path = require('path');
const { sequelize } = require('../../db/models');


const { validationResult } = require('express-validator');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../../db/models")
const Op = db.Sequelize.Op
const operatorsAliases = {
    $like: Op.like
}

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

    cart: (req, res) => {
        /* Necesito el ID del usuario*/

        /* Necesito el ID del producto a comprar */

        /* Necesito consultar el carrito del usuario guardado en la base de datos*/

        /* Necesito agregar el producto a comprar al carrito actual */

        /* Hay que sumar los valores de los productos del carrito + el nuevo producto */

        /* Hay que colocar un contador de producto, cuando el usuario quiere mas de uno */

        /* Hay que colocar un botón de guardar carrito */

        res.render("products/cart", {
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
        created.id_color = Number(created.id_color)
        created.id_compatibility = Number(created.id_compatibility)
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            created.product_image = req.file.filename
            db.Product.create(created).then(() => {
                return res.redirect('/list')
            })
                .catch(error => res.send(error))
        } else {
            console.log(errors);
            res.render('products/productCreate', { errors: errors.mapped(), old: req.body, siteTitle: "Formulario de creación de productos" });
        }
    },

    listMethod: (req, res) => {
        db.Product.findAll({
            include: [
                "product_colors", "product_compatibilities"
            ]
        })
            .then(article => {
                res.render("products/productList", { article, siteTitle: "Lista de Productos", user: req.session.userLogged })
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
            ]
        })
            .then(productToEdit => {
                if (productToEdit != null)
                    res.render("products/productEdit", { productToEdit, siteTitle: "Edición del producto", user: req.session.userLogged })
                else
                    res.send("Este producto no existe en la base de datos")
            }).catch(error => res.send(error))
    },

    update: (req, res) => {
        const idProducto = req.params.id;
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Product.update({
                product_name: req.body.product_name,
                product_description: req.body.product_description,
                product_image: req.file.filename,
                id_compatibility: req.body.id_compatibility,
                id_color: req.body.id_color,
                product_price: req.body.product_price
            },
                {
                    where:
                        { id: idProducto }
                }
            )
                .then(() => {
                    return res.redirect('/list')
                })
                .catch(error => res.send(error))
        } else {
            db.Product.findByPk(idProducto, {
                include: [
                    "product_colors", "product_compatibilities"
                ]
            })
                .then(productToEdit => {
                    res.render('products/productEdit', { errors: errors.mapped(), productToEdit, old: req.body, siteTitle: "Formulario de edición de productos" })
                }).catch(error => res.send(error))
        }
    },

    delete: (req, res) => {
        const productIdToFind = req.params.id;
        db.Product.destroy({ where: { id: productIdToFind } })

            .then(() => {
                return res.redirect('/list')
            })
            .catch(error => res.send(error))
    },

    search: (req, res) => {
        const productToFind = req.query.word;

        db.Product.findAll({
            where: { product_name: { [Op.like]: `%${productToFind}%` } },
            include: [
                "product_colors", "product_compatibilities"
            ]
        }).then(article => {

            res.render('products/productList', { article, siteTitle: 'Resultado de la búsqueda', user: req.session.userLogged })
        })
    }
}

module.exports = productController;