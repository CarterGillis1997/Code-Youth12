import React from "react";
import ReactDOM  from "react-dom/client";
import  {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import TheGrid from "./Grid.js"
// import "./Grid.css"
// import Footer from "./class.js";
// import ButtonThing from "./button.js";
// import "./button.css"
import Counter from "./counter.js"
import Game from "./tictacto.js";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Game />
  },
  {
    path:"/counter",
    element:<Counter />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
)

// function Table(){
//   return(
//     <table border="1" className="theTable" id="table1">
//       <thead>
//       <tr>
//         <th>Name</th>
//         <th>Id</th>
//       </tr>
//       </thead>
//       <tbody>
//       <tr>
//         <td>Carter</td>
//         <td>0</td>
//       </tr>
//       <tr>
//         <td>Sammantha</td>
//         <td>1</td>
//       </tr>
//       </tbody>
//     </table>
//   )
// }

// const theId = "itemOne"

// function List(props){
//   const elements = props.content.map((element, index)=>{
//     return <li id={`listItem${index}`} key={index}>{element}</li>
//   })

//   // const newArray = [<li>Four</li>, <li>Five</li>]

//   return(
//     <ul>
//       {elements}
//     </ul>
//   )
// }

// function Message(props){
//   console.log(props)
//   return(
//     <p>{props.text}</p>
//   )
// }

// function Header(props){
//   return(
//     <header>
//       <HeaderContent text={props.text} />
//     </header>
//   )
// }

// function HeaderContent(props){
//   return(
//     <div>
//       <p>{props.text}</p>
//     </div>
//   )
// }