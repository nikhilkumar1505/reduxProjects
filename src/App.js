import './App.css';
import {Provider} from 'react-redux';
import store from './Redux/Store'
import Todolist from './Projects/TodoList/Todolist'

function App() {
  return (
    <div >
      <Provider store ={store}>
        <Todolist/>
     </Provider>
    </div>
  );
}

export default App;
