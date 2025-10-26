import { useState } from 'react';
import { ShoppingCart, Menu, X, Search, Heart, User } from 'lucide-react';

export default function Navbar({ onOpenCart }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <a href="#" className="font-bold tracking-tight text-neutral-900">
            NovaShop
          </a>
        </div>

        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Home</a>
          <a href="#products" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Shop</a>
          <a href="#" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Deals</a>
          <a href="#" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">Contact</a>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-neutral-200 px-3 py-1.5 md:flex">
            <Search size={16} className="mr-2 text-neutral-500" />
            <input
              className="w-48 bg-transparent text-sm outline-none placeholder:text-neutral-400"
              placeholder="Search products"
            />
          </div>
          <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 hover:bg-neutral-50">
            <Heart size={18} className="text-neutral-700" />
          </button>
          <button
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 hover:bg-neutral-50"
            onClick={onOpenCart}
            aria-label="Open cart"
          >
            <ShoppingCart size={18} className="text-neutral-700" />
          </button>
          <button className="hidden h-10 items-center gap-2 rounded-full border border-neutral-200 px-3 hover:bg-neutral-50 md:inline-flex">
            <User size={18} className="text-neutral-700" />
            <span className="text-sm font-medium">Sign in</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3">
            <div className="flex items-center rounded-lg border border-neutral-200 px-3 py-2">
              <Search size={16} className="mr-2 text-neutral-500" />
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
                placeholder="Search products"
              />
            </div>
            <a href="#" className="rounded-md px-2 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100">Home</a>
            <a href="#products" className="rounded-md px-2 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100">Shop</a>
            <a href="#" className="rounded-md px-2 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100">Deals</a>
            <a href="#" className="rounded-md px-2 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
