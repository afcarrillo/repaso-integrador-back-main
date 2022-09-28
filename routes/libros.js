const librosRouter = require("express").Router();
const Libros = require("../models/libros");

// ruta get all
librosRouter.get("/", (req, res) => {
  Libros.findAll().then((libros) => res.status(200).send(libros));
});

// ruta get one
librosRouter.get("/:id", (req, res) => {
  Libros.findOne({ where: { id: req.params.id } }).then((libro) =>
    res.status(200).send(libro)
  );
});

// ruta get all starting with 'character'
librosRouter.get("/titulo/:character", (req, res) => {
  Libros.findStartsWith(req.params.character).then((libros) =>
    res.send(libros)
  );
});

// ruta get all by autor
librosRouter.get("/autor/:name", (req, res) => {
  Libros.findOne({ where: { autor: req.params.name } })
    .then((libro) => libro.findByAuthor())
    .then((librosAutor) => res.send(librosAutor));
});

// ruta post crear registros
librosRouter.post("/", (req, res) => {
  Libros.create(req.body).then((libros) => res.status(201).send(libros));
});

//ruta put
librosRouter.put("/:id", (req, res) => {
  Libros.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then(([affectedRows, updatedLibro]) =>
    res.status(202).send(updatedLibro[0])
  );
});

//ruta delete
librosRouter.delete("/:id", (req, res) => {
  Libros.destroy({ where: { id: req.params.id } }).then(() =>
    res.status(204).send()
  );
});

module.exports = librosRouter;
