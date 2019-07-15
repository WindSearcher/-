var tabs = document.getElementById('tabs');


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