import { useDispatch } from "react-redux";
import Button from "./Button";
import { decreaseQuantity, increaseQuantity } from "../features/cart/cartSlice";

function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(id))}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
