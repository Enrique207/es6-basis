function toprint (c) {
    console.log(c)
}

//callback: funcion a ejecutar dentro de sumar

function sumar(a, b, callback){
    callback(a + b)
}


let resultado=0;

//ejecutar: llamar a sumar

sumar(1099, 1 ,toprint (resultado) )