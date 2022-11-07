let addToButton = document.getElementById("addTo");
let toDoContainer = document.getElementById("todoContainer");
let inputField = document.getElementById("input");

function addItem() {
  let listItem = document.createElement("p");
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

addToButton.addEventListener("click", addItem);
