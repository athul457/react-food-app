import { UseCart } from "../context/CartContext";
import Offers from "./Offers";
import { searchData, restaurantData } from "../service/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setdata] = useState([]);
  const { searchItem } = UseCart();
  useEffect(() => {
    if (searchItem.trim() === "") {
      restaurantData()
        .then((res) => setdata(res.data.restaurant))
        .catch((err) => console.error(err));
    } else {
      searchData(searchItem)
        .then((res) => setdata(res.data.restaurant))
        .catch((err) => console.log(err));
    }
  }, [searchItem]);

  return (
    <main>
      <Offers />

      <section className="grid grid-cols-5 gap-4 mt-10 bg-white">
        {data.map((data) => (
          <div
            key={data._id}
            className="mr-2 ml-2 rounded-lg shadow-md shadow-orange-600"
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
  const isInCart = cart.some((item) => item._id === data._id);
  return (
    <div className="relative">
      <div className="h-[170px] overflow-hidden">
        <img
          src={data.image}
          alt={data.resName}
          className="w-full h-full object-cover rounded-md hover:opacity-80"
        />
      </div>
      <div className="ml-7 relative">
        <h1 className="text-lg font-bold">{data.resName}</h1>
        <h1 className="italic">{data.cuisine}</h1>
        <h1 className="mb-1">Rating: {data.rating}</h1>
        <h1 className="absolute right-5 bottom-3 bg-orange-500 p-2 rounded-lg text-white">
          {data.eta}
        </h1>
      </div>

      <button
        className="mt-2 bg-yellow-400 p-2 rounded-lg absolute right-4.5 top-1 hover:text-lg hover:bg-amber-300"
        onClick={() => onAddToCart(data)}
      >
        <i
          class={`fa-solid fa-heart ${isInCart ? "text-red-600" : "text-white"}`}
        ></i>
      </button>
    </div>
  );
}
