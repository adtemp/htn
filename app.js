let a = "aria-expanded";
let bd = document.querySelector("body");
let sb = document.getElementById("side-bar-button");
let sm = document.getElementById("site-mask");
let b2 = document.getElementById("box2");
sb.onclick = sm.onclick = () => {
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
