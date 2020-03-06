let a = "aria-expanded";
let b = document.getElementById("side-bar-button");
b.onclick = () => {b.setAttribute(a, b.getAttribute(a) === "true" ? "false" : "true")};
