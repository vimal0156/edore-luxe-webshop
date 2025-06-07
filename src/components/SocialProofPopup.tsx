
import { useState, useEffect } from 'react';
import { X, MapPin } from 'lucide-react';

interface Purchase {
  customerLocation: string;
  productName: string;
  timeAgo: string;
}

const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);

  const mockPurchases: Purchase[] = [
    { customerLocation: 'New York', productName: 'Minimal Cotton Tee', timeAgo: '2 minutes ago' },
    { customerLocation: 'London', productName: 'Essential Hoodie', timeAgo: '5 minutes ago' },
    { customerLocation: 'Tokyo', productName: 'Oversized Blazer', timeAgo: '8 minutes ago' },
    { customerLocation: 'Paris', productName: 'Silk Slip Dress', timeAgo: '12 minutes ago' },
    { customerLocation: 'Los Angeles', productName: 'Cashmere Sweater', timeAgo: '15 minutes ago' },
  ];

  useEffect(() => {
    const showRandomPurchase = () => {
      const randomPurchase = mockPurchases[Math.floor(Math.random() * mockPurchases.length)];
      setCurrentPurchase(randomPurchase);
      setIsVisible(true);
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first popup after 10 seconds
    const initialTimer = setTimeout(showRandomPurchase, 10000);
    
    // Then show popup every 30-60 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 30000 + 30000; // 30-60 seconds
      setTimeout(showRandomPurchase, randomDelay);
    }, 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible || !currentPurchase) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm animate-fade-in">
      <div className="bg-background border border-border rounded-lg shadow-lg p-4">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse" />
          <div className="flex-1">
            <p className="text-sm font-medium mb-1">Recent Purchase</p>
            <p className="text-xs text-muted-foreground mb-1">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Someone from {currentPurchase.customerLocation}
              </span>
            </p>
            <p className="text-sm">
              Purchased <span className="font-medium">{currentPurchase.productName}</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {currentPurchase.timeAgo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofPopup;
