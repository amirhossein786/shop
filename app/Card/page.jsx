'use client'
import useCart from "@/store/useCart";

const Cart = () => {
  const { items, invoice, actions } = useCart();

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">سبد خرید</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">سبد خرید خالی است.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-2 border-b">
              <span>{item.name} (x{item.quantity})</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => actions.removeFromBasket(item)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  -
                </button>
                <button
                  onClick={() => actions.addToBasket(item)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <p>جمع کل: ${invoice.totalprice}</p>
      </div>
    </div>
  );
};

export default Cart;
