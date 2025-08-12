import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const existingItem = order.find((orderItem) => orderItem.id === item.id);
    if (existingItem) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem: OrderItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: MenuItem["id"]) => {
    const updatedOrder = order.filter((item) => item.id !== id);
    setOrder(updatedOrder);
  };

  const placeOrder = () => {
    const orderDetails = order
      .map((item) => `${item.name} x${item.quantity}`)
      .join(", ");
    const subtotal = order.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const tipAmount = subtotal * tip;
    const totalAmount = subtotal + tipAmount;

    alert(
      `Pedido realizado: ${orderDetails}\nTotal a pagar: $${totalAmount.toFixed(
        2
      )}`
    );
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    addItem,
    removeItem,
    tip,
    setTip,
    placeOrder,
  };
}
