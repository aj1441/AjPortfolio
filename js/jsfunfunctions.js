// variable declarations-----------------------------------------------------------------------------
const burger = document.querySelector(".burger i");
const nav = document.querySelector(".nav");
const burgerButton= document.querySelector("button.burger");


//global functions-----------------------------------------------------------------------------------
function showHamburger() {
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active"); 
document.getElementById("pageBase").style.opacity = "0.5";
  
}

// eventListeners-------------------------------------------------------------------------------------
burgerButton.addEventListener("click", showHamburger);




//js nyc time ----------------------------------------------------------------------------------------------
const nycTime = document.getElementById("jsTimeBtn");
const displayNycTime = document.getElementById("nycTime");
nycTime.addEventListener("click", toggleNycTime);

function toggleNycTime(){
    document.getElementById("nyc-time").classList.toggle("js-hide-form");
    getNycTime();
}
function getNycTime(){
    const currentDate = new Date();
    let nycTimeNow = currentDate.toLocaleTimeString('en-US', {timeZone: "America/New_York"})
    displayNycTime.textContent = `The current time in New York City is ${nycTimeNow}`;
    console.log(currentDate);
    }
//------------------------------------------------------------------------------------------


//jsfun colors function-------------------------------------------------------------------------------------

const colorFormButton = document.getElementById("jsColorsBtn");
const colorForm = document.getElementById("colorForm");
const colorSubmit = document.getElementById("colorFormSubmit");

colorFormButton.addEventListener("click", toggleColorForm);
colorForm.addEventListener("submit", onColorFormSubmit);

function toggleColorForm() {
    document.getElementById("colorsFunWrapper").classList.toggle("js-hide-form");
  }

  function onColorFormSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const dataObject = Object.fromEntries(data.entries());
        console.log(dataObject);
      colorForm.reset();
      //above is boiler plate code
      let userType = dataObject.chooseType;
      let userColor = dataObject.chooseColor;
      console.log(userType);
      console.log(userColor);
   
      changeColor(userColor, userType);
  }

  function changeColor(colorFromUser, type) {
    if(type === "background"){
      colorForm.style.backgroundColor = colorFromUser;
    } else {
      colorForm.style.color = colorFromUser;
    }
  }
//-------------------------------------------------------------------------------------------


//js fun madlib submit function-------------------------------------------------------------
const madlib = document.getElementById("jsMadlibBtn");
const madlibForm = document.getElementById("madlibForm");
const displayMadlib = document.getElementById("madlibSentence");
const madlibSubmitBtn = document.getElementById("madlibSubmit");

madlib.addEventListener("click", toggleMadlib);
madlibForm.addEventListener("submit", onMadlibSubmit);


function toggleMadlib(){
    document.getElementById("madlibWrapperId").classList.toggle("js-hide-form");
    console.log( document.getElementById("madlibWrapperId").classList);
}


function onMadlibSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const dataObject = Object.fromEntries(data.entries());
        console.log(dataObject);
      madlibForm.reset();
      let adjective = dataObject.adjective;
      let noun = dataObject.noun;
      let adverb = dataObject.adverb;
      let verb = dataObject.verb;
      displayMadlib.textContent = `You are a ${adjective} ${noun}! You love to ${adverb} ${verb}!`;
  }


//  	    let response = `You are a ${dataObject.adjective} ${dataObject.noun}! You love to ${dataObject.adverb} ${dataObject.adverb}!`;
//  	    para.textContent = response;
//          return response;
//   }

// $(".js-btn").on("click", function(e) { 
//     //get curent description
//     let $desc = $(this).next(".show-form");
//     // hide all other description execpt current
//     $(".show-form").not($desc).hide();
//     // show or hide current description
//     $desc.css("display") == "none" ? $desc.show() : $desc.hide();
    
//   })