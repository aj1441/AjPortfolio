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


//jsfun page functions--------------------------------------------
//js fun variable declaration------------------------------------------------------------------------------
const colorFormButton = document.getElementById("js-colors-btn");
const colorForm = document.getElementById("color-fun-form");
const nycTime = document.getElementById("js-time-btn");
const displayNycTime = document.getElementById("show-nyc-time");
const madLib = document.getElementById("js-madlib-btn");
const madLibForm = document.getElementById("madlib-form");

//js fun event listeners------------------------------------------------------------------------------------
colorFormButton.addEventListener("click", toggleColorForm);
nycTime.addEventListener("click", toggleNycTime);
madLib.addEventListener("click", toggleMadLib)



//js fun toggle----------------------------------------------------------------------------------------------
function toggleColorForm() {
    document.getElementById("colors-fun-wrapper").classList.toggle("js-hide-form");
  }
function toggleNycTime(){
    document.getElementById("nyc-time").classList.toggle("js-hide-form");
    getNycTime();
}
function toggleMadLib(){
    document.getElementById("madlib-wrapper").classList.toggle("js-hide-form");
}


//jsfun colors function-------------------------------------------------------------------------------------
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
  
  //js fun colors submit functions
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

//js fun nyc time--------------------------------------------------------------------
function getNycTime(){
    const currentDate = new Date();
    let nycTimeNow = currentDate.toLocaleTimeString('en-US', {timeZone: "America/New_York"})
    displayNycTime.textContent = `The current time in New York City is ${nycTimeNow}`;
    console.log(currentDate);
    }



  

// 
//jsfun madlib function--------------------------------------------------------------
//   function makeAMadLib(noun, verb, adjective, adverb) {
// 	let response = `You are ${dataObject.verb}! Your favorite thing is  ${dataObject.noun}! You love to ${dataObject.verb} ${dataObject.adverb}. Our class was the ${adjectiveThree} class that our teachers had ever had.`;
// 	para.textContent = response;
// 	// return response;
