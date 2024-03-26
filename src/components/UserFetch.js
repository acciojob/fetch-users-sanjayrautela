// UserFetch.js
import React, { useState } from 'react';
import axios from 'axios';
import UserList from './UserList';

const UserFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button className="btn" onClick={fetchUsers} disabled={loading}>
        Get User List
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserList users={users} />
      )}
    </div>
  );
};

export default UserFetch;
