let sb = document.getElementById("side-bar-button");
let sm = document.getElementById("site-mask");
sb.onclick = sm.onclick = () => {
    let a = "aria-expanded";
    let bd = document.querySelector("body");
    let b2 = document.getElementById("box2");
    if(sb.getAttribute(a) === "true") {
        sb.setAttribute(a, "false");
        bd.style.overflow = "auto";
        sm.style.zIndex = "-1";
        b2.style.right = "-100vw";
    } else {
        sb.setAttribute(a, "true");
        bd.style.overflow = "hidden";
        sm.style.zIndex = "1";
        b2.style.right = "0";
    }
};

let tt = document.getElementById("theme-toggle");
tt.onclick = () => {
    let tm = document.getElementById("theme");
    if(tt.getAttribute("switch") === "on") {
        tm.setAttribute("href", "https://cdn.jsdelivr.net/gh/adtemp/htn/style.min.css");
        tt.setAttribute("switch", "off");
        document.cookie = "theme=light;path=/";
    } else {
        tm.setAttribute("href", "https://cdn.jsdelivr.net/gh/adtemp/htn/style-dark.min.css");
        tt.setAttribute("switch", "on");
        document.cookie = "theme=dark;path=/";
    }
};

window.onload = () => {
    let a = document.querySelector(".entry-header");
    let b = (a.clientWidth - 34) / 300;
    let c = document.querySelectorAll("div[id^='adg-slot']");
    let d = document.querySelectorAll("iframe[id^='adg-slot']");
    for(let i = 0; i < c.length; i++) {
        c[i].style.marginBottom = (b - 1) * 140 + "%";
        d[i].style.transform = "scale(" + b + ")";
    };
};
