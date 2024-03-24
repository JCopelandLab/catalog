"use-strict";

//variables for DOM manipulation

//btns
const createCard_btn = document.getElementById("new-btn");
const submit_btn = document.getElementById("post-btn");

//popup container
const popupContainer = document.getElementById("popup-container");

//input values
const newCardName = document.getElementById("");
const newCardDescription = document.getElementById("");

//Functions for button functionality
function closePopup() {
  popupContainer.classList.remove("show-popup");
  popupContainer.classList.add("hide-popup");
  console.log("remove display");
}

function openPopup() {
  popupContainer.classList.add("show-popup");
  popupContainer.classList.remove("hide-popup");
  console.log("add display");
}
