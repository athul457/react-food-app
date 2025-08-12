import { UseCart } from "../context/CartContext";
import restaurantData from "../data/restaurantData";
import Offers from "./Offers";

export default function Home() {
  const data = restaurantData;
  const { searchItem } = UseCart();

  const filterData = data.filter((item) =>
    item.resName.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <main>
      <Offers />

      <section className="grid grid-cols-5 gap-4 mt-10 bg-white">
        {filterData.map((data) => (
          <div
            key={data.id}
            className="mr-2 ml-2 rounded-lg shadow-md shadow-gray-600"
          >
            <List data={data} />
          </div>
        ))}
      </section>
    </main>
  );
}

function List({ data }) {
  const { onAddToCart, cart } = UseCart();
  const isInCart = cart.some((item) => item.id === data.id);
  return (
    <div className="relative">
      <div className="h-[170px] overflow-hidden">
        <img
          src={data.image}
          alt={data.resName}
          className="w-full h-full object-cover rounded-md "
        />
      </div>
      <div className="ml-7 relative">
        <h1 className="text-lg font-bold">{data.resName}</h1>
        <h1 className="italic">{data.cuisine}</h1>
        <h1>Rating: {data.rating}</h1>
        <h1 className="absolute right-8 bottom-3 bg-orange-500 p-2 rounded-lg text-white">
          {data.eta}
        </h1>
        <h1>{data.price}</h1>
      </div>

      <button
        className="mt-2 bg-yellow-400 p-2 rounded-lg absolute right-4.5 top-1 hover:text-lg hover:bg-amber-300"
        onClick={() => onAddToCart(data)}
      >
        <i
          className={`fa-regular fa-heart ${isInCart ? "text-red-600" : "text-black"}`}
        ></i>
      </button>
    </div>
  );
}
