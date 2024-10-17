let boton = document.getElementById("addItemBtn");

function agregar(){
    let input = document.getElementById("newItemInput");
    if (input.value!=""){
    let ul = document.getElementById("itemsList");
    const li = document.createElement("li");
    li.textContent = input.value;
    //botones
    let botonBorrar = li.appendChild(document.createElement("img"));
    botonBorrar.classList.add('deleteBtn');
    botonBorrar.src = "https://cdn-icons-png.flaticon.com/512/58/58326.png";
    let botoncomp = li.appendChild(document.createElement("img"));
    botoncomp.classList.add('completeBtn');
    botoncomp.src= "pngegg.png"
    //eventListener 
    botoncomp.addEventListener("click", () => {
        li.style.textDecoration = "line-through"; // Tachamos el texto al marcarlo como completado
    });
    botonBorrar.addEventListener("click",()=>{
        li.remove()
    });

    ul.appendChild(li);
    input.value = "";
}else{
    alert("Agregue un valor")
}
    
}
