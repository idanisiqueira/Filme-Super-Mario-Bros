const faleConosco = document.querySelector("#fale-conosco")
const trailer = document.querySelector("#trailer")
const closed = document.querySelector(".close-2")
const box = document.querySelector(".box-all")

const video = document.querySelector(".box-trailer")
const form = document.querySelector(".form")
const masKBlack = document.querySelector(".mask-black2")

faleConosco.addEventListener("click", appearForm) // evento para aparecer o formulário e criar máscara preta

function appearForm() {
    form.style.left = "600px";
    masKBlack.style.visibility = "visible";
}

trailer.addEventListener("click", appearTrailer) // evento para mostrar trailer

function appearTrailer() {
    video.style.visibility = "visible";
    masKBlack.style.visibility = "visible";
    box.style.visibility = "visible";
}

closed.addEventListener("click", closeWindow) // evento para fechar o trailer

function closeWindow() {
    box.style.visibility = "hidden";
    video.style.visibility = "hidden";
    masKBlack.style.visibility = "hidden";
    video.innerHTML = `
        <iframe class="iframe" width="760" height="515" src="https://www.youtube.com/embed/cDNkh5WybZo?si=DNBTVRIMillCNszK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `
}
