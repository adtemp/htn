let b = document.getElementById("aria-expanded");
b.onclick = () => {
    b.setAttribute("aria-expanded", b.getAttribute("aria-expanded") === "true" ? "false" : "true");
};
