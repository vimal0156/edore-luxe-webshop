
import { AlertTriangle, Clock } from 'lucide-react';

interface StockIndicatorProps {
  stock: number;
  lowStockThreshold?: number;
}

const StockIndicator = ({ stock, lowStockThreshold = 5 }: StockIndicatorProps) => {
  if (stock === 0) {
    return (
      <div className="flex items-center gap-2 text-destructive text-sm">
        <AlertTriangle className="h-4 w-4" />
        <span>Out of Stock</span>
      </div>
    );
  }

  if (stock <= lowStockThreshold) {
    return (
      <div className="flex items-center gap-2 text-orange-600 text-sm">
        <Clock className="h-4 w-4" />
        <span>Only {stock} left in stock</span>
      </div>
    );
  }

  return (
    <div className="text-green-600 text-sm">
      <span>In Stock</span>
    </div>
  );
};

export default StockIndicator;
