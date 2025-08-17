"use client";

import { FaRegCircle, FaGem, FaCog } from "react-icons/fa";
import { VscSymbolKey } from "react-icons/vsc"; // ✅ correct import

export default function Stats() {
  const stats = [
    {
      icon: <FaRegCircle className="text-3xl text-black" />,
      value: "96 %",
      label: "Patient Satisfaction Rate",
    },
    {
      icon: <VscSymbolKey className="text-3xl text-black" />,
      value: "12 +",
      label: "Years Of Experience",
    },
    {
      icon: <FaCog className="text-3xl text-black" />,
      value: "1,000 +",
      label: "Successful Surgeries",
    },
    {
      icon: <FaGem className="text-3xl text-black" />,
      value: "30 +",
      label: "State-Of-The-Art Facilities",
    },
  ];

  return (
    <section className="bg-[#FBF7F7] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-5xl font-semibold text-[#28554E]">
                {item.value}
              </h3>
              <p className="text-gray-500 text-sm md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
