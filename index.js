// Import stylesheets
import "./style.css";

//const appDiv = document.getElementById("app");
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
const box = document.getElementById("box");
const getButton = document.getElementById("getButton");
const deleteButton = document.getElementById("deleteButton");
let numberOfImages = 0;
let array = [];

function onButtonClick() {
  numberOfImages++;
  createImage(array[numberOfImages]);
}

function createImage(src) {
  const newImage = document.createElement("img");
  newImage.setAttribute("class", "img");
  newImage.setAttribute("src", src);
  box.appendChild(newImage);
}

function onArray(arr) {
  array = arr;
}

function fetchImages() {
  fetch(`https://dog.ceo/api/breed/pomeranian/images/random/100`)
    .then(d => d.json())
    .then(d => onArray(d.message));
}
fetchImages();
getButton.onclick = () => {
  onButtonClick();
};

deleteButton.onclick = () => {
  box.innerHTML = "";
};
