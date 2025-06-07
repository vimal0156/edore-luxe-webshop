
import { useState } from 'react';
import { User, Package, Heart, Settings, MapPin, CreditCard } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Account = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
  });

  const orders = [
    {
      id: '#EDR-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 238,
      items: ['Minimal Cotton Tee', 'Essential Hoodie'],
    },
    {
      id: '#EDR-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 149,
      items: ['Classic Denim Jacket'],
    },
  ];

  const wishlistItems = [
    { id: 1, name: 'Oversized Blazer', price: 299, image: '/placeholder.svg' },
    { id: 2, name: 'Silk Camisole', price: 189, image: '/placeholder.svg' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="luxury-container pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-light mb-2">My Account</h1>
          <p className="text-muted-foreground">Manage your EDORE LUXE experience</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Addresses
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-xl font-serif">Personal Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={userInfo.firstName}
                        onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={userInfo.lastName}
                        onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                    />
                  </div>
                  <Button>Update Profile</Button>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-xl font-serif">Account Summary</h2>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Total Orders</span>
                      <span className="text-2xl font-bold">{orders.length}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Lifetime orders placed</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Total Spent</span>
                      <span className="text-2xl font-bold">${orders.reduce((sum, order) => sum + order.total, 0)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Lifetime value</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Wishlist Items</span>
                      <span className="text-2xl font-bold">{wishlistItems.length}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Items saved for later</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <h2 className="text-xl font-serif">Order History</h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">{order.id}</h3>
                      <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 rounded text-xs ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Items:</p>
                    <p>{order.items.join(', ')}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total: ${order.total}</span>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wishlist" className="space-y-6">
            <h2 className="text-xl font-serif">Wishlist</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="border rounded-lg overflow-hidden">
                  <div className="aspect-square bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">{item.name}</h3>
                    <p className="text-lg font-bold mb-3">${item.price}</p>
                    <div className="space-y-2">
                      <Button className="w-full">Add to Cart</Button>
                      <Button variant="outline" className="w-full">Remove</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="addresses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif">Saved Addresses</h2>
              <Button>Add New Address</Button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium">Home</h3>
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Default</span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>John Doe</p>
                  <p>123 Main Street</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">Delete</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-xl font-serif">Account Settings</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="font-medium mb-4">Password</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button>Update Password</Button>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-medium mb-4">Email Preferences</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Order updates and shipping notifications</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>New arrivals and exclusive offers</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Style tips and fashion inspiration</span>
                  </label>
                </div>
                <Button className="mt-4">Save Preferences</Button>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="font-medium mb-4 text-destructive">Danger Zone</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
