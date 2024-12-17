

function miMascota( pn,pe,pr ) {
    this.nombre = pn ;
    this.edad   = pe ;
    this.raza   = pr ;
}

function misMascotas() {
    let m1 = new miMascota( "Pulgas",3,"Canequero" ) ;
    let m2 = new miMascota( "Perros",14,"Canchoso" ) ;
    let m3 = new miMascota( "ratones",2,"Hamster" ) ;

    let arr = [] ;

    arr.push( m1 ) ;
    arr.push( m2 ) ;
    arr.push( m3 ) ;

    for( let i=0 ; i < arr.length ; i=i+1 ) {
        console.log( "--->PROPIEDADES DEL OBJETO<---" ) ;
        for( let clave in arr[i] ) {
            let obj = arr[i] ;
            console.log( clave + "=" + obj[clave] ) ;
        }
    }
}
function objetos() {

    let persona = {
        nombre: "LAURA",
        edad: 25,
        profesion: "Medico",
        saludar: function() {
            console.log( "Hola estoy en la función del objeto persona" );
        }
    }

    console.log( "persona.edad=" + persona.edad ) ;
    console.log( "persona.profesion=" + persona.profesion );
    persona.saludar() ;
    

    let objPersona = new Object() ;
    objPersona.salon = "222" ;
    objPersona.edificio = "Sede Central UNICUSES" ;
    
    console.log( "objPersona.salon=" + objPersona.salon ) ;
    console.log( "objPersona.edificio=" + objPersona.edificio ) ;

    delete objPersona.salon ;

    console.log( "objPersona.salon=" + objPersona.salon ) ;
    console.log( "objPersona.edificio=" + objPersona.edificio ) ;

    console.log( "------------------------" ) ;
    
    for( let clave in persona ) {
        console.log( "persona." + clave + "=" + persona[clave] ) ;        
    }

}

function saludar() {
    console.log( "Buenas noches" ) ;
}

function pedir_num() {
    let tn = prompt( "Ingrese un numero" ) ;
    let n  = parseInt( tn ) ;

    return( n ) ;
}

function sumar( n1,n2 ) {
    let rta = n1+n2 ;
    return( rta ) ;
}

function ver_rta( x,n1,n2 ) {
    console.log( n1 + " + " + n2 + "=" + x ) ;
}

function desp() {
    console.log( "Hasta la vista" ) ;    
}

function main() {
    saludar() ;
    
    n1 = pedir_num() ;
    n2 = pedir_num() ;
    
    x = sumar( n1,n2 ) ;

    ver_rta( x,n1,n2 ) ;

    desp() ;

    console.log( "FIN" ) ;
}

function vectores4() {

    let vec = [1,2,3,4,5,6,7,8,9,10] ;

    document.write( "Vector original<br>" + vec + "<br>" ) ;

    document.write( "<br>--- ADD ULTIMO ELEMENTO ---<br>" ) ;
    nl = vec.push( 78 ) ;
    document.write( "Vector con push<br>" + vec + "<br>" ) ;
    document.write( "nl=" + nl + "<br>" ) ;

    nl = vec.push( 123 ) ;
    document.write( "Vector con push<br>" + vec + "<br>" ) ;
    document.write( "nl=" + nl + "<br>" ) ;

    document.write( "<br>--- ELIMINA EL ULTIMO ELEMENTO ---<br>" ) ;
    ee = vec.pop() ;
    document.write( "<br>Elemento eliminado:" + ee + "<br>" ) ;
    document.write( "Vector con pop<br>" + vec + "<br>" ) ;

    document.write( "<br>--- ADICIONA UN ELEMENTO AL INICIO ---<br>" ) ;
    nl = vec.unshift( 1234567 ) ;
    document.write( "Vector con unshift<br>" + vec + "<br>" ) ;
    document.write( "nl=" + nl + "<br>" ) ;

    document.write( "<br>--- ELIMINA EL PRIMER ELEMENTO ---<br>" ) ;
    ee = vec.shift() ;
    document.write( "<br>Elemento eliminado:" + ee + "<br>" ) ;
    document.write( "Vector con shift<br>" + vec + "<br>" ) ;

    document.write( "<br>--- BUSCAR UN ELEMENTO y retorna indice ---<br>" ) ;
    ind = vec.indexOf( 3 ) ;
    document.write( "<br>El elemento 3 esta en la pos=" + ind + "<br>" ) ;

    document.write( "<br>--- BUSCAR UN ELEMENTO y retorna ture/false ---<br>" ) ;
    esta = vec.includes( 8 ) ;
    document.write( "<br>El elemento 8 esta en el vector?" + esta + "<br>" ) ;
    esta = vec.includes( 88 ) ;
    document.write( "<br>El elemento 88 esta en el vector?" + esta + "<br>" ) ;
}

