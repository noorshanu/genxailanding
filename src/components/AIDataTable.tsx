// src/components/AIDataTable.tsx
import React from "react";

const AIDataTable: React.FC = () => {
  const data = [
    { name: "Tether", price: "$1.00", change: "+0.22%", marketCap: "$83B" },
    { name: "Bitcoin", price: "$26,735.59", change: "-5.12%", marketCap: "$523B" },
    // Add more data as needed
  ];

  return (
    <section className=" text-white py-12 px-6">
      <div className="container mx-auto">
        <h3 className=" text-3xl sm:text-7xl fmb-6 text-center font-extrabold font-sf lh-1_3 py-4">Below Will Be Demo AI Agents</h3>

        <div className=" mx-auto">

          <img src="images/table.png" alt="" className="w-full mx-auto" />

        </div>
      
      </div>
    </section>
  );
};

export default AIDataTable;
