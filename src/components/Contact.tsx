
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactItem = ({ icon: Icon, title, children }: { 
  icon: React.ElementType, 
  title: string, 
  children: React.ReactNode 
}) => {
  return (
    <div className="flex items-start">
      <div className="rounded-full bg-gold/20 p-2 mr-4 flex-shrink-0">
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-cream">{title}</h3>
        <div className="text-cream/80">{children}</div>
      </div>
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    });
  };

  return (
    <section id="contact" className="py-16 bg-leather-medium relative">
      {/* Background pattern */}
      <div className="absolute inset-0 leather-bg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cream font-serif">Contact Us</h2>
          <div className="stitch-divider w-24 mx-auto my-4"></div>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Get in touch for a free consultation and quote. We serve the entire metropolitan area with our mobile services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-leather-dark p-8 rounded-lg border border-gold/20 shadow-xl">
            <h3 className="text-2xl font-serif text-gold mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <ContactItem icon={Phone} title="Phone">
                <a href="tel:+15551234567" className="hover:text-gold">(555) 123-4567</a>
              </ContactItem>
              
              <ContactItem icon={Mail} title="Email">
                <a href="mailto:info@drleazar.com" className="hover:text-gold">info@drleazar.com</a>
              </ContactItem>
              
              <ContactItem icon={MapPin} title="Service Area">
                <p>Greater Metropolitan Area<br />Mobile service available</p>
              </ContactItem>
              
              <ContactItem icon={Clock} title="Business Hours">
                <p>Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
              </ContactItem>
            </div>
            
            <div className="mt-8 pt-6 border-t border-cream/20">
              <h4 className="text-gold font-serif font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
                {['facebook', 'instagram', 'twitter'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream hover:bg-gold hover:text-leather-dark transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 bg-current rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-serif text-leather-dark mb-6">Request a Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                  <Input id="phone" type="tel" placeholder="Your phone number" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <Input id="email" type="email" placeholder="Your email address" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Needed</label>
                <select 
                  id="service" 
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                >
                  <option value="">Select a service</option>
                  <option value="automotive">Automotive Upholstery</option>
                  <option value="furniture">Furniture Repair</option>
                  <option value="commercial">Commercial Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your repair needs" 
                  className="min-h-[120px]"
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full bg-gold text-leather-dark hover:bg-leather-dark hover:text-cream">
                <Send className="h-4 w-4 mr-2" />
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
