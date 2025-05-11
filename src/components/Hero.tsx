
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with leather texture */}
      <div className="absolute inset-0 bg-leather-medium">
        <div className="absolute inset-0 leather-bg"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="bg-cream/10 backdrop-blur-sm p-8 rounded-lg border border-cream/20">
              <img 
                src="/lovable-uploads/a0c9c218-b2d2-4e6b-934e-6ecc43e40e71.png" 
                alt="Dr. Leazar Leather & Vinyl Upholstery Repair" 
                className="max-w-[300px] mx-auto mb-6"
              />
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6">
                Expert Leather & Vinyl Repair
              </h1>
              
              <p className="text-xl text-cream/90 mb-8 max-w-lg">
                Specializing in professional restoration and repair of leather and vinyl surfaces for automotive, furniture, and more.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gold text-leather-dark hover:bg-cream">
                  Get a Free Quote
                </Button>
                <Button size="lg" variant="outline" className="border-cream text-cream hover:bg-cream/10">
                  View Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="bg-leather-dark/80 backdrop-blur-sm p-6 rounded-lg border border-gold/30">
              <h2 className="text-2xl font-serif font-bold text-gold mb-4">Why Choose Dr. Leazar?</h2>
              
              <ul className="space-y-4">
                {[
                  "30+ years of professional experience",
                  "Specialized techniques for perfect color matching",
                  "Mobile service - we come to you",
                  "Fraction of the cost of replacement",
                  "Satisfaction guaranteed"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-cream">
                    <span className="h-2 w-2 bg-gold rounded-full mr-3"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
