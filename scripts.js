const form = document.querySelector(".Fale-conosco")
const mask = document.querySelector(".mascara-form")

function Contact(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function esc(){
    form.style.top = "40%"
    form.style.left = "-140px" 
    mask.style.visibility = "hidden"
}
