function esCurioso(numero){//Pide un numero por parametro
    //Lo transforma a STRING para poder iterar sobre sus numeros
    let strNum = String(numero);
    let resultado = 0 
    // se recorre strNum (variable STRING del numero que se le ha pasado por parametros)
    for(let num of strNum)
        //Se le añade a resultado la suma de cada digito elevado a 3 
        resultado += parseInt(Math.pow(num,3))
    //Comprueba si coincide con el numero si es asi devuelve true si no false
    if (resultado === numero){
        return true
    }else{
        return false
    }
}
let numerosCuriosos = [];
let i = 0

while(numerosCuriosos.length<5){
    if(esCurioso(i)){
        numerosCuriosos.push(i)
    }
    i++;
}
//Alert con el resultado

alert(
    numerosCuriosos
)