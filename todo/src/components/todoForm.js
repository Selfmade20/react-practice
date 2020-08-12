import React, { useState } from 'react'
import '../App.css'

export default function TodoForm() {
    const [value, setValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!value) return
        addTodo(value);
        setValue('')
    }

    const addTodo = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter your todo here....."
                className="input"
                value={value}
                onChange={(event) => { event.target.value }} />
        </form>
    )
}