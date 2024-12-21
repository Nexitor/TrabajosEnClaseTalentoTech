
module.exports = function(app) {

    const ctrlMascota = require('../controlador/cmascota')

    app.route('/mcta/getAllMascotas')
        .get( ctrlMascota.getAllMascotas ) ;

    app.route('/mcta/getMascotaXnombre')
        .post( ctrlMascota.getMascotaXnombre );

    app.route('/mcta/deleteMascotaXnombre')
    .post( ctrlMascota.deleteMascotaXnombre );

    app.route( '/mcta/addMascota' )
        .get( ctrlMascota.addMascota )
        .post( ctrlMascota.addMascotaXmp ) ;
}

    