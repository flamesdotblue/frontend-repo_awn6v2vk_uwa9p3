import { Star, Heart } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-sm backdrop-blur hover:bg-white">
          <Heart size={18} />
        </button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="line-clamp-1 font-semibold text-neutral-900">{product.title}</h3>
          <span className="text-sm font-semibold text-neutral-900">${product.price.toFixed(2)}</span>
        </div>
        <p className="mb-3 line-clamp-2 text-sm text-neutral-600">{product.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className={i < Math.round(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'} />
            ))}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white hover:opacity-90"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
