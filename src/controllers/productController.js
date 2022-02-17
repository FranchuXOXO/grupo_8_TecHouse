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
        res.render("products/productCreate", {
            siteTitle: "Manejo de Stock"
        });
    },

    createProduct: (req, res) => {
        let producto = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            color: req.body.color,
            categoria: req.body.categoria,
            precio: req.body.precio
        }

        return res.send(producto);
    }
}

module.exports = productCont;