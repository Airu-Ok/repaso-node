var express = require('express');
var router = express.Router();
var peliculasController = require("../controllers/peliculasController")

// Creación de peliculas.

router.get("/crear", peliculasController.crear);

router.post("/crear", peliculasController.guardar);

//Lectura

router.get("/", peliculasController.listado);

//Detalle

router.get("/:id", peliculasController.detalle);

//Actualización

router.get("/editar/:id", peliculasController.editar);
router.post("/editar/:id", peliculasController.actualizar);

//Borrar

router.post("/borrar/:id", peliculasController.borrar);

module.exports = router;