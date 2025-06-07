
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Package, Clock, RefreshCw, CreditCard } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="luxury-container pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-serif font-light mb-8">Returns & Exchanges</h1>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-lg mb-2">30 Days</h3>
              <p className="text-sm text-muted-foreground">Return window</p>
            </div>
            <div className="text-center">
              <Package className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-lg mb-2">Free Returns</h3>
              <p className="text-sm text-muted-foreground">On all orders</p>
            </div>
            <div className="text-center">
              <RefreshCw className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-lg mb-2">Easy Exchange</h3>
              <p className="text-sm text-muted-foreground">Different size or color</p>
            </div>
            <div className="text-center">
              <CreditCard className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-lg mb-2">Quick Refund</h3>
              <p className="text-sm text-muted-foreground">5-7 business days</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-light mb-4">Return Policy</h2>
              <p className="text-luxury mb-4">
                We want you to love your EDORE LUXE pieces. If for any reason you're not completely 
                satisfied with your purchase, we offer free returns within 30 days of delivery.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-luxury">
                <li>Items must be unworn, unwashed, and in original condition</li>
                <li>All original tags must be attached</li>
                <li>Items must be returned in original packaging</li>
                <li>Custom or personalized items cannot be returned</li>
                <li>Sale items are final sale unless defective</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4">How to Return</h2>
              <ol className="list-decimal pl-6 space-y-3 text-luxury">
                <li>
                  <strong>Initiate Return:</strong> Log into your account and select "Return Items" 
                  from your order history, or contact our customer service team.
                </li>
                <li>
                  <strong>Print Label:</strong> We'll email you a prepaid return shipping label 
                  within 24 hours.
                </li>
                <li>
                  <strong>Package Items:</strong> Securely package your items in the original 
                  packaging or a suitable alternative.
                </li>
                <li>
                  <strong>Ship:</strong> Attach the return label and drop off at any authorized 
                  shipping location.
                </li>
                <li>
                  <strong>Refund:</strong> Once we receive and process your return, we'll issue 
                  a refund to your original payment method.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4">Exchanges</h2>
              <p className="text-luxury mb-4">
                Need a different size or color? We offer free exchanges for the same item in a 
                different size or color, subject to availability.
              </p>
              <p className="text-luxury">
                To exchange an item, simply follow the return process and specify that you'd like 
                to exchange rather than return. We'll send your new item as soon as we receive 
                your return.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4">International Returns</h2>
              <p className="text-luxury">
                International customers are responsible for return shipping costs. Please contact 
                our customer service team for assistance with international returns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4">Questions?</h2>
              <p className="text-luxury">
                If you have any questions about returns or exchanges, please contact our customer 
                service team at returns@edoreluxe.com or visit our FAQ page.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Returns;
