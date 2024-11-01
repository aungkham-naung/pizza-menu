import { Link } from "react-router-dom";
import RouteButton from "../../ui/RouteButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <RouteButton to="/menu">&larr; Back to menu</RouteButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
