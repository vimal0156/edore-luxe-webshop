
import { useState } from 'react';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menuItems = [
    { name: 'Shop', href: '/shop' },
    { name: 'Lookbook', href: '/lookbook' },
    { name: 'Journal', href: '/blog' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'About', href: '#about' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="luxury-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link to="/">
              <img
                src="/uploads/64fbcab8-3020-484e-9e3c-f48f1fa5594f.png"
                alt="EDORE"
                className="h-14 lg:h-20 w-auto object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.insertAdjacentHTML('beforeend', '<span style=\'font-size:2rem;font-weight:700;\'>EDORE</span>'); }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-300"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors duration-300"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-accent rounded-full transition-colors">
              <Search size={18} />
            </button>
            
            {isLoggedIn ? (
              <Link to="/account" className="p-2 hover:bg-accent rounded-full transition-colors">
                <User size={18} />
              </Link>
            ) : (
              <Link to="/login" className="p-2 hover:bg-accent rounded-full transition-colors">
                <User size={18} />
              </Link>
            )}
            
            <Link to="/cart" className="p-2 hover:bg-accent rounded-full transition-colors relative">
              <ShoppingBag size={18} />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="py-4 space-y-4">
              {menuItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground hover:bg-accent transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground hover:bg-accent transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="border-t pt-4 mt-4">
                {isLoggedIn ? (
                  <Link
                    to="/account"
                    className="block px-4 py-2 text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground hover:bg-accent transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Account
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground hover:bg-accent transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground hover:bg-accent transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Create Account
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
