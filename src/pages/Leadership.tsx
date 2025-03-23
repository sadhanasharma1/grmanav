

const Leadership = () => {
  const leaders = [
    {
      name: "Ajit Singh",
      role: "Founder & Chairman",
      image: '/CharacterImage1.png',
      message: "As the founder of GR Manav, my vision has always been to create a company that not only builds structures but also builds trust, relationships, and a better future for our nation. Our journey has been marked by unwavering commitment to excellence and innovation in construction."
    },
    {
      name: "Aakash Singh",
      role: "Co-founder & COO",
      image: "/CharacterImage2.png",
      message: "Our commitment to sustainable construction practices and employee welfare has been the cornerstone of our success. We continue to innovate and adapt to meet the evolving needs of our industry."
    },
    {
      name: "Rajesh Kumar",
      role: "Co-founder & Technical Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      message: "Technology and innovation are at the heart of our operations. We strive to implement cutting-edge solutions while maintaining the highest standards of safety and quality."
    }
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">Our Leadership</h1>

        <div className="space-y-16">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    style={{ minHeight: '300px' }}
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold mb-2">{leader.name}</h2>
                  <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                  <p className="text-gray-600 leading-relaxed">{leader.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;