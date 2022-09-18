const navSlide = () => {
    const burger = document.querySelector(".btn");
    const myNav = document.querySelector(".nav-link");
    burger.addEventListener("click", () => {
        myNav.classList.toggle("nav-active");
        // myNav.classList.toggle("toggle")
    })

}
navSlide()