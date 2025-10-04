import React, { useState } from 'react';
import Table from './Table.jsx';
import Select from './Select.jsx';
import Button from './Button.jsx';

const AdminView = () => {
  // Mock data for users
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', manager: 'N/A' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Manager', manager: 'John Doe' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Employee', manager: 'Jane Smith' },
  ]);

  // Roles for the dropdown
  const roles = [
    { value: 'Employee', label: 'Employee' },
    { value: 'Manager', label: 'Manager' },
  ];

  // Columns for the table
  const columns = [
    { key: 'name', displayName: 'Name' },
    {
      key: 'role',
      displayName: 'Role',
      renderCell: (row) => (
        <Select
          options={roles}
          value={row.role}
          onChange={(e) => handleRoleChange(row.id, e.target.value)}
        />
      ),
    },
    {
      key: 'manager',
      displayName: 'Manager',
      renderCell: (row) => (
        <Select
          options={[
            { value: 'N/A', label: 'N/A' },
            ...users
              .filter((user) => user.id !== row.id) // Exclude the current user
              .map((user) => ({ value: user.name, label: user.name })),
          ]}
          value={row.manager}
          onChange={(e) => handleManagerChange(row.id, e.target.value)}
        />
      ),
    },
    {
      key: 'email',
      displayName: 'Email',
      renderCell: (row) => (
        <a href={`mailto:${row.email}`} className="text-blue-500 underline">
          {row.email}
        </a>
      ),
    },
  ];

  // Optional: Actions column
  const actions = (row) => (
    <button
      onClick={() => alert(`Viewing details for ${row.name}`)}
      className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
    >
      View
    </button>
  );

  // Handlers for dropdown changes
  const handleRoleChange = (id, newRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  const handleManagerChange = (id, newManager) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, manager: newManager } : user
      )
    );
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <Button onClick={() => {}}>
          Add New User
        </Button>
      </div>
      <Table columns={columns} data={users} actions={actions} />
    </div>
  );
};

export default AdminView;
