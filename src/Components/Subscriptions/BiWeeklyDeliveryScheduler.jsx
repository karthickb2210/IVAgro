import React, { useState } from 'react';

function BiWeeklyDeliveryScheduler() {
  const [selectedDays, setSelectedDays] = useState([]);

  const daysOfWeek = [
    { name: 'M', value: 'mon', enabled: false },
    { name: 'T', value: 'tue', enabled: false },
    { name: 'W', value: 'wed', enabled: true },
    { name: 'T', value: 'thu', enabled: false },
    { name: 'F', value: 'fri', enabled: true },
    { name: 'S', value: 'sat', enabled: false },
    { name: 'S', value: 'sun', enabled: false },
  ];

  const toggleDay = (dayValue, isEnabled) => {
    if (!isEnabled) return; // Prevent toggling for disabled days

    setSelectedDays((prev) => {
      if (prev.includes(dayValue)) {
        // If the day is already selected, deselect it
        return prev.filter((day) => day !== dayValue);
      } else if (prev.length < 2) {
        // If less than two days are selected, add the new day
        return [...prev, dayValue];
      } else {
        // If two days are already selected, replace the first selected day with the new one
        return [prev[1], dayValue];
      }
    });
  };

  return (
    <div className="bg-white my-4 p-4 rounded-lg shadow-md">
      <h2 className="text-xl mb-4 text-left font-semibold">
        Select Bi-Weekly Delivery Days
      </h2>
      <div className="flex justify-center space-x-2">
        {daysOfWeek.map((day) => (
          <div key={day.value} className="relative group">
            <button
              onClick={() => toggleDay(day.value, day.enabled)}
              disabled={!day.enabled}
              className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-colors ${
                day.enabled
                  ? selectedDays.includes(day.value)
                    ? 'bg-teal-950 text-white'
                    : 'bg-gray-200 text-black hover:bg-teal-600 hover:text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {day.name}
            </button>
            {!day.enabled && (
              <div className="absolute bottom-full mb-1 hidden w-max rounded-md bg-gray-800 text-white text-sm py-1 px-2 group-hover:block">
                Deliveries are available only on Wednesdays and Fridays
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BiWeeklyDeliveryScheduler;
