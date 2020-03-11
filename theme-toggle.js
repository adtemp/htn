if(document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1") === "dark") {
    document.getElementById("theme-toggle").setAttribute("switch", "on");
}
