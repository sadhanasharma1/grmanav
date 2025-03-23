import React from 'react';
import { useParams } from 'react-router-dom';

const projects = {
  1: {
    title: "Mega Industrial Complex",
    location: "Gujarat Industrial Development Corporation",
    duration: "2022 - 2024",
    value: "₹500 Crore",
    image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1200&q=80",
    description: `The Mega Industrial Complex is a landmark project that showcases our expertise in industrial construction. Spanning 100 acres, this state-of-the-art facility incorporates modern amenities and sustainable features.

    Key Features:
    • Advanced manufacturing facilities
    • Smart utility management systems
    • Green building certification
    • Integrated waste management
    • Renewable energy integration
    
    The project demonstrates our commitment to sustainable development while meeting the complex requirements of modern industrial infrastructure.`
  },
  2: {
    title: "Smart City Infrastructure",
    location: "Emerging Smart City, Maharashtra",
    duration: "2023 - 2025",
    value: "₹750 Crore",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: `A comprehensive infrastructure development project that lays the foundation for a modern smart city. This project encompasses various aspects of urban infrastructure development.

    Project Scope:
    • Smart road network with integrated utilities
    • Advanced water management systems
    • Smart street lighting
    • Underground utility corridors
    • Public spaces and green zones
    
    The project sets new standards in urban infrastructure development with its innovative approach to city planning.`
  },
  3: {
    title: "Green Township Development",
    location: "Eco City, Karnataka",
    duration: "2023 - 2026",
    value: "₹1000 Crore",
    image: "https://images.unsplash.com/photo-1488724034958-0fdd7c3b2e89?auto=format&fit=crop&w=1200&q=80",
    description: `An eco-friendly township project that harmoniously blends modern living with environmental consciousness. This project showcases our commitment to sustainable development.

    Highlights:
    • Solar-powered common areas
    • Rainwater harvesting systems
    • Waste-to-energy plants
    • Green building certification
    • Biodiversity parks
    
    The township sets new benchmarks in sustainable urban development while providing modern amenities for comfortable living.`
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[Number(id)];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-gray-600">Location</h3>
                <p>{project.location}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">Duration</h3>
                <p>{project.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">Project Value</h3>
                <p>{project.value}</p>
              </div>
            </div>

            <div className="prose max-w-none">
              {project.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;