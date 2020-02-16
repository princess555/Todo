import React from 'react';
import TodoList from './components/TodoList'
import Context from './context'
import AddTodo from './components/AddTodo';
import NewTodo from './components/NewTodo';
//import DeleteTodo from './components/DeleteTodo';

function App() {
  const [todos,setTodos] = React.useState([
    
    
  ])

function toggelTodo(id){
  setTodos(todos.map(todo=>{
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo
  })
  )
}

function removeTodo(id){
  setTodos(todos.filter(todo => todo.id !== id))
}

function addTodo(title){
  setTodos(todos.concat([{
    title:title,
    id:Date.now(),
    completed:false
  }]))
}

  return (
    <Context.Provider value={{removeTodo}}>
   <div className="wrapper">
      <NewTodo onClean={removeTodo}/>
      <AddTodo onCreate={addTodo}/>
      {todos.length ?<TodoList todos={todos} onToggel={toggelTodo}/> : <p></p>}
      {/* <DeleteTodo onDelite={removeItem} /> */}
  
  </div>
  </Context.Provider>
  );
}

export default App;
