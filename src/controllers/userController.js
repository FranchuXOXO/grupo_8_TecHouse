const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator');

const logReg = {
    logMethod: (req, res) => {
        res.render("users/login", {
            siteTitle: "Login",
        });
    },

    regMethod: (req, res) => {
        res.render("users/signup", {
            siteTitle: "Signup",
        });
    },

    createMethod: (req, res) => {
        const created = req.body
        lastId = users[users.length - 1].id + 1;
        created.id = lastId
        users.push(created)
        created.image = req.file.filename
        created.password = bcryptjs.hashSync(req.body.password, 10);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))

        res.send(users) //Para arreglar
    },

    loginMethod: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            console.log("Valide si errores");
            const userLogCheck = users.find((user) => user.email == req.body.email);
            if (userLogCheck) {
                let isOkThePassword = bcryptjs.compareSync(req.body.password, userLogCheck.password);
                if (isOkThePassword) {
                    delete userLogCheck.password;
                    // Probamos session y cookies
                    req.session.userLogged = userLogCheck;
                    console.log(userLogCheck);

                    if (req.body.remember_user) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                    }
                    // Hasta acá es la prueba
                    //return res.render('users/profile', { user: req.session.userLogged, siteTitle: "Perfil" });
                    logReg.profile(req, res)
                }
                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: 'La contraseña es invalida'
                        }
                    }, siteTitle: "Login"
                }
                );
            }
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'El usuario es inválido'
                    }
                }, siteTitle: "Login"
            }
            )
        } else {
            res.render('users/login', { errors: errors.mapped(), old: req.body, siteTitle: "Login" });
        }
    },
    profile: (req, res) => {
        
	 res.render('users/profile', {
			user: req.session.userLogged,
            siteTitle: "Perfil"
		});
	
    }

}

module.exports = logReg