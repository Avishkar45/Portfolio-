/*=========toggle icon navbar===========*/
document.addEventListener('DOMContentLoaded', function(){

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
});


/*Scroll sections*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*========== sticky navbar====*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    /*==============remove toggle icon=====*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};



/*====scroll===*/

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-content, .skills-cont, .project-box, .contact-form ', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h2, .img-about', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/*=============typed js============*/

const typed = new Typed('.multiple-text', {
    strings : ['Frontend Developer!', 'Cybersecurity Enthusiast!'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop: true
});