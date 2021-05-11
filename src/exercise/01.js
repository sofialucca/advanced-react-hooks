// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useState(initialCount)
  //base
  // function countReducer(currentCount, nuovoCount){
  //   return nuovoCount;
  // }

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  // const increment = () => setCount(count + step)
  
  //extra 1
  // function countReducer(currentCount, nuovoCount){
  //   return currentCount + nuovoCount;
  // }
  // const [count, setCount] = React.useReducer(countReducer, initialCount);

  // const increment = () => setCount(step);

  //extra 2
  // function countReducer(currentCount, nuovoCount){
  //   return {...nuovoCount};
  // }

  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () => setState({count: count + step})
  
  //extra 3
  // function countReducer(currentCount, nuovoCount){
  //   return nuovoCount(currentCount);
  // }

  // const [state, setState] = React.useReducer(countReducer, {
  //   count: initialCount,
  // })
  // const {count} = state
  // const increment = () =>
  // setState(currentState => ({count: currentState.count + step})) 
  
  //extra 4
  function countReducer(value, action){
    switch(action.type){
      case 'INCREMENT':
        return {count: value.count +  action.step};
      default:
        return value;
    }
  }
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
