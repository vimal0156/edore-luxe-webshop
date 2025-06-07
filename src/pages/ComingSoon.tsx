
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Bell, Calendar, Star } from 'lucide-react';
import { useState } from 'react';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="luxury-container pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-6xl font-serif font-light mb-6">
              Something Beautiful
              <span className="block">Is Coming</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're crafting something special for you. A new collection that embodies the essence of minimal luxury and thoughtful design.
            </p>
          </div>

          {/* Coming Soon Image */}
          <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
              alt="Coming Soon Collection"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Star className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-serif font-light mb-2">Premium Materials</h3>
              <p className="text-muted-foreground text-sm">
                Carefully sourced fabrics that feel as good as they look
              </p>
            </div>
            <div className="text-center">
              <Calendar className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-serif font-light mb-2">Launching Soon</h3>
              <p className="text-muted-foreground text-sm">
                Expected release: Spring 2024
              </p>
            </div>
            <div className="text-center">
              <Bell className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-serif font-light mb-2">Early Access</h3>
              <p className="text-muted-foreground text-sm">
                Be the first to shop when we launch
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-serif font-light mb-4">Get Notified</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Join our list to be the first to know when our new collection drops.
                </p>
                <div>
                  <Label htmlFor="email" className="sr-only">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Notify Me When Available
                </Button>
                <p className="text-xs text-muted-foreground">
                  We'll only email you about this launch. No spam, ever.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-serif font-light mb-2">You're All Set!</h2>
                <p className="text-muted-foreground">
                  We'll notify you as soon as our new collection is available.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComingSoon;
