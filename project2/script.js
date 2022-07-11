'use strict';

const modal = document.querySelectorAll(".show-modal");
const hide = document.querySelectorAll(".hidden");
const close = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

let showAll,closeAll;

for(let i=0;i<modal.length;i++) {

    modal[i].addEventListener('click', showAll = function() {
        console.log("clicking")
        for(let i=0;i<hide.length;i++) {

            hide[i].style.display= 'block'

        }})
}

close.addEventListener('click', closeAll = function(){
    for(let i=0;i<hide.length;i++) {

        hide[i].style.display= 'none'

    }
} )

document.addEventListener('keydown',function(event){
    if(event.key === 'Escape')
    {
        closeAll();
    }})

overlay.addEventListener('click', closeAll);
