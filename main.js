const section = document.querySelector("section");
const h1 = document.querySelector("h1");
const emoji = document.querySelector(".slide-emoji");
const input = document.querySelector("input");
const bar = document.querySelector(".progress-bar");
const thumb = document.querySelector(".thumb");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".modal");

input.oninput = () => {
    let sliderValue = input.value;
    thumb.style.left = sliderValue + '%';
    bar.style.width = sliderValue + '%';
    if (sliderValue < 20) {
        emoji.style.marginTop = "0px";
        section.classList.add("angry");
        section.classList.remove("confuse");
        section.classList.remove("like");
    }
    if (sliderValue >= 20) {
        emoji.style.marginTop = "-140px";
        section.classList.add("confuse");
        section.classList.remove("angry");
        section.classList.remove("like");
    }
    if (sliderValue >= 40) {
        emoji.style.marginTop = "-280px";
    }
    if (sliderValue >= 60) {
        emoji.style.marginTop = "-420px";
        section.classList.add("like");
        section.classList.remove("confuse");
        section.classList.remove("angry");
    }
    if (sliderValue >= 80) {
        emoji.style.marginTop = "-560px";
    }
    if (sliderValue == 100) {
        h1.style.display = "block";
        h1.classList.add("text-animation");
        setTimeout(() => {
            modal.classList.add("modal-animation");
            closeBtn.addEventListener("click", () => {
                modal.classList.remove("modal-animation");
            })
        }, 3000)
    }
}