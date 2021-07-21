var req = new XMLHttpRequest();//전체 페이지의 새로고침 없이도 URL로부터 데이터를 받아올 수 있다. 현재 웹페이지의 사용되는 것에 방해 없이 
                                // 페이지의 일부를 업데이트하는 것이 가능(모든 종류의 데이터 가능, HTTP이외의 프로토콜도 지원)
req.open("GET","./json/image_list.json"); //open() : 새로 생성된 요청을 초괴하거나 기존 요청을 다시 초기화  abort() : 요청이 이미 전송된 경우 어떤 조건에 의해 요청을 중단
//GET방식으로 이미지리스트가 있는 json파일에서 이미지를 불러온다.

req.onreadystatechange = function(){  //onreadystatechange : 속성이 변경 될 때마다 호출되는 이벤트 핸들러 
    if( this.readyState == 4){ //모든 데이터가 정상적으로 불러와졌을 때
       // console.log(this.response);

       var data = JSON.parse(this.response);
       for( var i = 0 ; i < data.length ; i++){
           var div = document.createElement("div"); //div태그를 생성하여 변수에 저장
           div.setAttribute("class","image") //div의 class 명을 image로 설정
           div.onclick = function() {
               if( this.getAttribute("class").indexOf("image-selected") == -1){ //클릭했을 때 image-selcted 클래스명이 존재하지 않는다면
                this.setAttribute("class","image image-selected"); //클릭했을 때 image-selected를 추가해준다. 
               }else{ //존재한다면 삭제
                   this.setAttribute("class","image");
               }
           }

           var img = document.createElement("img");
           img.src = data[i]; //리스트에서 하나씩 꺼내와서 이미지 태그의 주소에 넣어줌
           div.appendChild(img); //div태그 안에 img태그 추가
           document.body.appendChild(div); //body태그에 div 추가
       }
    }
}
req.send();