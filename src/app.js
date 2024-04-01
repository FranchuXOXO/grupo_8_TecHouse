const express = require("express")
const path = require("path")

const app = express()

const publicPath = path.resolve(__dirname, "../public")

const rutasIndex = require("./routes/indexRoutes")
const rutasProduct = require("./routes/productRoutes")
const rutasUser = require("./routes/userRoutes")
const rutasUsersAPI = require("./routes/userRoutesAPI")
const rutasProductsAPI = require("./routes/productRoutesAPI")

const methodOverride = require("method-override")
const session = require("express-session")
const cookies = require("cookie-parser")

app.use(express.static(publicPath))
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(
  session({
    secret: "Nombre del sitio",
    resave: false,
    saveUninitialized: true,
  })
)
app.use(cookies())

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.listen(3001, () => {
  console.log("Servidor corriendo - http://localhost:3001")
})

app.use("/", rutasIndex)

app.use("/", rutasProduct)

app.use("/", rutasUser)

app.use("/api/", rutasUsersAPI)

app.use("/api/", rutasProductsAPI)

// redireccionamiento a vista por error HTTP 404
app.use((req, res, next) => {
  res.status(404).render("error404", {
    title: "Ups...",
  })
})
