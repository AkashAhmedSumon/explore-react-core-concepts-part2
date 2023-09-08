import './App.css';
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';
function App() {
  
  function handleClick(){
    alert('Button Clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const handleClick4 = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() =>{ alert('third clicked')}}>third</button>
      <button onClick={() => handleClick4(3)}>Four</button>
    </>
  )
}

export default App
