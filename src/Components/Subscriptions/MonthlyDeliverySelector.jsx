import React, { useState } from 'react';

function MonthlyDeliverySelector() {
  const [selectedDates, setSelectedDates] = useState([]);

  // Get the current date and calculate the next month's days
  const getDaysOfNextMonth = () => {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1); // First day of next month
    const days = [];
    while (nextMonth.getMonth() === (today.getMonth() + 1) % 12) {
      days.push(new Date(nextMonth));
      nextMonth.setDate(nextMonth.getDate() + 1);
    }
    return days;
  };

  const daysInNextMonth = getDaysOfNextMonth();

  // Check if the date is a Wednesday or Friday
  const isDaySelectable = (date) => {
    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
    return dayOfWeek === 3 || dayOfWeek === 5; // Wednesday and Friday
  };

  // Toggle date selection
  const toggleDate = (date) => {
    if (isDaySelectable(date)) {
      setSelectedDates((prev) =>
        prev.some((d) => d.getTime() === date.getTime())
          ? prev.filter((d) => d.getTime() !== date.getTime())
          : [...prev, date]
      );
    }
  };

  // Save selected dates
  const saveSchedule = () => {
    console.log("Scheduled dates:", selectedDates);
  };

  return (
    <div className="bg-white p-4 my-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-left">Select Monthly Delivery Dates</h2>
      <div className="grid grid-cols-7 gap-2">
        {daysInNextMonth.map((day) => (
          <button
            key={day}
            onClick={() => toggleDate(day)}
            disabled={!isDaySelectable(day)}
            className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-colors relative group ${
              selectedDates.some((d) => d.getTime() === day.getTime())
                ? 'bg-teal-600 text-white'
                : isDaySelectable(day)
                ? 'bg-gray-200 text-black hover:bg-teal-200'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {day.getDate()}
            {!isDaySelectable(day) && (
              <span className="absolute  z-20 hidden group-hover:block text-xs bg-gray-700 text-white px-2 py-1 rounded-lg top-12 shadow-md">
                Deliveries are only available on wednesdays and fridays
              </span>
            )}
          </button>
        ))}
      </div>
      <button
        onClick={saveSchedule}
        className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
      >
        Save Schedule
      </button>
    </div>
  );
}

export default MonthlyDeliverySelector;
