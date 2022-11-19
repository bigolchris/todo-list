let addToButton = document.getElementById("addTo");
let toDoContainer = document.getElementById("todoContainer");
let inputField = document.getElementById("input");

let newToDoList = {
  title: "",
  todos: [""],
};
function createInput() {
  let toDoTitle = document.createElement("h3");
  let inputContainer = document.createElement("div");
  let newInput = document.createElement("input");
  let inputButton = document.createElement("button");
  newInput.classList.add("newInput-styles");
  inputButton.classList.add("newBtn-styles");

  inputButton.addEventListener("click", () => {
    const newItem = addItem(newInput.value);
    inputContainer.appendChild(newItem);
  });

  inputButton.innerText = "+";

  toDoTitle.innerText = inputField.value;

  inputContainer.className = "created-container";
  toDoTitle.className = "created-title";
  newInput.className = "created-input hide";
  inputButton.className = "created-btn hide";

  toDoTitle.addEventListener("click", () => {
    if (
      newInput.classList.contains("hide") &&
      inputButton.classList.contains("hide")
    ) {
      inputContainer.style.left = -20 + "em";
    } else {
      inputContainer.style.left = -30 + "em";
    }
  });

  toDoTitle.addEventListener("click", () => {
    if (
      newInput.classList.contains("hide") &&
      inputButton.classList.contains("hide")
    ) {
      newInput.classList.remove("hide");
      inputButton.classList.remove("hide");
    } else {
      newInput.classList.add("hide");
      inputButton.classList.add("hide");
    }

    // newInput.classList.remove("hide");
    // inputButton.classList.remove("hide");
  });

  toDoTitle.addEventListener("dblclick", () => {
    inputContainer.remove();
  });

  inputContainer.appendChild(toDoTitle);
  inputContainer.appendChild(newInput);
  inputContainer.appendChild(inputButton);
  return inputContainer;
}

const addInput = () => {
  const inputContainer = createInput();
  toDoContainer.appendChild(inputContainer);
};

function addItem(text) {
  let newListItem = document.createElement("p");

  newListItem.innerText = text;
  newListItem.classList.add("listItem-styling");

  newListItem.addEventListener("click", function () {
    newListItem.style.textDecoration = "line-through";
  });

  newListItem.addEventListener("dblclick", function () {
    newListItem.remove();
  });
  return newListItem;
  // let listItem = document.createElement("h3");
  // listItem.innerText = inputField.value;
  // toDoContainer.appendChild(listItem);
  // inputField.value = "";
}

addToButton.addEventListener("click", addInput);
