import { useState } from "react";
import './App.css';

function App() {
  const [products, setproducts] = useState([
    {
      id: '1',
      title: 'Chocolate Cake',
      price: 1500,
      image: 'https://www.dilpasandsweets.com/wp-content/uploads/2019/07/img23-3.png',
    },
    // {
    //   id: '2',
    //   title: 'Valentine Cake',
    //   price: 980,
    //   image: 'https://www.dilpasandsweets.com/wp-content/uploads/2019/07/img19-3.png',
    // },
    // {
    //   id: '3',
    //   title: 'Chocolate Cake',
    //   price: 980,
    //   image: 'https://www.dilpasandsweets.com/wp-content/uploads/2019/07/img16-4.png',
    // },
  ])

  function addcart(index) {
    const [carts, setcarts] = useState([])
    setcarts([products[index]])
    return
      console.log(setcarts)
  }

  return (
    <div className="card1">
      {products.map((product, index) => (
        <div key={product.id}>
          <img className="pic" src={product.image} alt={product.title} />
          <h1>{product.title}</h1>
          <div className="price">PKR: {product.price}/- Per kg</div>
          <div>
            <button onClick={() => addcart(index)} >Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
