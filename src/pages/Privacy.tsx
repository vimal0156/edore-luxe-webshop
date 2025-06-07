
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="luxury-container pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-serif font-light mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-light mb-4">Information We Collect</h2>
              <p className="text-luxury mb-4">
                At EDORE LUXE, we collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact us for support.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-luxury">
                <li>Personal information (name, email, phone number)</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely)</li>
                <li>Order history and preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-light mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-luxury">
                <li>Process and fulfill your orders</li>
                <li>Send you important updates about your orders</li>
                <li>Improve our products and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-light mb-4">Information Sharing</h2>
              <p className="text-luxury mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy or as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-light mb-4">Cookies and Tracking</h2>
              <p className="text-luxury mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
                and understand where our visitors are coming from.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-light mb-4">Your Rights</h2>
              <p className="text-luxury mb-4">
                You have the right to access, update, or delete your personal information. 
                You can also opt out of marketing communications at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-light mb-4">Contact Us</h2>
              <p className="text-luxury">
                If you have any questions about this Privacy Policy, please contact us at privacy@edoreluxe.com
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
