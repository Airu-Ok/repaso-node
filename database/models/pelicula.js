module.exports = function(sequelize, dataTypes){

    let alias = "pelicula"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        awards: {
            type: dataTypes.INTEGER
        },
        rating: {
            type: dataTypes.DOUBLE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id:{
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        }
    }

    let config = {
        tableName: "movies",
        timestamps: false
    }
    let pelicula = sequelize.define(alias, cols, config);

    pelicula.associate = function(models){
        pelicula.belongsTo(models.genero, {
            as: "genero",
            foreignKey: "genre_id"
        });

            pelicula.belongsToMany(models.actor, {
                as: "actores",
                through: "actor_movie",
                foreignKey: "movie_id",
                otherKey: "actor_id",
                timestamps: false
            });
    }


    return pelicula;
}