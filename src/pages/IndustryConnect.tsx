import React from 'react';

const IndustryConnect = () => {
  const images = [
    "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Industry Connect</h1>
        
        <div className="mb-12">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            At GR Manav, we believe in the power of collaboration and industry partnerships. Our extensive network spans across various sectors of the construction industry, enabling us to deliver comprehensive solutions to complex challenges. Through our industry connections, we stay at the forefront of technological advancements, best practices, and sustainable construction methods.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-duration-300">
              <img
                src={image}
                alt={`Industry Connect ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Our Industry Engagement</h2>
          <p className="text-gray-600 mb-4">
            We actively participate in industry forums, conferences, and collaborative initiatives to share knowledge and best practices. Our partnerships with leading technology providers, material suppliers, and industry experts enable us to deliver innovative solutions to our clients.
          </p>
          <p className="text-gray-600">
            Through these connections, we've established ourselves as a trusted name in the construction industry, known for our commitment to quality, safety, and sustainable practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustryConnect;