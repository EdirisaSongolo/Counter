
import './App.css';
import Counter from './Components/Counter';
import {useSelector} from 'react-redux';

function App() {
  const counter_value = useSelector((state) => state.counter.count);
  const user_names = ["Hellen Kutuusa", "Yahya Ntambi", "Aisha Nankumbi", "Mariam Kutuusa", "Edirisa Songolo"];
  return (
    <div className="App">
      <header className="App-header">
       <div> Total Count : {counter_value} </div>
       {user_names.map( (user_name) => (<Counter user_name = {user_name} />) )}
      </header>
    </div>
  );
}

export default App;
