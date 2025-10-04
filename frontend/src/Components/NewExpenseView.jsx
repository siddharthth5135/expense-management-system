import React, { useRef, useState } from "react";
import TextInput from "./TextInput.jsx";
import Select from "./Select.jsx";
import Button from "./Button.jsx";

const NewExpenseView = () => {
  const [formData, setFormData] = useState({
    description: "",
    expenseDate: "",
    category: "",
    paidBy: "",
    amount: "",
    currency: "",
    remarks: "",
    status: "Draft",
    receipt: null,
  });

  const fileInputRef = useRef(null);

  const users = [
    { value: "John Doe", label: "John Doe" },
    { value: "Jane Smith", label: "Jane Smith" },
    { value: "Alice Johnson", label: "Alice Johnson" },
  ];

  const categories = [
    { value: "Supplies", label: "Supplies" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Travel", label: "Travel" },
    { value: "IT", label: "IT" },
  ];

  const currencies = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "GBP", label: "GBP" },
  ];

  const statusColors = {
    Draft: "bg-gray-500",
    Pending: "bg-yellow-500",
    Approved: "bg-green-500",
    Rejected: "bg-red-500",
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, receipt: file }));
  };

  const handleAttachReceipt = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">New Expense</h1>
        <div className="flex items-center gap-4">
          <Button onClick={handleAttachReceipt}>
            {formData.receipt ? "Receipt Attached" : "Attach Receipt"}
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <span
            className={`px-4 py-2 text-sm font-medium text-white rounded-full ${
              statusColors[formData.status]
            }`}
          >
            {formData.status}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <TextInput
          label="Description"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Enter expense description"
        />

        <TextInput
          label="Expense Date"
          type="date"
          value={formData.expenseDate}
          onChange={(e) => handleChange("expenseDate", e.target.value)}
        />

        <Select
          label="Category"
          options={categories}
          value={formData.category}
          onChange={(e) => handleChange("category", e.target.value)}
        />

        <Select
          label="Paid By"
          options={users}
          value={formData.paidBy}
          onChange={(e) => handleChange("paidBy", e.target.value)}
        />

        <TextInput
          label="Total Amount"
          type="number"
          value={formData.amount}
          onChange={(e) => handleChange("amount", e.target.value)}
          placeholder="Enter amount"
        />

        <Select
          label="Currency"
          options={currencies}
          value={formData.currency}
          onChange={(e) => handleChange("currency", e.target.value)}
        />

        <div className="col-span-2">
          <TextInput
            label="Remarks"
            type="textarea"
            value={formData.remarks}
            onChange={(e) => handleChange("remarks", e.target.value)}
            placeholder="Enter any remarks"
          />
        </div>

        <div className="col-span-2 flex justify-end">
          <Button type="submit">Submit Expense</Button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseView;
