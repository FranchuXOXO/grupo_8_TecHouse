const bcryptjs = require('bcryptjs');
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
        })
    },
    productArray: (req, res) => {
        const userIdToFind = req.params.id;
        db.Client.findByPk( userIdToFind,
          {  attributes: {
                exclude: ["password", "id_category"]
            }
        })
        .then(user => {
            const response = {
                meta: {
                    status: 200,
                },
                user
            }
            return res.json (response);
        })
        .catch ((err) => {
            return res.send(err);
        })   
    },
    userImage: (req, res) => {
        db.Client.findByPK({
            include: ["client_category"]
        })
        .then(userImage => {
          res.sendFile("/images/users/" + userImage.profile_image)
        })
        .catch ((err) => {
            return res.send(err);
        }) 
    }
}
module.exports = controller;