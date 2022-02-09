
//cogemos el loogo ha
// document.getElementById("close").onclick = function () { close() };



// function close(){
//     document.getElementById('navegacion').style.display = "none";
// }
let x = document.getElementById("close");
x.onclick = function () { close() };
function close(){
    document.getElementById("navegacion").style.display =none;
}


let open = document.getElementById("open-menu");
open.onclick = function () { abrir() };

function abrir() {
    document.getElementById("navegacion").style.display =flex;
}