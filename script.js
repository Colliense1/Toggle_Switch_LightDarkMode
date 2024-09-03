const body = document.getElementById("body");
const switchbtn = document.getElementById("switch");

// function create for change theme

function applytheme() {
    const isLight = body.classList.contains("light_bg");
    if (isLight) {
        body.classList.remove("light_bg");
        body.classList.add("dark_bg");
    }
    else {
        body.classList.remove("dark_bg");
        body.classList.add("light_bg");
    }
}

switchbtn.addEventListener("click", applytheme);
