var main = document.getElementById('main');
var span = document.getElementById('span');
var div = document.getElementById('div1');
var a1 = document.getElementById('a1');
var p1 = document.getElementById('p1');
var ul1 = document.getElementById('ul1');
var ul2 = document.getElementById('ul2');
var ul22=ul2.getElementsByTagName('li');
var li1 = document.getElementById('li1');
var li2 = document.getElementById('li2');
var li3 = document.getElementById('li3');
var li4 = document.getElementById('li4');

function start(){
	div.style.display = 'none';
	p1.style.display = 'block';
	var obj = new feiJi(130,400,66,80,'my.gif',0,'boom.png',0,1,'woFang');
	console.log(obj);
	main.addEventListener('mousemove',moves,true);
	_go();
	main.addEventListener('click',btngame,true);
}
function feiJi(x,y,sW,sH,imgSrc,speed,imgBoomSrc,scroll,life,id){
	this.x = x;
	this.y = y;
	this.sW = sW;
	this.sH = sH;
	this.imgSrc = imgSrc;
	this.speed = speed;
	this.imgBoomSrc = imgBoomSrc;
	this.zhuangTai = false;
	this.time = 0;
	this.scroll = scroll;
	this.life = life;
	this.imgNode = null;
	this.id = id
	this.createFeiJi = function(){
		this.imgNode = document.createElement('img');
 		this.imgNode.src = this.imgSrc;
 		this.imgNode.id= this.id;
		this.imgNode.style.left = x + 'px';
		this.imgNode.style.top = y + 'px';
		main.appendChild(this.imgNode);
	};
	this.createFeiJi();
	this.feiJiMove = function(){
		if (scroller <= 50000) {
			this.imgNode.style.top = this.imgNode.offsetTop + this.speed + 'px';
		}
		else {
			this.imgNode.style.top = this.imgNode.offsetTop + this.speed + 1 + 'px';
		}
	}
} 

function ziDan(x,y,wW,hH,imgSrc,life){
	this.x = x;
	this.y = y;
	this.wW = wW;
	this.hH = hH;
	this.imgSrc = imgSrc;
	this.life = life;
	this.imgNode = null;
	this.createZiDan = function(){
		this.imgNode = document.createElement('img');
		this.imgNode.src = 'bullet1.png';
		this.imgNode.style.left = this.x + 'px';
		this.imgNode.style.top = this.y + 'px';
		main.appendChild(this.imgNode);
	}
	this.createZiDan();
	this.ziDan2 = function(){
		this.imgNode.style.top = this.imgNode.offsetTop - 10 + 'px';
	}
}
// function woFang(X,Y){
// 	feiJi.call(this,X,Y,66,80,'my.gif',0,'boom.png',0,1);
// 	this.imgNode.setAttribute('id','woFang')
// }
function ziDan1(X,Y){
	ziDan.call(this,X,Y,6,14,'bullet1.png',1);
}
function diFang(a,b,sW,sH,imgSrc,speed,imgBoomSrc,scroll,life,id){
	feiJi.call(this,a,b,sW,sH,imgSrc,speed,imgBoomSrc,scroll,life);
}

function random(a,b){
	return a+Math.floor(Math.random()*(b - a));
}	
 function moves(e){
		var woFang=document.getElementById('woFang');
		x = e.pageX;
		y = e.pageY;
		woFang.style.left = x - 433 + 'px';
		woFang.style.top = y - 70 + 'px';
		if (parseInt(woFang.style.left) <= -20) {
				woFang.style.left = -20 + 'px';
			}
			if (parseInt(woFang.style.left) >= 274) {
				woFang.style.left = 274 + 'px';
			}
			if (parseInt(woFang.style.top) <= 10) {
				woFang.style.top = 10 + 'px';
			}
			if (parseInt(woFang.style.top) >= 488) {
				woFang.style.top = 488 + 'px';
			}
 }

var scroller = 0;

var ziDans = [];

var diFangs = [];

var num  = 0;

var num1 = 0;

