import { Minus, Plus, Trash2, X } from 'lucide-react';

export default function CartDrawer({ open, items, onClose, onUpdateQty, onRemove }) {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-neutral-200 p-4">
          <h3 className="text-lg font-semibold text-neutral-900">Your Cart</h3>
          <button onClick={onClose} aria-label="Close" className="rounded-md p-2 hover:bg-neutral-100">
            <X size={20} />
          </button>
        </div>
        <div className="flex h-[calc(100%-9rem)] flex-col overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="mt-6 text-center text-sm text-neutral-600">Your cart is empty. Start adding products!</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="mb-4 flex items-center gap-3 rounded-lg border border-neutral-200 p-3">
                <img src={item.image} alt={item.title} className="h-16 w-16 rounded-md object-cover" />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="line-clamp-1 text-sm font-semibold text-neutral-900">{item.title}</h4>
                      <p className="text-xs text-neutral-500">${item.price.toFixed(2)}</p>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="rounded-md p-1 text-neutral-500 hover:bg-neutral-100" aria-label="Remove">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="mt-2 inline-flex items-center rounded-full border border-neutral-200">
                    <button
                      onClick={() => onUpdateQty(item.id, Math.max(1, item.qty - 1))}
                      className="px-2 py-1 text-neutral-700 hover:bg-neutral-100"
                      aria-label="Decrease"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 text-sm font-medium">{item.qty}</span>
                    <button
                      onClick={() => onUpdateQty(item.id, item.qty + 1)}
                      className="px-2 py-1 text-neutral-700 hover:bg-neutral-100"
                      aria-label="Increase"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-neutral-200 p-4">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-neutral-600">Subtotal</span>
            <span className="font-semibold text-neutral-900">${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full rounded-full bg-neutral-900 px-4 py-3 text-sm font-semibold text-white hover:opacity-95">
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
}
