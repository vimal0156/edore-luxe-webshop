
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { useState } from 'react';

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [orderData, setOrderData] = useState(null);

  const mockOrderData = {
    orderNumber: 'EDR-003',
    status: 'shipped',
    estimatedDelivery: '2024-01-20',
    trackingNumber: '1Z999AA1234567890',
    items: [
      { name: 'Minimal Cotton Tee', quantity: 1, price: 89 },
      { name: 'Essential Hoodie', quantity: 1, price: 159 }
    ],
    timeline: [
      { status: 'confirmed', date: '2024-01-15', completed: true },
      { status: 'processing', date: '2024-01-16', completed: true },
      { status: 'shipped', date: '2024-01-17', completed: true },
      { status: 'delivered', date: '2024-01-20', completed: false }
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderNumber === 'EDR-003') {
      setOrderData(mockOrderData);
    } else {
      setOrderData(null);
    }
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="h-6 w-6 text-green-500" />;
    }
    
    switch (status) {
      case 'confirmed':
        return <Package className="h-6 w-6 text-muted-foreground" />;
      case 'processing':
        return <Clock className="h-6 w-6 text-muted-foreground" />;
      case 'shipped':
        return <Truck className="h-6 w-6 text-muted-foreground" />;
      case 'delivered':
        return <CheckCircle className="h-6 w-6 text-muted-foreground" />;
      default:
        return <Clock className="h-6 w-6 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="luxury-container pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-serif font-light mb-8 text-center">
            Track Your Order
          </h1>
          
          {!orderData ? (
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="orderNumber">Order Number *</Label>
                  <Input
                    id="orderNumber"
                    placeholder="e.g., EDR-003"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Track Order
                </Button>
              </form>
              
              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="font-medium mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Can't find your order number? Check your email confirmation or contact our support team.
                </p>
                <Button variant="outline" size="sm">
                  Contact Support
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Order Header */}
              <div className="bg-muted/50 rounded-lg p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-medium mb-1">Order Number</h3>
                    <p className="text-muted-foreground">{orderData.orderNumber}</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Status</h3>
                    <p className="text-muted-foreground capitalize">{orderData.status}</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Estimated Delivery</h3>
                    <p className="text-muted-foreground">
                      {new Date(orderData.estimatedDelivery).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                {orderData.trackingNumber && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <h3 className="font-medium mb-1">Tracking Number</h3>
                    <p className="text-muted-foreground font-mono">{orderData.trackingNumber}</p>
                  </div>
                )}
              </div>

              {/* Order Timeline */}
              <div>
                <h2 className="text-2xl font-serif font-light mb-6">Order Timeline</h2>
                <div className="space-y-6">
                  {orderData.timeline.map((step, index) => (
                    <div key={step.status} className="flex items-center gap-4">
                      {getStatusIcon(step.status, step.completed)}
                      <div className="flex-1">
                        <h3 className={`font-medium capitalize ${step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {step.status}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {step.completed ? new Date(step.date).toLocaleDateString() : 'Pending'}
                        </p>
                      </div>
                      {index < orderData.timeline.length - 1 && (
                        <div className="w-px h-8 bg-border ml-3" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h2 className="text-2xl font-serif font-light mb-6">Order Items</h2>
                <div className="space-y-4">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b border-border">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-medium">${item.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <Button onClick={() => setOrderData(null)} variant="outline">
                  Track Another Order
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderTracking;