var num2 = 0;
var go=null;
function _go(){
	go = setInterval(function(){
		var woFang=document.getElementById('woFang');
	main.style.backgroundPosition = '0 ' + num + 'px';
	num++;
	if (num%15 == 0) {
		ziDans.push(new ziDan1(parseInt(woFang.style.left)+31,parseInt(woFang.style.top)-14))
	}
	for(var i=0;i<ziDans.length;i++){
				ziDans[i].ziDan2();  
				if (parseInt(ziDans[i].imgNode.style.top) <= 0) {
					main.removeChild(ziDans[i].imgNode);
					ziDans.splice(i,1);
				}
			}

	for(var i = 0;i<ziDans.length;i++){
		for(var j = 0;j<diFangs.length;j++){
			if(diFangs[j].zhuangTai == false){
				if (ziDans[i].imgNode.offsetLeft + ziDans[i].wW >= diFangs[j].imgNode.offsetLeft && ziDans[i].imgNode.offsetLeft <= diFangs[j].imgNode.offsetLeft + diFangs[j].sW) {
					if(ziDans[i].imgNode.offsetTop<= diFangs[j].imgNode.offsetTop + diFangs[j].sH){
						diFangs[j].life = diFangs[j].life - 1;
						if (diFangs[j].life == 0) {
							diFangs[j].imgNode.src = diFangs[j].imgBoomSrc;
							diFangs[j].zhuangTai = true;
							scroller = scroller + diFangs[j].scroll;
							span.innerHTML = scroller;
						}
						main.removeChild(ziDans[i].imgNode);
						ziDans.splice(i,1);
					}
				}
			}
			if (diFangs[j].imgNode.offsetLeft<=woFang.offsetLeft+woFang.offsetWidth&&diFangs[j].imgNode.offsetLeft+diFangs[j].imgNode.offsetWidth>=woFang.offsetLeft&&diFangs[j].imgNode.offsetTop<=woFang.offsetTop+woFang.offsetHeight&&diFangs[j].imgNode.offsetTop+diFangs[j].imgNode.offsetHeight>=woFang.offsetTop) {
				if(diFangs[j].zhuangTai == false){
						woFang.src ='本方飞机爆炸.gif';
						clearInterval(go);
						gg();
					}
				}
			}
		}
	num1++;
	if (num1 == 20) {
		num2++;
		if (num2%20 == 0) {
		diFangs.push(new diFang(random(50,210),-100,110,164,'enemy2_fly_1.png',1,'大飞机爆炸.gif',3000,10));	
	}
		if (num2%10 == 0) {
		diFangs.push(new diFang(random(30,274),-100,46,60,'enemy3_fly_1.png',random(1,3),'中飞机爆炸.gif',2000,5));	
		num2++;
		}
		else {
		diFangs.push(new diFang(random(0,286),-100,34,24,'enemy1_fly_1.png',random(1,3),'小飞机爆炸.gif',1000,1));	
		}
		num1 = 0;
	}
	for(var i = 0;i<diFangs.length;i++){
		diFangs[i].feiJiMove();
		if (parseInt(diFangs[i].imgNode.style.top) >= 568) {
				main.removeChild(diFangs[i].imgNode);
				diFangs.splice(i,1);
			}
		  if (diFangs[i].zhuangTai == true) {
		  		diFangs[i].time++;
		  		if (diFangs[i].time >=30) {
		  		main.removeChild(diFangs[i].imgNode);
				diFangs.splice(i,1);
		  		}
			}
		}	
},10)
}

function gg(e){
	ul1.style.display = 'block';
	ul2.style.display='none';
	console.log(woFang)
	var woFang=document.getElementById('woFang');
	// woFang.style.display='none';
	main.removeChild(woFang);
	li1.onclick=function(){
		window.location.reload();
	}
}


function btngame(e){
	ul2.style.display='block';
	var woFang=document.getElementById('woFang');
	woFang.style.display='none';
	clearInterval(go);
	var target=e.target;
	if(target == ul22[0]){
		woFang.style.display='block';
		ul2.style.display='none';
		_go();
	}
	if(target ==  ul22[1]){
		window.location.reload();
	}
	if(target ==  ul22[2]){
		window.location.reload();
	}
}
a1.addEventListener('click',start);
