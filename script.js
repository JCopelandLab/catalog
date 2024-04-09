"use strict";

//object storage per users session
const myLibrary = [];

// object
function Book(author, title, description, pages, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.description = description;
  this.pages = pages;
  this.read = read;
}

//toggle read or not read
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(i) {
  myLibrary[i].toggleRead();
  render();
}

//remove book from the library and display
function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

// local variable creation are fed into object constructors. Created objects are passed into the object storage
function addBookToLibrary() {
  // do stuff here
  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("checkbox").checked;
  let newBook = new Book(author, title, description, pages, read);
  myLibrary.push(newBook);
  render();
}

// renders the content visibly to the interface without a external server
function render() {
  let libraryEl = document.querySelector("#projects");

  libraryEl.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.classList.add("project");
    bookEl.innerHTML = `<h2>${book.title}</h2> <h4>${book.author}</h4><p>${
      book.description
    }</p><h4>${
      book.pages
    }page<i>(s)</i></h4><div id="buttons"><div id="readBtnContainer"><button class="readBtn" onclick="toggleRead(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1024 1024">
    <path fill="${
      book.read ? "green" : "red"
    }" d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32M404 553.5c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm416 140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45z" />
  </svg></button><p><i>${book.read ? "Read" : "Not Read"}</i></p></div>
  <button class="deleteBtn" onclick="removeBook(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
    <path fill="#a06f08" d="m21.82 15.42l-2.5 4.33c-.49.86-1.4 1.31-2.32 1.25h-2v2l-2.5-4.5L15 14v2h2.82l-2.22-3.85l4.33-2.5l1.8 3.12c.52.77.59 1.8.09 2.65M9.21 3.06h5c.98 0 1.83.57 2.24 1.39l1 1.74l1.73-1l-2.64 4.41l-5.15.09l1.73-1l-1.41-2.45l-2.21 3.85l-4.34-2.5l1.8-3.12c.41-.83 1.26-1.41 2.25-1.41m-4.16 16.7l-2.5-4.33c-.49-.85-.42-1.87.09-2.64l1-1.73l-1.73-1l5.14.08l2.65 4.42l-1.73-1L6.56 16H11v5H7.4a2.51 2.51 0 0 1-2.35-1.24" />
  </svg></button></div>`;
    libraryEl.appendChild(bookEl);
  }
}

//toggles the new Bookmark button off and on
function toggleInput() {
  let newBookForm = document.querySelector("#popup-container");
  newBookForm.classList.contains("hide-popup")
    ? newBookForm.classList.add("show-popup") &
      newBookForm.classList.remove("hide-popup")
    : newBookForm.classList.remove("show-popup") &
      newBookForm.classList.add("hide-popup");
}

document.querySelector("#newBookBtn").addEventListener("click", toggleInput);

//action sequence on submit button/form submit
document
  .querySelector("#submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addBookToLibrary();
    // toggleInput();
  });
