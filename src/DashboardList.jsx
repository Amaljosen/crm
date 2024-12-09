import React, { useState } from "react";
import { FaShoppingCart, FaDollarSign, FaTruck, FaClock } from "react-icons/fa";

const DashboardList = () => {
  const [orders, setOrders] = useState([
    { id: 1, orderId: "#1001", customerName: "John Doe", date: "2024-08-01", status: "Delivered", amount: 120 },
    { id: 2, orderId: "#1002", customerName: "Jane Smith", date: "2024-08-02", status: "Pending", amount: 80 },
    { id: 3, orderId: "#1003", customerName: "Robert Brown", date: "2024-08-03", status: "Delivered", amount: 200 },
    { id: 4, orderId: "#1004", customerName: "Emily Davis", date: "2024-08-04", status: "Pending", amount: 150 },
    { id: 5, orderId: "#1005", customerName: "Michael Wilson", date: "2024-08-05", status: "Delivered", amount: 300 },
    { id: 6, orderId: "#1006", customerName: "Sarah Lee", date: "2024-08-06", status: "Pending", amount: 50 },
    { id: 7, orderId: "#1007", customerName: "Chris Martin", date: "2024-08-07", status: "Delivered", amount: 170 },
    { id: 8, orderId: "#1008", customerName: "Anna Taylor", date: "2024-08-08", status: "Pending", amount: 95 },
    { id: 9, orderId: "#1009", customerName: "David Clark", date: "2024-08-09", status: "Delivered", amount: 180 },
    { id: 10, orderId: "#1010", customerName: "Linda Garcia", date: "2024-08-10", status: "Pending", amount: 200 },
  ]);

  const [editRowId, setEditRowId] = useState(null);
  const [editableData, setEditableData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleEdit = (id) => {
    setEditRowId(id);
    const rowToEdit = orders.find((order) => order.id === id);
    setEditableData(rowToEdit);
  };

  const handleSave = () => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === editRowId ? { ...editableData } : order
      )
    );
    setEditRowId(null);
  };

  const handleDelete = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableData({ ...editableData, [name]: value });
  };

  const totalSales = orders.reduce((total, order) => total + order.amount, 0);
  const totalOrders = orders.length;
  const pendingOrders = orders.filter((order) => order.status === "Pending").length;
  const deliveredOrders = orders.filter((order) => order.status === "Delivered").length;

  const statBoxes = [
    { label: "Total Sales", value: `$${totalSales}`, icon: <FaDollarSign />, color: "bg-gradient-to-r from-green-400 to-green-600 text-white" },
    { label: "Total Orders", value: totalOrders, icon: <FaShoppingCart />, color: "bg-gradient-to-r from-blue-400 to-blue-600 text-white" },
    { label: "Pending Orders", value: pendingOrders, icon: <FaClock />, color: "bg-gradient-to-r from-yellow-400 to-orange-600 text-white" },
    { label: "Delivered Orders", value: deliveredOrders, icon: <FaTruck />, color: "bg-gradient-to-r from-purple-400 to-purple-600 text-white" },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-6 text-gray-700">Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statBoxes.map((stat, index) => (
          <div key={index} className={`flex items-center p-5 rounded-lg shadow-lg ${stat.color}`}>
            <div className="text-4xl mr-4">{stat.icon}</div>
            <div>
              <h2 className="text-white text-sm font-medium">{stat.label}</h2>
              <p className="text-2xl font-semibold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-lg font-medium text-gray-800">Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 border-b">
                {["Order ID", "Customer Name", "Order Date", "Amount", "Status", "Actions"].map((header, index) => (
                  <th key={index} className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  {editRowId === order.id ? (
                    <>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          name="orderId"
                          value={editableData.orderId}
                          onChange={handleChange}
                          className="border rounded p-2 w-full"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          name="customerName"
                          value={editableData.customerName}
                          onChange={handleChange}
                          className="border rounded p-2 w-full"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="date"
                          name="date"
                          value={editableData.date}
                          onChange={handleChange}
                          className="border rounded p-2 w-full"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          name="amount"
                          value={editableData.amount}
                          onChange={handleChange}
                          className="border rounded p-2 w-full"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <select
                          name="status"
                          value={editableData.status}
                          onChange={handleChange}
                          className="border rounded p-2 w-full"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={handleSave}
                          className="text-green-600 hover:text-green-800 text-sm mr-2"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditRowId(null)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4 text-sm text-gray-700">{order.orderId}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{order.customerName}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{order.date}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">${order.amount}</td>
                      <td
                        className={`px-6 py-4 text-sm font-medium ${
                          order.status === "Pending" ? "text-orange-500" : "text-green-500"
                        }`}
                      >
                        {order.status}
                      </td>
                      <td className="px-6 py-4 flex space-x-2">
                        <button
                          onClick={() => handleEdit(order.id)}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(order.id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <p className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DashboardList;
