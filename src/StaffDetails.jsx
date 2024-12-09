import React, { useState } from "react";

const StaffDetails = () => {
  const [staffForm, setStaffForm] = useState({
    employeeId: "",
    name: "",
    designation: "",
    joiningDate: "",
    mobileNumber: "",
    email: "",
    address: "",
    username: "",
    password: "",
  });

  const [staffList, setStaffList] = useState([
    {
      employeeId: "EMP001",
      name: "Alice Johnson",
      designation: "Manager",
      joiningDate: "2023-01-15",
      mobileNumber: "9012345678",
      email: "alice.johnson@example.com",
      address: "123 Main St, Cityville",
      username: "alice123",
      password: "password1",
    },
    {
      employeeId: "EMP002",
      name: "Bob Smith",
      designation: "Sales",
      joiningDate: "2023-02-20",
      mobileNumber: "9876543210",
      email: "bob.smith@example.com",
      address: "456 Oak Ave, Townsville",
      username: "bob_smith",
      password: "password2",
    },
    {
      employeeId: "EMP003",
      name: "Charlie Brown",
      designation: "IT",
      joiningDate: "2023-03-05",
      mobileNumber: "9012345678",
      email: "charlie.brown@example.com",
      address: "789 Birch Blvd, Villageville",
      username: "charlieB",
      password: "password3",
    },
    {
      employeeId: "EMP004",
      name: "Diana Wilson",
      designation: "HR",
      joiningDate: "2023-04-10",
      mobileNumber: "6547569870",
      email: "diana.wilson@example.com",
      address: "101 Pine Dr, Countryside",
      username: "diana_wilson",
      password: "password4",
    },
  ]);
  const [editStaffId, setEditStaffId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStaffForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editStaffId !== null) {
      setStaffList((prev) =>
        prev.map((staff, index) =>
          index === editStaffId ? { ...staffForm } : staff
        )
      );
      setEditStaffId(null);
    } else {
      setStaffList((prev) => [...prev, staffForm]);
    }
    resetForm();
  };

  const resetForm = () => {
    setStaffForm({
      employeeId: "",
      name: "",
      designation: "",
      joiningDate: "",
      mobileNumber: "",
      email: "",
      address: "",
      username: "",
      password: "",
    });
  };

  const handleEdit = (index) => {
    setEditStaffId(index);
    setStaffForm(staffList[index]);
  };

  const handleDelete = (index) => {
    setStaffList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen lg:p-8">
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
        {/* Staff Registration Form */}
        <div className="bg-white rounded-lg shadow-md p-6 lg:p-8">
          <h2 className="text-lg lg:text-2xl font-semibold mb-3">
            {editStaffId !== null ? "Edit Staff" : "Staff Registration"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {[
                { label: "Employee Id", name: "employeeId" },
                { label: "Name", name: "name" },
                { label: "Designation", name: "designation" },
                { label: "Joining Date", name: "joiningDate", type: "date" },
                { label: "Mobile Number", name: "mobileNumber" },
                { label: "Email", name: "email", type: "email" },
                { label: "Address", name: "address", gridSpan: "col-span-2" },
              ].map((field) => (
                <div
                  key={field.name}
                  className={`${field.gridSpan || ""} flex flex-col`}
                >
                  <label className="text-sm lg:text-base mb-1">{field.label}</label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={staffForm[field.name]}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h3 className="text-sm lg:text-base font-semibold mb-2">Login Credentials</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div className="flex flex-col">
                  <label className="text-sm lg:text-base mb-1">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={staffForm.username}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm lg:text-base mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={staffForm.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md text-sm lg:text-base focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4 space-x-2">
              <button
                type="button"
                className="px-3 py-1 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
                onClick={resetForm}
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-3 py-1 text-sm bg-primary text-white rounded-md hover:bg-blue-700"
              >
                {editStaffId !== null ? "Update Staff" : "Add Staff"}
              </button>
            </div>
          </form>
        </div>

        {/* Staff Table */}
        <div className="bg-white rounded-lg shadow-md p-6 lg:p-8 overflow-scroll lg:overflow-auto">
          <h2 className="text-lg lg:text-2xl font-semibold mb-3">Staff Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm lg:text-base">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "ID",
                    "Name",
                    "Mobile",
                    "Email",
                    "Address",
                    "Actions",
                  ].map((header) => (
                    <th key={header} className="p-2 lg:p-3 text-left">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {staffList.length > 0 ? (
                  staffList.map((staff, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2 lg:p-3">{staff.employeeId}</td>
                      <td className="p-2 lg:p-3">{staff.name}</td>
                      <td className="p-2 lg:p-3">{staff.mobileNumber}</td>
                      <td className="p-2 lg:p-3">{staff.email}</td>
                      <td className="p-2 lg:p-3">{staff.address}</td>
                      <td className="p-2 lg:p-3 flex justify-around">
                        <button
                          className="mr-2 text-blue-500 hover:underline"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-500 hover:underline"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center p-4 lg:p-6">
                      No staff added yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDetails;
