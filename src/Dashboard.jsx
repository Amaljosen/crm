import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBox, FaListAlt, FaUserTie, FaMoneyBillWave } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      label: "Orders",
      route: "/order",
      icon: <FaBox className="text-4xl mb-2 text-blue-500" />,
      description: "Manage all your orders, track statuses, and view details in one place.",
    },
    {
      label: "Dashboard List",
      route: "/dashboard-list",
      icon: <FaListAlt className="text-4xl mb-2 text-green-500" />,
      description: "Get an overview of all dashboards, statistics, and reports.",
    },
    {
      label: "Staff",
      route: "/staff",
      icon: <FaUserTie className="text-4xl mb-2 text-purple-500" />,
      description: "Manage staff roles, permissions, and track employee performance.",
    },
    {
      label: "Payments",
      route: "/payment",
      icon: <FaMoneyBillWave className="text-4xl mb-2 text-yellow-500" />,
      description: "View payment history, process refunds, and manage transactions.",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-gray-100 via-blue-50 to-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700">
        Welcome to Your Dashboard
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Quickly navigate through key features and manage your business operations seamlessly.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg flex flex-col items-center shadow-md text-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl"
            onClick={() => navigate(card.route)}
          >
            {card.icon}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{card.label}</h3>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
      <footer className="mt-10 text-center text-gray-500 text-sm">
        Powered by <span className="font-bold text-blue-500">Your Company</span>. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
