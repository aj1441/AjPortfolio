import projectData from "../data/data.js";
// console.log(projectData);
console.log("hello");

// variable declarations-----------------------------------------------------------------------------
const burger = document.querySelector(".burger i");
const nav = document.querySelector(".nav");
const burgerButton= document.querySelector("button.burger");


//global functions-----------------------------------------------------------------------------------
function showHamburger() {
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active"); 
}

// eventListeners-------------------------------------------------------------------------------------
burgerButton.addEventListener("click", showHamburger);



//main page js code-------------------------------------------------------------------------------------

const container = document.getElementById("projectCards");

function createCards () {
    for (let item of projectData) {
        let cardContainer = document.createElement("div");
        cardContainer.className = "card-wrapper";
        cardContainer.innerHTML= `<div class="card" id="card">
     <h4 class="project-title">${item.title}</h4>
     <img class="card-image" src=${item.image} alt="${item.image}">
     <p class="card-description">${item.description}</p>
     <a class="card-link" href="${item.link}">View the Site</a>`
    
     container.appendChild(cardContainer);
    }
}

createCards ()

