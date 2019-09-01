var type = 'yule';
var page = 1;
var apics = document.querySelectorAll('.mainPage .ad .banner-slide');
var aspots = document.querySelectorAll('.mainPage .ad .spot span');
var lis = document.querySelector('.content>ul');
var pre = document.querySelector('.fresh .pre');
var next = document.querySelector('.fresh .next');

var tabs = document.getElementById('tabs');


/*
* 获得滑动距离
* */
function getScroll()
{
    var top, left, width, height;

    if (document.documentElement && document.documentElement.scrollTop) {
        top = document.documentElement.scrollTop;
        left = document.documentElement.scrollLeft;
        width = document.documentElement.scrollWidth;
        height = document.documentElement.scrollHeight;
    } else if (document.body) {
        top = document.body.scrollTop;
        left = document.body.scrollLeft;
        width = document.body.scrollWidth;
        height = document.body.scrollHeight;
    }
    return { 'top': top, 'left': left, 'width': width, 'height': height };
}


//滑动监听事件
window.addEventListener('scroll',function(){
    var scrollTop = getScroll().top;
    var winWidth;
    console.log("scrollTop:"+scrollTop);
    if (window.innerWidth)
        winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth;

    if(scrollTop >= 200) {
        if (tabs)
            tabs.className = 'tabs fixed';

        else
            alert("捕获为空");
    }
    else
        tabs.className='tabs';
})


//第几张图片
var times = 0;
console.log('apics:'+apics.length+' aspots:'+aspots.length);
setInterval(function(){
    times++;
    if(times >= apics.length)
        times = 0;
    changeImg();
},2000);

//轮播图
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

/*
* 从后台获得数据
* */
function getNews(page){
    ajax({
        url:'http://114.116.123.150:15000/getjuhenews',
        type:'GET',
        data:{
            page:page,
            type:type
        },
        dataType:'json',
        success:function(e){
            console.log(e);
            lis.innerHTML = '';
            for(var i = 0;i < e['result']['data'].length;++i) {
                //创建一个新li
                console.log("ctime:"+e['result']['data'][i].date);
                var li = document.createElement('li');
                // if(e['newslist'][i].description == '网易明星' || e['newslist'][i].description == 'A5智能'){
                //     e['newslist'][i].picUrl =  '//inews.gtimg.com/newsapp_ls/0/9678638275_294195/0';
                // }
                //"'
                li.innerHTML = '<a href="'+e['result']['data'][i].url+'">'+'<div class="info"><p>'+e['result']['data'][i].title+'</p>' +
                    '<div class="root-sec"> <span class="root">'+e['result']['data'][i].author_name+'</span> <span class="time">'+e['result']['data'][i].date+'</span>'+
                    '</div></div><div class="image"><img src="'+e['result']['data'][i].thumbnail_pic_s+'">'+'</div></a>';
                lis.append(li);
            }
        }
    })
}

window.onload = function(){
    getNews(page);
}

//点击上一页
pre.addEventListener('click',function(){
    page--;
    if(page < 1)
    {
        page = 1;
        pre.disabled = true;
        pre.style.backgroundColor = '#ccc';
    }
    else
        getNews(page);
})

//下一页
next.addEventListener('click',function(){
    if(page == 1){
        pre.disabled = false;
        pre.style.backgroundColor = '#c00';
    }
    page++;
    getNews(page);
})

