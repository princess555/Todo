import React, {useState} from 'react'
import PropTypes from 'prop-types'

function NewTodo(todo,onClean){
    
    function cleanHandler(event){
        event.preventDefault()
        todo.length = 0;


    }

    return(    
  
             <button type='submit' onClean={cleanHandler} className="btn-common">Начать новый список</button>
    )
}

NewTodo.propTypes={
    onCreate:PropTypes.func.isRequired
}

export default NewTodo 