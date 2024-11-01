import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../../ui/DeleteItem";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();
  const checkItemInCart = useSelector(getCurrentQuantityById(id)); //passing id to check if the item exists in the cart
  const itemInCart = checkItemInCart > 0;

  const handleSubmit = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-meidum">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {itemInCart && (
            <div className="flex items-center gap-3">
              <UpdateItemQuantity id={id} currentQuantity={checkItemInCart} />
              <DeleteItem id={id}></DeleteItem>
            </div>
          )}

          {!itemInCart && !soldOut && (
            <Button type="small" onClick={handleSubmit}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
