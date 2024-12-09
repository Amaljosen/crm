import React, { useState } from 'react';

const PaymentDetails = () => {
  const [activeTab, setActiveTab] = useState('full');
  const [paymentData, setPaymentData] = useState([
    { id: 1, orderId: '#123456', orderDate: '08-08-24', orderQty: 100, size: '10 X 10', gsm: '80 GSM', status: 'Completed' },
    { id: 2, orderId: '#234567', orderDate: '09-08-24', orderQty: 200, size: '12 X 12', gsm: '90 GSM', status: 'Partial' },
    { id: 3, orderId: '#345678', orderDate: '10-08-24', orderQty: 150, size: '8 X 8', gsm: '100 GSM', status: 'Completed' },
    { id: 4, orderId: '#456789', orderDate: '11-08-24', orderQty: 180, size: '15 X 15', gsm: '110 GSM', status: 'Partial' },
    { id: 5, orderId: '#567890', orderDate: '12-08-24', orderQty: 120, size: '6 X 6', gsm: '85 GSM', status: 'Completed' },
  ]);

  const handleDelete = (id) => {
    setPaymentData((prevData) => prevData.filter((payment) => payment.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit functionality for record with ID: ${id} can be implemented here.`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex mb-4 border-b">
        {['Full Payment', 'Partial Payment'].map((tab) => {
          const isActive = (tab === 'Full Payment' && activeTab === 'full') || 
                           (tab === 'Partial Payment' && activeTab === 'partial');
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab === 'Full Payment' ? 'full' : 'partial')}
              className={`
                px-4 py-2 transition-all duration-300
                ${isActive ? 'border-b-2 border-blue-500 text-blue-500 font-bold' : 'text-gray-500 hover:text-blue-400'}
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              {['Order ID', 'Order Date', 'Order Qty', 'Size', 'GSM', 'Status', 'Actions'].map(header => (
                <th key={header} className="p-3 text-left font-semibold">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paymentData
              .filter((payment) => (activeTab === 'full' ? payment.status === 'Completed' : payment.status === 'Partial'))
              .map((payment) => (
                <tr key={payment.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{payment.orderId}</td>
                  <td className="p-3">{payment.orderDate}</td>
                  <td className="p-3">{payment.orderQty}</td>
                  <td className="p-3">{payment.size}</td>
                  <td className="p-3">{payment.gsm}</td>
                  <td className="p-3">
                    <span
                      className={`
                        px-2 py-1 rounded-full text-xs font-semibold
                        ${payment.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      `}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleEdit(payment.id)}
                      className="mr-3 text-blue-500 hover:text-blue-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(payment.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentDetails;