/* crear un vector de tamaño 20, e inicializar cada una de las posiciones del vector de la sgte forma:

1. Los elementos con indice par, con el valor de 1
2. Los elementos con indice impar, con el valor de 0
*/

function vectores3() {
    var vec = new Array(20) ;

    for( let vc=0 ; vc < vec.length ; vc=vc+1 ) {
        if( vc%2 == 0 ) {
            vec[vc] = 1 ;
        } else {
            vec[vc] = 0 ;
        }
    }

    document.write( "<br>" + vec + "<br>" ) ;
}


function vectores2() {
    var vec = new Array(10) ;

    cont = 2 ;
    for( let vc=0 ; vc<vec.length ; vc=vc+1 ) {
        vec[ vc ] = cont ;
        cont = cont + 2 ;
    }

    document.write( "<br>" + vec + "<br>" ) ;
}

function vectores() {

    let vec1 = [] ;
    let vec2 = [1,2,3,4,5,6,7,8,9] ;
    let vec3 = [ 5, 3.141516, "hola", {mimascota:"perro"}, ['c','o','l','o','m','b','i','a'] ] ;

    document.write( vec1 + "<br>" ) ;
    document.write( vec2 + "<br>" ) ;
    document.write( vec3 + "<br>" ) ;

    let vec4 = new Array() ;
    let vec5 = new Array( 1,2,3,4,5,6,7,8,9 ) ;
    let vec6 = new Array( 5, 3.141516, "hola", {mimascota:"perro"}, ['c','o','l','o','m','b','i','a'] ) ;
    let vec7 = new Array(10) ;
    
    document.write( vec4 + "<br>" ) ;
    document.write( vec5 + "<br>" ) ;
    document.write( vec6 + "<br>" ) ;

    document.write( "tam vec6=" + vec6.length + "<br>" ) ;
    document.write( "ultimo elemento=" + vec2[ vec2.length - 2 ] + "<br>" ) ;


}

function segura() {
    pwd = prompt( "Contraseña" ) ;

    vcv = 0 ;       // CONTADORA DE VOCALES
    vcc = 0 ;       // CONTADORA DE CONSONANTES

    for( i=0 ; i<pwd.length ; i=i+1 ) {
        if( pwd[i] == "a" || pwd[i] == "e" || pwd[i] == "i" || pwd[i] == "o" || pwd[i] == "u" ) {
            vcv = vcv + 1 ;
        } else {
            vcc = vcc + 1 ;
            vcv = 0 ;
        }

        if( vcc >= 3 ) {
            break ;
        }
        if( vcv >= 3 ) {
            break ;
        }
    }

    if( vcv >= 3 ) {
        document.write( "CONTRASEÑA NO SEGURA pq 3VC" ) ;
    } else {
        if( vcc >= 3 ) {
            document.write( "CONTRASEÑA NO SEGURA pq 3CC" ) ;
        } else {
            document.write( "CONTRASEÑA SEGURA" ) ;
        }
    }

}

