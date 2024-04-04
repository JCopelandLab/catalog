"use-strict";
const library = [];
////////////////////////////////////////////////////////////////////////////////////////////
// toggle read button colors
const readBtns = Array.from(document.querySelectorAll("#readBtn"));
readBtns.forEach(function (item) {
  item.addEventListener("click", function () {
    item.getAttribute("fill") == "red"
      ? item.setAttribute("fill", "green") & item.setAttribute("value", "Yes")
      : item.setAttribute("fill", "red") & item.setAttribute("value", "No");
  });
});
///////////////////////////////////////////////////////////////////////////////////////////
// delete button to remove card
const deleteBtns = Array.from(document.querySelectorAll("#deleteBtn"));
deleteBtns.forEach(function (item, index) {
  item.addEventListener("click", function () {
    item.parentElement.parentElement.remove();
  });
});
///////////////////////////////////////////////////////////////////////////////////////////
//the hidden input form classList
const newBookBtn = document.getElementById("new-btn");
const popupContainer = document.getElementById("popup-container").classList;

//reveal input
newBookBtn.addEventListener("click", function () {
  if (popupContainer.contains("hide-popup")) {
    popupContainer.remove("hide-popup") & popupContainer.add("show-popup");
  }
});
////////////////////////////////////////////////////////////////////////////////////////////
//variables linked to form and its inputs
let authorGlobal, titleGlobal, pagesGlobal;
const form = document.getElementById("form");
const userAuthorInput = document.getElementById("card-author");
const userTitleInput = document.getElementById("card-name");
const userPagesInput = document.getElementById("card-pages");
//////////////////////////////////////////////////////////////////////////////////////////
//find checked radio button
const userReadInput = Array.from(document.getElementsByName("toggleRadio"));
function readProcessor() {
  for (let i = 0; i < userReadInput.length; i++) {
    if (userReadInput[i].checked) {
      return userReadInput[i].value;
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////
//projectS container and project framework
const projects = document.getElementById("projects")
const project = document.getElementById("project");
//cdynamically create each objects(in array) html content
function createProjectObject() {
  library.forEach((obj) => {
    let title = document.
  });
}
///////////////////////////////////////////////////////////////////////////////////////////
//object for object constructor calls
function createCard(author, title, pages, read) {
  this.author = author.value;
  this.title = title.value;
  this.pages = pages.value;
  this.read = read;
}
/////////////////////////////////////////////////////////////////////////////////////////////
//submitBtn sequence
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new createCard(
    userAuthorInput,
    userTitleInput,
    userPagesInput,
    readProcessor()
  );

  library.unshift(formData);

  createProjectObject();

  if (popupContainer.contains("show-popup")) {
    popupContainer.remove("show-popup") & popupContainer.add("hide-popup");
    form.reset();
  }
});

// The project Library:: REcommended Steps
//1> Create a function that loops the library array and dynamically creates the UI content for the userInput

//2> Make the delete button remove the indexed item from the array and update the display
// associate your DOM elements with the actual book objects in some way.
// One easy solution is giving them a data-attribute that corresponds to the index of the library array.
