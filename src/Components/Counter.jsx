
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {IncrementValue, DecrementValue} from '../CounterRedux/ReduxComponents/counter';

const Counter = (props) =>
 {
  const {user_name} = props;
  const [individual_count, update_userCount] = useState(0);

  const update_counter = useDispatch();

  const increment_value = () => {
    update_counter(IncrementValue());
    update_userCount(individual_count + 1);
  }
  const decrement_value = () => {
    update_counter(DecrementValue());
    update_userCount(individual_count-1);
  }

  return (
   <div>
    <div> User Name : {user_name} </div>
    <div> Individual Count : {individual_count} </div>
    <button onClick = { increment_value }> Increment Value </button>
    <button onClick = { decrement_value }> Decrement Value </button>
   </div>
  );
 }


export default Counter
