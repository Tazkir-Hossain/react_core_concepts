import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

///// how to use html css in javascript //////
//function App() {
// let name = "Mahfuz";
// const person = {
//   name: "Dr. Mahfuz",
//   job: "Singer",
// };
// const style = {
//   color: "red",
//   backgroundColor: "yellow",
// };
// return (
//   <div className="App">
//     <header className="App-header">
//      <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <h1 className="">My heading</h1>
//       <h2 style={style}>Math:{(2 + 5) * 25 + 65}</h2>
//       <h3>Name:{name}</h3>
//       <h4 style={{ backgroundColor: "cyan", color: "pink" }}>
//         Hello:{person.name + " " + person.job}
//       </h4>
//       <p>My first paragraph</p> */
//     </header>
//   </div>
// );
//}

/////////////// create component and similer look ///////
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Person></Person>
//         <Person></Person>
//         <Person></Person>
//       </header>
//     </div>
//   );
// }

// function Person() {
//   const personStyle = {
//     border: "2px solid red",
//     margin: "5px",
//   };

//   return (
//     <div style={personStyle}>
//       <h1>Name:Tazkir Hossain</h1>
//       <h3>Programmer of the year</h3>
//     </div>
//   );
// }

///////////// create component similer in look , different in data (dynamic)///////
// function App() {
//   const job = ["doctor", "engnier"];
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Person name="Munna" job="football"></Person>
//         <Person name="tusar" job="cricket"></Person>
//         <Person name="Kalam" job={job[0]}></Person>
//       </header>
//     </div>
//   );
// }

// function Person(props) {
//   const personStyle = {
//     border: "2px solid red",
//     margin: "5px",
//     width: "400px",
//   };

//   return (
//     <div style={personStyle}>
//       <h1>Name:{props.name}</h1>
//       <h3>job:{props.job}</h3>
//     </div>
//   );
// }

//////////////////////////////////////////// video 8 ///////////////

// function App() {
//   const products = [
//     { name: "Photoshop", price: "$90.99" },
//     { name: "Illustrator", price: "$60.99" },
//     { name: "PDF Reader", price: "$6.99" },
//   ];
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Product product={products[0]}></Product>
//         <Product product={products[1]}></Product>
//         <Product product={products[2]}></Product>
//       </header>
//     </div>
//   );
// }

// function Product(props) {
//   const productStyle = {
//     border: "1px solid gray",
//     borderRadius: "5px",
//     backgroundColor: "lightgray",
//     height: "200px",
//     width: "200px",
//     float: "left",
//     padding: "20px",
//     margin: "5px",
//   };
//   return (
//     <div style={productStyle}>
//       <h3>{props.product.name}</h3>
//       <h5>{props.product.price}</h5>
//       <button>Buy now</button>
//     </div>
//   );
// }

///////////// video 9 creat multiple components from an array of objects/////////
// function App() {
//   const products = [
//     { name: "Photoshop", price: "$90.99" },
//     { name: "Illustrator", price: "$60.99" },
//     { name: "PDF Reader", price: "$6.99" },
//   ];
//   const nayoks = ["Razzak", "Jasim", "Bappi", "Sakib", "Nishu"];
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ul>
//           {nayoks.map(function (nayok) {
//             return <li>{nayok}</li>;
//           })}
//           {/* <li>{nayoks[0]}</li>
//           <li>{nayoks[1]}</li> */}
//           {products.map((product) => (
//             <li>{product.name}</li>
//           ))}
//         </ul>
//         {products.map(function (product) {
//           return <Product product={product}></Product>;
//         })}
//       </header>
//     </div>
//   );
// }

// function Product(props) {
//   const productStyle = {
//     border: "1px solid gray",
//     borderRadius: "5px",
//     backgroundColor: "lightgray",
//     height: "200px",
//     width: "200px",
//     float: "left",
//     padding: "20px",
//     margin: "5px",
//   };
//   return (
//     <div style={productStyle}>
//       <h3>{props.product.name}</h3>
//       <h5>{props.product.price}</h5>
//       <button>Buy now</button>
//     </div>
//   );
// }

////////// video 10 & video 11 Introduction to Component sate and sate change ////////////
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Counter></Counter>
//       </header>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(10);
//   function handleIncrease() {
//     // const newCount = count + 1;
//     // setCount(newCount);
//     setCount(count + 1);
//   }
//   function handleDecrease() {
//     setCount(count - 1);
//   }
//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//       <button onClick={handleDecrease}>Decrease</button>
//     </div>
//   );
// }

///////////// video 12 Load dynamic data ,Api call useEffect integrate state /////////////
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
