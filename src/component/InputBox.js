import { useState } from 'react'
function InputBox({ onClickHandler }) {
  let [todoName, setTodoName] = useState('')
  let [todoDue, setTodoDue] = useState('')

  return (
    <div className="todo-item-container">
      <input
        placeholder="Go to gym"
        type="text"
        onChange={(e) => setTodoName(e.target.value)}
        value={todoName}
      />
      <input
        type="date"
        onChange={(e) => setTodoDue(e.target.value)}
        value={todoDue}
      />
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          onClickHandler(todoName, todoDue)
          setTodoDue('')
          setTodoName('')
        }}
      >
        Add
      </button>
    </div>
  )
}
export default InputBox
