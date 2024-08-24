let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
let slidesCount = sliderImages.length;
let currentSlide = 1;
let slideNumber = document.getElementById("slide-number");
let next = document.getElementById("next");
let previous = document.getElementById("previous");
next.onclick = nextSlide;
previous.onclick = prevSlide;
let paginEl = document.createElement("ul");
paginEl.setAttribute("id","pagin-ul");
for(let i = 1; i<=slidesCount;i++){
    let paginIt = document.createElement("li");
    paginIt.setAttribute("data-index",i);
    paginIt.append(document.createTextNode(i));
    paginEl.append(paginIt);
};
let indio = document.getElementById("indicator");
indio.append(paginEl);
let paginCurl = document.getElementById("pagin-ul");
let paginS = Array.from(document.querySelectorAll("#pagin-ul li"));
for(let l = 0; l<paginS.length;l++){
    paginS[l].onclick = function(){
        currentSlide = parseInt(this.getAttribute("data-index"));
        checker()
    }
}
checker()
removeAllActive();
function nextSlide(){
    if(next.classList.contains("disable")){
        return false;
    }else{
        currentSlide++
        checker()
    }
};
checker()
removeAllActive();
function prevSlide(){
    if(previous.classList.contains("disable")){
        return false;
    }else{
        currentSlide--
        checker()
    }
}
removeAllActive();
function checker(){
    slideNumber.textContent = `slide # ${currentSlide} of ${slidesCount}`;
    removeAllActive()
    sliderImages[currentSlide -1 ].classList.add("active");
    paginCurl.children[currentSlide -1].classList.add("active")
    if(currentSlide == 1){
        previous.classList.add("disable");
    }else{
        previous.classList.remove("disable");
    }
    if(currentSlide == slidesCount){
        next.classList.add("disable");
    }else{
        next.classList.remove("disable");
    }
}
checker()
function removeAllActive(){
    sliderImages.forEach((img)=>{
        img.classList.remove("active");
    });
    paginS.forEach((bullets)=>{
        bullets.classList.remove("active");
    });
}