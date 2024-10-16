let boton = document.getElementById("addItemBtn");

function agregar(){
    let input = document.getElementById("newItemInput");
    if (input.value!=""){
    let ul = document.getElementById("itemsList");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    let botonBorrar = li.appendChild(document.createElement("img"));
    botonBorrar.classList.add('deleteBtn');
    botonBorrar.src = "https://cdn-icons-png.flaticon.com/512/58/58326.png";
    let botoncomp = li.appendChild(document.createElement("img"));
    botoncomp.classList.add('completeBtn');
    
    ul.appendChild(li);
    input.value = "";
}else{
    alert("Agregue un valor")
}
    
}