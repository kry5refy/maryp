

var pspsps=1;
function myfun(){
    document.getElementById("main").style.transition = "2s";
    document.getElementById("main").style.height = "100%";
}
function menu(){
    document.getElementById("main").style.transition ="2s";
    document.getElementById("main").style.height = "0%";
}

function slajdys()
{
    var slideShow = document.getElementById("slideShow");
  
    var imagesSrc = ["s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg", "s5.jpg", "s6.jpg", "s7.jpg"];
    
    for (var i = 0; i < imagesSrc.length; i++)
    {
        var image = new Image();
        
        image.src = imagesSrc[i];
        
        slideShow.appendChild(image);
    }
    
    slideShow.childNodes[0].setAttribute("class", "current");
    var i = 0;
    
    setInterval(function()
    {
        slideShow.childNodes[i % imagesSrc.length].setAttribute("class", "");
        
        slideShow.childNodes[(i+1) % imagesSrc.length].setAttribute("class", "current");
        
        i++;
        
    }, 3000);
};


function zmiana(){
    document.getElementById("pasek").style.transition = "2s";
    document.getElementById("pasek").style.width = "100%";
	document.getElementById("pasek").style.padding = "10%";

    document.getElementById("znikac").style.transition = "2s";
    document.getElementById("znikac").style.width = "0%";
    document.getElementById("znikac2").style.transition = "2s";
    document.getElementById("znikac2").style.width = "0%";
}
function wroc(){
    document.getElementById("pasek").style.transition = "2s";
    document.getElementById("pasek").style.width = "0%";document.getElementById("pasek").style.padding = "0%";
    document.getElementById("znikac").style.transition = "2s";
    document.getElementById("znikac").style.width = "60%";
    document.getElementById("znikac2").style.transition = "2s";
    document.getElementById("znikac2").style.width = "40%";
}

function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
 if(pspsps==1){
	 slajdys();
	 pspsps++;
 }
	
  document.getElementById("lol").style.top = y +5+"px";
  document.getElementById("lol").style.left = x +5+"px";
 /* var q=x%254;
  var w=y%254;
  var r= event.screenY%254;
  document.getElementById("lol").style.background = "rgb("+q+","+w+","+r+")";
  */
  
}

