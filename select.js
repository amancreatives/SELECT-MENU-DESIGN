let selectField = document.querySelector("#selectField");
let selectText = document.querySelector("#selectText");
let options = document.querySelectorAll(".options");
var apps = document.querySelector("#apps");
let arrow = document.querySelector("#arrow");

selectField.onclick = function(){
    apps.classList.toggle("hide");
    arrow.classList.toggle("rotate"); 
}


for(i of options){
    i.onclick = function(){
        selectText.innerHTML = this.textContent;
        apps.classList.toggle("hide"); 
        arrow.classList.toggle("rotate"); 
    }
}