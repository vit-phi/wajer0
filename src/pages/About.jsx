import React from 'react';

const AboutMe = () => {
  const students = [
    { name: "วิศณุ พิมานรัมย์ 6652300796" },
    { name: "กนกพล ศรีโสพล 6652300699" }
  ];

  return (
    <section id="about-me" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">จัดทำโดย</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-medium text-gray-800">{student.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
