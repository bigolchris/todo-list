let addToButton = document.getElementById("addTo");
let toDoContainer = document.getElementById("todoContainer");
let inputField = document.getElementById("input");

function addInput() {
  let inputContainer = document.createElement("div");
  let newInput = document.createElement("input");
  let inputButton = document.createElement("button");
  newInput.classList.add("newInput-styles");

  toDoContainer.appendChild(inputContainer);
  inputContainer.appendChild(newInput);
  inputContainer.appendChild(inputButton);
}

function addItem() {
  let listItem = document.createElement("h3");
  listItem.classList.add("listItem-styling");
  listItem.innerText = inputField.value;
  toDoContainer.appendChild(listItem);
  inputField.value = "";

  listItem.addEventListener("click", function () {
    listItem.style.textDecoration = "line-through";
  });

  listItem.addEventListener("dblclick", function () {
    toDoContainer.removeChild(listItem);
  });
}

addToButton.addEventListener("click", addInput);
