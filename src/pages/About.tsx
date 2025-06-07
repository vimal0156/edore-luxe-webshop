
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="luxury-container mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-serif font-light mb-6">
                Our Story
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                EDORE LUXE was born from a simple belief: that true luxury lies in the 
                intersection of timeless design, exceptional quality, and mindful creation.
              </p>
              <p className="text-luxury leading-relaxed">
                Founded in 2020, we've built our brand on the principle that less is more. 
                Every piece in our collection is thoughtfully designed to transcend seasons 
                and trends, creating a wardrobe that grows more beautiful with time.
              </p>
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
                alt="EDORE LUXE Design Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="luxury-container mb-16">
          <h2 className="text-3xl font-serif font-light text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-serif font-light mb-4">Craftsmanship</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every piece is meticulously crafted by skilled artisans using time-honored 
                techniques and the finest materials sourced from around the world.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-serif font-light mb-4">Sustainability</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to responsible fashion, using sustainable materials and 
                ethical production methods that respect both people and planet.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-serif font-light mb-4">Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in building lasting relationships with our customers, partners, 
                and the communities where our garments are made.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="luxury-container mb-16">
          <h2 className="text-3xl font-serif font-light text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b524?w=400"
                  alt="Sofia Chen, Creative Director"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-serif font-light mb-1">Sofia Chen</h3>
              <p className="text-muted-foreground text-sm">Creative Director</p>
            </div>
            <div className="text-center">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
                  alt="Marcus Thompson, Head of Sustainability"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-serif font-light mb-1">Marcus Thompson</h3>
              <p className="text-muted-foreground text-sm">Head of Sustainability</p>
            </div>
            <div className="text-center">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
                  alt="Elena Rodriguez, Design Lead"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-serif font-light mb-1">Elena Rodriguez</h3>
              <p className="text-muted-foreground text-sm">Design Lead</p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-muted/30 py-16">
          <div className="luxury-container text-center">
            <h2 className="text-3xl font-serif font-light mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              "To create clothing that embodies the essence of modern luxury – pieces that are 
              beautifully made, responsibly sourced, and designed to be cherished for years to come. 
              We believe that true style is timeless, and true luxury is sustainable."
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
