import React, { useContext, useEffect } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { ThemeContext } from "../context/ThemeContext";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillsRadar = () => {
  const { isDark } = useContext(ThemeContext);

  // Just to verify it's rendering
  useEffect(() => {
    console.log("✅ SkillsRadar mounted");
  }, []);

  const proficiencyLevels = [
    { name: "Python & DS", level: 95 },
    { name: "Java & Spring", level: 90 },
    { name: "React Frontend", level: 88 },
    { name: "ML & AI", level: 85 },
    { name: "Cloud (AWS/Azure)", level: 82 },
    { name: "SQL & DBs", level: 90 },
  ];

  const data = {
    labels: proficiencyLevels.map((item) => item.name),
    datasets: [
      {
        label: "Skill Strength",
        data: proficiencyLevels.map((item) => item.level),
        backgroundColor: isDark
          ? "rgba(59,130,246,0.25)"
          : "rgba(37,99,235,0.25)",
        borderColor: isDark ? "#60a5fa" : "#2563eb",
        borderWidth: 3,
        pointBackgroundColor: isDark ? "#93c5fd" : "#1d4ed8",
        pointBorderColor: "#fff",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: isDark ? "#333" : "#ccc" },
        grid: { color: isDark ? "#444" : "#ddd" },
        pointLabels: {
          color: isDark ? "#e5e7eb" : "#111827",
          font: { size: 14, weight: 500 },
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div
      className={`
        w-full max-w-3xl mx-auto p-6 rounded-2xl 
        backdrop-blur-xl 
        ${isDark ? "bg-[#0d1117]/70 border border-gray-800" : "bg-white/70 border border-gray-200"}
        shadow-[0_8px_24px_rgba(0,0,0,0.12)]
      `}
      style={{ height: "450px" }}
    >
      <Radar data={data} options={options} />
    </div>
  );
};

export default SkillsRadar;
