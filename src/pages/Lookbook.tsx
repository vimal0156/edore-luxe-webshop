
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LookbookGallery from '@/components/LookbookGallery';

const Lookbook = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="luxury-container text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-serif font-light mb-6">
            Lookbook
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how to style our pieces through carefully curated editorial looks that embody the Edoristic aesthetic.
          </p>
        </section>

        <LookbookGallery />
      </main>
      
      <Footer />
    </div>
  );
};

export default Lookbook;
