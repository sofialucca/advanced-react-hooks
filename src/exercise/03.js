// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext();
// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider

//extra 1
function useCount(){
  const value = React.useContext(CountContext);
  if(value){
    return value;
  }else{
    throw new Error("useCount solo se si ha CountProvider");
  }
}

function CountProvider(props){
  const [count,setCount] = React.useState(0);
  const value = [count,setCount];
  return <CountContext.Provider value = {value} {...props}/>
}

function CountDisplay() {
  //const [count] = React.useContext(CountContext);

  //extra 1
  const [count] = useCount();
  // 🐨 get the count from useContext with the CountContext
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // const [, setCount] = React.useContext(CountContext);
  const [, setCount] = useCount();
  // 🐨 get the setCount from useContext with the CountContext
  // const setCount = () => {value.setCount}
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
    {/* <CountProvider> */}
        <CountDisplay />
        <Counter />      
    {/* </CountProvider> */}
    </div>
  )
}

export default App
