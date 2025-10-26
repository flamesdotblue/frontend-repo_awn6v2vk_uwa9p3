import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const handleUpdateQty = (id, qty) => {
    setCartItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  const itemCount = useMemo(() => cartItems.reduce((s, i) => s + i.qty, 0), [cartItems]);

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <Hero onShopNow={scrollToProducts} />
      <ProductGrid onAddToCart={handleAddToCart} />

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-neutral-600 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} NovaShop. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
            <a href="#" className="hover:text-neutral-900">Support</a>
          </div>
        </div>
      </footer>

      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemove}
      />

      {/* Floating cart button for small screens */}
      {itemCount > 0 && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-lg md:hidden"
        >
          View cart ({itemCount})
        </button>
      )}
    </div>
  );
}

export default App;
