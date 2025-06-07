
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-8">
              The Edoristic Philosophy
            </h2>
            <div className="space-y-6 text-luxury">
              <p className="text-lg leading-relaxed">
                EDORE LUXE represents more than just clothing—it embodies a philosophy 
                of mindful design and conscious creation. Every piece in our collection 
                is crafted with meticulous attention to detail and an unwavering 
                commitment to quality.
              </p>
              <p className="text-lg leading-relaxed">
                Our "Edoristic" approach means embracing the beauty of simplicity, 
                the power of minimalism, and the elegance that comes from perfect 
                proportions and timeless silhouettes.
              </p>
              <p className="text-lg leading-relaxed">
                Created with care and stitched with love, each garment tells a story 
                of modern craftsmanship meeting contemporary style. We believe in 
                creating pieces that transcend trends and become cherished parts of 
                your wardrobe for years to come.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] bg-gradient-to-br from-muted to-background overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=750&fit=crop&crop=center"
                alt="EDORE LUXE Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Quote */}
            <div className="absolute -bottom-8 -left-8 bg-background p-8 shadow-lg max-w-sm">
              <blockquote className="text-sm italic text-luxury">
                "Fashion is not about wearing the latest trends, 
                but about expressing your authentic self through 
                timeless, well-crafted pieces."
              </blockquote>
              <cite className="text-xs font-medium mt-4 block">
                — EDORE LUXE Design Philosophy
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
