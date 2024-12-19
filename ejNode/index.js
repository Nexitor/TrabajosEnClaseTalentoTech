
const http = require('http')
const path = require('path')
const fs = require('fs')

const hostname = "localhost"
const port = 3000

const server = http.createServer((req, res) => {

    if (req.method == "GET") {

        let file = ""

        if (req.url == '/') {
            file = "pagl.html"
        } else {
            file = req.url
        }

        var pathFile = path.resolve(`./public/${file}`)
        var extFile = path.extname(pathFile)

        console.log(`file: ${pathFile}`)
        console.log(`ext: ${extFile}`)


        if (extFile == "html") {
            fs.exists(pathFile, (e) => {
                if (e) {
                    res.statusCode = 200
                    res.setHeader("Content-Type", "text/html")
                    fs.createReadStream(pathFile).pipe(res)
                } else {
                    res.statusCode = 404
                    res.setHeader("Content-Type", "text/html")
                    res.end("<html><head><title> M P V </title></head><body><h1>  M P V </h1></body></html>")
                }
            })
        }else {
            res.statusCode = 405 ;
            res.setHeader( "Content-Type", "text/html" ) ;
            res.end( "<html><head><title> M P V </title></head><body><h1>  METODO NO PERMITIDO </h1></body></html>" ) ;
        }

    } else {
        res.statusCode = 405
        res.setHeader("Content-Type", "text/html")
        res.end("<html><head><title> M P V </title></head><body><h1> METODO NO PERMITIDO </h1></body></html>")
    }
})

server.listen(port, hostname, () => {

    console.log(`Server running at http://${hostname}:${port}/`)

})
