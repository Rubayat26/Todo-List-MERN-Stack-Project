import './App.css';
import Todos from './components/showTodos/showTodo';
import CreateTodo from './components/createTodo/createTodo';

function App() {
  return (
    <div className="App">
     <Todos/>
     <CreateTodo/>
    </div>
  );
}

export default App;
