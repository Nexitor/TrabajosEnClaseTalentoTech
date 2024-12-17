
const http = require('http')

const hostname = "localhost"
const port = 3000

const server = http.createServer( (req,res) => {

    console.log( req )

    if(req.method == "GET"){
        
        let file = ""

        if(req.url == '/'){
            file = "pagl.html"
        }else{
            file = req.url
        }
        
        console.log(`file: ${file}`)

        res.statusCode = 200
        res.setHeader( "Content-Type", "text/html" )
        res.end( "<html><head><title> M P V </title></head><body><h1>  M P V </h1></body></html>" )
    }else{
        res.statusCode = 400
        res.setHeader( "Content-Type", "text/html" )
        res.end( "<html><head><title> M P V </title></head><body><h1> METODO NO PERMITIDO </h1></body></html>" )
    }
} )

server.listen( port,hostname, () => {

    console.log( `Server running at http://${hostname}:${port}/` )
    
} )



