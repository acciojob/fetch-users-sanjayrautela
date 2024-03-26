// UserList.js
import React from 'react';

const UserList = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>
              <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
