// https://github.com/neuefische/cgn-web-23-4/blob/main/sessions/self-directed-learning-week-5/additional-challenge-js-people-in-space-2.md

// ============ Origin ============

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// ============ Task 1 ============

// import { useState } from "react";
// import "./App.css";

// export default function App() {
//   const [numberInSpace, setNumberInSpace] = useState(0);

//   return (
//     <div className="App">
//         <PeopleInSpace numberInSpace={numberInSpace} />
//     </div>
//   );
// }

// function PeopleInSpace({ numberInSpace }) {
//   return (
//     <>
//       <h2>People in space: {numberInSpace}</h2>
//     </>
//   );
// }

// // ============ Task 2 ============

// import { useEffect, useState } from "react";
// import "./App.css";

// export default function App() {
//   const [numberInSpace, setNumberInSpace] = useState(0);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(`http://api.open-notify.org/astros.json`);
//       const numberInSpace = await response.json();
//       console.log(numberInSpace);
//       setNumberInSpace(numberInSpace);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//         <PeopleInSpace numberInSpace={numberInSpace} />
//     </div>
//   );
// }

// function PeopleInSpace({ numberInSpace }) {
//   return (
//     <>
//       <h2>People in space: {numberInSpace.number}</h2>
//     </>
//   );
// }

// // ============ Task 3 ============

// import { useEffect, useState } from "react";
// import "./App.css";

// export default function App() {
//   const [numberInSpace, setNumberInSpace] = useState(0);
//   const [peopleInSpace, setPeopleInSpace] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(`http://api.open-notify.org/astros.json`);
//       const data = await response.json();
//       setNumberInSpace(data.number);
//       setPeopleInSpace(data.people);
//       console.log(numberInSpace);
//       console.log(peopleInSpace);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <PeopleInSpace numberInSpace={numberInSpace} />
//       <DisplayNames peopleInSpace={peopleInSpace} />
//     </div>
//   );
// }

// function PeopleInSpace({ numberInSpace }) {
//   return (
//     <>
//       <h2>People in space: {numberInSpace}</h2>
//     </>
//   );
// }

// function DisplayNames({ peopleInSpace }) {
//   return (
//     <>
//       <ul className="App-list">
//         {peopleInSpace.map((person) => (
//           <li key={person.name}>{person.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// ============ Task 4 (mit fixen Buttons, ohne ausgelagerte Funktion) ============

import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [numberInSpace, setNumberInSpace] = useState(0);
  const [peopleInSpace, setPeopleInSpace] = useState([]);

  //Setup new state
  const [activeCraft, setActiveCraft] = useState("All");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://api.open-notify.org/astros.json`);
      const data = await response.json();
      setNumberInSpace(data.number);
      setPeopleInSpace(data.people);
    }

    fetchData();
  }, []);

  // ====== Test content of state vars
  // console.log(numberInSpace);
  // console.log("Names of all persons");
  // peopleInSpace.forEach((person) => console.log(person.name));
  console.log(activeCraft);
  
  
  // TODO check warum die variable nicht richtig speichert
  console.log(
    peopleInSpace.filter((name) => peopleInSpace.craft === activeCraft)
  );

  Define filter const
  const filteredPeople =
  activeCraft === "All"
    ? peopleInSpace
    : peopleInSpace.filter((person) => person.craft === activeCraft);

  // Define Buttons as fixed value
  return (
    <div className="App-header">
      <PeopleInSpace numberInSpace={numberInSpace} />
      <p>
        <button
          className="App-button"
          type="button"
          onClick={() => setActiveCraft("All")}>
          All
        </button>
      </p>
      <p>
        <button
          className="App-button"
          type="button"
          onClick={() => setActiveCraft("ISS")}>
          ISS
        </button>
      </p>
      <p>
        <button
          className="App-button"
          type="button"
          onClick={() => setActiveCraft("Tiangong")}>
          Tiangong
        </button>
      </p>
      <DisplayNames
        // peopleInSpace={peopleInSpace}
        filteredPeople={filteredPeople}
      />
    </div>
  );
}

function PeopleInSpace({ numberInSpace }) {
  return (
    <>
      <h2>People in space: {numberInSpace}</h2>
    </>
  );
}

// function DisplayNames({ peopleInSpace, filteredPeople }) {
function DisplayNames({ filteredPeople }) {
  return (
    <>
      <ul>
        {/* {peopleInSpace.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))} */}
        {filteredPeople.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </>
  );
}
