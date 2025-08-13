import { UseCart } from "../context/CartContext";

export default function SearchItems() {
  const { searchItem, setSearchItem } = UseCart();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <i class="fa-solid fa-magnifying-glass absolute left-2 top-3.5 text-gray-500"></i>
      <input
        type="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        placeholder="serach your favourite food or restaurant"
        className="p-2 rounded-lg border-1 focus:outline-none focus:ring-2 focus:ring-orange-500 w-[500px] pl-7 bg-white"
      />
      <button className="ml-3 bg-orange-400 rounded-lg p-2 hover:bg-orange-500">
        serach
      </button>
    </form>
  );
}
