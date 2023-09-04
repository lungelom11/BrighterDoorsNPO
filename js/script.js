//JQuery for scroll beahaviour


//Javascript for button toggle
const navToggle = document.querySelector('.toggle-nav');
const navLinks = document.querySelectorAll('.menu-link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    })
})