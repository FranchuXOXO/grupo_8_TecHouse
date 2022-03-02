const bcryptjs = require('bcryptjs');

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
    }
}
module.exports=logReg