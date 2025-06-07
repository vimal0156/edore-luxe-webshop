
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const PaymentSuccess = () => {
  useEffect(() => {
    // Clear cart or perform any post-purchase actions
    console.log('Payment successful - clearing cart');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="luxury-container pt-24 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-serif font-light mb-2">Order Confirmed!</h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-medium mb-2">Order Number</h3>
                <p className="text-muted-foreground">#EDR-003</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Order Date</h3>
                <p className="text-muted-foreground">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Total Amount</h3>
                <p className="text-muted-foreground">$327.00</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Estimated Delivery</h3>
                <p className="text-muted-foreground">3-5 business days</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-left p-4 border rounded-lg">
              <Package className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Order Confirmation Sent</p>
                <p className="text-sm text-muted-foreground">
                  We've sent an order confirmation email with tracking details
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/account">
              <Button className="w-full sm:w-auto">
                View Order Details
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" className="w-full sm:w-auto">
                Continue Shopping
              </Button>
            </Link>
          </div>

          <div className="mt-12 p-6 border-2 border-dashed rounded-lg">
            <h3 className="font-serif text-lg mb-2">What's Next?</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>• You'll receive a shipping confirmation email when your order ships</p>
              <p>• Track your package using the tracking number provided</p>
              <p>• Free returns within 30 days of delivery</p>
              <p>• Questions? Contact our customer service team</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
