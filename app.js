document.getElementById("side-bar-button").onclick = () => {
    let bn = document.getElementById("side-bar-button");
    bn.setAttribute("aria-expanded", bn.getAttribute("aria-expanded" === "true" ? "false" : "true"));
}
