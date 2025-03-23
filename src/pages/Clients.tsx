import React from 'react';

const clients = [
  {
    name: "Tech Industries Ltd",
    logo: "https://via.placeholder.com/200x100?text=Tech+Industries"
  },
  {
    name: "BuildCorp International",
    logo: "https://via.placeholder.com/200x100?text=BuildCorp"
  },
  {
    name: "Global Infrastructure Partners",
    logo: "https://via.placeholder.com/200x100?text=GIP"
  },
  {
    name: "Smart City Developers",
    logo: "https://via.placeholder.com/200x100?text=Smart+City"
  },
  {
    name: "Green Energy Solutions",
    logo: "https://via.placeholder.com/200x100?text=Green+Energy"
  },
  {
    name: "Urban Development Corp",
    logo: "https://via.placeholder.com/200x100?text=UDC"
  }
];

const Clients = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our Clients</h1>
        
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16">
          We take pride in serving some of the most prestigious organizations across various sectors. Our client relationships are built on trust, reliability, and consistent delivery of excellence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;