let a = "aria-expanded";
let sb = document.getElementById("side-bar-button");
let sm = document.getElementById("site-mask");
let b2 = document.getElementById("box2");
sb.onclick = sm.onclick = a;
function a() {
    if(sb.getAttribute(a) === "true") {
        sb.setAttribute(a, "false");
        sm.style.zIndex = "-1";
        b2.style.right = "-100vw";
    } else {
        sb.setAttribute(a, "true");
        sm.style.zIndex = "1";
        b2.style.right = "0";
    }
};
