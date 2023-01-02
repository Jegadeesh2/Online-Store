import "./App.css";

import ApparelList from "./components/ApparelList";

import { products } from "./data";

function App() {
  return (
    <main className="container">
      <h1 className="title">Shirt Store</h1> <hr />
      <input className="search"></input>
      <button className="search-btn">Search</button>
      <ApparelList products={products}/>
    </main>
  );
}

// function ApparelList() {
//   return (
//     <section className="store">
//       {products.map(({image,type,description,price} , index) => {
//         return (<Shirt
//           image={image}
//           type={type}
//           price={price}
//           description={description}
//           key={index}

//         />)
//       })}
//     </section>
//   );
// }

// function Shirt({ image, type, price, description }) {
//   return (
//     <article className="product">
//       <img className="shirtImage" src={image} alt="t-shirt" />
//       <br />
//       <h2 className="shirtType">{type}</h2>
//       <p className="shirtDescription">{description}</p>
//       <h3 className="shirtPrice">{price}</h3>
//     </article>
//   );
// }
export default App;
