import React, { useState } from 'react';

const AboutMe = () => {
  const students = [
   
    {
      name: "วิศณุ พิมานรัมย์",
      github: "https://github.com/vit-phi",
      resume: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAGeKNw_1-U%2FIu1VVW0k08brTA64_0Vi7g%2Fview%3Futm_content%3DDAGeKNw_1-U%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink2%26utm_source%3Duniquelinks%26utlId%3Dh060b4f94fc%26fbclid%3DIwZXh0bgNhZW0CMTAAAR1Rod5WJ7X5REqwxw6-m53xKdFtK9_fcTiq47O-Duggq5-tr5x6xSQkU4k_aem_befNJjXip3Dr6eV4Y-MN2g&h=AT3UlcSnbD7yYu75P_GleeXnQMK5xC0IO4_yiPqq3jX-YX_dvivKi-liMWPytInntqn0c4JQpp_47giXw2idyaP-CxU7Bm2Gou5wR1i1mm4XCdyc8a_11Kv5fkiJJmEnmR_Hgw",
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
              <p className="text-sm text-gray-600 mt-2"> {student.studentId}</p>
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
