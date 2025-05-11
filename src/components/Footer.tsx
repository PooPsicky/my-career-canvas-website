
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-leather-dark text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif font-bold text-gold">Dr. Leazar</h3>
            <p className="mt-3 text-sm text-cream/70">
              Professional leather and vinyl upholstery repair services for automotive, furniture, and commercial applications.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-cream/70 hover:text-gold transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Automotive Repair', 
                'Furniture Restoration', 
                'Color Matching',
                'Commercial Services', 
                'Protective Coating'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-cream/70 hover:text-gold transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">Contact</h3>
            <ul className="space-y-2 text-cream/70">
              <li>(555) 123-4567</li>
              <li>info@drleazar.com</li>
              <li>Greater Metropolitan Area</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-cream/60">
            © {year} Dr. Leazar Leather & Vinyl Repair. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-cream/60 hover:text-gold">Privacy Policy</a>
            <a href="#" className="text-cream/60 hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
