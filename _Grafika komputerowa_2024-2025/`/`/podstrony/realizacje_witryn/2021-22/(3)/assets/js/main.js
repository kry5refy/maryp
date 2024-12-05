
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    
    let navbar = document.querySelector('.nav');
    let logo = document.querySelector('.logo');
    let text = document.querySelector('.logo-container a');
    let textspan = document.querySelector('.logo-container a span');
    let menu = document.querySelectorAll('.menu li a');
    let ham = document.querySelector('.ham');

    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {

        // DOWN

        if(document.body.clientWidth > 1300) {
            navbar.style.boxShadow = '0px 10px 18px 10px rgba(0,0,0,0.1)'
            logo.style.width = "50px";
            logo.style.height = "50px";
            text.style.fontSize = '30px';
            textspan.style.fontSize = '30px';
            navbar.style.height = '80px';
            
            for(let i = 0; i < menu.length; i++) {
                menu[i].style.fontSize = '20px';
            }
        } else {

            navbar.style.boxShadow = '0px 10px 20px 5px rgba(0,0,0,0.1)'
            navbar.style.height = '50px';

            ham.style.width = "22px";
            ham.style.height = "10px";

            logo.style.width = "30px";
            logo.style.height = "30px";
            text.style.fontSize = '16px';
            textspan.style.fontSize = '16px';
        }

    } else {

        // TOP

        if(document.body.clientWidth > 1300) {

            navbar.style.boxShadow = "none";
            
            logo.style.width = "72px";
            logo.style.height = "72px";
            text.style.fontSize = '36px';
            textspan.style.fontSize = '36px';
            navbar.style.height = '120px';

            for(let i = 0; i < menu.length; i++) {
                menu[i].style.fontSize = '25px';
            }
        }else {

            navbar.style.boxShadow = "none";
            navbar.style.height = '100px';

            ham.style.width = "26px";
            ham.style.height = "13px";

            logo.style.width = "38px";
            logo.style.height = "38px";
            text.style.fontSize = '20px';
            textspan.style.fontSize = '20px';
        }
    }
    
}


function show() {

    let sidebar = document.querySelector('.sidebar');
    let close = document.querySelector('.close');

    sidebar.style.right = "0%";
    close.style.right = '35px';
}

function hide() {

    let sidebar = document.querySelector('.sidebar');
    let close = document.querySelector('.close');

    sidebar.style.right = "-100%";;
    close.style.right = '-100px';
  
}