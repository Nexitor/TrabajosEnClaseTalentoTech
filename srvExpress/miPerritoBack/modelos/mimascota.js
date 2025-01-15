
var mongoose = require('mongoose')

var miMascota = new mongoose.Schema(
    {
        id:              {type:Intl,   required:"El id es requerido"},
        Nommas:          {type:String, required:"El Nombre es requerido"},
        Raza:            {type:String, required:"La raza es requerida"},
        Genero:          {type:String, required:"El genero es requerido"},
        Recomendaciones: {type:String, required:"La recomendacion es requerida"},

    }
)

module.exports = mongoose.model( 'Mascota', miMascota )

