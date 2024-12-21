var petDB = "http://localhost:3000/"

function getPets() {

    fetch(petDB + "mcta/getAllMascotas", {
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

    var pData = {
        Nommas: document.getElementById("name").value
    }


    fetch(petDB + "mcta/getMascotaXnombre", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pData)
    })
        .then((rta1) => { return (rta1.json()) })
        .then((rta) => {

            if (rta.rta === "ER") {

                document.getElementById("name").value = ""
                document.getElementById("race").value = ""
                document.getElementById("gen").value = ""
                document.getElementById("recom").value = ""

                document.getElementById("rtaMyPet").innerHTML = rta.data.msg

            } else {
                document.getElementById("race").value = rta.data.Raza
                document.getElementById("gen").value = rta.data.Genero
                document.getElementById("recom").value = rta.data.Recomendaciones

                document.getElementById("rtaMyPet").innerHTML = "Aquí va la rta"
                
            }



        }
        )
        .catch((err) => {
            document.getElementById("rtaMyPet").innerHTML = err
        })

}
