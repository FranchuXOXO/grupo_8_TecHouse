const productCont={
    detailMethod: 
    (req, res) => {
        res.render("products/Detalle");
    },

    cartMethod: (req, res) => {
        res.render("products/productCart");
    }
}
module.exports=productCont