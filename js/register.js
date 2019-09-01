var code = document.querySelector('.message .code');
var tel = document.querySelector('.message #tel');
var submit = document.querySelector('.submit');
var verifyCode = document.querySelector('.message #verifyCode');
var pwd = document.querySelector('.message #pwd');
var _pwd = document.querySelector('.message #_pwd');

var codeNum = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "0","1","2","3","4","5","6","7","8","9"];


window.onload = function(){

}

//产生随机数
function randomNum(){
    var str = "";
    for(var i=0; i<5; i++){
        var index = parseInt(Math.random()*codeNum.length);
        str = str + codeNum[index];
    }
    code.innerText = str;
}

code.addEventListener('click',function(){
    randomNum();
});

tel.onkeydown = function(){
    tel.style.borderBottom = '1px solid #ccc';
}

_pwd.onkeydown = function(){
    _pwd.style.borderBottom = '1px solid #ccc';
}

verifyCode.onkeydown = function(){
    verifyCode.style.borderBottom = '1px solid #ccc';
}

//检查手机号格式
function checkPhone(tel){
    var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
    return reg.test(tel);
}

//检查密码与重复密码是否一致
function checkPassWord(){
    if(pwd.value != _pwd.value){
        return false;
    }
    else
        return true;

}

//检查验证码
function checkVerifyCode(){
    if(code.innerText != verifyCode.value){
        return false;
    }
    else
        return true;
}

/*
* 注册校验
* */
submit.addEventListener('click',function(){
      if(checkPhone(tel.value)){

      }
      else{
          tel.placeholder = '手机号格式错误';
          tel.style.borderBottom = '1px solid red';
      }

      if(checkPassWord()){

      }
      else{
        _pwd.value = "";
        _pwd.placeholder = "密码输入不一致,请重新输入";
        _pwd.style.borderBottom = '1px solid red';
        randomNum();
      }

      if(checkVerifyCode()){

      }
      else{
          verifyCode.value = "";
          verifyCode.placeholder = "验证码错误,请重新输入";
          verifyCode.style.borderBottom = '1px solid red';
      }
});
