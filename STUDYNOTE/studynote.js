

window.onload = function(){
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
     
            field.innerHTML += `${key} ==> ${localStorage.getItem(key)}` + "<br>";
      }

}

var date = new Date();
var time = String(date.getFullYear()+"/"+date.getMonth()+"/" +date.getDate()+" " +date.getHours()+":"+date.getMinutes());
var text="";

function start() {

    text = "시작!!!";
    var field = document.getElementById("field");
 
        localStorage.setItem(time,text);


        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            if(key == time){
                field.innerHTML += `${key} ==> ${localStorage.getItem(key)}` + "<br>";

            }
          }
}


function end() {

    text ="종료!!!"
    
    var field = document.getElementById("field");

    localStorage.setItem(time,text);
  
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        if(key == time){
            field.innerHTML += `${key} ==> ${localStorage.getItem(key)}` + "<br>";

        }
      }
}

function reset(){

    var field = document.getElementById("field");

    localStorage.clear();
    alert("모든 기록이 삭제되었습니다.");
    field.innerHTML="";


}