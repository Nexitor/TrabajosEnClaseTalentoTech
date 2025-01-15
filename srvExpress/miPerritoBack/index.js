
const mongoose = require('mongoose')

const express = require('express') ;
const morgan  = require('morgan') ;
const path    = require('path') ;
const bp      = require('body-parser') ;
const cors    = require('cors')

const hostname = "localhost" ;
const port     = 3000 ;

// Se configura la conexion a la bd de mongoDB

var bdURL = "mongodb://127.0.0.1:27017/bdMiPerrito"
mongoose.connect(bdURL)

// Eventos de la base de datos

mongoose.connection.on('connected'   , () => {console.log(`Conexion realizada a mongoDB: ${bdURL}`)} )
mongoose.connection.on('error'       , (err) => {console.log(`NO hay conexion a mongoDB: ${err}`)} )
mongoose.connection.on('disconnected', (msg) => {console.log(`Desconectado de mongoDB: ${msg}`)} )

process.on('SIGNIN', () => {
    mongoose.connection.close( () => {
        console.log("Conexion a mongoDB terminada por finalización del servidor")
        process.exit(0)
    })
})


//******************************************** */
const app = express() ;

app.use(morgan('dev')) ;
app.use( bp.json() ) ;
app.use(cors())

require( './rutas/rmascota' )(app) ;

app.use( express.static( path.join( __dirname + '/public' ) ) ) ;

app.use( (req,res) => {
    res.statusCode = 200 ;
    res.setHeader('Content-Type', 'text/html') ;
    res.end('<html><head><title>Express</title></head><body><h1>HOLA MUNDO EXPRESS</h1></body></html>') ;
} ) ;

app.listen( port,hostname, () => {
    console.log(`Servidor en ejecución en http://${hostname}:${port}/`) ;
} )
