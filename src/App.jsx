import React from 'react';
import Form from './components/Form';
import UserList from './components/UserList'; // 👈 Make sure folder name matches (lowercase "components")

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-slate-100 to-slate-300 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 border border-slate-200 transition-all duration-300">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-sky-800 tracking-tight drop-shadow-sm">
          Harold's Zustand Todo App
        </h1>
        <Form />
        <div className="mt-6">
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default App;
