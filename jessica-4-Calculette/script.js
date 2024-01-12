function addValue(value){
    var operation = document.querySelector('#display')
    operation.value += value;
}
function remove(){
    var operation = document.querySelector('#display');
    operation.value = operation.value.slice(0, -1);
}
function resultat(){
    var operation = document.querySelector('#display');
    operation.value = eval(operation.value)
}