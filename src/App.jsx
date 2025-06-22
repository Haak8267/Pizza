import React, { useState } from 'react';
import Form from './Components/Form';
import UserList from './Components/UserList';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [users, setUsers] = useState([
    { name: "Harold", email: "harold@gmail.com", contact: "0545678901", id: uuidv4() },
    { name: "Emmanuel", email: "emma@gmail.com", contact: "0545678901", id: uuidv4() },
    { name: "Charles", email: "Odogwu@gmail.com", contact: "0545678901", id: uuidv4() },
  ]);

  const [userToEdit, setUserToEdit] = useState(null);

  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const editUser =(userId,newDetails)=>{
    let arry = users.map((user)=>{
     if(user.id === userId){
       return newDetails
     }else{
       return user
     }
    })
    setUsers(arry)
 }
 // Function to delete a user based on index
const deleteUser = (userId) =>{
 let filteredusers = users.filter((user)=>{
   if(user.id !== userId){
     return user
   }
 })
 setUsers(filteredusers)
};
  

  return (
    <div className="grid grid-cols-2">
      <Form
       
        addUser={addNewUser}
        
      />
      <UserList
        usersList={users}
        editedUser={editUser}
        deletedUser={deleteUser}
      />
    </div>
  );
};

export default App;
