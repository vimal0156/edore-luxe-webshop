
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
      <div className="luxury-container text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo Display */}
          <div className="mb-12">
            <img
              src="/uploads/64fbcab8-3020-484e-9e3c-f48f1fa5594f.png"
              alt="EDORE"
              className="h-24 lg:h-32 w-auto mx-auto object-contain mb-6"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; (e.target as HTMLImageElement).parentElement!.insertAdjacentHTML('beforeend', '<span style=\'font-size:2rem;font-weight:700;\'>EDORE</span>'); }}
            />
          </div>

          {/* Tagline */}
          <h1 className="text-4xl lg:text-6xl font-serif font-light text-foreground tracking-wide">
            Created with care
            <br />
            <span className="italic">and stitched with love</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground font-light tracking-wider">
            Minimal. Modern. Edoristic.
          </p>

          {/* Description */}
          <p className="text-lg text-luxury max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated collection of modern minimal fashion. 
            Each piece embodies the essence of contemporary elegance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="luxury-button group min-w-[200px]"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[200px] bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View Lookbook
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
