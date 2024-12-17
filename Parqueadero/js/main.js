function park(){

    let cars = new Array()

    let end = true
    
    while(end){
        r = parseInt(prompt(`Actualmente estan parqueados los siguientes carros ${cars}\n
            Que desea hacer?\n
            1 para sacar un carro\n
            2 para ingresar un carro\n
            3 para finalizar`))
        
        switch(r){
            case 1:
                if(cars != []){
                    // CarL = el carro a sacar 
                    // carP = lista de los carros que han salido y deben ingresar nuevamente
                    let carL = prompt(`Que carro desea sacar ?\n
                        ${cars}`)
                    let carP = []
                    
                    if(cars.includes(carL)){
                        while(true){
                            console.log(cars)
                            if(cars[0] != carL){
                                carP.push(cars.shift())
                                alert(`Sacando el carro ${carP[carP.length - 1]} para poder sacar el carro ${carL}\n
                                    Carros en el parqueadero: ${cars}\n
                                    Carros fuera: ${carP}`)
                            }else{
                                cars.shift()
                                alert(`El carro ${carL} ha salido con exito`)
                                for(i=0; i <= carP.length; i){
                                    cars.unshift(carP.pop())
                                    alert(`ingresando el nuevamente el carro ${cars[0]}\n
                                        Carros en el parqueadero:\n 
                                        ${cars}\n
                                        Carros fuera:\n
                                        ${carP}`)
                                    console.log(cars)
                                }
                                alert(`Esta es la nueva organización del parqueadero\n
                                    ${cars}`)
                                break
                            }
                        }
                    }else{
                        alert("El carro ingresado no se encuentra dentro del parqueadero")
                    }
                }else{
                    alert("Aún no ha ingresado ningún carro para poder retirarlo")
                }
                break
            case 2:
                let carN = prompt("Ingrese el numero del carro que desea ingresar")

                if(cars.includes(carN)){
                    alert(`Este carro ya se encuentra ingresado en el parqueadero\n
                        ${cars}`)
                }else{
                    cars.push
                    alert(`Estos son los carros ingresados en el parqueadero\n
                    ${cars}`)
                }
                break
            case 3:
                console.log("Adios")
                end = false
                break
            default:
                alert("Esa opción no existe")
                break

        }
    }

}
