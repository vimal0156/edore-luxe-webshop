
import { useState } from 'react';
import { Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const SizeGuide = () => {
  const sizeChart = [
    { size: 'XS', chest: '32-34', waist: '26-28', hip: '34-36' },
    { size: 'S', chest: '34-36', waist: '28-30', hip: '36-38' },
    { size: 'M', chest: '36-38', waist: '30-32', hip: '38-40' },
    { size: 'L', chest: '38-40', waist: '32-34', hip: '40-42' },
    { size: 'XL', chest: '40-42', waist: '34-36', hip: '42-44' },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-sm text-primary">
          <Ruler className="h-4 w-4 mr-1" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Size Guide</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            All measurements are in inches. For the best fit, measure yourself and compare with the size chart below.
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Size</th>
                  <th className="text-left py-2">Chest</th>
                  <th className="text-left py-2">Waist</th>
                  <th className="text-left py-2">Hip</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((row) => (
                  <tr key={row.size} className="border-b border-border/50">
                    <td className="py-2 font-medium">{row.size}</td>
                    <td className="py-2">{row.chest}</td>
                    <td className="py-2">{row.waist}</td>
                    <td className="py-2">{row.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-xs text-muted-foreground">
            <p>• Chest: Measure around the fullest part of your chest</p>
            <p>• Waist: Measure around your natural waistline</p>
            <p>• Hip: Measure around the fullest part of your hips</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SizeGuide;
