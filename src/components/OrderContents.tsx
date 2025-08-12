import { formatCurrency } from "../helpers";
import type { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem['id']) => void;
};

export default function OrderContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <div className="space-y-5">
      <h2 className="text-4xl font-bold mb-4">Consumo</h2>
      <div className="space-y-3">
        {order.length === 0 ? (
          <p className="text-gray-500">No hay productos en el pedido</p>
        ) : (
          order.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-t border-gray-200 py-2 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} -{" "}
                  {formatCurrency(item.quantity * item.price)}
                </p>
              </div>
              <button
                className="bg-red-600 h-7 w-7 rounded-full text-white font-bold cursor-pointer"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
