interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  onCheckout: () => void;
}

export function CartSummary({ subtotal, shipping, onCheckout }: CartSummaryProps) {
  const total = subtotal + shipping;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm sticky top-6">
      <h2 className="text-gray-900 mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Shipping</span>
          <span className="text-gray-900">${shipping.toFixed(2)}</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-blue-900">Total Price</span>
            <span className="text-blue-900">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button
        onClick={onCheckout}
        className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors"
      >
        Checkout
      </button>
    </div>
  );
}
