const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require("../../db/models");
const { response } = require('express');

const controller = {
    // método (GET) para renderizar la vista de Login
    usersCount: (req, res) => {
        db.Client.findAll({
            attributes: {
                exclude: ["password", "id_category", "profile_image", "last_name"]
            }
        })
        .then(users => {
            console.log(users);
            const response = {
                meta: {
                    status: 200,
                    count: users.length,
                },
                data: users,
                detail: ""
            }
            return res.json (response);
        })
        .catch ((err) => {
            return res.send(err);
        })
    },
    usersArray: (req, res) => {
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