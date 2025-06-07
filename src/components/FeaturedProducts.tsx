
import { Button } from '@/components/ui/button';
import { ShoppingBag, Heart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Minimal Oversized Blazer",
      price: "$189",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center",
      category: "Outerwear"
    },
    {
      id: 2,
      name: "Essential Cotton Tee",
      price: "$49",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop&crop=center",
      category: "Basics"
    },
    {
      id: 3,
      name: "Tailored Wide Pants",
      price: "$129",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop&crop=center",
      category: "Bottoms"
    },
    {
      id: 4,
      name: "Minimalist Knit Sweater",
      price: "$98",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop&crop=center",
      category: "Knitwear"
    }
  ];

  return (
    <section id="shop" className="py-20 bg-background">
      <div className="luxury-container">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6">
            New Arrivals
          </h2>
          <p className="text-lg text-luxury max-w-2xl mx-auto">
            Discover our latest pieces, each designed with meticulous attention to detail 
            and crafted for the modern minimalist wardrobe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group cursor-pointer animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden mb-4 bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button 
                      size="sm" 
                      className="bg-background text-foreground hover:bg-primary hover:text-primary-foreground"
                    >
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="bg-background/90 border-background text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-background/90 px-3 py-1 text-xs font-medium tracking-wide">
                  {product.category}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground font-light">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="luxury-button bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
