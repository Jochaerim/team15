function login() {
  var id = document.querySelector('id');
  var pw = document.querySelector('pw');
  var pw = document.querySelector('login');

  if(id.value == "" || pw.value == "") {
    alert("로그인할 수 없습니다.");
  }
  else {
    location.href='main.html';
  }
}

function back() {
  history.go(-1);
}
