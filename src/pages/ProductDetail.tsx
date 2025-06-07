
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingBag, Truck, RotateCcw, Shield, Share2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductImageGallery from '@/components/ProductImageGallery';
import SizeGuide from '@/components/SizeGuide';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock product data
  const product = {
    id: 1,
    name: 'Minimal Oversized Tee',
    price: 45,
    originalPrice: 60,
    description: 'A carefully crafted oversized tee that embodies modern minimalism. Made from premium organic cotton with a relaxed fit that drapes beautifully.',
    material: '100% Organic Cotton',
    care: 'Machine wash cold, hang dry',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Gray'],
    inStock: true,
    category: 'Tops',
  };

  const features = [
    { icon: Truck, title: 'Free Shipping', description: 'On orders over $75' },
    { icon: RotateCcw, title: 'Easy Returns', description: '30-day return policy' },
    { icon: Shield, title: 'Quality Guarantee', description: 'Premium materials only' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="luxury-container pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <ProductImageGallery images={product.images} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-serif font-light mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-medium">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-medium mb-3">Color: {selectedColor}</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded border-2 transition-all ${
                      selectedColor === color ? 'border-primary scale-110' : 'border-border'
                    }`}
                    style={{ 
                      backgroundColor: color.toLowerCase() === 'gray' ? '#6B7280' : color.toLowerCase()
                    }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Size: {selectedSize}</h3>
                <SizeGuide />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border rounded text-center transition-colors ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border rounded flex items-center justify-center hover:bg-accent"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border rounded flex items-center justify-center hover:bg-accent"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full"
                onClick={async () => {
                  try {
                    const token = localStorage.getItem('token');
                    if (!token) throw new Error('You must be logged in to add to cart');
                    if (!selectedSize || !selectedColor) throw new Error('Please select size and color');
                    const res = await fetch('/api/cart/add', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                      },
                      body: JSON.stringify({ productId: product.id, quantity }),
                    });
                    const data = await res.json();
                    if (!res.ok) throw new Error(data.message || 'Failed to add to cart');
                    alert('Added to cart!');
                  } catch (err: any) {
                    alert(err.message);
                  }
                }}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart - ${product.price * quantity}
              </Button>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="flex-1"
                >
                  <Heart className={`h-4 w-4 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                  {isFavorite ? 'Saved' : 'Save'}
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t pt-6 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-6 space-y-4">
              <div className="prose max-w-none">
                <h3>Product Details</h3>
                <p>Material: {product.material}</p>
                <p>Care Instructions: {product.care}</p>
                <p>This piece represents the essence of Edoristic design - minimal, modern, and crafted with care.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-6 space-y-4">
              <div className="prose max-w-none">
                <h3>Shipping Information</h3>
                <p>• Free standard shipping on orders over $75</p>
                <p>• Express shipping available</p>
                <p>• International shipping to select countries</p>
                <p>• Orders processed within 1-2 business days</p>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="text-center py-8">
                <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
                <Button variant="outline" className="mt-4">Write a Review</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
