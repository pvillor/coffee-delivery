import { useContext } from "react";
import { OrdersContext } from "../contexts/order-context";

export function useCart() {
  return useContext(OrdersContext);
}
