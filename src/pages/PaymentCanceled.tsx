
import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft, RefreshCw } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const PaymentCanceled = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="luxury-container pt-24 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <XCircle className="h-16 w-16 text-orange-500 mx-auto mb-4" />
            <h1 className="text-3xl font-serif font-light mb-2">Payment Canceled</h1>
            <p className="text-lg text-muted-foreground">
              Your payment was canceled. No charges were made to your account.
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 mb-8">
            <h3 className="font-medium mb-4">What happened?</h3>
            <div className="text-left space-y-2 text-muted-foreground">
              <p>• Payment process was interrupted or canceled</p>
              <p>• Your cart items are still saved and ready for checkout</p>
              <p>• No payment was processed</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/checkout">
              <Button className="w-full sm:w-auto">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="outline" className="w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Cart
              </Button>
            </Link>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-medium mb-3">Need Help?</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>If you're experiencing issues with payment, try:</p>
              <p>• Using a different payment method</p>
              <p>• Checking your card details</p>
              <p>• Contacting your bank</p>
              <p>• Reaching out to our customer support</p>
            </div>
            <Link to="/faq" className="inline-block mt-4">
              <Button variant="outline" size="sm">Contact Support</Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PaymentCanceled;
