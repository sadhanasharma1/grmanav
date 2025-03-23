import Slider from 'react-slick';
import { Users, Briefcase, Building2, LineChart } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const keyDataPoints = [
  {
    title: 'Mandays Employed',
    value: '2.75 Mn',
    icon: Users,
  },
  {
    title: 'Workers Pooled',
    value: '40,000+',
    icon: Briefcase,
  },
  {
    title: 'Micro Contractors Pooled',
    value: '1,500+',
    icon: Building2,
  },
  {
    title: 'LH Exchange',
    value: '₹500 Cr+',
    icon: LineChart,
  },
];

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="pt-20">
      <div className="relative">
        <Slider {...sliderSettings}>
          <div>
            <img
              src="TopSlide1.png"
              alt="Construction Site 1"
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div>
            <img
              src="TopSlide2.png"
              alt="Construction Site 2"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </Slider>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8">
          Welcome to GR Manav Pvt. Ltd
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Building tomorrow's infrastructure with innovation, excellence, and sustainable practices. We are committed to delivering high-quality construction solutions that stand the test of time.
        </p>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Data Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyDataPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <point.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {point.title}
                </h3>
                <p className="text-3xl font-bold text-blue-600 text-center">
                  {point.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;