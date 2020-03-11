if(document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1") === "dark") {
    document.getElementById("theme").setAttribute("href", "https://adtemp.github.io/style-dark.css");
} else {
    document.getElementById("theme").setAttribute("href", "https://adtemp.github.io/style.css");
}
