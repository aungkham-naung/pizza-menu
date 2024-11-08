import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdatePriority({ order }) {
  const fetcher = useFetcher();
  //update the status without reloading the page / revalidating the page
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdatePriority;

export async function action({ request, params }) {
  const data = { priority: true };
  console.log(data);
  await updateOrder(params.orderId, data);
  return null;
}
