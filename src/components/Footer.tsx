
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="luxury-container py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/">
              <img
                src="/lovable-uploads/64fbcab8-3020-484e-9e3c-f48f1fa5594f.png"
                alt="EDORE LUXE"
                className="h-10 w-auto mb-4 object-contain"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Crafting timeless pieces that embody the essence of modern luxury. 
              Quality, sustainability, and style in perfect harmony.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Pinterest
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-serif text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link to="/lookbook" className="text-muted-foreground hover:text-foreground transition-colors">Lookbook</Link></li>
              <li><Link to="/gift-cards" className="text-muted-foreground hover:text-foreground transition-colors">Gift Cards</Link></li>
              <li><Link to="/coming-soon" className="text-muted-foreground hover:text-foreground transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-serif text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/track-order" className="text-muted-foreground hover:text-foreground transition-colors">Track Order</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-foreground transition-colors">Returns & Exchanges</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 EDORE LUXE. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
