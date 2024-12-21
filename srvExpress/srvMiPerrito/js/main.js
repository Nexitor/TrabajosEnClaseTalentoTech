let petDB = "https://run.mocky.io/v3/b9fc0893-f15f-4967-a73b-16598ac3f787"

function getPets() {

    fetch(petDB, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((rta1) => {return(rta1.json())})
        .then((rta) => {
            document.getElementById("rtaMyPet").innerHTML =JSON.stringify(rta)
            let miMas = rta[2]
            document.getElementById("name").value = miMas.Nommas
            document.getElementById("race").value = miMas.Raza	
            document.getElementById("gen").value = miMas.Genero	

        })
        .catch((err) => {
            document.getElementById("rtaMyPet").innerHTML = err
        })

}

function conPet() {

    getPets();

    console.log("FIN")

}