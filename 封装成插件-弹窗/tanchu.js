function fun(_id,_obj){
	var ccc = function(){
		var div = document.createElement('div');
		div.id = 'div1';
		var divText1 = document.createTextNode(_obj.title);
		var divText2 = document.createTextNode(_obj.content);
		var p = document.createElement('p');
		p.id = 'p1';
		p.innerHTML = 'x';
		var h1 = document.createElement('h1');
		h1.id = 'h1';
		var p2 = document.createElement('p');
		p.id = 'p2';
		document.body.appendChild(div);
		h1.appendChild(divText1);
		p2.appendChild(divText2);
		div.appendChild(p);
		div.appendChild(h1);
		div.appendChild(p2);
		p.onclick = function(){
			div.remove();
		}
		var a = document.getElementsByTagName('div');
		if (a.length>=2) {
			div.remove();
		}
	}
	var elem = document.getElementById(_id);
	elem.addEventListener('click',ccc);
}