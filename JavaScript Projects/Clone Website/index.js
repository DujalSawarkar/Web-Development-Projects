const carousel = document.querySelector(".carousel");
const mouse = document.querySelector(".mouse-scroll");


carousel.addEventListener("mousemove", (e) => {
    let x = e.pageX - 48 ;
    let y = e.pageY - 48;

    mouse.style.opacity = '1';
    mouse.style.zIndex = "10";

    mouse.style.left = `${x}px`;
    mouse.style.top = `${y}px`;
});

const select_1 = document.querySelector(".select-1");
const select_2 = document.querySelector(".select-2");

select_1.addEventListener("click", () => {
    select_1.classList.add("active");
    select_2.classList.remove("active");
});

select_2.addEventListener("click", () => {
    select_2.classList.add("active");
    select_1.classList.remove("active");
});