// ==========================
// Sticky Header
// ==========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 50);

});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ==========================
// Reservation Form
// ==========================

const form = document.querySelector(".reservation-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your table has been reserved.");

form.reset();

});

}

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ==========================
// Gallery Hover Animation
// ==========================

const images=document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});

// ==========================
// Fade In Animation
// ==========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});section{
opacity:0;
transform:translateY(50px);
transition:.8s;
}

section.show{
opacity:1;
transform:translateY(0);
}

header.sticky{
padding:15px 0;
background:#000;
}

nav ul li a.active{
color:#f8b400;
font-weight:bold;
}