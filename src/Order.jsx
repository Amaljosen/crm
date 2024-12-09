import React, { useState } from 'react';

const Order = () => {
  // State to handle form input
  const [orderId, setOrderId] = useState("#123645");
  const [date, setDate] = useState("2024-08-08");
  const [cardboardRequired, setCardboardRequired] = useState("100 Nos");
  const [size, setSize] = useState("10 X 10");
  const [gsm, setGsm] = useState("80 GSM");
  const [color, setColor] = useState("Brown");
  const [customerName, setCustomerName] = useState("Lorem Ipsum");
  const [email, setEmail] = useState("loremipsum@gmail.com");
  const [mobileNumber, setMobileNumber] = useState("8796541236");
  const [address, setAddress] = useState("Jayanagar, Bangalore - Karnataka");

  const [orders, setOrders] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new order to the orders list
    const newOrder = {
      orderId, date, cardboardRequired, size, gsm, color,
      customerName, email, mobileNumber, address
    };
    setOrders([...orders, newOrder]);

    // Clear input fields after submission
    setOrderId("");
    setDate("");
    setCardboardRequired("");
    setSize("");
    setGsm("");
    setColor("");
    setCustomerName("");
    setEmail("");
    setMobileNumber("");
    setAddress("");
  };

  const handleReset = () => {
    // Clear input fields on reset
    setOrderId("");
    setDate("");
    setCardboardRequired("");
    setSize("");
    setGsm("");
    setColor("");
    setCustomerName("");
    setEmail("");
    setMobileNumber("");
    setAddress("");
  };

  const handleEdit = (index) => {
    const orderToEdit = orders[index];
    setOrderId(orderToEdit.orderId);
    setDate(orderToEdit.date);
    setCardboardRequired(orderToEdit.cardboardRequired);
    setSize(orderToEdit.size);
    setGsm(orderToEdit.gsm);
    setColor(orderToEdit.color);
    setCustomerName(orderToEdit.customerName);
    setEmail(orderToEdit.email);
    setMobileNumber(orderToEdit.mobileNumber);
    setAddress(orderToEdit.address);

    // Remove the order being edited from the list
    setOrders(orders.filter((_, i) => i !== index));
  };

  const handleDelete = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center bg-white p-4 shadow-sm">
        <div className="text-lg font-bold">Logoipsum</div>
        <div className="text-sm"><span className="text-gray-500">staffname@gmail.com</span></div>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Order Details Form */}
        <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold mb-4">Create Order</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Order ID *</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date *</label>
              <input
                type="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Cardboard Required (N)</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={cardboardRequired}
                onChange={(e) => setCardboardRequired(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Size</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">GSM</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={gsm}
                onChange={(e) => setGsm(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Color</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-4">Customer Detail</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button type="button" onClick={handleReset} className="px-4 py-2 border border-gray-300 rounded-md mr-2">Reset</button>
            <button type="submit" className="px-4 py-2 bg-black text-white rounded-md">Create Order</button>
          </div>
        </form>

        {/* Orders Dashboard */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-lg overflow-scroll">
            <h2 className="text-lg font-semibold mb-4">Today Orders</h2>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
                  <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">C.Name</th>
                  <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-6 py-2">{order.orderId}</td>
                    <td className="px-6 py-2">{order.date}</td>
                    <td className="px-6 py-2">{order.customerName}</td>
                    <td className="px-6 py-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="text-yellow-500 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {orders.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-4">No orders created yet.</td>
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

export default Order;
