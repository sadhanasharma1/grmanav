import React from 'react';
import { Target, Lightbulb, Scale, Shield, Heart, Award } from 'lucide-react';

const CompanyOverview = () => {
  const coreValues = [
    {
      title: 'Fairness',
      description: 'We ensure equal opportunities and transparent dealings with all stakeholders.',
      icon: Scale
    },
    {
      title: 'Accountability',
      description: 'We take ownership of our actions and deliver on our commitments.',
      icon: Shield
    },
    {
      title: 'Integrity',
      description: 'We conduct our business with honesty and ethical principles.',
      icon: Award
    },
    {
      title: 'Respect',
      description: 'We value diversity and treat everyone with dignity and professionalism.',
      icon: Heart
    }
  ];

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-8">Company Overview</h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
            Since our inception, GR Manav has been at the forefront of construction excellence in India. Our journey began with a vision to transform the construction landscape through innovation and sustainable practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To deliver exceptional construction solutions while maintaining the highest standards of quality, safety, and sustainability, creating lasting value for our clients and communities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Lightbulb className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To be India's most trusted and innovative construction company, setting new benchmarks in infrastructure development and sustainable building practices.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <value.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;