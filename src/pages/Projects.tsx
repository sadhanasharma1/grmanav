import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Mega Industrial Complex",
    description: "A state-of-the-art industrial complex spanning 100 acres with modern amenities and sustainable features.",
    image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Smart City Infrastructure",
    description: "Comprehensive infrastructure development project for an upcoming smart city, including roads, utilities, and public spaces.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Green Township Development",
    description: "Eco-friendly township project featuring sustainable architecture and renewable energy systems.",
    image: "https://images.unsplash.com/photo-1488724034958-0fdd7c3b2e89?auto=format&fit=crop&w=800&q=80"
  }
];

const Projects = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>
        
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
          We take pride in our diverse portfolio of projects that showcase our expertise in construction and infrastructure development. Each project reflects our commitment to quality, innovation, and sustainable practices.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;