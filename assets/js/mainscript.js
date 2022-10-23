let navToggle = document.querySelector('.nav-toggle');
let hmbrgr = document.querySelector('.hamburger');
let navLinks = document.querySelectorAll('a[href^="#"]');

let whatElem = document.querySelector(".what");
let whoElem = document.querySelector(".who");
let whenElem = document.querySelector(".when");
let whereElem = document.querySelector(".where");
let whyElem = document.querySelector(".why");

let whatLoc = whatElem.getBoundingClientRect();
let whoLoc = whoElem.getBoundingClientRect();
let whenLoc = whenElem.getBoundingClientRect();
let whereLoc = whereElem.getBoundingClientRect();
let whyLoc = whyElem.getBoundingClientRect();

let startWhat = whatLoc.y;
let startWho = whoLoc.y;
let startWhen = whenLoc.y;
let startWhere = whereLoc.y;
let startWhy = whyLoc.y;

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});



window.addEventListener('scroll', function(){

    whatLoc = whatElem.getBoundingClientRect();
    whoLoc = whoElem.getBoundingClientRect();
    whenLoc = whenElem.getBoundingClientRect();
    whereLoc = whereElem.getBoundingClientRect();
    whyLoc = whyElem.getBoundingClientRect();



    if(whatLoc.y > 0){
        whatElem.style.opacity = 1 - (whatLoc.y / startWhat);
        navToggle.style.position = "absolute";
        navToggle.style.top = "calc(100vh + 3em)";
        hmbrgr.style.position = "absolute";
    }

    if(whatLoc.y <= 0){
        navToggle.style.position = "fixed";
        navToggle.style.top = "3em";
        hmbrgr.style.position = "fixed";
    }

    if(whoLoc.y > 0){
        whoElem.style.opacity = 1 - (whoLoc.y / startWho);
    }

    if(whenLoc.y > 0){
        whenElem.style.opacity = 1 - (whenLoc.y / startWhen);
    }

    if(whereLoc.y > 0){
        whereElem.style.opacity = 1 - (whereLoc.y / startWhere);
    }

    if(whyLoc.y > 0){
        whyElem.style.opacity = 1 - (whyLoc.y / startWhy);
    }

});