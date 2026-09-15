// import "./Card.css"
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


//  export default function Card({ name, age }) {
//   return (
//     <div className="card">
//       {age < 18 ? (
//         <div className="title">You are too young</div>
//       ) : (
//         <>
//           <p>
//             Name: <span className="name">{name}</span>
//           </p>

//           <p>
//             Age: <span className="age">{age}</span>
//           </p>
//         </>
//       )}
//     </div>
//   );
// }