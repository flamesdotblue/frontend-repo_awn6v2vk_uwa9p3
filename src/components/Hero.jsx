import { ArrowRight, Star } from 'lucide-react';

export default function Hero({ onShopNow }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-indigo-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:py-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-3 py-1 text-xs font-semibold text-rose-600 shadow-sm">
            <Star size={14} className="fill-rose-500 text-rose-500" />
            New arrivals just dropped
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Elevate your style with modern essentials
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Discover curated collections crafted for comfort and designed to stand out. Free shipping on orders over $75.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onShopNow}
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            >
              Shop now
              <ArrowRight size={16} className="ml-2" />
            </button>
            <a href="#products" className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50">
              Explore collection
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1529720317453-c8da503f2050?q=80&w=1600&auto=format&fit=crop"
              alt="Featured collection"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
