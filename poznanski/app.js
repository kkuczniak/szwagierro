const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const aboutit = document.querySelector(".aboutit");
const frame = document.querySelector(".frame");
const nav = document.querySelector("#navbar");

const tl = new TimelineMax();

tl.fromTo(hero,1,{height:"0%"}, {height:"65%", ease:Power2.easeInOut})
.fromTo(hero, 1.2, {width: "100%"},{width:"75%", ease:Power2.easeInOut} )

.fromTo(slider, 1.2,{x:"-100%"}, {x:"0%", ease:Power2.easeInOut}, "-=1.2")
//.fromTo(headline, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5")
.fromTo(nav, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5")
.fromTo(logo, 0.7, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.7")

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  } 



var scroll = new SmoothScroll('#navbar a[href*="#"]',{
    speed:800
});

/*
.fromTo(frame, 2.5, {height:"0"},{height:"30rem"})


.to(frame,5,{x:200 , delay:2.5})

.fromTo(logo, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5")
.fromTo(hamburger, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5") 
.fromTo(headline, 0.5, {opacity:0, x: 30}, {opacity:1, x: 0}, "-=0.5")

.fromTo(aboutit, 2.5, {height:"0%"},{height:"80%"})
.to(aboutit,5,{x:200 , delay:2.5});*/