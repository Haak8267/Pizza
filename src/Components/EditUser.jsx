import React, { useState } from 'react';

const EditUserForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    const updatedUser = { name, email };
    onSave(updatedUser);    // Save the edited data (via props or API)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full mb-3 p-2 border"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full mb-3 p-2 border"
      />

      <button
        type="submit"
        className="w-full bg-sky-600 text-white font-medium py-3 rounded-xl hover:bg-green-500 shadow-md transition"
      >
        Save
      </button>
    </form>
  );
};

export default EditUserForm;
