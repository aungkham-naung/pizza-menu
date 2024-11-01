import DeleteItem from "../../ui/DeleteItem";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";
import { formatCurrency } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const checkItemInCart = useSelector(getCurrentQuantityById(pizzaId)); //passing id to check if the item exists in the cart and its quantity

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity id={pizzaId} currentQuantity={checkItemInCart} />
        <DeleteItem id={pizzaId}>Delete</DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
