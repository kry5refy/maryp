var last_param = 0;

function openWindow(param) {
	var doc = document.getElementById("article_win");
	var attr1 = document.getElementById("btn1");
	var attr2 = document.getElementById("btn2");
	var attr3 = document.getElementById("btn3");
	var attr4 = document.getElementById("btn4");
	var pic = document.getElementById("picture");
	
	doc.style.display = "block";
	
	attr1.style.background = "#555";
	attr1.style.color = "#fed11a";
	attr1.style.width = "260px";
	
	attr2.style.background = "#555";
	attr2.style.color = "#fed11a";
	attr2.style.width = "260px";
	
	attr3.style.background = "#555";
	attr3.style.color = "#fed11a";
	attr3.style.width = "260px";
	
	attr4.style.background = "#555";
	attr4.style.color = "#fed11a";
	attr4.style.width = "260px";
	
	if(param == 1) {
		doc.src = "str1.html";
		
		attr1.style.background = "#fed11a";
		attr1.style.color = "#262626";
		attr1.style.width = "320px";
		
		pic.style.display = "none";
	}
	
	else if(param == 2) {
		doc.src = "str2.html";
		
		attr2.style.background = "#fed11a";
		attr2.style.color = "#262626";
		attr2.style.width = "320px";
		
		pic.style.display = "none";
	}
	
	else if(param == 3) {
		doc.src = "str3.html";
		
		attr3.style.background = "#fed11a";
		attr3.style.color = "#262626";
		attr3.style.width = "320px";
		
		pic.style.display = "none";
	}
	
	else if(param == 4) {
		doc.src = "str4.html";
		
		attr4.style.background = "#fed11a";
		attr4.style.color = "#262626";
		attr4.style.width = "320px";
		
		pic.style.display = "none";
	}
	
	else {
		doc.style.display = "none";
		
		pic.style.display = "block";
	}
	
	if(param == last_param) {
		doc.style.display = "none";
		
		pic.style.display = "block";
		
		if(param == 1) {
			doc.innerHTML = "";
		
			attr1.style.background = "#555";
			attr1.style.color = "#fed11a";
			attr1.style.width = "260px";
		}
		
		if(param == 2) {
			doc.innerHTML = "";
		
			attr2.style.background = "#555";
			attr2.style.color = "#fed11a";
			attr2.style.width = "260px";
		}
		
		if(param == 3) {
			doc.innerHTML = "";
		
			attr3.style.background = "#555";
			attr3.style.color = "#fed11a";
			attr3.style.width = "260px";
		}
		
		if(param == 4) {
			doc.innerHTML = "";
		
			attr4.style.background = "#555";
			attr4.style.color = "#fed11a";
			attr4.style.width = "260px";
		}
		
		last_param = 0;
	}
	
	else {
		last_param = param;
	}
}