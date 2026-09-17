
// import { useState } from "react";
// import './App.css'
// import TestComponent from './TestComponent';
// import Card from './components/Card';
// import Counter from "./components/Counter.jsx";
// function App() {
//   const [name, setName] = useState("");
//    const [age, setAge] = useState("");
//   const [submittedName, setSubmittedName] = useState(
//     () => localStorage.getItem("submittedName") || "",
//   );

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const trimmedName = name.trim();

  //   setSubmittedName(trimmedName);
  //   localStorage.setItem("submittedName", trimmedName);
  //   setName("");
  // };

// const members = [
//   { name: "Mir", age: 20 },
//   { name: "Mizan", age: 22 },
//   { name: "Tanmoy", age: 2 },
//   { name: "Firoz", age: 21 },
// ];
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//           required
//         />
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           placeholder="Enter your age"
//           required
//         />
//          <button type="submit">Submit</button>
//       </form>
//       {submittedName && <p>Submitted name: {submittedName}</p>}
//       <TestComponent />
//        <h3>Card Component</h3>
    
//        {members.map((member) => (
//         <Card
//           key={member.id}
//           name={member.name}
//           age={member.age}
//         />
//       ))}
//       <Counter/>
//       </div>
//   );
// }

// export default App
