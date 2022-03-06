const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const loginValid = (req, res, next) => {
    const userLogCheck = users.find((user) => user.email == req.body.email);
    console.log(userLogCheck);

    if(userLogCheck) {
    let isOkThePassword = bcryptjs.compareSync(req.body.password, userLogCheck.password);
        if (isOkThePassword) {
            return res.render('users/profile', {userLogCheck, siteTitle: "Perfil" } );
            } 
            return res.render('users/login', {
                errors: {
                            email: {
                                msg: 'Las credenciales son inválidas'
                            }
                        }, siteTitle: "Login"}
            );
    }
    return res.render('users/login', {
        errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }, siteTitle: "Login"}
    )
}

module.exports = loginValid;