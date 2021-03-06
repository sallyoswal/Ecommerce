import Header from './Components/Header';
import Basket from './Components/Basket';
import Main from './Components/Main';
import data from './Data';
import { useState } from 'react';



function App() {
  const {products} = data;
  const [cartItems, setcartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      setcartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x));
    }
    else {
      setcartItems([...cartItems, {...product, qty: 1}]);
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id ===product.id);
    if(exist.qty === 1)
    {
        setcartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setcartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty -1} : x));
    }
  }
  return (
    <div className="App">
      <Header countcartItems = {cartItems.length}>
      </Header>
      <div className='row'>
      <Main onAdd={onAdd} products={products}></Main>
      <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
      </div>
    </div>
  );
}

export default App;
