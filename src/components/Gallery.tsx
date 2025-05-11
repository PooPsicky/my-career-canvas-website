
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Gallery = () => {
  // In a real implementation, these would be actual before/after images
  const projects = [
    {
      title: "Leather Car Seat Repair",
      description: "Repaired torn leather seat with perfect color match",
      beforeImage: "https://images.unsplash.com/photo-1518805636723-6064b94b993d?q=80&w=500&auto=format",
      afterImage: "https://images.unsplash.com/photo-1583243567239-3727551e0c59?q=80&w=500&auto=format"
    },
    {
      title: "Office Chair Restoration",
      description: "Restored worn executive chair to like-new condition",
      beforeImage: "https://images.unsplash.com/photo-1601854773211-fd64a40d1508?q=80&w=500&auto=format",
      afterImage: "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?q=80&w=500&auto=format"
    },
    {
      title: "Vinyl Dashboard Repair",
      description: "Fixed cracked dashboard with seamless results",
      beforeImage: "https://images.unsplash.com/photo-1557411732-1797a9171fcf?q=80&w=500&auto=format",
      afterImage: "https://images.unsplash.com/photo-1583356426255-aec98fe9401f?q=80&w=500&auto=format"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-leather-dark font-serif">Before & After Gallery</h2>
          <div className="stitch-divider w-24 mx-auto my-4"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            See the transformation in our work. Each project represents our commitment to quality and attention to detail.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Before Image */}
            <div className="md:w-1/2 relative">
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={projects[currentSlide].beforeImage}
                  alt={`Before: ${projects[currentSlide].title}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="absolute top-3 left-3 bg-leather-dark text-cream text-xs font-bold px-4 py-1 rounded-full">BEFORE</div>
              </div>
            </div>

            {/* After Image */}
            <div className="md:w-1/2 relative">
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={projects[currentSlide].afterImage}
                  alt={`After: ${projects[currentSlide].title}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="absolute top-3 left-3 bg-gold text-leather-dark text-xs font-bold px-4 py-1 rounded-full">AFTER</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-serif font-bold text-leather-dark">{projects[currentSlide].title}</h3>
            <p className="text-gray-600 mt-2">{projects[currentSlide].description}</p>

            <div className="flex justify-center mt-6 gap-4">
              <Button variant="outline" size="icon" onClick={prevSlide} aria-label="Previous project">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              
              <span className="text-sm text-gray-500">
                {currentSlide + 1} / {projects.length}
              </span>
              
              <Button variant="outline" size="icon" onClick={nextSlide} aria-label="Next project">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-leather-dark text-cream hover:bg-leather-medium">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
