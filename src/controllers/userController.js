const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult, check } = require('express-validator');



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
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
        created.password = bcryptjs.hashSync(req.body.password, 10);
        
        res.send (users)
    },

    loginMethod: (req, res) => {
      
        let errors = validationResult(req);
        console.log(errors)
        // console.log('Hasta aca esta bien')
        if (errors.isEmpty()) {
            console.log('Hasta aca esta bien')
            // No hay errores, seguimos adelante.
            } else {
                res.render('login', { errors: errors.mapped(), old: req.body });
                console.log('Hasta aca esta bien')
            }
    }
}

module.exports=logReg