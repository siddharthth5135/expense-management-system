import React, { useState } from 'react';
import Table from './Table.jsx';
import Button from './Button.jsx';

const ApprovalsView = () => {
  // Mock data for approvals
  const [approvals, setApprovals] = useState([
    {
      id: 1,
      subject: 'Office Supplies',
      owner: 'John Doe',
      category: 'Supplies',
      status: 'Pending',
      amount: 50.0,
    },
    {
      id: 2,
      subject: 'Client Lunch',
      owner: 'Jane Smith',
      category: 'Entertainment',
      status: 'Approved',
      amount: 120.0,
    },
    {
      id: 3,
      subject: 'Travel Expenses',
      owner: 'Alice Johnson',
      category: 'Travel',
      status: 'Rejected',
      amount: 30.0,
    },
    {
      id: 4,
      subject: 'Software Subscription',
      owner: 'John Doe',
      category: 'IT',
      status: 'Pending',
      amount: 100.0,
    },
  ]);

  // Handlers for approve and reject actions
  const handleApprove = (id) => {
    setApprovals((prevApprovals) =>
      prevApprovals.map((approval) =>
        approval.id === id ? { ...approval, status: 'Approved' } : approval
      )
    );
  };

  const handleReject = (id) => {
    setApprovals((prevApprovals) =>
      prevApprovals.map((approval) =>
        approval.id === id ? { ...approval, status: 'Rejected' } : approval
      )
    );
  };

  // Columns for the table
  const columns = [
    { key: 'subject', displayName: 'Approval Subject' },
    { key: 'owner', displayName: 'Request Owner' },
    { key: 'category', displayName: 'Category' },
    {
      key: 'status',
      displayName: 'Request Status',
      renderCell: (row) => {
        const statusColors = {
          Pending: 'bg-yellow-500',
          Approved: 'bg-green-500',
          Rejected: 'bg-red-500',
        };
        return (
          <span
            className={`px-2 py-1 text-sm font-medium text-white rounded-full ${
              statusColors[row.status] || 'bg-gray-500'
            }`}
          >
            {row.status}
          </span>
        );
      },
    },
    { key: 'amount', displayName: 'Total Amount' },
    {
      key: 'actions',
      displayName: 'Actions',
      renderCell: (row) =>
        row.status === 'Pending' ? (
          <div className="flex gap-2">
            <Button
              className="bg-green-500 hover:bg-green-600"
              onClick={() => handleApprove(row.id)}
            >
              Approve
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-600"
              onClick={() => handleReject(row.id)}
            >
              Reject
            </Button>
          </div>
        ) : null,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Approvals</h1>
      <Table columns={columns} data={approvals} />
    </div>
  );
};

export default ApprovalsView;
