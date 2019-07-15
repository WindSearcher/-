var url = 'http://api.tianapi.com/';
var type = 'generalnews';
var num = 10;
//默认第一页
var page = 1;
//API密钥
var key = '4d2fd5e9e28ec8770fef37563718523b';
var lis = document.querySelectorAll('.content ul');
/*
*  <li>
                      <a href="#">
                          <div class="info">
                              <p>加外长称逮捕孟晚舟“正确”，外交部：加方执意坚持错误立场</p>
                              <div class="root-sec">
                                  <span class="root">澎湃新闻</span>
                                  <span class="time">4小时前</span>
                              </div>
                          </div>
                          <div class="image">
                               <img src="//inews.gtimg.com/newsapp_ls/0/9678638275_294195/0">
                          </div>
                      </a>
                  </li>
* */


// Mock.mock('http://www.bai.com?key=4d2fd5e9e28ec8770fef37563718523b&num=10&page=1',{
//     'url':'https://www.biqukan.com/files/article/image/1/1094/1094s.jpg',
// })


window.onload = function(){
    url += type;
    alert(url);
    $.ajax({
        url:'http://localhost:8080/generalnews',
        type:'GET',
        data:{
            key:key,
            num:10,
            page:page
        },
        dataType:'json',
        success:function(e){
            console.log(e);
        }
    })
}
