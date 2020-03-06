let b = document.getElementById("aria-expanded");
b.onclick = function() {
    this.setAttribute("aria-expanded", this.getAttribute("aria-expanded") === "true" ? "false" : "true");
};
