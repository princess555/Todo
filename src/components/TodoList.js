import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

const styles ={
    ul:{
        listStyle:'none',
        margin:0,
        padding:0
    }
}

 function TodoList(props){
    return (
        <ul style={styles.ul}>
           { props.todos.map((todo, index)=>{
               return (
               <TodoItem 
                todo={todo} 
                key={todo.id} 
                index={index}
                onChange={props.onToggel}
                />
               )
           })}
        </ul>
    )
}

TodoList.propTypes ={
    todos:PropTypes.arrayOf(PropTypes.object).isRequired ,
    onToggel:PropTypes.func.isRequired
}

export default TodoList