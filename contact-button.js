document.getElementById("submit-button").addEventListener("click", () => {
    let ip = document.querySelectorAll(".input");
    for(let i = 0; i < ip.length; i++) {
        if(ip[i].checkValidity() === false) {
            return false;
        }
    }
    document.querySelector(".content-main").style.display = "none";
    document.getElementById("thxMessage").style.display = "block";
});
