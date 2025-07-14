// 

import React, { useState } from 'react'
import  useTodoStore from '../store/useTodoStore'
import { Pencil, Trash2, Save, CheckCircle } from 'lucide-react'

const UserItem = ({ todo }) => {
  const { toggleTodo, deleteTodo, updateTodo } = useTodoStore()
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(todo.text)

  const handleSave = () => {
    if (!newText.trim()) return
    updateTodo(todo.id, newText)
    setIsEditing(false)
  }

  return (
    <li className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm">
      {isEditing ? (
        <>
          <input
            className="flex-1 mr-4 px-2 py-1 border rounded-md"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave} className="text-sky-700 mr-4">
            <Save size={20} />
          </button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleTodo(todo.id)}
            className={`flex-1 cursor-pointer flex items-center gap-2 ${
              todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
            }`}
          >
            <CheckCircle
              size={20}
              className={`${
                todo.completed ? 'text-sky-700' : 'text-gray-300'
              }`}
            />
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)} className="text-slate-900 ml-9">
            <Pencil size={20} />
          </button>
          <button onClick={() => deleteTodo(todo.id)} className="text-red-600">
            <Trash2 size={20} />
          </button>
        </>
      )}
    </li>
  )
}

export default UserItem