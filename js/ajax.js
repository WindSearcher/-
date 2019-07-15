/**
 * 
 *//**
 * 
 */

var xmlhttp = null;

function createXHR(){
	if (window.XMLHttpRequest) {
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp = new XMLHttpRequest();
	} else {
		// IE6, IE5 浏览器执行代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
}




function loadXMLDoc(url,params,handler) {
	alert("发起ajax");
	//var queryString = "AjaxDemo?userName="+userName;
	
	/*
	 * 创建XMLHttpRequest对象
	 * */
	createXHR();
	
	/*
	 * 当该对象状态发生变化，则调用该函数
	 * */
	xmlhttp.onreadystatechange = handler;
	
	/*xmlhttp.open("POST", queryString, true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send();*/
	/*
	 * 建立到服务器的连接
	 * */
	
	xmlhttp.open("GET", url+params, true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	/*
	 * 发送请求
	 * */
	xmlhttp.send();
	
}






   
