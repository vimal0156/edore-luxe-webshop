
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Gift, Heart, Star } from 'lucide-react';
import { useState } from 'react';

const GiftCards = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const predefinedAmounts = [50, 100, 150, 200, 300];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Gift card purchase:', {
      amount: customAmount || selectedAmount,
      recipientEmail,
      senderName,
      message
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="luxury-container pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Gift className="mx-auto h-16 w-16 text-primary mb-4" />
            <h1 className="text-4xl lg:text-5xl font-serif font-light mb-4">Gift Cards</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Share the gift of minimal luxury. Perfect for birthdays, holidays, or any special occasion.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gift Card Preview */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 rounded-lg aspect-[3/2] flex flex-col justify-between">
                <div>
                  <img
                    src="/uploads/64fbcab8-3020-484e-9e3c-f48f1fa5594f.png"
                    alt="EDORE LUXE"
                    className="h-10 w-auto object-contain rounded-lg shadow border border-gray-200 bg-white/70 p-1 mx-auto"
                    style={{boxShadow:'0 2px 12px 0 rgba(0,0,0,0.06)', background: 'rgba(255,255,255,0.7)'}}
                  />
                </div>
                <div>
                  <p className="text-sm opacity-80 mb-1">Gift Card</p>
                  <p className="text-3xl font-serif font-light">
                    ${customAmount || selectedAmount}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-80">Created with care</p>
                  <p className="text-sm opacity-80">Stitched with love 🤍</p>
                </div>
              </div>
              
              {/* Features */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm">No expiration date</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-sm">Perfect for any occasion</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gift className="h-5 w-5 text-primary" />
                  <span className="text-sm">Delivered instantly via email</span>
                </div>
              </div>
            </div>

            {/* Purchase Form */}
            <div className="order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="text-base font-medium mb-4 block">Select Amount</Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`p-3 border rounded text-center transition-colors ${
                          selectedAmount === amount && !customAmount
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border hover:border-primary'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div>
                    <Label htmlFor="customAmount">Or enter custom amount</Label>
                    <Input
                      id="customAmount"
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(0);
                      }}
                      min="10"
                      max="1000"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="recipientEmail">Recipient Email</Label>
                  <Input
                    id="recipientEmail"
                    type="email"
                    placeholder="Enter recipient's email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="senderName">Your Name</Label>
                  <Input
                    id="senderName"
                    placeholder="Enter your name"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Personal Message (Optional)</Label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Write a personal message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Purchase Gift Card - ${customAmount || selectedAmount}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GiftCards;
