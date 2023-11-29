const todos = [
  {
    name: "Calculus HW2",
    done: false,
  },
  {
    name: "Side Project Figma",
    done: false,
  },
  {
    name: "Course Slide",
    done: false,
  },
  {
    name: "Write Blog Post",
    done: true,
  },
  {
    name: "Test",
    done: true,
  },
];

const Btn = document.createElement("button");
Btn.classList.add("CheckBtn");

const WorkElement = document.createElement("div");
WorkElement.classList.add("Prepare");
WorkElement.classList.add("first-child");
WorkElement.append(Btn, todos[0].name);

const WorkList = document.querySelector(".AddedWork");
console.log(WorkList);
