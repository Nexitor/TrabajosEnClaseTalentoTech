
var mongoose = require('mongoose')

var paseador = new mongoose.Schema(
    {
        Nombre:          {type:String, required:"El nombre es requerido"},
        Email:          {type:String, required:"El email es requerido"},
        Recomendaciones: {type:String, required:"La recomendacion es requerida"},

    }
)

module.exports = mongoose.model( 'Mascota', miMascota )

