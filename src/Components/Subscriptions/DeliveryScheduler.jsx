import React, { useState } from 'react';

function DeliveryScheduler() {
  const [selectedDay, setSelectedDay] = useState(null);

  const daysOfWeek = [
    { name: 'M', value: 'mon', enabled: false },
    { name: 'T', value: 'tue', enabled: false },
    { name: 'W', value: 'wed', enabled: true },
    { name: 'T', value: 'thu', enabled: false },
    { name: 'F', value: 'fri', enabled: true },
    { name: 'S', value: 'sat', enabled: false },
    { name: 'S', value: 'sun', enabled: false },
  ];

  const selectDay = (dayValue, isEnabled) => {
    if (isEnabled) {
      setSelectedDay(dayValue === selectedDay ? null : dayValue);
    }
  };

  return (
    <div className="my-4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl text-left font-semibold mb-4">Select Delivery Day</h2>
      <div className="flex justify-center space-x-2">
        {daysOfWeek.map((day) => (
          <div key={day.value} className="relative group">
            <button
              onClick={() => selectDay(day.value, day.enabled)}
              disabled={!day.enabled}
              className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-colors ${
                day.enabled
                  ? selectedDay === day.value
                    ? 'bg-teal-950 text-white'
                    : 'bg-gray-200 text-black hover:bg-teal-600 hover:text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {day.name}
            </button>
            {!day.enabled && (
              <div className="absolute botton-1/2 mb-1 hidden w-max rounded-md bg-gray-800 text-white text-sm py-1 px-2 group-hover:block">
                Deliveries are available only on Wednesdays and Fridays
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveryScheduler;
