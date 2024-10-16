const frasesFrikis = [
    "¡Hay 10 tipos de personas en el mundo, las que entienden binario y las que no!",
    "¿Ya probaste apagando y volviendo a encender?",
    "Sin bugs no hay diversión... ¡Esas son las reglas!",
    "En teoría, la práctica y la teoría son lo mismo. En la práctica, no.",
    "Tu código es tan bonito que debería tener su propio framework.",
    "No es un error, es una característica no documentada.",
    "¡A veces pienso que mis claves de acceso son más seguras que mi casa!",
    "¿Qué es mejor, programar o dormir? Fácil, ¡ambos son sueños!",
    "Un programador se cae en un bucle infinito... ¿Cómo se sale? Break.",
    "El Wi-Fi es como el café, lo necesito para funcionar."
];

const colores = [
"#ff0000", // Rojo
"#00ff00", // Verde
"#0000ff", // Azul
"#ff00ff", // Magenta
"#00ffff", // Cyan
"#ff8000", // Naranja
"#8000ff", // Morado
"#00ff80", // Verde claro
"#ff0080", // Rosa
"#80ff00", // Verde lima
"#0080ff", // Azul claro
"#ffbf00", // Amarillo oscuro
"#bf00ff", // Violeta oscuro
"#00ffbf", // Turquesa
"#bf00ff", // Púrpura
"#00bfff", // Azul claro
"#ff00bf", // Magenta oscuro
"#80ff80", // Verde claro pastel
"#ff80ff", // Rosa pastel
"#80ffff" // Cian claro
];



function getFraseAleatoria(){
    let ind = Math.floor(Math.random() * frasesFrikis.length); 
    return frasesFrikis[ind];
}

function getColorAleatorio(){
    let ind = Math.floor(Math.random() * colores.length); 
    return colores[ind];
}

function cambiarFrase(){
    let texto = document.getElementById("texto-informatica");
    texto.innerHTML= getFraseAleatoria()
    texto.style.color = getColorAleatorio();
    let boton = document.getElementById("ver-mas-boton");
    boton.style.backgroundColor = getColorAleatorio();

}