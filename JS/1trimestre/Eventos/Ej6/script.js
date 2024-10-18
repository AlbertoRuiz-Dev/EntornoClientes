let listaNombres = [];

let input = document.getElementById("inputName");
let ul = document.getElementById("nameList"); 
function addNombres(){
    let valor = input.value;
    listaNombres.push(valor);
    let li = document.createElement("li");
    li.innerHTML = valor;
    li.setAttribute("id",String(listaNombres.length));
    ul.appendChild(li);    input.value = "";
}


let randBtn = document.getElementById("randomBtn");
randBtn.addEventListener("click",()=>{
    let seleccionados =document.getElementsByClassName("selected");
    if(seleccionados[0]!=undefined){
        let ids = seleccionados[0].getAttribute("id");
        listaNombres.pop[ids-1]
        document.getElementById(ids).remove();
    }
    let idAlea= getIDAleatorio();
    let elegido =document.getElementById(idAlea); 
    elegido.setAttribute("class","selected")
    elegido.innerHTML+=" se ha elegido : "+ listaNombres[idAlea-1];    
})

function getIDAleatorio(){
    let ind = Math.floor(Math.random() * listaNombres.length)+1;
    return String(ind); 
}

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",addNombres);