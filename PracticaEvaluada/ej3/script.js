//Alfabetos en un objeto donde se puede añadir sin problemas otro
// Se pueden añadir nuevos alfabetos fácilmente como pares clave-valor.
const alfabetos = {
    ingles: "abcdefghijklmnopqrstuvwxyz",
    castellano: "abcdefghijklmnñopqrstuvwxyz",
};

/**
 * Comprueba si el valor de rotación está dentro de los límites permitidos para un alfabeto.
 *
 * @param {string} alfabeto - Alfabeto utilizado.
 * @param {number} rot - Número de rotaciones a aplicar.
 * @returns {boolean} - Devuelve `true` si está fuera de los límites; `false` en caso contrario.
 */
function fueraLimites(alfabeto, rot) {
    const max = alfabeto.length - 1;
    return rot < 0 || rot > max;
    //si es menor que 0 o sobrepasa el max(depende el alfabeto) devuelve true
}

/**
 * Cifra o descifra un texto utilizando un alfabeto y un número de rotaciones.
 *
 * @param {string} texto - Texto de entrada a procesar.
 * @param {string} alfabeto - Alfabeto utilizado para la rotación.
 * @param {number} rot - Número de rotaciones (desplazamientos) a aplicar.
 * @returns {string} - Resultado del texto procesado.
 */
function procesarTexto(texto, alfabeto, rot) {
    //Simple if que llama a la funcion anterior fueraLimites() para saber si el rot esta dentro o fuera
    //en caso de que este fuera simplemente devuelve el mensaje y termina
    if (fueraLimites(alfabeto, rot))
        return "¡Lo siento esta fuera de los limites VUELVE A INTENTAR!"


    let resultado = "";//lo que va a devolver al final el programa

    const longitud = alfabeto.length;//importante para saber hasta donde llega para poder dar la vuelta

    for (const char of texto.toLowerCase()) {//Bucle for que recorre cada caracter del texto introducido
        const indice = alfabeto.indexOf(char);//asignar el indice (la posición de ese caracter) en el alfabeto
        if (indice !== -1) {//si el caracter se encuentra dentro del alfabeto te devuelve la posicion, si no lo encuentra devuelve -1
            let nuevoIndice = (indice - rot + longitud) % longitud;//cosigues el indice nuevo restandole la rotación pertinente (si se pasa de limites por ejemplo "-3" se te suma de nuevo la longitud -1)
            resultado += alfabeto[nuevoIndice];//y a nuestra string resultado se le añade ese nuevo caracter
        } else {
            resultado += char; //si no encuentra ese caracter dentro del alfabeto,lo pone tal cual
        }
    }

    return resultado;//devuelve el resultado
}


//consigues del formulario todos los values correspondiente
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const idioma = document.getElementById("idiomas").value;
        const texto = document.getElementById("texto").value;
        // si no pones nada por defecto 0
        const rot = parseInt(document.getElementById("ROT").value) || 0;
        //accede al objeto "alfabetos" y obtiene de dentro el value de la key que coincida con "idioma"
        const alfabeto = alfabetos[idioma];
        //LLAMADA PRINCIPAL
        const resultado = procesarTexto(texto, alfabeto, rot);
        //Pinta en el span con id "resultado", el resultado que te de la funcion principal
        document.getElementById("resultado").textContent = resultado;
    });
});