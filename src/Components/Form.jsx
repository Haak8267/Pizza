// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import useTodoStore from '../store/useTodoStore';


// export default function Form({ details, addUser, updateUser }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [isEditMode, setIsEditMode] = useState(false);
//   const addTodo = useTodoStore((state) => state.addTodo)

//   // Prefill form when editing
//   useEffect(() => {
//     if (details) {
//       setName(details.name || '');
//       setEmail(details.email || '');
//       setContact(details.contact || '');
//       setIsEditMode(!!details.id);
//     }
//   }, [details]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const userData = {
//       name,
//       email,
//       contact,
//       id: isEditMode ? details.id : uuidv4(), // Preserve ID if editing
//     };

//     if (isEditMode) {
//       updateUser(userData); // call update function
//     } else {
//       addUser(userData); // create new user
//     }

//     // Optional: reset form
//     setName('');
//     setEmail('');
//     setContact('');
//     setIsEditMode(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-200 flex 
//       flex-wrap justify-center items-start gap-5 p-6 overflow-x-hidden">
//       <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6 w-[35rem] 
//         max-w-xl space-y-5 transition-all duration-300">
//         <h2 className="text-3xl font-semibold text-slate-800 text-center">
//           {isEditMode ? 'Edit Contact' : 'Contact Form'}
//         </h2>

//         <div>
//           <label className="block text-sm font-medium text-slate-600">Name</label>
//           <input
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//             name="name"
//             type="text"
//             required
//             className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm 
//               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-slate-600">Email</label>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             name="email"
//             type="email"
//             required
//             className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm 
//               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-slate-600">Contact</label>
//           <input
//             onChange={(e) => setContact(e.target.value)}
//             value={contact}
//             name="contact"
//             type="tel"
//             required
//             className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm 
//               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-sky-600 text-white font-medium py-3 rounded-xl hover:bg-green-500 shadow-md transition"
//         >
//           {isEditMode ? 'Update' : 'Submit'}
//         </button>
//       </form>
//     </div>
//   );
// }



import React, { useState } from 'react'
import  useTodoStore  from '../store/useTodoStore'
import { PlusCircle } from 'lucide-react'

const Form = () => {
  const [text, setText] = useState('')
  const addTodo = useTodoStore((state) => state.addTodo)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTodo(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className=" flex flex-col md:flex-row gap-4 mb-6 p-6 md:px-10 rounded-2xl 
    bg-gradient-to-br from-white via-slate-100 to-slate-300 shadow-xl border border-slate-200 backdrop-blur-sm">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo..."
        className="flex-1 px-4 py-2 text-base rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 transition flex items-center gap-1 justify-center"
      >
        <PlusCircle size={20} />
        Enter
      </button>
    </form>
  )
}

export default Form