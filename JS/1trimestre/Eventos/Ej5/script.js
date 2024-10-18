let boton = document.getElementById("addTaskBtn");
let input = document.getElementById("newTaskInput");
let ul = document.getElementById("taskList");
boton.addEventListener("click",()=>{
    const valor = input.value;
    if (valor===""){
        alert("Escribe algo no puede estar vacio");
        return;
    }
    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.setAttribute("class","deleteBtn")
    delBtn.innerHTML = "X"
    li.innerHTML= "<p>"+valor+"</p>";

    delBtn.addEventListener("click",()=>{
        li.remove();
    })

    ul.appendChild(li);
    li.appendChild(delBtn);

    input.value = "";
})