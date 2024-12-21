var petDB = "http://localhost:3000/mcta/getAllMascotas"

function getPets() {

    fetch(petDB, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((rta1) => { return (rta1.json()) })
        .then((rta) => {

            var table = document.getElementById("petsTab").querySelector("tbody")

            for (i = 0; i < rta.length; i++) {
                let tr = document.createElement("tr")
                // Nombre
                let tdNom = document.createElement("td")
                tdNom.innerHTML = rta[i].Nommas
                tr.appendChild(tdNom)
                // Raza
                let tdRace = document.createElement("td")
                tdRace.innerHTML = rta[i].Raza
                tr.appendChild(tdRace)
                // Genero
                let tdGen = document.createElement("td")
                tdGen.innerHTML = rta[i].Genero
                tr.appendChild(tdGen)
                // Recomendaciones
                let tdRecom = document.createElement("td")
                tdRecom.innerHTML = rta[i].Recomendaciones
                tr.appendChild(tdRecom)

                table.appendChild(tr)

            }

        })
        .catch((err) => {
            document.getElementById("rtaMyPet").innerHTML = err
        })

}

function conPet() {

    getPets();

    console.log("FIN")

}

function searchPets() {

    console.log("entre")
    fetch(petDB, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((rta1) => { return (rta1.json()) })
        .then((rta) => {

            let name = document.getElementById("name").value

            for (i = 0; i < rta.length; i++) {
                if (rta[i].Nommas === name) {

                    document.getElementById("name").value = rta[i].Nommas
                    document.getElementById("race").value = rta[i].Raza
                    document.getElementById("gen").value = rta[i].Genero
                    document.getElementById("recom").value = rta[i].Recomendaciones

                }
            }

        })
        .catch((err) => {
            document.getElementById("rtaMyPet").innerHTML = err
        })

}
