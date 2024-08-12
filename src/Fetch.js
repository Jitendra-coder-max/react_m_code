import React, { useEffect, useState } from "react";
import axios from "axios";

const Fetch = () => {
  const [users, setUsers] = useState([]);

  const [newUser, setNewUser] = useState({ id: null, name: "", email: "" });

  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setUsers(res.data);
    };

    fetchApi();
    console.log(users);
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    const filteredUser = users.filter((user) => user.id !== id);
    setUsers(filteredUser);
  };

  const addUser = async () => {
    try {
      const res = await axios.post(
        `https://jsonplaceholder.typicode.com/users`,
        newUser
      );

      // setUsers([...users, res.data])

      setUsers((prevUser) => [...prevUser, res.data]);
      setNewUser({ id: null, name: "", email: "" });
    } catch (err) {
      console.error("error" + err);
    }
  };




const handleChange = (e) =>{


    setNewUser({ ...newUser, [e.target.name]:e.target.value })
}

const updateClick = (id) => {

    const userTobeUpdated =    users.find((user) => ( user.id === id))
        setNewUser(userTobeUpdated)

}

const updateUser = async() => {

                       
       axios.put(`https://jsonplaceholder.typicode.com/users/${newUser.id}`,newUser);

  const filteredUser =  users.map((user) =>  user.id === newUser.id? newUser: user);

  setUsers(filteredUser)
  setNewUser({id:null, name:'', email:''})
}

  return (
    <div>
      Fetch
      <table border={1}>
        <tr>
          <td>Name</td>
          <td>Email</td>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() =>updateClick(user.id)}> Edit</button>
          </tr>
        ))}
      </table>
      <button onClick={addUser}>Add data</button>
      <button onClick={updateUser}>Update data</button>
      <label>Name</label>
      <input
        type="text" name='name'
        placeholder="enter your name"
        value={newUser.name}
        onChange={handleChange}
      />
      <label>Email:</label>
      <input
        type="text" name='email'
        placeholder="Enter your email"
        value={newUser.email}
        onChange={handleChange}
      />
    </div>
  );
};

export default Fetch;
