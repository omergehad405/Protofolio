// start skils progress 
let skils = document.querySelector("#skils");
let spans = document.querySelectorAll("#skils .progress span")

window.onscroll = function() {
    if(window.scrollY >= skils.offsetTop) {
        spans.forEach((span) =>{
            span.style.width = span.dataset.width;
        });
    }
};