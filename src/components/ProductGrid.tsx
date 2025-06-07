
import { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ProductGridProps {
  viewMode: 'grid' | 'list';
  searchTerm: string;
}

const mockProducts = [
  {
    id: 1,
    name: 'Minimal Oversized Tee',
    price: 45,
    originalPrice: 60,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gray'],
    isNew: true,
  },
  {
    id: 2,
    name: 'Modern Tailored Pants',
    price: 85,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500',
    category: 'Bottoms',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Beige'],
  },
  {
    id: 3,
    name: 'Structured Blazer',
    price: 120,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
    category: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
  },
  {
    id: 4,
    name: 'Essential Knit Sweater',
    price: 75,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500',
    category: 'Tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Black', 'Gray'],
  },
];

const ProductGrid = ({ viewMode, searchTerm }: ProductGridProps) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  if (viewMode === 'list') {
    return (
      <div className="space-y-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex gap-6 border-b border-border pb-6">
            <Link to={`/product/${product.id}`} className="flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-40 object-cover rounded-lg"
              />
            </Link>
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-medium hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleFavorite(product.id)}
                  className="p-2"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      favorites.includes(product.id) ? 'fill-current text-red-500' : ''
                    }`}
                  />
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.isNew && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                    New
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Sizes: {product.sizes.join(', ')}</span>
                <span>Colors: {product.colors.join(', ')}</span>
              </div>
              <Button
  size="sm"
  className="mt-2"
  onClick={async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('You must be logged in to add to cart');
      const res = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to add to cart');
      alert('Added to cart!');
    } catch (err: any) {
      alert(err.message);
    }
  }}
>
  <ShoppingBag className="h-4 w-4 mr-2" />
  Add to Cart
</Button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <div key={product.id} className="group">
          <div className="relative overflow-hidden rounded-lg mb-4">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <Heart
                className={`h-4 w-4 ${
                  favorites.includes(product.id) ? 'fill-current text-red-500' : ''
                }`}
              />
            </Button>
            {product.isNew && (
              <span className="absolute top-3 left-3 text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                New
              </span>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
  size="sm"
  className="w-full"
  onClick={async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('You must be logged in to add to cart');
      const res = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to add to cart');
      alert('Added to cart!');
    } catch (err: any) {
      alert(err.message);
    }
  }}
>
  <ShoppingBag className="h-4 w-4 mr-2" />
  Quick Add
</Button>
            </div>
          </div>
          
          <div className="space-y-1">
            <Link to={`/product/${product.id}`}>
              <h3 className="font-medium hover:text-primary transition-colors">
                {product.name}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <div className="flex items-center gap-2">
              <span className="font-medium">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
