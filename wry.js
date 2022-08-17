//星空之上的alert
function 告()
	{
	alert("公告是啥？懒得写了——郑明也是明！！郑明东宁省，省会承天府，乃我大明疆土！")
	}
function 八阿哥(){
	for (var i=0;i<8;i++){
		alert("胤禩")
	}
}

//获取时间
function 实时(){
var today=new Date();
var y=today.getFullYear();
var M=today.getMonth();
var m=M+1;
var d=today.getDate();
var Ty=y+2697;
var Tm=0;
var Td=0;
if (m==2){
		if (d>3){
		Tm=1;
		Td=d-3;
    	}
		else
		{
	Ty=y+2696;
    	Tm=12;
		Td=d+27;
		}
    }
else if (m==3){
	if(y%4==0&&y%100!=0||y%400==0){
    	if (d>6){
		Tm=2;
		Td=d-6;
    	}
		else
		{
    	Tm=1;
		Td=d+25;
		}
　　}
	else{
		if (d>5){
		Tm=2;
		Td=d-5;
    	}
		else
		{
    	Tm=1;
		Td=d+26;
		}
　　}
}
else if (m==4){
		if (d>4){
		Tm=3;
		Td=d-4;
    	}
		else
		{
    	Tm=2;
		Td=d+26;
		}
    }
else if (m==5){
		if (d>4){
		Tm=4;
		Td=d-4;
    	}
		else
		{
    	Tm=3;
		Td=d+26;
		}
    }
else if (m==6){
		if (d>4){
		Tm=5;
		Td=d-4;
    	}
		else
		{
    	Tm=4;
		Td=d+26;
		}
    }
	else if (m==7){
		if (d>5){
		Tm=6;
		Td=d-5;
    	}
		else
		{
    	Tm=5;
		Td=d+26;
		}
    }
	else if (m==8){
		if (d>4){
		Tm=7;
		Td=d-4;
    	}
		else
		{
    	Tm=6;
		Td=d+26;
		}
    }
else if (m==9){
		if (d>4){
		Tm=8;
		Td=d-4;
    	}
		else
		{
    	Tm=7;
		Td=d+27;
		}
    }
else if (m==10){
		if (d>4){
		Tm=9;
		Td=d-4;
    	}
		else
		{
    	Tm=8;
		Td=d+26;
		}
    }
else if (m==11){
		if (d>4){
		Tm=10;
		Td=d-4;
    	}
		else
		{
    	Tm=9;
		Td=d+27;
		}
    }
else if (m==12){
		if (d>4){
		Tm=11;
		Td=d-4;
    	}
		else
		{
    	Tm=10;
		Td=d+26;
		}
    }
else if (m==1){
	Ty=y+2696;
		if (d>4){
		Tm=12;
		Td=d-4;
    	}
		else
		{
    	Tm=11;
		Td=d+27;
		}
    }
	
	var 地支;
	var 季节;
	switch (Tm){
 		case 1:地支="寅";季节="孟春";
        break;
  		case 2:地支="卯";季节="仲春";
        break;
        	case 3:地支="辰";季节="季春";
   	break;
  		case 4:地支="巳";季节="孟夏";
    	break;
  		case 5:地支="午";季节="仲夏";
        break;
  		case 6:地支="未";季节="季夏";
    	break;
		case 7:地支="申";季节="孟秋";
    	break;
		case 8:地支="酉";季节="仲秋";
    	break;
		case 9:地支="戌";季节="季秋";
    	break;
		case 10:地支="亥";季节="孟冬";
    	break;
		case 11:地支="子";季节="仲冬";
    	break;
		case 12:地支="丑";季节="季冬";
    	break;
 	}
	
 var Tweek=Td%5;
 var 候序;
 	switch (Tweek){
 		case 1:候序="候一";
        break;
  		case 2:候序="候二";
        break;
        	case 3:候序="候三";
   	break;
  		case 4:候序="候四";
    	break;
  		case 0:候序="候五";
        break;
 	}
	var h=today.getHours();
	var min=today.getMinutes();
	var s=today.getSeconds();// 在小于10的数字前加一个‘0’
	min=checkTime(min);
	s=checkTime(s);
        document.getElementById('中华龙历日期').innerHTML="现在是：中华龙历"+Ty+"年<br>"+Tm+"("+地支+")月"+Td+"日 "+h+":"+min+":"+s;
	document.getElementById('西元日期及时间').innerHTML="西元"+y+"年"+m+"月"+d+"日";
if(m==8&&d==17){
  document.getElementById('句子').innerHTML="hi yo and this is a test<br>特定日期会有小彩蛋哦~<br>——魏若瑜";  
}
else if(m==1&&d==16){
  document.getElementById('句子').innerHTML="今天是我生日哦~<br>(〃'▽'〃)(*^▽^*)<br>——魏若瑜";
}
else if(Tm==1&&Td==1){
  document.getElementById('句子').innerHTML="新年(立春)快乐！！！<br>——魏若瑜";
}
else if(m==3&&d==24){
  var birthy=y-1103;
  document.getElementById('句子').innerHTML="纪念岳飞诞辰"+birthy+"周年！<br>——魏若瑜";
}
else if(Tm==3&&Td==1){
  document.getElementById('句子').innerHTML="清明安康。。<br>——魏若瑜";
}
else if(m==5&&d==20){
  var happeny=y-1645;
  document.getElementById('句子').innerHTML="520安康。。。o(╥﹏╥)o<br>"+happeny+"年前的今天扬州十日开始<br>纪念那些不屈的先辈们！！<br>——魏若瑜";
}
else if(m==7&&d==4){
  var happeny=y-1927;
  document.getElementById('句子').innerHTML="纪念陈延年烈士牺牲"+happeny+"周年<br><s>说了多少遍我没有和你们在讨论世界史啊</s><br>——魏若瑜";
}
else if(m==9&&d==1){
  document.getElementById('句子').innerHTML="开学了哦~<br>——魏若瑜";
}
else if(m==10&&d==1){
  document.getElementById('句子').innerHTML="??ヽ(°▽°)ノ?<br>==普天同庆==<br>??ヽ(°▽°)ノ?";
}
else if(m==10&&d==10){
  var happeny=y-1911;
  document.getElementById('句子').innerHTML="纪念辛亥革命(武昌起义)"+happeny+"周年<br>致敬革命先烈！！<br>——魏若瑜";
}
else if(m==11&&d==11){
  document.getElementById('句子').innerHTML="赶紧去买买买吧~<br>——魏若瑜";
}
	t=setTimeout(function(){实时()},500);
}
function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}

