/* const navbar = [
  { name: 'Home', id: 'home', status: false },
  { name: 'About', id: 'about', status: true },
  { name: 'Contact', id: 'contact', status: true },
  { name: 'Service', id: 'service', status: false },
  { name: 'Help', id: 'help', status: true },
];
// ['Home','Service']

const a = navbar[0].name;
const b = navbar[3].name;
const somearr = [];
for (let key in navbar) {
  if (navbar[key].status === false) {
    somearr.push(navbar[key].name);
  }
}

console.log(somearr);
 */
// Question2

import './styles.css';
import { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  const onDecreament = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };
  const handleEnter = e => {
    e.preventDefault();
    setCount(parseInt(e.target.value, 10));
  };
  const onReset = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <p>count={count}</p>
      <input type="text" onChange={handleEnter} />
      <button onClick={onIncrement}> Increament</button>
      <button onClick={onDecreament}> Decrease </button>
      <button onClick={onReset}>Reset </button>
    </div>
  );
}
