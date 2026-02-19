import { Minus, Plus, Trash2 } from 'lucide-react';


interface CartItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export function CartItem({ id, image, name, price, quantity, onUpdateQuantity, onRemove }: CartItemProps) {
  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdateQuantity(id, quantity - 1);
    }
  };

  const handleIncrease = () => {
    onUpdateQuantity(id, quantity + 1);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm flex items-center gap-6">
     
      
      <div className="flex-1">
        <h3 className="text-gray-900 mb-2">{name}</h3>
        <p className="text-blue-900">${price.toFixed(2)}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleDecrease}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus className="w-4 h-4 text-gray-600" />
        </button>
        <span className="w-8 text-center text-gray-900">{quantity}</span>
        <button
          onClick={handleIncrease}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <button
        onClick={() => onRemove(id)}
        className="w-10 h-10 rounded-full hover:bg-red-50 flex items-center justify-center transition-colors ml-4"
        aria-label="Remove item"
      >
        <Trash2 className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
}
