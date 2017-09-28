var count = 4 


function addList(){
var item = document.getElementById("Animals").value
var list = "<li>" + item + "</li>";
document.getElementById("Animals List").insertAdjacentHTML('beforeend', list)
document.getElementById("Animals").value = ""

count = count + 1
document.getElementById('span').innerHTML = count

}