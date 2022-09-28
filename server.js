const express = require("express");
const app = express();
const db = require("./db"); //carpeta de configuracion de db
const routes = require("./routes"); //carpeta routes
const Libros = require("./models/libros"); //models importados para que node los lea
//parseador
app.use(express.json());
//routas
app.use("/api", routes);

//sincronizacion de db
db.sync({ force: false }).then(() => {
  app.listen(3001, () => console.log("server levantado en puerto 3001"));
});

module.exports = app;
