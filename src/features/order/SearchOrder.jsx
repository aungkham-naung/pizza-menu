import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    navigate(`/order/${input}`);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        <input
          type="text"
          placeholder="Search your order"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-28 rounded-full bg-yellow-100 px-4 py-4 text-sm transition-all placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        />
      </label>
    </form>
  );
}

export default SearchOrder;
