
const express = require('express') ;
const morgan  = require('morgan') ;
const path    = require('path') ;
const bp      = require('body-parser') ;
const cors    = require('cors')

const hostname = "localhost" ;
const port     = 3000 ;

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
