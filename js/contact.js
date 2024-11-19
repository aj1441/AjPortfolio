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

// function for postmail contact form to have email sent to my email with contact request and noting return email------------------------

let form_id_js = "javascript_form";

let data_js = {
    "access_token": "tq8pu20jn29xfd8gfjply7uv"
};

function js_onSuccess() {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function js_onError(error) {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

let sendButton = document.getElementById("js_send");

function js_send() {
    sendButton.value='Sending…';
    sendButton.disabled=true;
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            js_onSuccess();
        } else
        if(request.readyState == 4) {
            js_onError(request.response);
        }
    };
    let subject = document.querySelector("#" + form_id_js + " [name='subject']").value;
    let replyTo = document.querySelector("#" + form_id_js + " [name='reply_to']").value;
    let message = document.querySelector("#" + form_id_js + " [name='text']").value;
    data_js['subject'] = subject;
    data_js['reply_to']=replyTo;
    data_js['text'] = message;
    let params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);

    return false;
}

sendButton.onclick = js_send;

function toParams(data_js) {
    let form_data = [];
    for ( let key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}

let js_form = document.getElementById(form_id_js);
js_form.addEventListener("submit", function (e) {
    e.preventDefault();
});