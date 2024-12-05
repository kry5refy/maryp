const nav = document.getElementById("nav");
const bg = document.getElementById("bg-atrapa");
const art = document.getElementById("art");


const btn1 = {
    button: document.getElementById("btn1"),
    number: 1,
    bg: "_IGP8509.jpg",
    where: "burza.html"
}
const btn2 = {
    button: document.getElementById("btn2"),
    number: 2,
    bg: "_IGP0621.jpg",
    where: "tulacz.html"
}
const btn3 = {
    button: document.getElementById("btn3"),
    number: 3,
    bg: "_IGP7557.jpg",
    where: "fala.html"
}
const btn4 = {
    button: document.getElementById("btn4"),
    number: 4,
    bg: "_IGP7419.jpg",
    where: "baltyk.html"
}
const btn5 = {
    button: document.getElementById("btn5"),
    number: 5,
    bg: "_IGP4797.jpg",
    where: "italiam.html"
}
const btn6 = {
    button: document.getElementById("btn6"),
    number: 6,
    bg: "DSC00390.jpg",
    where: "hel.html"
}


const transition = (bbg) =>{
    bg.style.backgroundImage = "url(" + bbg + ")";
    if(art != null){
        art.classList.remove("show");
        art.classList.add("hide");
    }
    if(nav != null){
        if(!nav.classList.contains("nav-podstrona")){
            nav.classList.add("anim");
        }
        else{

            nav.classList.add("anim-podstrona");
        }
    }


}
const redirect = (location) =>{
    window.location.href=location;
}

btn1.button.onclick = () => {
    transition(btn1.bg);
    bg.style.opacity = "1";

    setTimeout(redirect, 2000, btn1.where);
}
btn2.button.onclick = () => {
    transition(btn2.bg);
    bg.style.opacity = "1";

    setTimeout(redirect, 2000, btn2.where);
}
btn3.button.onclick = () => {
    transition(btn3.bg);
    bg.style.opacity = "1";

    setTimeout(redirect, 2000, btn3.where);
}
btn4.button.onclick = () => {
    transition(btn4.bg);
    bg.style.opacity = "1";

    setTimeout(redirect, 2000, btn4.where);
}
btn5.button.onclick = () => {
    transition(btn5.bg);
    bg.style.opacity = "1";

    setTimeout(redirect, 2000, btn5.where);
}
btn6.button.onclick = () => {
    transition(btn6.bg);
    bg.style.opacity = "1";
    setTimeout(redirect, 2000, btn6.where);
}

