var 숫자1 = Math.ceil(Math.random() * 9)
var 숫자2 = Math.ceil(Math.random() * 9)
var 결과 = 숫자1 * 숫자2

var m2 = document.getElementById("m2");
var 문제 = document.getElementById("문제");
문제.textContent = String(숫자1) + "곱하기" + String(숫자2) + "는?";
var 폼 = document.getElementById("폼");
var 버튼 = document.getElementById("버튼");
var 결과창 = document.getElementById("결과창");

폼.addEventListener("submit" , function gugudan(e) {
    e.preventDefault();
 if(결과 === Number(m2.value)) {
     결과창.textContent = "딩동댕"
     숫자1 = Math.ceil(Math.random() * 9);
     숫자2 = Math.ceil(Math.random() * 9);
     결과 = 숫자1 * 숫자2;
     문제.textContent = String(숫자1) + "곱하기" + String(숫자2) + "는?";
     m2.value = '';
     m2.focus();
 }else{
     결과창.textContent="땡";
     m2.value = '';
     m2.focus();
 }
});