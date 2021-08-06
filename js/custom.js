
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
id.addEventListener("change",checkId);
pw.addEventListener("change",checkPw);
pwC.addEventListener("change",comparePw);
email.addEventListener("change",checkEmail);
yy.addEventListener("change",isBirthCompleted);
mm.addEventListener("change",isBirthCompleted);
dd.addEventListener("change",isBirthCompleted);
tel.addEventListener("change",checkPhoneNum);
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
  var idPattern = /[a-zA-Z0-9_-]{5,20}/;
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
    return;
  }
}

function checkUser() {
  
}
function checkJoin() {

}


