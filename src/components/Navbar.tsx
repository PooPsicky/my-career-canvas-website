
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-leather-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-cream font-serif text-xl sm:text-2xl font-bold">Dr. Leazar</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#services" className="text-cream hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#about" className="text-cream hover:text-gold px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#gallery" className="text-cream hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
              <a href="#contact" className="text-cream hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-leather-dark">
                <Phone className="h-4 w-4 mr-2" /> Call Now
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-cream hover:text-gold"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-leather-medium">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="text-cream hover:text-gold block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#about" className="text-cream hover:text-gold block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#gallery" className="text-cream hover:text-gold block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
            <a href="#contact" className="text-cream hover:text-gold block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <Button variant="outline" className="w-full mt-2 border-gold text-gold hover:bg-gold hover:text-leather-dark">
              <Phone className="h-4 w-4 mr-2" /> Call Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
