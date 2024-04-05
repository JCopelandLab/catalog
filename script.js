"use-strict";
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
const popupContainer = document.getElementById("popup-container");

//reveal input
newBookBtn.addEventListener("click", function () {
  if (popupContainer.classList.contains("hide-popup")) {
    popupContainer.classList.remove("hide-popup") &
      popupContainer.classList.add("show-popup");
  }
});
////////////////////////////////////////////////////////////////////////////////////////////
//variables linked to form and its inputs
let authorGlobal, titleGlobal, pagesGlobal;
const form = document.getElementById("form");
const userAuthorInput = document.getElementById("card-author");
const userTitleInput = document.getElementById("card-name");
const userDescription = document.getElementById("description");
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
const library = [
  {
    title: "Websters Dictonary",
    author: "Noah Webster",
    description:
      "lorem tu yesi au husi fubi footbui nosi neighbor lamo nuis possimus ea mami animi assunduno",
    pages: "490",
    read: "Yes",
  },
];
let str = "";
const projects = document.getElementById("projects");
//cdynamically create each objects(in array) html content
function createProjectObject() {
  library.forEach((obj, index) => {
    str += `<div id="project" class="project">
    <h3 id="title">${library[index].title}</h3>
    <span id="authorName">${library[index].author}</span>
    <p id="description">
      ${library[index].description}
    </p>
    <p id="pageCount">${library[index].pages} Pages</p>

    <div id="buttons">
      <svg
        id="deleteBtn"
        fill="black"
        type="button"
        id="deleteToggle"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M5.75 3V1.5h4.5V3zm-1.5 0V1a1 1 0 0 1 1-1h5.5a1 1 0 0 1 1 1v2h2.5a.75.75 0 0 1 0 1.5h-.365l-.743 9.653A2 2 0 0 1 11.148 16H4.852a2 2 0 0 1-1.994-1.847L2.115 4.5H1.75a.75.75 0 0 1 0-1.5zm-.63 1.5h8.76l-.734 9.538a.5.5 0 0 1-.498.462H4.852a.5.5 0 0 1-.498-.462z"
          clip-rule="evenodd"
        />
      </svg>

      <svg
        id="readBtn"
        fill="green"
        type="button"
        id="readToggle"
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          d="M6.012 18H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1M8 9h3V6h2v3h3v2h-3v3h-2v-3H8z"
        />
      </svg>
    </div>
  </div>`;
  });
  document.getElementById("projects").innerHTML = str;
  str = "";
}
///////////////////////////////////////////////////////////////////////////////////////////
//object for object constructor calls
function createCard(author, title, description, pages, read) {
  this.author = author.value;
  this.title = title.value;
  this.description = description.value;
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
    userDescription,
    userPagesInput,
    readProcessor()
  );

  library.unshift(formData);
  console.log(library);

  createProjectObject();

  if (popupContainer.classList.contains("show-popup")) {
    popupContainer.classList.remove("show-popup") &
      popupContainer.classList.add("hide-popup");
    form.reset();
  }
});

/*
Add a button on each book’s display to remove the book from the library.
You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
*/
