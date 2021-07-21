
    let target = document.querySelector("#dynamic"); //id가 dynamic인 객체를 가져옴

 function randomString(){
    const StringArr =["Learn to HTML", "Learn to CSS","Learn to JavaScript","Learn to Python", "Learn to Ruby"];
    let selectString = StringArr[Math.floor(Math.random() * StringArr.length)]; //곱한 숫자의 미만 숫자를 랜덤으로 얻어온다. 소수를 절삭처리
    let selectStringArr = selectString.split("");//문자를 잘라서 배열로 만들어준다.
    return selectStringArr
}



function resetTyping(){ //글자가 리셋되는 함수
    target.textContent="";  //객체의 텍스트를 초기화
    dynamic(randomString()); //랜덤으로 글자를 가져오는 함수를 호출하여 인자로 담아서 텍스트 출력함수를 다시 호출 실행시킨다.
}


//한 글자씩 텍스트를 출력시키는 함수
function dynamic(randomArr){
   if(randomArr.length > 0){
      target.textContent += randomArr.shift(); //배열에서 값을 하나씩 빼내온다. 값을 뺀 배열의 길이가 줄어든다.
      setTimeout(function(){ //setTimeout을 통해 글자를 다 꺼내올 때까지 dynamic함수를 계속 실행한다.
        dynamic(randomArr);
      },80)
   }else{
    setTimeout(resetTyping, 3000);  //글자를 다 꺼내오면 글씨를 리셋하는 함수를 3초뒤에 호출한다.
   } 
}
dynamic(randomString()); //초기에 작동될 함수 







function blink() { //커서가 깜빡이는 효과
    target.classList.toggle("active");
}
setInterval(blink,500);

