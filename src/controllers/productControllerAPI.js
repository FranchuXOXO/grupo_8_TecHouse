const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require("../../db/models");
const { response } = require('express');

const controller = {
    productsCount: (req, res) => {
        db.Product.findAll({
            include: ["product_compatibilities"],
            attributes: {
                exclude: ["product_image", "id_color", "product_price"]
            }
        })
            .then(products => {
                let count1 = 0;
                let count2 = 0;
                
                products.forEach(product => {    
                    product.setDataValue('URLdetail', 'http://localhost:3000/Detalle/' + product.id);
                });

                products.forEach (product => {
                    if (product.id_compatibility == 1)
                    count1++;
                    else if (product.id_compatibility == 2)
                    count2++;
                });

                const response = {
                    meta: {
                        status: 200,
                        count: products.length,
                    },
                    countByCategory: {
                        Alexa: count1,
                        Siri: count2,
                    },
                    data: products  
                }
                return res.json (response);
            })
            .catch ((err) => {
                return res.send(err);
            });
    },
    productArray: (req, res) => {
        const productIdToFind = req.params.id;

        db.Product.findByPk(productIdToFind, {
            include: ["product_compatibilities", "product_colors"]
        })
            .then(product => {
                const response = {
                    meta: {
                        status: 200,
                    },
                    product,
                    URLimage: ""
                }
                return res.json(response);
            })
            .catch ((err) => {
                return res.send(err);
            })   
    },
    userImage: (req, res) => {
        db.Client.findByPk({
            include: ["client_category"]
        })
            .then(userImage => {
            res.sendFile("/images/users/" + userImage.profile_image)
            })
            .catch ((err) => {
                return res.send(err);
            });
    },
    productsCountPages: (req, res) => {
        let pageId = Number(req.params.id);
        let limit = 2;  // ingresamos cantidad de registros según el largo de la página
        let offset = 0;

        if (pageId == 0) {
            offset = pageId;
        }
        else {
            offset += limit;
        }

        db.Product.findAll({
            include: ["product_compatibilities"],
            attributes: {
                exclude: ["product_image", "id_color", "product_price"]
            },
            limit: limit,
            offset: offset
        })
            .then(products => {
                let count1 = 0;
                let count2 = 0;
                products.forEach (category => {
                    if (category.id_compatibility == 1)
                    count1++;
                    else if (category.id_compatibility == 2)
                    count2++;
                })
                const response = {
                    meta: {
                        status: 200,
                        count: products.length,
                    },
                    countByCategory: {
                        Alexa: count1,
                        Siri: count2,
                    },
                    data: products,
                    detail: ""
                }
                return res.json (response);
            })
            .catch ((err) => {
                return res.send(err);
            });
    }
}

module.exports = controller;