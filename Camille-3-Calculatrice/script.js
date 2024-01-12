
    var zoneResultat = document.querySelector('#resultat')
    var nombre = null

function button(valeur) {
    
    zoneResultat.innerHTML = zoneResultat.innerHTML + valeur;
}

function buttonPlus() {
    zoneResultat.innerHTML = zoneResultat.innerHTML + "+";
   ;
}
function buttonLess() {
    zoneResultat.innerHTML = zoneResultat.innerHTML + "-";
}
function buttonMultiply() {
    zoneResultat.innerHTML = zoneResultat.innerHTML + "*";
}
function buttonDivision() {
    zoneResultat.innerHTML = zoneResultat.innerHTML + "/";
}

function buttonEgal() {
    zoneResultat.innerHTML = eval(zoneResultat.innerHTML);
 }

 function buttonClean(){
    zoneResultat.innerHTML = "";
    
   
}