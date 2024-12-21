
module.exports = function(app) {

    const ctrlMascota = require('../controlador/cmascota')

    app.route('/mcta/getAllMascotas')
        .get( ctrlMascota.getAllMascotas ) ;

    app.route('/mcta/getMascotaXnombre/:pnom')
        .get( ctrlMascota.getMascotaXnombre ) ;

    app.route( '/mcta/addMascotaXmp' )
        .get( ctrlMascota.addMascota )
        .post( ctrlMascota.addMascotaXmp ) ;
}

    