const arrows = document.querySelectorAll(".arrow");

arrows.forEach(arrow=>{
    arrow.addEventListener('click', ()=>{
        const slide1 = document.querySelector("#one").classList
        const slide2 = document.querySelector("#two").classList

        slide1.toggle("active")
        slide2.toggle("active")
    }, false)
})