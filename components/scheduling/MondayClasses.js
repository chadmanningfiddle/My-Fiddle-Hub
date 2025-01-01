import React, { useState } from 'react';

export default function MondayClasses() {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const classes = [
    {
      id: 1,
      title: "Old Time Fiddle Tune Groove",
      time: "9:00 AM",
      currentStudents: 15,
      maxStudents: 25
    },
    {
      id: 2,
      title: "Twin Fiddling",
      time: "10:00 AM",
      currentStudents: 18,
      maxStudents: 25
    },
    {
      id: 3,
      title: "Swing Time",
      time: "11:00 AM",
      currentStudents: 12,
      maxStudents: 25
    },
    {
      id: 4,
      title: "Contemporary Fiddle Tunes",
      time: "12:00 PM",
      currentStudents: 20,
      maxStudents: 25
    },
    {
      id: 5,
      title: "Bluegrass Fiddle Tunes: The Classics",
      time: "1:00 PM",
      currentStudents: 22,
      maxStudents: 25
    },
    {
      id: 6,
      title: "The Bluegrass Jam",
      time: "2:00 PM",
      currentStudents: 16,
      maxStudents: 25
    }
  ];

  const getClassPrice = (count) => count >= 4 ? 20 : 25;
  
  const totalPrice = selectedClasses.length * getClassPrice(selectedClasses.length);

  const toggleClass = (classId) => {
    setSelectedClasses(prev => {
      if (prev.includes(classId)) {
        return prev.filter(id => id !== classId);
      }
      return [...prev, classId];
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Monday Group Classes</h1>
      
      {selectedClasses.length > 0 && (
        <div className="mb-8 p-6 bg-blue-50 rounded-xl shadow-lg animate-glow">
          <p className="text-2xl text-center text-blue-800">
            Total: ${totalPrice}
            <span className="block text-lg text-blue-600 mt-1">
              ({selectedClasses.length} classes at ${getClassPrice(selectedClasses.length)} each)
            </span>
          </p>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            onClick={() => toggleClass(classItem.id)}
            className={`
              p-6 rounded-xl cursor-pointer transition-all duration-300
              ${selectedClasses.includes(classItem.id) 
                ? 'bg-green-50 shadow-lg ring-2 ring-green-400 transform scale-102'
                : 'bg-white shadow-md hover:shadow-xl hover:scale-102'
              }
            `}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{classItem.title}</h3>
            <p className="text-lg text-gray-600 mb-4">{classItem.time}</p>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                {classItem.currentStudents} / {classItem.maxStudents} students enrolled
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 rounded-full h-2 transition-all"
                  style={{
                    width: `${(classItem.currentStudents / classItem.maxStudents) * 100}%`
                  }}
                />
              </div>
              <p className="text-lg font-medium text-green-600">
                ${getClassPrice(selectedClasses.length)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}