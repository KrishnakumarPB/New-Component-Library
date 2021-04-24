'use strict'
const modalClass=document.querySelectorAll(".buttonitem");
const overlay=document.querySelector(".overlay")
const showModal=document.querySelector(".window")
const closeModal=document.querySelector(".closemodal")

 function functionShowModal()
{
    console.log("clicked");
    showModal.classList.remove('hidden');
    overlay.classList.remove("hidden")
}
function functionCloseModal()
{
        console.log("clicked");
        showModal.classList.add('hidden');
        overlay.classList.add("hidden")
}


closeModal.addEventListener("click",functionCloseModal)
for (let i=0;i<modalClass.length; i++)
    {
        modalClass[i].addEventListener("click",functionShowModal)
    }
