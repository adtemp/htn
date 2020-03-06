let adg = () => {
    let a = document.querySelector(".entry-header");
    let b = (a.clientWidth - 34) / 300;
    let c = document.querySelectorAll("div[id^='adg-slot']");
    let d = document.querySelectorAll("iframe[id^='adg-slot']");
    for(let i = 0; i < c.length; i++) {
        c[i].style.marginBottom = (b - 1) * 140 + "%";
        d[i].style.transform = "scale(" + b + ")";
    };
};
adg();

let sb = document.getElementById("side-bar-button");
let sm = document.getElementById("site-mask");
sb.onclick = sm.onclick = () => {
    let a = "aria-expanded";
    let bd = document.querySelector("body");
    let b2 = document.getElementById("box2");
    if(sb.getAttribute(a) === "true") {
        bd.style.overflow = "auto";
        sb.setAttribute(a, "false");
        sm.style.zIndex = "-1";
        b2.style.right = "-100vw";
    } else {
        bd.style.overflow = "hidden";
        sb.setAttribute(a, "true");
        sm.style.zIndex = "1";
        b2.style.right = "0";
    }
};
