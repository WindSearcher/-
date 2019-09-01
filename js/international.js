var tabs = document.getElementById('tabs');
var type = 'world';
var page = 1;
var lis = document.querySelector('.content>ul');
var pre = document.querySelector('.fresh .pre');
var next = document.querySelector('.fresh .next');

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


window.addEventListener('scroll',function(){
    var scrollTop = getScroll().top;
    var winWidth;
    console.log("scrollTop:"+scrollTop);
    if (window.innerWidth)
        winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth;

    if(scrollTop >= 230) {
        if (tabs)
            tabs.className = 'tabs fixed';

        else
             alert("捕获为空");
    }
    else
        tabs.className='tabs';
})


function getNews(page){
    ajax({
        url:'http://114.116.123.150:15000/getnews',
        type:'GET',
        data:{
            page:page,
            type:type
        },
        dataType:'json',
        success:function(e){
            console.log(e);
            lis.innerHTML = '';
            for(var i = 0;i < e['newslist'].length;++i) {
                //创建一个新li
                console.log("ctime:"+e['newslist'][i].ctime);
                var li = document.createElement('li');
                if(e['newslist'][i].description == '网易明星' || e['newslist'][i].description == 'A5智能'){
                    e['newslist'][i].picUrl =  '//inews.gtimg.com/newsapp_ls/0/9678638275_294195/0';
                }
                //"'
                li.innerHTML = '<a href="'+e['newslist'][i].url+'">'+'<div class="info"><p>'+e['newslist'][i].title+'</p>' +
                    '<div class="root-sec"> <span class="root">'+e['newslist'][i].description+'</span> <span class="time">'+e['newslist'][i].ctime+'</span>'+
                    '</div></div><div class="image"><img src="'+e['newslist'][i].picUrl+'">'+'</div></a>';
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


next.addEventListener('click',function(){
    if(page == 1){
        pre.disabled = false;
        pre.style.backgroundColor = '#c00';
    }
    page++;
    getNews(page);
})

