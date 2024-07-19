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

const colorFormButton = document.querySelector(".js-colors-btn");
const colorForm = document.getElementById("color-fun-form");
colorFormButton.addEventListener("click", toggleColorForm);

function toggleColorForm() {
    document.getElementById("colors-fun-wrapper").classList.toggle("js-hide-form");
  }

// function toggleColorForm() {
//     document.getElementById("colors-fun-wrapper").classList.toggle("js-hide-form");
//   }

//colors
function changeColor(colorFromUser, type) {
    console.log(colorFromUser, type)
    if(type === "background"){
      colorForm.style.backgroundColor = colorFromUser;
    } else {
      colorForm.style.color = colorFromUser;
    }
    // const color = document.getElementById("color").value;
  // colorForm.style.backgroundColor = colorFromUser;
    
  }
  
  
  //submit functions
  function onColorFormSubmit(event) {
    console.log("color form submitted");
      event.preventDefault();
      const data = new FormData(event.target);
      const dataObject = Object.fromEntries(data.entries());
      console.log(dataObject);
      colorForm.reset();
      //above is boiler plate code
      changeColor(dataObject.colorSelect, dataObject.typeSelect)
  }