const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');

//const usersFilePath = path.join(__dirname, '../data/users.json');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator');
const db = require("../../db/models")

const logReg = {
    logMethod: (req, res) => {
        res.render("users/login", {
            siteTitle: "Login",
            user: req.session.userLogged
        });
    },

    regMethod: (req, res) => {
        res.render("users/signup", {
            siteTitle: "Signup",
            user: req.session.userLogged
        });
    },

    createMethod: (req, res) => {
        const created = req.body

        created.profile_image = req.file.filename
        created.id_category = Number(created.id_category)
        created.password = bcryptjs.hashSync(req.body.password, 10)
        db.Client.create(created).then(() => {
            return res.send('usuario creado')
        })
            .catch(error => res.send(error))

    },

    loginMethod: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            console.log("Valide si errores");
            db.Client.findOne({ where: { email: req.body.email } }).then((userLogCheck) => {

                if (userLogCheck) {
                    let isOkThePassword = bcryptjs.compareSync(req.body.password, userLogCheck.password);
                    if (isOkThePassword) {
                        delete userLogCheck.password;
                        // Probamos session y cookies
                        req.session.userLogged = userLogCheck;

                        if (req.body.remember_user) {
                            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                        }
                        // Hasta acá es la prueba
                        //return res.render('users/profile', { user: req.session.userLogged, siteTitle: "Perfil" });
                        return logReg.profile(req, res)
                    }
                    return res.render('users/login', {
                        errors: {
                            email: {
                                msg: 'La contraseña es invalida'
                            }
                        }, siteTitle: "Login",
                        user: req.session.userLogged
                    }
                    );
                }
                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: 'El usuario es inválido'
                        }
                    }, siteTitle: "Login",
                    user: req.session.userLogged
                }
                )
            })
                .catch(error => res.send(error));
        } else {
            res.render('users/login', { errors: errors.mapped(), old: req.body, siteTitle: "Login", user: req.session.userLogged });
        }
    },
    profile: (req, res) => {
        const user = req.session.userLogged;
        res.render('users/profile', {
            user,
            siteTitle: "Perfil",
            user: req.session.userLogged
        });

    },
    edit: (req, res) => {
        let idUser = req.params.id;
        console.log(req.session.userLogged)
        if (idUser == req.session.userLogged.id ) {
            db.Client.findByPk(idUser)
                .then(UserToEdit => {

                    if (UserToEdit != null)
                        res.render("users/UserEdit", { UserToEdit, siteTitle: "Edición del usuario", user: req.session.userLogged })
                    else
                        res.send("Este usuario no existe en la base de datos")
                }).catch(error => res.send(error))
        }
        else
            res.send("No pude editar este usuario")
    },


    update: (req, res) => {
        const update = req.body
        db.Client.update(
            {
                first_name: update.first_name,
                last_name: update.last_name,
                profile_image: req.file ? req.file.filename : req.body.oldImagen,
            },
            {
                where: { id: req.params.id }
            }
        ).then(() => {
            return res.send('usuario editado')
        })
            .catch(error => res.send(error))
    }
}

module.exports = logReg