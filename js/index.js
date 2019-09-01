
var type = 'top';
//默认第一页
var page = 1;
//用来填充新闻内容
var lis = document.querySelector('.content>ul');
var pre = document.querySelector('.fresh .pre');
var next = document.querySelector('.fresh .next');
var tabs = document.getElementById('tabs');
console.log("lis:"+lis);

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

    if(scrollTop >= 200) {
        if (tabs)
            tabs.className = 'tabs fixed';

        else
            alert("捕获为空");
    }
    else
        tabs.className='tabs';
})


function getNews(page){
    /*调用封装的ajax*/
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
    alert("主要制作了首页，娱乐，国际，体育，视频，登录，注册等页面");
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



