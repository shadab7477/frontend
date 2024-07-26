import React from 'react'
import "./show.css"
import axios from "axios"
import { useState,useEffect } from 'react';
const Showuser = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
  
      fetchUsers();
    }, [])

    const fetchUsers = async () => {
        try {
          const response = await axios.get('http://localhost:9000/users');
          setUsers(response.data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      const handleDeletes = async (id) => {
        console.log("heyy")
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await axios.delete(`http://localhost:9000/user/delete/${id}`);
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        }
    };
  return (
    <>
    <div className='p-4  rounded container ' >

    <div className=" bg-white p-1 mainwelcome px-3  ">
        <div className="row welcome items-center align-bottom ">
            <div className="col-6 pt-3 h4 text-primary">
                Hii, welcome back!
            </div>
            <div className="col-6 pt-2 text-end  ">
                Dashboard &lt;  Users
            </div>
        </div>
    </div>
    <div className="maintable bg-white mt-3 p-sm-3 rounded-3 ">
    <h1>Users</h1>

    <table className="table mt-3  table-responsive">

        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Created At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleString()}</td>
              <td>
                <button onclick={()=>handleDeletes(user._id)} className='btn btn-danger btn-sm' >
                    Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
</div>
    </>
  )
}

export default Showuser
