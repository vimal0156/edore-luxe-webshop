
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Minimal Dressing: How Less Becomes More',
      excerpt: 'Discover the philosophy behind minimal fashion and how to build a capsule wardrobe that embodies the Edoristic aesthetic.',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800',
      author: 'EDORE LUXE Editorial',
      date: '2024-01-15',
      category: 'Style Guide'
    },
    {
      id: 2,
      title: 'Behind the Seams: Our Design Process',
      excerpt: 'Take a glimpse into our studio and discover how each EDORE LUXE piece is crafted with intention and care.',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
      author: 'Design Team',
      date: '2024-01-10',
      category: 'Behind the Brand'
    },
    {
      id: 3,
      title: 'Sustainable Fashion: Quality Over Quantity',
      excerpt: 'Learn about our commitment to sustainable practices and why investing in quality pieces matters for your wardrobe and the planet.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      author: 'Sustainability Team',
      date: '2024-01-05',
      category: 'Sustainability'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="luxury-container text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-serif font-light mb-6">Journal</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Insights, stories, and inspiration from the world of EDORE LUXE. 
            Discover the art of minimal living and thoughtful design.
          </p>
        </section>

        {/* Featured Post */}
        <section className="luxury-container mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-medium text-primary mb-2 block">
                {blogPosts[0].category}
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {blogPosts[0].author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(blogPosts[0].date).toLocaleDateString()}
                </div>
              </div>
              <Button>Read More</Button>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="luxury-container">
          <h2 className="text-2xl font-serif font-light mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-primary mb-2 block">
                  {post.category}
                </span>
                <h3 className="text-xl font-serif font-light mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
