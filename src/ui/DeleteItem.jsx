import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../features/cart/cartSlice";

function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button type="small" onClick={() => dispatch(deleteItem(id))}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
