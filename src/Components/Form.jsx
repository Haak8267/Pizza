import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Form({ details, addUser, updateUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  // Prefill form when editing
  useEffect(() => {
    if (details) {
      setName(details.name || '');
      setEmail(details.email || '');
      setContact(details.contact || '');
      setIsEditMode(!!details.id);
    }
  }, [details]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name,
      email,
      contact,
      id: isEditMode ? details.id : uuidv4(), // Preserve ID if editing
    };

    if (isEditMode) {
      updateUser(userData); // call update function
    } else {
      addUser(userData); // create new user
    }

    // Optional: reset form
    setName('');
    setEmail('');
    setContact('');
    setIsEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-200 flex 
      flex-wrap justify-center items-start gap-5 p-6 overflow-x-hidden">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6 w-[35rem] 
        max-w-xl space-y-5 transition-all duration-300">
        <h2 className="text-3xl font-semibold text-slate-800 text-center">
          {isEditMode ? 'Edit Contact' : 'Contact Form'}
        </h2>

        <div>
          <label className="block text-sm font-medium text-slate-600">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm 
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm 
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600">Contact</label>
          <input
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            name="contact"
            type="tel"
            required
            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm 
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-sky-600 text-white font-medium py-3 rounded-xl hover:bg-green-500 shadow-md transition"
        >
          {isEditMode ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
