import React, { useState } from 'react';

const AboutMe = () => {
  const students = [
   
    {
      name: "วิศณุ พิมานรัมย์",
      studentId: "6652300796",
      github: "https://github.com/vit-phi",
      resume: "https://vit-phi.github.io/Resume.V1/",
      image: "/images/mos1.jpg"
    },
    
  ];

  // ใช้ useState เพื่อเก็บสถานะของการซูม
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = (image) => {
    setIsZoomed(!isZoomed);
    // เพิ่มฟังก์ชันเพื่อซูมเข้าออกที่ภาพ
  };

  return (
    <section id="about-me" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">About Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-medium text-gray-800">{student.name}</h3>
              <p className="text-sm text-gray-600 mt-2">รหัสนักศึกษา: {student.studentId}</p>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  GitHub: <a href={student.github} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{student.github}</a>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Resume: <a href={student.resume} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{student.resume}</a>
                </p>
              </div>

              {/* ภาพที่สามารถซูมได้ */}
              <div 
                className={`mt-4 relative ${isZoomed ? "zoomed-in" : ""}`}
                onClick={() => handleZoom(student.image)}
              >
                <img
                  className="rounded-md w-full h-full object-cover transition-transform duration-300"
                  src={student.image}
                  alt={`Image of ${student.name}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
