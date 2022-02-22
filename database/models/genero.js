module.exports = function(sequelize, dataTypes){

    let alias = "genero"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "genres",
        timestamps: false
    }
    let genero = sequelize.define(alias, cols, config);

    genero.associate = function(models){
        genero.hasMany(models.pelicula, {
            as: "peliculas",
            foreignKey: "genre_id"
        });
    }

    return genero;
}