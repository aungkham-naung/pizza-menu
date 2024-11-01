import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { totalCartQuantity, totalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(totalCartQuantity);
  const totalPrice = useSelector(totalCartPrice);

  return (
    <div className="py-uppercase flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
