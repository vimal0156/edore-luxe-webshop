
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Truck, Globe, Clock, Shield } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="luxury-container pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-serif font-light mb-8">Shipping Information</h1>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <Truck className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-lg mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $150</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-lg mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">2-3 business days</p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-lg mb-2">Worldwide</h3>
              <p className="text-sm text-muted-foreground">International shipping</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif text-lg mb-2">Secure</h3>
              <p className="text-sm text-muted-foreground">Fully insured</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-light mb-4">Domestic Shipping (US)</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border p-4 text-left">Shipping Method</th>
                      <th className="border border-border p-4 text-left">Delivery Time</th>
                      <th className="border border-border p-4 text-left">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4">Standard Shipping</td>
                      <td className="border border-border p-4">5-7 business days</td>
                      <td className="border border-border p-4">$9.95 (Free over $150)</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4">Express Shipping</td>
                      <td className="border border-border p-4">2-3 business days</td>
                      <td className="border border-border p-4">$19.95</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4">Overnight Shipping</td>
                      <td className="border border-border p-4">1 business day</td>
                      <td className="border border-border p-4">$39.95</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4">International Shipping</h2>
              <p className="text-luxury mb-4">
                We ship to over 100 countries worldwide. International shipping rates and delivery 
                times vary by destination.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border p-4 text-left">Region</th>
                      <th className="border border-border p-4 text-left">Delivery Time</th>
                      <th className="border border-border p-4 text-left">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4">Canada</td>
                      <td className="border border-border p-4">7-10 business days</td>
                      <td className="border border-border p-4">$25.00</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4">Europe</td>
                      <td className="border border-border p-4">10-14 business days</td>
                      <td className="border border-border p-4">$35.00</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4">Asia/Pacific</td>
                      <td className="border border-border p-4">12-16 business days</td>
                      <td className="border border-border p-4">$45.00</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4">Rest of World</td>
                      <td className="border border-border p-4">14-21 business days</td>
                      <td className="border border-border p-4">$55.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4">Order Processing</h2>
              <ul className="list-disc pl-6 space-y-2 text-luxury">
                <li>Orders placed before 2 PM EST (Monday-Friday) ship the same day</li>
                <li>Orders placed after 2 PM EST or on weekends ship the next business day</li>
                <li>We do not ship on holidays</li>
                <li>You will receive a tracking number via email once your order ships</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4">Customs & Duties</h2>
              <p className="text-luxury mb-4">
                International customers are responsible for any customs duties, taxes, or fees 
                imposed by their country. These charges are not included in our shipping costs 
                and are collected by the shipping carrier upon delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-light mb-4">Shipping Restrictions</h2>
              <p className="text-luxury">
                We currently do not ship to PO Boxes or military addresses (APO/FPO). Please 
                provide a physical street address for delivery.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shipping;
