import React from 'react'
import  useTodoStore  from "../store/useTodoStore"
import UserItem from './UserItem'

const UserList = () => {
  const todos = useTodoStore((state) => state.todos)

  if (todos.length === 0) return <p className="text-gray-500">No todos yet.</p>

  return (
    <ul className="space-y-4 px-4 py-2">
    {todos.map((todo) => (
      <li
        key={todo.id}
        className="bg-white bg-opacity-90 rounded-xl p-2 shadow-md hover:shadow-lg 
        transition-all border border-slate-200 flex  justify-between"
      >
        <UserItem todo={todo} />
      </li>
    ))}
  </ul>
  
  )
}

export default UserList