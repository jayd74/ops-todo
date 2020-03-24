import React, { useState } from 'react'
import styled from 'styled-components'

const ToDoList = ({className}) => {
  const [list, setList] = useState([])
  const [item, setItem] = useState('')
  const [completed, setCompleted] = useState(false)

  const handleItem = event => {
    setItem(event.target.value)
  }

  const handleComplete = event => {
    setCompleted(!event.target.value)
  }

  const addList = () => {
    list.push({item, completed, ts: Date.now().toString()})

    setList(list)
    setItem('')
  }

  const removeItem = key => {
    let oldList = list
    const toberemoved = oldList.indexOf(list.find(todo => todo.ts === key))

    const newList = oldList.slice(toberemoved)
    setList(newList)
  }

  return <div className={className}>
    <h1>To Do List</h1>
      <ul>
        {list.map(todo => {
          return (
              <li key={todo.ts}>
                <input type='checkbox' value={todo.completed} onChange={handleComplete} />
                <span>{todo.item}</span>
                <button className="remove" onClick={() => removeItem(todo.ts)}>Remove</button>
              </li>
          )
        })}
      </ul>
    <input type='text' value={item} onChange={handleItem} />
    <button onClick={() => addList()}>Add</button>
  </div>
}

export default styled(ToDoList)`
  padding: 10px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    span {
      margin: 10px;
    }
  }
  input[type=text] {
    font-size: 16px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
  }

  button {
    font-size: 16px;
    margin: 5px;
    padding: 5px;
    color: white;
    background: green;
    border: 1px solid white;
    border-radius: 5px;
  }

  .remove{
    background: red;
  }
`
