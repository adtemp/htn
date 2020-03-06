let b = document.getElementById("aria-expanded");
b.onclick = function() {
    this.setAttribute("aria-expanded", b.getAttribute("aria-expanded") === "true" ? "false" : "true");
};
