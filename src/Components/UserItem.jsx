import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const UserItem = (props) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(props.details.name);
  const [email, setEmail] = useState(props.details.email);

  // Optional: Reset inputs when dialog opens
  
  const handleEdit = ()=>{
    let edit ={name:name,email:email}
    let newDetails={...props.details,...edit}
     props.editUser(props.details.id,newDetails)
     setOpen(false)
   }

  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-gradient-to-br from-white via-slate-50 to-slate-200 rounded-2xl shadow-2xl transition-shadow duration-300">
      <div>
        <h3 className="text-lg font-bold text-gray-800">{props.details.name}</h3>
        <p className="text-sm text-gray-500">{props.details.email}</p>
        <p className="text-sm text-gray-500">{props.details.contact}</p>
      </div>

      <div className="flex gap-2">
        <button
          className="bg-sky-500 text-white px-4 py-2 rounded-xl hover:bg-sky-600 transition"
          onClick={() => setOpen(true)}
        >
          Edit
        </button>
        <button 
        onClick={()=>props.deleteUser(props.details.id)}
        className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition">
          Delete
        </button>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md">
              <DialogTitle className="text-lg font-semibold text-gray-900 mb-4">
                Edit User
              </DialogTitle>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-md border px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-md border px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-2">
                <button
                  onClick={handleEdit}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default UserItem;
