
var apics = document.querySelectorAll('.mainPage .ad .banner-slide');
var aspots = document.querySelectorAll('.mainPage .ad .spot span');
//第几张图片
var times = 0;
console.log('apics:'+apics.length+' aspots:'+aspots.length);
setInterval(function(){
    times++;
    if(times >= apics.length)
        times = 0;
    changeImg();
},2000);


function changeImg(){
    console.log('times:'+times);
     apics[times].style.display = 'block';
     aspots[times].style.backgroundColor = 'rgb(140, 141, 144)';
     if(times != 0){
         apics[times-1].style.display = 'none';
         aspots[times-1].style.backgroundColor = '#ccc';
     }
     if(times == 0){
         apics[apics.length-1].style.display = 'none';
         aspots[aspots.length-1].style.backgroundColor = '#ccc';
     }
}

