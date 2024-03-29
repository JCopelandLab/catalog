"use-strict";
// buttons relative to card creation and  its deletion //
const create_btn = document.getElementById("new-btn");
const cardButtons = document.getElementById("buttons"); // card buttons container
const delete_Btn = document.querySelectorAll("#deleteToggle");
const read_btn = document.querySelectorAll("#readToggle");

// toggle read button colors
read_btn.forEach(function (item, index, array) {
  item.addEventListener("click", function () {
    item.getAttribute("fill") == "red"
      ? item.setAttribute("fill", "green")
      : item.setAttribute("fill", "red");
  });
});

// delete button to remove card
delete_Btn.forEach(function (item, index, array) {
  item.addEventListener("click", function () {
    item.parentElement.parentElement.remove();
  });
});
///////////////////////////////////////////////////////////////////////////////////////////
//show popup function for new book button//
const popupContainer = document.getElementById("popup-container");
function toggleCardOn() {
  popupContainer.classList.add("show-popup");
  popupContainer.classList.remove("hide-popup");
}

////////////////////////////////////////////////////////////////////////////////////////////
//form to bookCard construction
const form = document.getElementById("form");
let author, title, pages;
const userAuthor = document.getElementById("card-author");
const userTitle = document.getElementById("card-name");
const userPageCount = document.getElementById("card-pages");
const Library = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  author = userAuthor.value;
  console.log(author);
});

function book(author, title, pages) {
  this.author = author;
}
/////////////////////////////////////////////////////////////////////////////////////////////
// practicing object constructors
/*
function bookCatalog(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;

  this.test = function () {
    return this.author;
  };
}

const book1 = new bookCatalog("James Lee. Powh", "HixenVille", 222);
console.log(book1.pages);
console.log(book1.test());
Object.getPrototypeOf(book1); //log it === bookCatalog.protoype ??
book1.valueOf();
// USE: Object.setPrototypeOf(book1.prototype, bookCatalog.prototype)
// NOT: Enemy.prototype = Person.prototype;
*/
