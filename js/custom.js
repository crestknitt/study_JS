
// 변수 선언
var id = document.querySelector('#id');
var pw= document.querySelector('#pw');
var pwC= document.querySelector('#pw-c');
var pwImg= document.querySelector('#pw-img');
var pwCImg= document.querySelector('#pw-c-img');

var email= document.querySelector('#email');
var tel= document.querySelector('#tel');

var yy= document.querySelector('#yy');
var mm= document.querySelector('#mm');
var dd= document.querySelector('#dd');

var userC= document.querySelector('#user-check');
var join= document.querySelector('#join');
var error= document.querySelectorAll('.error');

// 핸들러 연결
//이 경우는 실시간 검증이 되지 않습니다. html input 요소의 onkey event를 이용하면 실시간 검증이 됩니다.
//다른 요소들도 마찬가지겠죠.
//id.addEventListener("change",checkId);
id.onkeyup = checkId
pw.addEventListener("change",checkPw);
pwC.addEventListener("change",comparePw);
email.addEventListener("change",checkEmail);
// yy.addEventListener("change",isBirthCompleted);//정의되지 않은 function은 binding하지 말아야 합니다. -> script error
// mm.addEventListener("change",isBirthCompleted);
// dd.addEventListener("change",isBirthCompleted);
// tel.addEventListener("change",checkPhoneNum);
userC.addEventListener("change",checkUser);
join.addEventListener("change",checkJoin);

// //정규표현식 패턴
// var idPattern = /[a-zA-Z0-9_-]{5,20}/;
// var pwPattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
// var yearPattern = /[0-9]{4}/;
// var datePattern = /\d{1,2}/; //d가 뭐야
// var datePattern = /[a-z0-9]{2,}@[a-z0-9-]{2,0}\.[a-z0-9]{2,}]/ ;
// var isPhoneNum =/([01]{2,})([01679]{1,0})([0-9]{4})/;

// var namePattern = /[a-zA-Z가-힣]/;

// 콜백함수들
function checkId() {
  // var idPattern = /[a-zA-Z0-9_-]{5,20}/;
  var idPattern = /^[a-zA-Z]+[a-zA-Z0-9_-]{5,19}$/; //알파벳으로 시작하고, 알파벳 또는 숫자,_,-로 구성되어 끝나는, 6~20자 이내의 아이디
  console.log(idPattern.test(id.value));//콘솔 로그를 출력 -> 향후 어떤 데이터의 실제 값을 보고 싶으면 이와 같이 하시면 확인 할 수 있습니다.
  if (id.value === "") {
    error[0].innerHTML="필수 정보입니다.";
    error[0].style.color = "#FF0068";
    id.style.border = "1px solid #FF0068";
    // error[0].style.display="block";
  } else if(!idPattern.test(id.value)) {
    error[0].innerHTML = "5~20자 영문 소문자, 숫자, (-), (_)만 사용 가능합니다.";
    id.style.border = "1px solid #FF0068";
    error[0].style.color = "#FF0068";
    // error[0].style.display="block";
  } else{
    error[0].innerHTML="멋진 아이디네요!";
    error[0].style.color = "#0023a0";
    // error[0].style.display="block";
  }
}

function checkPw() {
  var pwPattern = /[a-zA-Z0-9~!@#$%^&*()_+{}|:]{8,16}/;
  if(pw.value === ""){
    pw.style.border = "1px solid #FF0068";
    error[1].innerHTML="필수정보 입니다.";
    pwImg.src="images/password-red.png";
    pwImg.style.opacity="1";
    // error[1].style.display="block";
  } else if(!pwPattern.test(pw.value)) {
    error[1].innerHTML="8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
    pwImg.src="images/password-red.png";
    pw.style.border = "1px solid #FF0068";
    pwImg.style.opacity="1";
    // error[1].style.display="block";
  } else {
    pwImg.src="images/password-blue.png";
    // error[1].style.display="block";
    pwImg.style.opacity="1";
  }
}

function comparePw() {
  if(pwC.value===pw.value) {
    pwCImg.src = "images/pwcheck-blue.png";
    pwCImg.style.opacity="1";
  } else if(pwC.value !== pw.value) {
    pwCImg.src = "images/pwcheck-red.png";
    pwC.style.border = "1px solid #FF0068";
    pwCImg.style.opacity="1";
    error[2].innerHTML="비밀번호가 일치하지 않습니다.";
  }
}

function checkEmail() {
  var emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  // var emailPattern = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/;
  if(email.value===""){
    error[3].innerHTML="필수정보 입니다.";
    email.style.border = "1px solid #FF0068";
  } else if(!emailPattern.test(email.value)){
    error[3].innerHTML="이메일 형식이 잘못되었습니다.";
    email.style.border = "1px solid #FF0068";
  } else {
    //로직이 없으므로 else 구문은 불필요합니다.
    return;
  }
}

function checkUser() {

}
function checkJoin() {

}


