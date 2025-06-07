
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="luxury-container pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-serif font-light mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-light mb-4">1. Agreement to Terms</h2>
              <p className="text-luxury mb-4">
                By accessing and using EDORE LUXE's website, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-light mb-4">2. Use License</h2>
              <p className="text-luxury mb-4">
                Permission is granted to temporarily download one copy of the materials on EDORE LUXE's 
                website for personal, non-commercial transitory viewing only.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-luxury">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-light mb-4">3. Product Information</h2>
              <p className="text-luxury mb-4">
                We strive to ensure that product descriptions, pricing, and availability are accurate. 
                However, we cannot guarantee that all information is error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-light mb-4">4. Orders and Payment</h2>
              <ul className="list-disc pl-6 space-y-2 text-luxury">
                <li>All orders are subject to acceptance and availability</li>
                <li>Payment must be received before order processing</li>
                <li>We reserve the right to refuse or cancel orders</li>
                <li>Prices are subject to change without notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-light mb-4">5. Limitation of Liability</h2>
              <p className="text-luxury mb-4">
                In no event shall EDORE LUXE or its suppliers be liable for any damages arising out of 
                the use or inability to use the materials on the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-light mb-4">6. Contact Information</h2>
              <p className="text-luxury">
                If you have any questions about these Terms of Service, please contact us at 
                legal@edoreluxe.com
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
