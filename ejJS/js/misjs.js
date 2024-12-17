
Element.addEventListener(onclick(), ejVar333)

async function ejVar333() {
    try {
        console.log("hola")
        rta = await creaPromesa()
        console.log(`rta = ${rta}`)
    } catch (e) {
        console.log(e)
    }
}

function callProm2() {
    console.log("ASYNC / AWAIT")
    ejVar333()
    console.log("FIN")
}

function multx2(lst, callback) {
    setTimeout(() => {

        let rta = lst.map(num => num * 2)
        callback(rta)

    }, 5000);
}

function verRta(rta) {
    console.log(`resultado = ${rta}`)
}

function ejVar() {
    let lst = [1, 2, 3, 4, 5]

    multx2(lst, verRta)

    console.log("Fn")
}

const salon = [
    // {
    //     num: 222,
    //     nom: "waira"
    // }
]

function creaPromesa() {
    return (
        new Promise((resolve, reject) => {
            if (salon.length < 1) {
                reject(new Error("El objeto salon no tiene propiedades"))
            }
            setTimeout(() => { resolve("Exito") }, 5000)
        })
    )
}

function fCallPromise() {
    creaPromesa()
        .then((rta) => { console.log(`OK: ${rta}`) })
        .catch((err) => { console.log(`ER: ${err}`) })
    console.log("hola")
}

function selectores() {

    // let miDiv = document.getElementById("miDiv")
    // miDiv.innerHTML = "Te modifique sr. Div"

    // let aClass = document.getElementsByClassName("rojo")

    // for(i=0;i<aClass.length;i++){
    //     aClass[i].style.backgroundColor = "pink"
    // }

    const aTipo = document.getElementsByTagName("div")
    console.log(aTipo)

}

function vectores4() {
    let vec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log("Vector original: ", vec)

    vec.push(502)

    console.log("Vector con un push: ", vec)

}

function texto() {
    txt = prompt("cual es su nombre")
    pos = parseInt(prompt("Elija la posición que desea consultar"))

    document.write(`La posición <font style="color: red;">${pos}</font> 
        en el texto "${txt}" es: 
        <font style="color: red;">${txt[pos]}</font>`)
}

function condicion() {
    num = parseInt(prompt("Ingrese un numero"))

    if (num == 5) {
        console.log("El numero es igual a 5")
    }
    else {
        console.log("El numero es diferente de 5")
    }

}

function login() {

    user = prompt("Ingrese su nombre de usuario")
    user = user.toLowerCase()

    if (user == "admin") {
        console.log("Bienvenido mi querido administrador")
    }
    else {
        console.log("Bienvenido mi querido usuario")

    }

}

function numToText() {

    num = parseInt(prompt("Ingrese un numero para convertirlo a texto"))

    const textos = [
        "cero", "uno", "dos", "tres", "cuatro",
        "cinco", "seis", "siete", "ocho", "nueve"
    ]

    if (num >= 0 && num < textos.length) {
        console.log(textos[num])
    }

}

function numToPromp() {

    num = parseInt(prompt("Ingrese el numero hasta donde quiere crear la lista de numeros"))
    text = (num > 0) ? 1 : 0;


    for (i = 2; i <= num; i++) {
        text += `,${i}`
    }
    console.log(text)

}

function numToPrompPair() {

    num = parseInt(prompt("Ingrese el numero hasta donde quiere crear la lista de numeros"))
    text = (num > 0) ? 2 : 0;


    for (i = 4; i <= num; i += 2) {
        text += `,${i}`
    }
    document.write(text)

}



function ver() {
    num1 = prompt("num1")
    n1 = parseInt(num1)

    num2 = prompt("num2")
    n2 = parseInt(num2)

    rta = n1 + n2

    document.write("Suma:" + rta)
}

function cadena() {
    txt = prompt("cual es su nombre")

    cancar = txt.length
    document.write("cancar=" + cancar + "<br>")

    txtmin = txt.toLowerCase()
    document.write("txt:" + txtmin + "<br>")

    txtmay = txt.toUpperCase()
    document.write("txt:" + txtmay + "<br>")
}


function despues() {

    document.getElementById("cambiar").addEventListener('mouseover', function () {
        this.style.color = "coral"
    })

    document.getElementById("cambiar").addEventListener('click', function () {
        this.style.color = "blue"
    })

}