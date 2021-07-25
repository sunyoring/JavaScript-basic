

function start() {
    var text = document.getElementById("text").value;
    var field = document.getElementById("field");
 
        field.innerHTML += "* "+text + "<br>";
        localStorage.setItem(text);

}