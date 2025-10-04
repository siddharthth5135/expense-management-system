import React, { useState } from 'react';
import Button from './Button.jsx';
import Table from './Table.jsx';

const ExpensesView = () => {
  // Mock data for expenses
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'Office Supplies',
      date: '2025-10-01',
      category: 'Supplies',
      paidBy: 'John Doe',
      remarks: 'Purchased pens and notebooks',
      amount: 50.0,
      status: 'Draft',
    },
    {
      id: 2,
      description: 'Client Lunch',
      date: '2025-09-28',
      category: 'Entertainment',
      paidBy: 'Jane Smith',
      remarks: 'Lunch with client at ABC Restaurant',
      amount: 120.0,
      status: 'Approved',
    },
    {
      id: 3,
      description: 'Travel Expenses',
      date: '2025-09-25',
      category: 'Travel',
      paidBy: 'Alice Johnson',
      remarks: 'Taxi fare for client meeting',
      amount: 30.0,
      status: 'Draft',
    },
    {
      id: 4,
      description: 'Software Subscription',
      date: '2025-09-20',
      category: 'IT',
      paidBy: 'John Doe',
      remarks: 'Monthly subscription for project management tool',
      amount: 100.0,
      status: 'Pending',
    },
  ]);

  // Calculate totals
  const totalToSubmit = expenses.reduce(
    (sum, expense) => (expense.status === 'Draft' ? sum + expense.amount : sum),
    0
  );
  const totalWaitingApproval = expenses.reduce(
    (sum, expense) => (expense.status === 'Pending' ? sum + expense.amount : sum),
    0
  );
  const totalApproved = expenses.reduce(
    (sum, expense) => (expense.status === 'Approved' ? sum + expense.amount : sum),
    0
  );

  // Columns for the table
  const columns = [
    { key: 'description', displayName: 'Description' },
    { key: 'date', displayName: 'Date' },
    {
      key: 'category',
      displayName: 'Category',
      renderCell: (row) => (
        <span className="px-2 py-1 text-sm font-medium text-white bg-blue-500 rounded-full">
          {row.category}
        </span>
      ),
    },
    { key: 'paidBy', displayName: 'Paid By' },
    { key: 'remarks', displayName: 'Remarks' },
    { key: 'amount', displayName: 'Amount' },
    {
      key: 'status',
      displayName: 'Status',
      renderCell: (row) => {
        const statusColors = {
          Draft: 'bg-gray-500',
          Pending: 'bg-yellow-500',
          Approved: 'bg-green-500',
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
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Employee Expenses</h1>
        <Button onClick={() => alert('Add New Expense')}>Add New Expense</Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">To Submit</h2>
          <p className="text-2xl font-bold text-blue-500">${totalToSubmit.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Waiting Approval</h2>
          <p className="text-2xl font-bold text-yellow-500">${totalWaitingApproval.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Approved</h2>
          <p className="text-2xl font-bold text-green-500">${totalApproved.toFixed(2)}</p>
        </div>
      </div>

      <Table columns={columns} data={expenses} />
    </div>
  );
};

export default ExpensesView;
