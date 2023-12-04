const slider = document.querySelector(".slider__inp");
const img = document.querySelector(".slide__before-wrapper");
const thumb = document.querySelector(".slider__thumb");
slider.oninput = ()=>{
let sliderVal = slider.value;
thumb.style.left = sliderVal + "%";
img.style.width = sliderVal + "%";
}