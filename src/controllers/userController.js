const logReg = {
    logMethod: (req, res) => {
        res.render("users/login");
    },

    regMethod: (req, res) => {
        res.render("users/signup");
    }
}
module.exports=logReg