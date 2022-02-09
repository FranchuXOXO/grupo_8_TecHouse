const productCont={
    detailMethod: 
    (req, res) => {
        res.render("products/Detalle", {
            siteTitle: "Detalle",
        });
    },

    cartMethod: (req, res) => {
        res.render("products/productCart", {
            siteTitle: "Carrito",
        });
    },

    stockMethod: (req, res) => {
        res.render("products/stock", {
            siteTitle: "Manejo de Stock"
        });
    }
}
module.exports=productCont