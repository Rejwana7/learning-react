// import "./Card.css"
// import { useState } from "react";
// //* props and children
// //*key value pair
// // export default function Card(props){
// //     console.log(props.children);
    
// //     return (
// //         <div>
// //             {props.children}
// //             <h2>Card Component</h2>
// //             <p>First Name:{props.firstname}</p>
// //             <p>Last Name:{props.lastname}</p>
// //         </div>
// //     )
// // }

// // export default function Card({children,firstname,lastname}){
    
// //     return (
// //         <div>
// //             {children}
// //             <h1>Card Component</h1>
// //             <p>First Name:{firstname}</p>
// //             <p>Last Name:{lastname}</p>
// //         </div>
// //     )
// // }

// // export default function Card({Name,age}){
// //     if(age <18){
// //         return <div className="card">Your are too young</div>
// //     }
    
// //     return (
// //         <div className="card">
           
// //             <h1>Card Component</h1>
// //            <p>Name: <span className="name">{Name}</span>
// //       </p>

// //       <p>
// //         Age: <span className="age">{age}</span>
// //       </p>
// //         </div>
// //     )
// // }

// // export default function Card({ Name, age }) {
 
// //   return (
// //    <>
    
// //     <div className="card">
     

// //       {age < 18 ? (
// //         <div className="title">You are too young</div>
// //       ) : (
// //         <>
// //           <p>
// //             Name: <span className="name">{Name}</span>
// //           </p>

// //           <p>
// //             Age: <span className="age">{age}</span>
// //           </p>
// //         </>
// //       )}
// //     </div>
// //    </>
// //   );
// // }


// //  export default function Card({ name, age }) {
// //   return (
// //     <div className="card">
// //       {age < 18 ? (
// //         <div className="title">You are too young</div>
// //       ) : (
// //         <>
// //           <p>
// //             Name: <span className="name">{name}</span>
// //           </p>

// //           <p>
// //             Age: <span className="age">{age}</span>
// //           </p>
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // export default function Card({ name, age }) {
// //   const clickHandler=(memberName)=>{
// //     console.log("Button Clicked " +  memberName);
// //   }
// //   const anotherClickHandler=()=>{
// //     console.log("Another Clicked");
// //   }

// //   const grettings=()=>{
// //     clickHandler();
// //     anotherClickHandler();
// //   }
// //   return(
// //     <div onClick={() => clickHandler(name)} className="card">
// //       <p> Name: {name}</p>
// //       <p> Age: {age}</p>
// //     </div>
// //   )
// // }


// // export default function Card({ name, age }) {
// //   const clickHandler=(memberName)=>{
// //     console.log("Button Clicked " +  memberName);
// //   }
// //   const anotherClickHandler=()=>{
// //     console.log("Another Clicked");
// //   }

// //   const grettings=(name)=>{
// //     clickHandler(name);
// //     anotherClickHandler();
// //   }
// //   return(
// //     <div onClick={() => grettings(name)} className="card">
// //       <p> Name: {name}</p>
// //       <p> Age: {age}</p>
// //     </div>
// //   )
// // }
// //* 1. Must use in component top level
// //* 2. Must use inside react component

// export default function Card({ name, age }) {
//     const [member, setMember] = useState("");

//   const clickHandler = (memberName) => {
//     setMember(memberName);
//   };

//   console.log(member);
//   return(
//     <div onClick={() =>clickHandler (name)} className="card">
//       <p> Name: {name}</p>
//       <p> Age: {age}</p>
//       {member &&  <p>Greetings {member}</p>}
//     </div>
//   )
// }
// // Click card
// // → pass passes name to clickHandler
// // → setMember(memberName) updates the state
// // → React renders Card again
// // → member contains the clicked member's name


