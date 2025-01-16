// src/components/AIDataTable.tsx
import React from "react";

const AIDataTable: React.FC = () => {
  const data = [
    { name: "Tether", price: "$1.00", change: "+0.22%", marketCap: "$83B" },
    { name: "Bitcoin", price: "$26,735.59", change: "-5.12%", marketCap: "$523B" },
    // Add more data as needed
  ];

  return (
    <section className="bg-dark text-white py-12 px-6">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold mb-6">Below Will Be Demo AI Agents</h3>
        <table className="w-full text-left border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800 text-gray-300">
              <th className="p-4 border border-gray-700">Name</th>
              <th className="p-4 border border-gray-700">Price</th>
              <th className="p-4 border border-gray-700">24h Change</th>
              <th className="p-4 border border-gray-700">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-800 transition-colors duration-200"
              >
                <td className="p-4 border border-gray-700">{item.name}</td>
                <td className="p-4 border border-gray-700">{item.price}</td>
                <td className="p-4 border border-gray-700">{item.change}</td>
                <td className="p-4 border border-gray-700">{item.marketCap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AIDataTable;
