const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const db = require("../../db/models");
const { response } = require('express');

const controller = {
    // método (GET) para renderizar la vista de Login
    usersCount: (req, res) => {
        db.ClientAPI.findAll()
        .then(users => {
            console.log(users);
            const response = {
                meta: {
                    status: 200,
                    total: users.length,
                },
                data: users
            }
            return res.json (response);
        })
        .catch ((err) => {
            return res.send(err);
        })
    },
    usersArray: (req, res) => {
        db.Client.findByPK({
            include: ["client_category"]
        })
        .then(user => {
            const response = {
                meta: {
                    status: 200,
                },
                user: {
                    id: user.id,
                    firstname: user.first_name,
                    lastname: user.last_name,
                    profile_image: "/users/image",
                    email: user.email
                }
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