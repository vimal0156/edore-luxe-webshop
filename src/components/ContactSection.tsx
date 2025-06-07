
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Instagram, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="luxury-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-luxury max-w-2xl mx-auto">
            Have questions about our collection or need styling advice? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input 
                    placeholder="Your first name" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input 
                    placeholder="Your last name" 
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  placeholder="What's this about?" 
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us more..." 
                  rows={6}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="luxury-button w-full sm:w-auto"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in space-y-8">
            <div>
              <h3 className="text-xl font-serif font-medium mb-6">
                Connect With Us
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:hello@edoreluxe.com" 
                  className="flex items-center space-x-4 text-luxury hover:text-foreground transition-colors group"
                >
                  <div className="p-3 bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm">hello@edoreluxe.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://instagram.com/edoreluxe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-luxury hover:text-foreground transition-colors group"
                >
                  <div className="p-3 bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-full">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-sm">@edoreluxe</p>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/your-number" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-luxury hover:text-foreground transition-colors group"
                >
                  <div className="p-3 bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-full">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm">Quick responses</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h4 className="font-medium mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm text-luxury">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
