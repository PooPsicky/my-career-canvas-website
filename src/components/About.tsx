
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-leather-dark text-cream relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="leather-bg opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gold">Meet Dr. Leazar</h2>
            <div className="stitch-divider w-24 my-4"></div>
            
            <div className="space-y-6 text-cream/90">
              <p className="text-lg">
                With over three decades of experience in leather and vinyl repair, Dr. Leazar has become the trusted name for quality restoration work in the region.
              </p>
              
              <p>
                What started as a passion for breathing new life into worn leather goods has grown into a specialized service that saves customers thousands by repairing rather than replacing their valuable leather and vinyl items.
              </p>
              
              <p>
                Using proprietary techniques developed over years of practice, Dr. Leazar can match any color and texture, making repairs virtually invisible to the naked eye.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-serif font-semibold text-gold mb-4">Our Commitment</h3>
                <ul className="space-y-3">
                  {[
                    "100% satisfaction guarantee on all repairs",
                    "Environmentally friendly products and processes",
                    "Honest, upfront pricing with no hidden fees",
                    "Mobile service throughout the metropolitan area",
                    "Respectful handling of your valuable items"
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <Check className="h-5 w-5 text-gold mr-2 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              {/* This would typically be a real photo - using a placeholder for now */}
              <div className="aspect-ratio-3/4 bg-leather-light/30 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 text-center">
                    <div className="w-32 h-32 rounded-full bg-gold/20 mx-auto mb-4 flex items-center justify-center">
                      <span className="font-serif text-5xl text-gold">DL</span>
                    </div>
                    <p className="text-lg font-serif text-cream italic">
                      "Quality is never an accident; it's always the result of high intention, sincere effort, and skilled execution."
                    </p>
                    <p className="mt-4 text-gold font-medium">— Dr. Leazar</p>
                  </div>
                </div>
              </div>
              {/* Gold accent border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