//正文伸缩
function 全伸(){
伸甲子();
伸乙丑();
伸丙寅();
伸丁卯();
伸戊辰();
伸已巳();
}
function 全屈(){
屈甲子();
屈乙丑();
屈丙寅();
屈丁卯();
屈戊辰();
屈已巳();
}
function 伸甲子(){
	var x=document.getElementsByClassName("内容-甲子");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="block";
                 };
}
function 屈甲子(){
	var x=document.getElementsByClassName("内容-甲子");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="none";
                 };
}
function 伸乙丑(){
	var x=document.getElementsByClassName("内容-乙丑");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="block";
                 };
}
function 屈乙丑(){
	var x=document.getElementsByClassName("内容-乙丑");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="none";
                 };
}
function 伸丙寅(){
	var x=document.getElementsByClassName("内容-丙寅");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="block";
                 };
}
function 屈丙寅(){
	var x=document.getElementsByClassName("内容-丙寅");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="none";
                 };
}
function 伸丁卯(){
	var x=document.getElementsByClassName("内容-丁卯");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="block";
                 };
}
function 屈丁卯(){
	var x=document.getElementsByClassName("内容-丁卯");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="none";
                 };
}
function 伸戊辰(){
	var x=document.getElementsByClassName("内容-戊辰");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="block";
                 };
}
function 屈戊辰(){
	var x=document.getElementsByClassName("内容-戊辰");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="none";
                 };
}
function 伸已巳(){
	var x=document.getElementsByClassName("内容-已巳");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="block";
                 };
}
function 屈已巳(){
	var x=document.getElementsByClassName("内容-已巳");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="none";
                 };
}

//背景四色选择
function W()
{
	x=document.getElementById("text");
		x.style.backgroundColor="white"; 
	    x.style.color="#24292e"; 
}
function Y()
{
	x=document.getElementById("text");
		x.style.backgroundColor="#e0e0ca"; 
	    x.style.color="black";    
}
		function G()
{
	x=document.getElementById("text");
		x.style.backgroundColor="#cae8ca"; 
	    x.style.color="#24292e"; 
}
			function B()
{
	x=document.getElementById("text");
		x.style.backgroundColor="black"; 
	    x.style.color="#e0e0ca";
}

//背景图片轮播
            $(function() {
                var numpic = $('#scrollimg img').size() - 1;
                var nownow = 0;
                var inout = 0;
                var TT = 0;
                var SPEED = 5000;
                var imgclomns = $('#scrollimg').find('img');
                var imgtxt = $('#imgtxt').find('div.pic_info');
            
                function Scroll() {
                    var LL = nownow - 1;
                    if (numpic >= 1) {
                        if (nownow < numpic) {
                            imgclomns.eq(LL).fadeOut();
                            imgtxt.eq(LL).hide();
                            imgclomns.eq(nownow).fadeIn(400);
                            imgtxt.eq(nownow).fadeIn(800);
                            nownow++;
                        } else {
                            imgclomns.eq(LL).fadeOut();
                            imgtxt.eq(LL).hide();
                            imgclomns.eq(nownow).fadeIn(400);
                            imgtxt.eq(nownow).fadeIn(800);
                            nownow = 0;
                        }
                    } else {
                        imgclomns.eq(0).fadeIn(700);
                        imgtxt.eq(0).fadeIn(1000);
                        window.clearInterval(TT);
                    }
                }
                Scroll();
                TT = setInterval(Scroll, SPEED);
            })

//页脚的alert
    function 未完()
	{
	alert("害 老娘还没做呢~（魏若瑜你个大鸽子！！！）")
	}
function 星聊()
	{
	alert("害 不都说了吗 去星聊找我呀~（你不会真的以为我有本事做出这两个页面吧）")
	}
function 纸片君()
	{
	alert("就是写eb和鱼的报复计划的大佬，哦对她的博客很好看但是屑玄微不会抄awa~分号；")
	}
function 朽木自雕()
	{
	alert("就是建星弈的大佬，还有她卖云服务器（据她自己说很便宜？）")
	}

//回到顶部（起）
window.onscroll = function () {
    if (document.documentElement.scrollTop + document.body.scrollTop > 400) {
        document.getElementById("top").style.display = "block";
    }
    else {
        document.getElementById("top").style.display = "none";
    }
}
function 起(){
document.body.scrollTop = document.documentElement.scrollTop = 0;
}
