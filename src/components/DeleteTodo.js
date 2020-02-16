import React from 'react'
import PropTypes from 'prop-types'

function DeleteTodo({onCreate}){
    const [value,setValue] = useState('')

    function submitHandler(event){
        event.preventDefault()

        if(value.trim()){
            onCreate(value)
            setValue('')
        }
    }

    return(
        <form style={{marinBottom:'1rem'}} onSubmit={submitHandler} >
                <input value={value} 
                onChange={event => setValue(event.target.value)}/>
                <button type='submit' class='btn-common'>Удалить выполненные</button>
            
        </form>
    )
}

DeleteTodo.propTypes={
    onDelite:PropTypes.func.isRequired
}

export default DeleteTodo