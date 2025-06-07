
import { useState } from 'react';
import { Eye, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const lookbookItems = [
  {
    id: 1,
    title: 'Minimal Monochrome',
    description: 'A study in black and white simplicity',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600',
    category: 'Editorial',
    season: 'Fall 2024',
  },
  {
    id: 2,
    title: 'Urban Essentials',
    description: 'Effortless pieces for city life',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600',
    category: 'Lifestyle',
    season: 'Fall 2024',
  },
  {
    id: 3,
    title: 'Structured Elegance',
    description: 'Tailored pieces that define modern luxury',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600',
    category: 'Editorial',
    season: 'Fall 2024',
  },
  {
    id: 4,
    title: 'Casual Refined',
    description: 'Elevated comfort for everyday moments',
    image: 'https://images.unsplash.com/photo-1481824429379-07aa5e1b9f4c?w=600',
    category: 'Casual',
    season: 'Fall 2024',
  },
  {
    id: 5,
    title: 'Oversized Comfort',
    description: 'The art of relaxed sophistication',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600',
    category: 'Lifestyle',
    season: 'Fall 2024',
  },
  {
    id: 6,
    title: 'Neutral Harmony',
    description: 'Earth tones meet modern silhouettes',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600',
    category: 'Editorial',
    season: 'Fall 2024',
  },
];

const LookbookGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Editorial', 'Lifestyle', 'Casual'];

  const filteredItems = selectedCategory === 'All' 
    ? lookbookItems 
    : lookbookItems.filter(item => item.category === selectedCategory);

  return (
    <div className="luxury-container">
      {/* Category Filter */}
      <div className="flex justify-center mb-12">
        <div className="flex gap-2 p-1 bg-muted rounded-lg">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-3">
                  <Button size="sm" variant="secondary">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="secondary">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-primary font-medium">{item.category}</span>
                <span className="text-xs text-muted-foreground">{item.season}</span>
              </div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Quote */}
      <div className="text-center mt-20 py-16 border-t border-border">
        <blockquote className="text-2xl lg:text-3xl font-serif font-light italic text-muted-foreground max-w-3xl mx-auto">
          "Fashion is about something that comes from within you. It's about expressing your individuality through thoughtful, minimal pieces."
        </blockquote>
        <cite className="block mt-6 text-sm">— EDORE LUXE Design Philosophy</cite>
      </div>
    </div>
  );
};

export default LookbookGallery;
