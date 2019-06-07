// COMMANDS
// Ctrl + P
// User settings
// Ctrl + Shift + P
// Ctrl + K S

// VIEW
// Ctrl + B
// Ctrl + `
// Ctrl + Shift + [E, F, G, D, X]
// Ctrl + Alt + Right Arrow
// Ctrl + Shift + [

// NAVIGATE
// Beginning end of page  Ctrl + Home/End
// Ctrl + Tab
// Alt + Scroll - README
// Ctrl + U
// Ctrl + G - Line number
// Find all references
// Breadcrumbs
// Inline file/folder create

// SELECTION
//  Vertical selection,
//  Many cursors,
//  Ctrl + D
//  Ctrl + L
//  Shift + Alt + Down
//  Alt + Up/Down

// VS Code icons
// Web pages

// Custom user snippets
import React from "react";

// Refactor Promises to Async/Await
const asyncFunc = () => {
  return fetch("chuck.norris.com")
    .then(data => data.json())
    .then(json => console.log(json))
    .catch(e => console.error(e));
};

// Search node modules

// Project Manager

// Typescript exctract to type alias
type Person = {
  name: String;
  age: number;
};

const obj: Person = { name: "Pesho", age: 5 };

// Rest client
GET https://api.chucknorris.io/jokes/random
###
POST https://jsonplaceholder.typicode.com/posts

content-type: application/json
{
    "title": "foo",
    "body": "bar",
    "userId": 2
}

// Auto rename tag
const myArticle = (
  <header>
    <h6> I am groot</h6>
    <section>Nice to meet u</section>
  </header>
);

// Code spell checker
const firstValue = 50;
const getGroceries = () => {
  let bread = makeBread("flour");
};

// Browser preview

// Fold regions
const myFunc = () => {
  //#region
  console.log("hello");
  console.log("hello");
  console.log("hello");
  console.log("hello");
  //#endregion
};

// Partial diff

const myFunc = () => {
  1;
  console.log("another log");

  let myObj = {
    name: "pesho",
    job: "salesman"
  };
};

const yourFunc = () => {
  console.log("another log");

  let myObj = {
    name: "pesho",
    job: "tractorist"
  };
};

// Bookmarks

// GIT

// Settings sync
