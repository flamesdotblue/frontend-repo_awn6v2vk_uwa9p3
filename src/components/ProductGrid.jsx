import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: 'p1',
    title: 'Minimal Leather Sneakers',
    price: 89.0,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
    description: 'Premium leather, cushioned sole, everyday comfort.',
    category: 'Footwear',
  },
  {
    id: 'p2',
    title: 'Classic Cotton Tee',
    price: 24.0,
    rating: 4.2,
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    description: 'Ultra-soft cotton with a tailored fit in multiple colors.',
    category: 'Apparel',
  },
  {
    id: 'p3',
    title: 'Everyday Backpack',
    price: 64.0,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1514477917009-389c76a86b68?q=80&w=1600&auto=format&fit=crop',
    description: 'Weather-resistant fabric with smart compartments.',
    category: 'Accessories',
  },
  {
    id: 'p4',
    title: 'Blue Light Glasses',
    price: 39.0,
    rating: 4.1,
    image:
      'https://images.unsplash.com/photo-1591078482161-42ce6c27bba3?q=80&w=1600&auto=format&fit=crop',
    description: 'Reduce eye strain and upgrade your desk setup.',
    category: 'Accessories',
  },
  {
    id: 'p5',
    title: 'Wool Blend Coat',
    price: 149.0,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1520975619016-87e46d3cc9b2?q=80&w=1600&auto=format&fit=crop',
    description: 'Warmth meets elegance for chilly days.',
    category: 'Apparel',
  },
  {
    id: 'p6',
    title: 'Wireless Earbuds',
    price: 99.0,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1518442070571-1f2664519a3f?q=80&w=1600&auto=format&fit=crop',
    description: 'Crystal clear sound with active noise cancellation.',
    category: 'Electronics',
  },
];

export default function ProductGrid({ onAddToCart }) {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Featured products</h2>
          <p className="text-sm text-neutral-600">Handpicked items loved by our community</p>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button className="rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-50">All</button>
          <button className="rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-50">Apparel</button>
          <button className="rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-50">Accessories</button>
          <button className="rounded-full border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-50">Electronics</button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sampleProducts.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
