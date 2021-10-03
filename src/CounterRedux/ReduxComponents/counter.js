
const initial_state = {
  count : 0
}

const IncrementValue = () =>
 {
  return {
    type: 'value/increment',
    payload: 'add one'
   }
 }

 const DecrementValue = () =>
  {
   return {
     type: 'value/decrement',
     payload: 'subtract one'
    }
  }


const Counter = (state = initial_state, action) =>
 {
  if (action.type === 'value/increment')
   {
    return {
       ...state, count :state.count + 1
     }
   }

  else if (action.type === 'value/decrement')
   {
    return {
      ...state, count : state.count - 1
     }
   }

  return state;
 }

export {IncrementValue, DecrementValue};
export default Counter;
