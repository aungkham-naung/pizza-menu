import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button";
import RouteButton from "./RouteButton";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <RouteButton to="-1">&larr; Go back</RouteButton>
    </div>
  );
}

export default Error;

{
  /* <button onClick={() => navigate(-1)}>&larr; Go back</button> */
}
