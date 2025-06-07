
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Minimal Cotton Tee',
      price: 89,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      size: 'M',
      color: 'White',
      inStock: true
    },
    {
      id: 2,
      name: 'Cashmere Sweater',
      price: 299,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400',
      size: 'S',
      color: 'Cream',
      inStock: false
    },
    {
      id: 3,
      name: 'Silk Slip Dress',
      price: 245,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
      size: 'M',
      color: 'Black',
      inStock: true
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="luxury-container pt-24 pb-16">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-3xl font-serif font-light mb-4">Your Wishlist is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Save items you love to your wishlist and they'll appear here.
            </p>
            <Link to="/shop">
              <Button size="lg">Start Shopping</Button>
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="luxury-container pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-serif font-light">My Wishlist</h1>
            <p className="text-muted-foreground">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="group border rounded-lg overflow-hidden">
                <div className="relative aspect-[4/5] bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-background px-3 py-1 rounded text-sm">Out of Stock</span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.color} • Size {item.size}
                  </p>
                  <p className="text-lg font-medium mb-4">${item.price}</p>
                  
                  <div className="space-y-2">
                    <Button 
                      className="w-full"
                      disabled={!item.inStock}
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                    <Link to={`/product/${item.id}`}>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/shop">
              <Button variant="outline" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
