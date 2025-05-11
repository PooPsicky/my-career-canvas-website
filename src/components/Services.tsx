
import { Shield, Zap, Car, Sofa, Tag, Briefcase } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-gold">
      <div className="rounded-full bg-leather-light/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-leather-dark" />
      </div>
      <h3 className="text-xl font-serif font-bold text-leather-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Automotive Repair",
      description: "Repair tears, burns, and wear on leather or vinyl seats, dashboards, and door panels."
    },
    {
      icon: Sofa,
      title: "Furniture Restoration",
      description: "Breathe new life into worn leather couches, chairs, and ottomans with our specialized techniques."
    },
    {
      icon: Shield,
      title: "Protective Coating",
      description: "Add a durable protective layer to extend the life of your leather and vinyl surfaces."
    },
    {
      icon: Tag,
      title: "Color Matching",
      description: "Perfect color matching for seamless repairs that blend flawlessly with existing materials."
    },
    {
      icon: Zap,
      title: "Quick Repairs",
      description: "Fast and efficient repairs for minor damages, often completed same-day."
    },
    {
      icon: Briefcase,
      title: "Commercial Services",
      description: "Specialized services for restaurants, hotels, offices and commercial transportation."
    }
  ];

  return (
    <section id="services" className="py-16 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-leather-dark font-serif">Our Specialized Services</h2>
          <div className="stitch-divider w-24 mx-auto my-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Professional repair and restoration services for all types of leather and vinyl surfaces,
            delivering results that look and feel like new.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
