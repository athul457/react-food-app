import { UseCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeItem, decreaseQuantity, increaseQuantity, totalPrice } =
    UseCart();

  if (cart.length === 0) {
    return (
      <div>
        <h2>your cart is empty</h2>
        <h2>add something to the cart</h2>
      </div>
    );
  }

  return (
    <div>
      {cart.map((data) => (
        <div key={data.id}>
          <h1>{data.resName}</h1>
          <h1>{data.cuisine}</h1>
          <h1>{data.rating}</h1>
          <h1>{data.eta}</h1>
          <h1>{data.quantity}</h1>
          <img
            src={data.image}
            alt={data.resName}
            className="w-[200px] h-[170px]"
          />
          <button
            className="bg-amber-400 p-2 rounded-md ml-2 mt-2"
            onClick={() => increaseQuantity(data.id)}
          >
            +
          </button>
          <button
            className="bg-amber-400 p-2 rounded-md ml-2 mt-2"
            onClick={() => decreaseQuantity(data.id)}
          >
            -
          </button>
          <button
            className="bg-amber-400 p-2 rounded-md ml-2 mt-2"
            onClick={() => removeItem(data.id)}
          >
            remove
          </button>
        </div>
      ))}
      <div>totalPrice :- {totalPrice}</div>
    </div>
  );
}
