//�ǿ�֮�ϵ�alert
function ��()
	{
	alert("������ɶ������д�ˡ���֣��Ҳ��������֣������ʡ��ʡ����츮�����Ҵ���������")
	}
function �˰���(){
	for (var i=0;i<8;i++){
		alert("ط�T")
	}
}

//��ȡʱ��
function ʵʱ(){
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
����}
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
����}
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
	
	var ��֧;
	var ����;
	switch (Tm){
 		case 1:��֧="��";����="�ϴ�";
        break;
  		case 2:��֧="î";����="�ٴ�";
        break;
        	case 3:��֧="��";����="����";
   	break;
  		case 4:��֧="��";����="����";
    	break;
  		case 5:��֧="��";����="����";
        break;
  		case 6:��֧="δ";����="����";
    	break;
		case 7:��֧="��";����="����";
    	break;
		case 8:��֧="��";����="����";
    	break;
		case 9:��֧="��";����="����";
    	break;
		case 10:��֧="��";����="�϶�";
    	break;
		case 11:��֧="��";����="�ٶ�";
    	break;
		case 12:��֧="��";����="����";
    	break;
 	}
	
 var Tweek=Td%5;
 var ����;
 	switch (Tweek){
 		case 1:����="��һ";
        break;
  		case 2:����="���";
        break;
        	case 3:����="����";
   	break;
  		case 4:����="����";
    	break;
  		case 0:����="����";
        break;
 	}
	var h=today.getHours();
	var min=today.getMinutes();
	var s=today.getSeconds();// ��С��10������ǰ��һ����0��
	min=checkTime(min);
	s=checkTime(s);
        document.getElementById('�л���������').innerHTML="�����ǣ��л�����"+Ty+"��<br>"+Tm+"("+��֧+")��"+Td+"�� "+h+":"+min+":"+s;
	document.getElementById('��Ԫ���ڼ�ʱ��').innerHTML="��Ԫ"+y+"��"+m+"��"+d+"��";
if(m==8&&d==17){
  document.getElementById('����').innerHTML="hi yo and this is a test<br>�ض����ڻ���С�ʵ�Ŷ~<br>����κ���";  
}
else if(m==1&&d==16){
  document.getElementById('����').innerHTML="������������Ŷ~<br>(��'��'��)(*^��^*)<br>����κ���";
}
else if(Tm==1&&Td==1){
  document.getElementById('����').innerHTML="����(����)���֣�����<br>����κ���";
}
else if(m==3&&d==24){
  var birthy=y-1103;
  document.getElementById('����').innerHTML="�������ɵ���"+birthy+"���꣡<br>����κ���";
}
else if(Tm==3&&Td==1){
  document.getElementById('����').innerHTML="������������<br>����κ���";
}
else if(m==5&&d==20){
  var happeny=y-1645;
  document.getElementById('����').innerHTML="520����������o(�i�n�i)o<br>"+happeny+"��ǰ�Ľ�������ʮ�տ�ʼ<br>������Щ�������ȱ��ǣ���<br>����κ���";
}
else if(m==7&&d==4){
  var happeny=y-1927;
  document.getElementById('����').innerHTML="�����������ʿ����"+happeny+"����<br><s>˵�˶��ٱ���û�к���������������ʷ��</s><br>����κ���";
}
else if(m==9&&d==1){
  document.getElementById('����').innerHTML="��ѧ��Ŷ~<br>����κ���";
}
else if(m==10&&d==1){
  document.getElementById('����').innerHTML="??�c(�㨌��)��?<br>==����ͬ��==<br>??�c(�㨌��)��?";
}
else if(m==10&&d==10){
  var happeny=y-1911;
  document.getElementById('����').innerHTML="������������(�������)"+happeny+"����<br>�¾��������ң���<br>����κ���";
}
else if(m==11&&d==11){
  document.getElementById('����').innerHTML="�Ͻ�ȥ�������~<br>����κ���";
}
	t=setTimeout(function(){ʵʱ()},500);
}
function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}

//��������
function ȫ��(){
�����();
���ҳ�();
�����();
�춡î();
���쳽();
������();
}
function ȫ��(){
������();
���ҳ�();
������();
����î();
���쳽();
������();
}
function �����(){
	var x=document.getElementsByClassName("����-����");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="block";
                 };
}
function ������(){
	var x=document.getElementsByClassName("����-����");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="none";
                 };
}
function ���ҳ�(){
	var x=document.getElementsByClassName("����-�ҳ�");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="block";
                 };
}
function ���ҳ�(){
	var x=document.getElementsByClassName("����-�ҳ�");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="none";
                 };
}
function �����(){
	var x=document.getElementsByClassName("����-����");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="block";
                 };
}
function ������(){
	var x=document.getElementsByClassName("����-����");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="none";
                 };
}
function �춡î(){
	var x=document.getElementsByClassName("����-��î");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="block";
                 };
}
function ����î(){
	var x=document.getElementsByClassName("����-��î");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="none";
                 };
}
function ���쳽(){
	var x=document.getElementsByClassName("����-�쳽");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="block";
                 };
}
function ���쳽(){
	var x=document.getElementsByClassName("����-�쳽");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="none";
                 };
}
function ������(){
	var x=document.getElementsByClassName("����-����");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="block";
                 };
}
function ������(){
	var x=document.getElementsByClassName("����-����");
            for (var i = 0; i<x.length;i++) {
                   x[i].style.display="none";
                 };
}

//������ɫѡ��
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

//����ͼƬ�ֲ�
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

//ҳ�ŵ�alert
    function δ��()
	{
	alert("�� ���ﻹû����~��κ����������ӣ�������")
	}
function ����()
	{
	alert("�� ����˵���� ȥ��������ѽ~���㲻�������Ϊ���б�������������ҳ��ɣ�")
	}
function ֽƬ��()
	{
	alert("����дeb����ı����ƻ��Ĵ��У�Ŷ�����Ĳ��ͺܺÿ�����м��΢���᳭awa~�ֺţ�")
	}
function ��ľ�Ե�()
	{
	alert("���ǽ����ĵĴ��У����������Ʒ������������Լ�˵�ܱ��ˣ���")
	}

//�ص���������
window.onscroll = function () {
    if (document.documentElement.scrollTop + document.body.scrollTop > 400) {
        document.getElementById("top").style.display = "block";
    }
    else {
        document.getElementById("top").style.display = "none";
    }
}
function ��(){
document.body.scrollTop = document.documentElement.scrollTop = 0;
}
