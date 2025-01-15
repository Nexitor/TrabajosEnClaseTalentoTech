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
            table.innerHTML = "";

            for (i = 0; i < rta.info.length; i++) {
                let tr = document.createElement("tr")
                // Nombre
                let tdNom = document.createElement("td")
                tdNom.innerHTML = rta.info[i].Nommas
                tr.appendChild(tdNom)
                // Raza
                let tdRace = document.createElement("td")
                tdRace.innerHTML = rta.info[i].Raza
                tr.appendChild(tdRace)
                // Genero
                let tdGen = document.createElement("td")
                tdGen.innerHTML = rta.info[i].Genero
                tr.appendChild(tdGen)
                // Recomendaciones
                let tdRecom = document.createElement("td")
                tdRecom.innerHTML = rta.info[i].Recomendaciones
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

function deletePets() {

    var pData = {
        Nommas: document.getElementById("name").value
    }


    fetch(petDB + "mcta/deleteMascotaXnombre", {
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

                document.getElementById("rtaMyPet").innerHTML = `Se elimino ${pData.Nommas} con exito`

                getPets()

            }



        }
        )
        .catch((err) => {
            document.getElementById("rtaMyPet").innerHTML = err
        })

}
