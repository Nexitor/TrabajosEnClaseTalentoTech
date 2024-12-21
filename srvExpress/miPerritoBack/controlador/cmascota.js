exports.getAllMascotas = (req,res) => {

    var misMascotas = [
	{
		"id": 1,
		"Nommas": "León",
		"Raza": "Panthera leo",
		"Genero": "1",
		"Recomendaciones": "El león es conocido como el rey de la selva, vive en manadas y tiene un rugido impresionante."
	},
	{
		"id": 2,
		"Nommas": "Tigre",
		"Raza": "Panthera tigris",
		"Genero": "1",
		"Recomendaciones": "El tigre es un cazador solitario que se caracteriza por sus rayas negras sobre un pelaje anaranjado."
	},
	{
		"id": 3,
		"Nommas": "Elefante africano",
		"Raza": "Loxodonta africana",
		"Genero": "2",
		"Recomendaciones": "El elefante africano es el animal terrestre más grande, con orejas grandes y una trompa versátil."
	},
	{
		"id": 4,
		"Nommas": "Pingüino emperador",
		"Raza": "Aptenodytes forsteri",
		"Genero": "1",
		"Recomendaciones": "El pingüino emperador es conocido por su marcha en el hielo y su resistencia en el frío extremo."
	},
	{
		"id": 5,
		"Nommas": "Cebra",
		"Raza": "Equus quagga",
		"Genero": "2",
		"Recomendaciones": "La cebra es famosa por su pelaje a rayas negras y blancas, único para cada individuo."
	},
	{
		"id": 6,
		"Nommas": "Oso polar",
		"Raza": "Ursus maritimus",
		"Genero": "1",
		"Recomendaciones": "El oso polar es un excelente nadador y caza principalmente focas en el hielo marino."
	},
	{
		"id": 7,
		"Nommas": "Koala",
		"Raza": "Phascolarctos cinereus",
		"Genero": "1",
		"Recomendaciones": "El koala es un marsupial que pasa la mayor parte del tiempo durmiendo en árboles."
	},
	{
		"id": 8,
		"Nommas": "Delfín nariz de botella",
		"Raza": "Tursiops truncatus",
		"Genero": "1",
		"Recomendaciones": "El delfín nariz de botella es conocido por su inteligencia y comportamiento social."
	},
	{
		"id": 9,
		"Nommas": "Canguro rojo",
		"Raza": "Macropus rufus",
		"Genero": "2",
		"Recomendaciones": "El canguro rojo es el marsupial más grande y se desplaza saltando con fuerza sobre sus patas traseras."
	},
	{
		"id": 10,
		"Nommas": "Águila calva",
		"Raza": "Haliaeetus leucocephalus",
		"Genero": "Bosques y zonas montañosas de América del Norte",
		"Recomendaciones": "El águila calva es un símbolo nacional de los Estados Unidos, reconocida por su plumaje blanco en la cabeza."
	}
]

    res.json(misMascotas)
} ;

exports.getMascotaXnombre = (req,res) => {

    res.end( '<html><head><title>Express</title></head><body><h1>' + req.params.pnom + '</h1></body></html>' ) ;

} ;

exports.addMascota = (req,res) => {
    console.log( "nombre:" + req.query.nombre ) ;
    console.log( "raza:"   + req.query.raza ) ;
    console.log( "genero:" + req.query.genero ) ;
    console.log( "recomendaciones:" + req.query.recomendaciones ) ;

    res.end( '<html><head><title>Express</title></head><body><h1>' + req.query.nombre + "-" + req.query.raza + '-' + req.query.genero + "-" + req.query.recomendaciones +'</h1></body></html>' ) ;
} ;

exports.addMascotaXmp = (req,res) => {

    console.log( "nombre:" + req.body.nombre ) ;
    console.log( "raza:"   + req.body.raza ) ;
    console.log( "genero:" + req.body.genero ) ;
    console.log( "recomendaciones:" + req.body.recomendaciones ) ;

    res.end( '<html><head><title>Express</title></head><body><h1>' + req.body.nombre + "-" + req.body.raza + '-' + req.body.genero + "-" + req.body.recomendaciones +'</h1></body></html>' ) ;
} ;
