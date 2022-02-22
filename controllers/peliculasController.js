let db = require("../database/models");

let = peliculasController = {
    crear: function(req, res){
        db.genero.findAll()
        .then(function (generos){

            //una vista - views/creacionPeliculas
            return res.render("creacionPeliculas",
            {generos:generos});
        })
    },
    guardar: function(req, res){
        db.pelicula.create({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.feha,
            genre_id: req.body.genero,
            rating: req.body.rating,
            length: req.body.duracion

        });

        res.redirect("/peliculas");
    },

    listado: function(req, res){
        db.pelicula.findAll()
        .then(function(peliculas){
            res.render("listadoPeliculas",
            {peliculas: peliculas})
        })
    },
    detalle: function(req, res){
        db.pelicula.findByPk(req.params.id, {
            include: [{
                association: "genero"
            },
            {
                association: "actores"
            }]
        })
        .then(function(pelicula){
            res.render("detallePelicula", 
            {pelicula: pelicula});
        })
    },
    editar: function(req, res){
        let pedidoPelicula = db.pelicula.findByPk(req.params.id);

        let pedidoGeneros = db.genero.findAll();

        Promise.all([pedidoPelicula, pedidoGeneros])
        //Cuando se terminan las dos promesas ejecutar:
        .then(function([pelicula, generos]){
            res.render("editarPelicula", 
            {pelicula:pelicula,
            generos: generos});
        })
    },
    actualizar: function(req, res){
        db.pelicula.update({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.feha,
            genre_id: req.body.genero,
            rating: req.body.rating,
            length: req.body.duracion

        },
        {
            where: { id: req.params.id}
        });
        res.redirect("/peliculas/" + req.params.id)
    },
    borrar: function(req, res){
        db.pelicula.destroy({
            where: {id: req.params.id}
        })
        res.redirect("/peliculas")
    }

}

module.exports = peliculasController; 