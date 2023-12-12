import Image from "next/image";
import styles from "./page.module.css";

function WorkElement({ work }) {
  return (
    <div className={`${work.done ? "Done" : "Prepare"}`}>
      <button className={`${work.done ? "CheckBtn" : "BtnAdd"}`}></button>
      {work.name}
    </div>
  );
}

export default function Home() {
  const works = [
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

  return (
    <div className="CenterBlock">
      <div className="Title">TODO</div>
      <div className="NewWork">
        <button className="BtnAdd">+</button>
        <input
          type="text"
          name="works"
          placeholder="Create a new todo ..."
          className="input"
        />
      </div>
      <div className="AddedWork">
        {works.map((work) => (
          <WorkElement work={work} />
        ))}
      </div>
    </div>
  );
}
