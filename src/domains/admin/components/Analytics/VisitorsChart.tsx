"use client";

export default function VisitorsChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h2 className="text-lg font-semibold mb-4">Site Visitors</h2>

      <div className="flex items-end gap-2 h-40">
        {[20, 40, 35, 50, 30, 60, 70].map((value, index) => (
          <div key={index} style={{ height: `${value}%` }} className="flex-1 bg-blue-200 rounded" />
        ))}
      </div>

      <div className="flex justify-between text-xs mt-2 text-gray-500">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
}
