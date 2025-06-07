
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Lookbook from "./pages/Lookbook";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCanceled from "./pages/PaymentCanceled";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Blog from "./pages/Blog";
import GiftCards from "./pages/GiftCards";
import ComingSoon from "./pages/ComingSoon";
import Terms from "./pages/Terms";
import Returns from "./pages/Returns";
import Shipping from "./pages/Shipping";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import OrderTracking from "./pages/OrderTracking";
import SearchResults from "./pages/SearchResults";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";
import AddressBook from "./pages/AddressBook";
import Newsletter from "./pages/Newsletter";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import StoreLocator from "./pages/StoreLocator";
import HelpCenter from "./pages/HelpCenter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-canceled" element={<PaymentCanceled />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/track-order" element={<OrderTracking />} />
          <Route path="/search" element={<SearchResults />} />
<Route path="/category/:name" element={<Category />} />
<Route path="/profile" element={<Profile />} />
<Route path="/order-history" element={<OrderHistory />} />
<Route path="/address-book" element={<AddressBook />} />
<Route path="/newsletter" element={<Newsletter />} />
<Route path="/careers" element={<Careers />} />
<Route path="/press" element={<Press />} />
<Route path="/store-locator" element={<StoreLocator />} />
<Route path="/help" element={<HelpCenter />} />
{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
