import React from 'react';
import UserItem from './UserItem';

const UserList = (props) => {
  return (
    <div className="p-4 space-y-2 bg-gradient-to-br from-white via-slate-50 to-slate-600 rounded-2xl shadow-inner">
      <h2 className="mb-4 text-center text-3xl font-semibold text-slate-800">User List</h2>
      {props.usersList.map((user) => (
        <UserItem key={user.id} details={user}  editUser={props.editedUser}
        deleteUser={props.deletedUser} />
      ))}
    </div>
  );
};

export default UserList;
