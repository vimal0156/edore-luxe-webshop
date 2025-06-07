
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="luxury-container text-center py-16">
        <div className="max-w-md mx-auto">
          <img
            src="/lovable-uploads/64fbcab8-3020-484e-9e3c-f48f1fa5594f.png"
            alt="EDORE LUXE"
            className="h-12 w-auto mx-auto mb-8 object-contain"
          />
          
          <h1 className="text-6xl font-serif font-light mb-4 text-foreground">404</h1>
          <h2 className="text-2xl font-serif font-light mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for doesn't exist. Perhaps it was moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="space-y-4">
            <Link to="/">
              <Button size="lg" className="w-full mb-3">
                Return Home
              </Button>
            </Link>
            
            <Link to="/shop">
              <Button variant="outline" size="lg" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Need help? <Link to="/faq" className="text-primary hover:underline">Visit our FAQ</Link> or <Link to="#contact" className="text-primary hover:underline">contact us</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
