var win_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
console.log(win_width);

if(win_width >= 1200) {
	console.log('desktop');
} else {
	console.log('phone');
}
let last_param = 0;

let buttons = document.getElementsByClassName('button');
console.log(buttons);

function openText(param) {
	let text = document.querySelector('.ifr');
	console.log(text);
	
	text.src = "podstrony/strona" + param + ".html";
}