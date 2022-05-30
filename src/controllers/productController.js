const fs = require('fs');
const path = require('path');
const { sequelize } = require('../../db/models');

const { validationResult } = require('express-validator');

// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../../db/models");
const Op = db.Sequelize.Op;
const operatorsAliases = {
    $like: Op.like
}

const controller = {
    detail: (req, res) => {
        const productIdToFind = req.params.id;
        
        db.Product.findByPk(productIdToFind,
            {
                include: [
                    "product_colors", "product_compatibilities"
                ]
            }).then(article =>
                res.render('products/detail', { article, siteTitle: 'Detalle del producto', user: req.session.userLogged })
            )
            .catch((err) => {
                return res.send(err);
            });
    },

    buy: (req, res) => {
        const productIdtoBuy = req.params.id;
        db.Product.findByPk(productIdtoBuy,
                {
                    include: [
                        "product_colors", "product_compatibilities"
                    ]
                }
            )
            .then(article => { 
                userID = req.session.userLogged.id;
                db.Sale.create(
                    { 
                        id_product: article.id,
                        id_client: userID
                    }
                )
                .then(() => {
                    return res.redirect('/cart');
                    // return res.render('products/cart', { siteTitle: 'Carrito de compras', user: req.session.userLogged })
                })
                .catch((err) => {
                    return res.send(err);
                });
            })
            .catch((err) => {
                return res.send(err);
            });
    },

    cart: (req, res) => {
        /* 1.Necesito el ID del usuario*/
        const userId = req.session.userLogged.id;

        /* 2.Necesito consultar que productos tiene el usuario en la tabla "sales" con un findAll(where: ID del usuario) */
        db.Sale.findAll({
                where: {
                    id_client: userId
                },
                include: [
                    "sale_products"
                ]
        })
            .then(article => {
                /* 4.Hay que incluir el total de precio por el carrito según la suma de los precios de los productos incluidos */
                let suma = 0;
                article.forEach(sumador => {
                    suma += sumador.sale_products.product_price
                })
                 /* 3.Necesito visualizar en la vista los productos del carrito actual (tabla "sales") */
                res.render("products/cart", { article, suma, siteTitle: "Carrito de compras", user: req.session.userLogged })
            })
            .catch((err) => {
                return res.send(err);
            });
    },

    removeItem: (req, res) => {
        db.Sale.destroy({
            where: {
                id: req.params.id,
                id_client: req.session.userLogged.id,
            }
        })
            .then(() => {
                return res.redirect('/cart');
            })
            .catch((err) => {
                return res.send(err);
            });
    },
    
    emptyCart: (req, res) => {
        /* 5.Hay que colocar un botón de eliminar para borrar el contenido del carrito con un destroy(where: ID del usuario) */
        const userId = req.session.userLogged.id;
        db.Sale.destroy({
            where: {
                id_client: userId
            }
        })
            .then(() => {
                return res.redirect('/cart');
            })
            .catch((err) => {
                return res.send(err);
            });
    },

    checkout: (req, res) => {
        /* 6.Hay que colocar un botón de comprar para el carrito y mandarte hacia Mercado Pago */
        const userId = req.session.userLogged.id;
        db.Sale.destroy({
            where: {
                id_client: userId
            }
        })
            .then(() => {
                return res.render("users/cartPost", {
                    siteTitle: "Gracias por tu compra", 
                    user: req.session.userLogged
                });
            })
            .catch((err) => {
                return res.send(err);
            });
    },

    create: (req, res) => {
        res.render("products/create", {
            siteTitle: "Manejo de Stock"
        });
    },

    store: (req, res) => {
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
            res.render('products/create', { errors: errors.mapped(), old: req.body, siteTitle: "Formulario de creación de productos" });
        }
    },

    list: (req, res) => {
        db.Product.findAll({
            include: [
                "product_colors", "product_compatibilities"
            ]
        })
            .then(article => {
                res.render("products/list", { article, siteTitle: "Lista de Productos", user: req.session.userLogged })
            })
            .catch((err) => {
                return res.send(err);
            });
    },

    edit: (req, res) => {
        let idProducto = req.params.id;
        
        const result = db.Product.findByPk(idProducto, {
            include: [
                "product_colors", "product_compatibilities"
            ]
        })
            .then(productToEdit => {
                if (productToEdit != null)
                    res.render("products/edit", { productToEdit, siteTitle: "Edición del producto", user: req.session.userLogged })
                else
                    res.send("Este producto no existe en la base de datos")
            })
            .catch((err) => {
                return res.send(err);
            });
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
                    res.render('products/edit', { errors: errors.mapped(), productToEdit, old: req.body, siteTitle: "Formulario de edición de productos" })
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

            res.render('products/list', { article, siteTitle: 'Resultado de la búsqueda', user: req.session.userLogged })
        })
    }
}

module.exports = controller;