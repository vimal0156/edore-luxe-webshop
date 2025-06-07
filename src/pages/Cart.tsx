
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchCart = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Not logged in');
      const res = await fetch('/api/cart', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to fetch cart');
      // API returns { items: [...] }
      setCartItems(data.items.map((item: any) => ({
        id: item.product._id,
        name: item.product.name,
        price: item.product.price,
        size: item.size || '',
        color: item.color || '',
        quantity: item.quantity,
        image: item.product.image || '/placeholder.svg',
      })));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchCart();
}, []);

  const updateQuantity = async (id: number, newQuantity: number) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Not logged in');
    if (newQuantity === 0) {
      // Remove item
      const res = await fetch('/api/cart/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to remove item');
    } else {
      // Update quantity
      const res = await fetch('/api/cart/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: id, quantity: newQuantity }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to update quantity');
    }
    // Refetch cart
    const res = await fetch('/api/cart', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setCartItems(data.items.map((item: any) => ({
      id: item.product._id,
      name: item.product.name,
      price: item.product.price,
      size: item.size || '',
      color: item.color || '',
      quantity: item.quantity,
      image: item.product.image || '/placeholder.svg',
    })));
  } catch (err: any) {
    setError(err.message);
  }
};

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 200 ? 0 : 15;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="luxury-container pt-24 pb-16">
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h1 className="text-2xl font-serif font-light mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">
              Discover our collection and add some items to your cart
            </p>
            <Link to="/shop">
              <Button>Continue Shopping</Button>
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
        <div className="mb-8">
          <Link to="/shop" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
        </div>

        <h1 className="text-3xl font-serif font-light mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-6 border rounded-lg">
                  <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.color} / {item.size}
                    </p>
                    <p className="font-medium">${item.price}</p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-accent transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-3 py-2 min-w-[3rem] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-accent transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 sticky top-24">
              <h2 className="font-serif text-xl mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-sm text-muted-foreground">
                    Free shipping on orders over $200
                  </p>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>
              </div>

              <Link to="/checkout">
                <Button className="w-full mb-3">Proceed to Checkout</Button>
              </Link>
              
              <Link to="/shop">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
