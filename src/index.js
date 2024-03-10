import {renderHome} from "./home";
import {renderMenu} from "./menu";
import {renderContact} from "./contact";



// alert("Everything running fine!")



const content = document.getElementById("content");

const homeButton = document.querySelector("button#homeBtn");
const menuButton = document.querySelector("button#menuBtn");
const contactButton = document.querySelector("button#contactBtn");

homeButton.addEventListener("click", () =>{
    eraseContent();
    renderHome(content);
});
menuButton.addEventListener("click", () =>{
    eraseContent();
    renderMenu(content);
});
contactButton.addEventListener("click", () =>{
    eraseContent();
    renderContact(content);
});

function eraseContent(){
    content.innerHTML = "";
}


renderHome(content);