function deletrear2() {
    txt = prompt( "Nombre" ) ;

    i = 0 ;
    while( i < txt.length ) {
        document.write( "txt[" + i + "]=" + txt[i] + "<br>" ) ;
        i = i+1 ;
    }

}

function deletrear() {
    txt = prompt( "Nombre" ) ;

    for( i=0 ; i < txt.length ; i=i+1 ) {
        document.write( "txt[" + i + "]=" + txt[i] + "<br>" ) ;        
    }
}

function serie() {
    for( vc=0 ; vc <= 100 ; vc=vc+2 ) {
            document.write( vc + "<br>" ) ;
    }
}

function repitela() {
    tnum = prompt( "numero" ) ;
    num  = parseInt( tnum ) ;

    for( vc=1 ; vc <= num ; vc=vc+1 ) {
        document.write( vc + "<br>" ) ;
    }
}

function repetitivas() {

    for( vc=0 ; vc <= 5 ; vc=vc+1 ) {
        document.write( vc + "<br>" ) ;
    }
}

function numeros() {
    tnum = prompt( "numero" ) ;
    num  = parseInt( tnum ) ;

    switch( num ) {
        case 1:
            document.write( "uno<br>" ) ;
            break ;
        case 2:
            document.write( "dos<br>" ) ;
        case 3:
            document.write( "tres<br>" ) ;
        case 4:
            document.write( "cuatro<br>" ) ;
        case 5:
            document.write( "cinco<br>" ) ;
            break ;
        default:
            document.write( "no se que numero es" ) ;
    }
}

function numeros1() {
    tnum = prompt( "numero" ) ;
    num  = parseInt( tnum ) ;

    if( num == 1 ) {
        document.write( "uno" ) ;
    } else {
        if( num == 2 ) {
            document.write( "dos" ) ;
        } else {
            if( num == 3 ) {
                document.write( "tres" ) ;
            } else {
                if( num == 4 ) {
                    document.write( "cuatro" ) ;
                } else {
                    if( num == 5 ) {
                        document.write( "cinco" ) ;
                    } else {
                        document.write( "no se que numero es" ) ;
                    }
                }
            }
        }
    }
}

function login() {
    user = prompt("Ingrese su usuario" ) ;

    user = user.toLowerCase() ;
    
    if( user == "admin") {
        document.write( "Hola mi querido ADMINISTRADOR del sistema" ) ;
    } else {
        document.write( "No eres el ADMINISTRADOR" ) ;
    }
}

function texto2() {
    tnum = prompt("numero") ;
    num  = parseInt( tnum ) ;

    if( num == 5 ) {
        document.write( "es 5<br>" ) ;
    }

    if( num != 5 ) {
        document.write( "no soy 5<br>")
    }

    document.write( "<br>FIN<br>" )
}

function texto1() {
    txt  = prompt("cual es su nombre") ;

    subcad = txt.substr( 5,3 ) ;
    document.write( txt + ":" + subcad + "<br>" ) ;

    subcad2 = txt.substring( 5,8 ) ;
    document.write( txt + ":" + subcad2 + "<br>" ) ;
}

function ver() {
    num1 = prompt("num1");
    n1 = parseInt( num1 ) ;

    num2 = prompt("num2");
    n2 = parseInt( num2 ) ;

    rta = n1 + n2;

    document.write( "Suma:" + rta ) ;
}

function cadena() {
    txt = prompt("cual es su nombre") ;

    cancar = txt.length ;
    document.write( "cancar=" + cancar + "<br>" ) ;

    txtmin = txt.toLowerCase() ;
    document.write( "txt:" + txtmin + "<br>") ;

    txtmay = txt.toUpperCase() ;
    document.write( "txt:" + txtmay + "<br>") ;
}


function despues() {

    document.getElementById("cambiar").addEventListener('mouseover',function(){
        this.style.color = "coral" ;
    });

    document.getElementById("cambiar").addEventListener('click',function(){
        this.style.color = "blue" ;
    });

}