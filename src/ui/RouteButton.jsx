import { Link, useNavigate } from "react-router-dom";

function RouteButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 ";
  if (to === "-1")
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default RouteButton;
