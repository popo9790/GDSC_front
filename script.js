const todos = [];

function addWork() {
  const InputElement = document.querySelector(".input");
  if (InputElement.value != "") {
    todos.unshift({ name: InputElement.value, done: false });
    renderWork();
    InputElement.value = "";
  }
}

function renderWork() {
  const WorkList = document.querySelector(".AddedWork");
  WorkList.innerHTML = "";

  for (let i = 0; i < todos.length; ++i) {
    const BtnElement = document.createElement("button");
    BtnElement.classList.add("CheckBtn");

    const WorkElement = document.createElement("div");

    if (todos[i].done == false) WorkElement.classList.add("Prepare");
    else WorkElement.classList.add("Done");

    if (i == 0) {
      WorkElement.classList.add("first-child");
    }
    WorkElement.append(BtnElement, todos[i].name);

    WorkList.append(WorkElement);
  }
}
