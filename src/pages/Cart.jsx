import { useEffect, useState } from "react";
import { UseCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeItem, decreaseQuantity, increaseQuantity, totalPrice } =
    UseCart();

  const [discountPrice, setDiscountPrice] = useState(totalPrice);

  useEffect(() => {
    setDiscountPrice(totalPrice);
  }, [totalPrice]);

  function applyCoupon() {
    if (totalPrice >= 200) {
      setDiscountPrice(Math.max(totalPrice - 29, 0));
    }
  }

  const offerPrice = totalPrice + 959;
  const offerPercentage = Math.round(
    ((offerPrice - totalPrice) / offerPrice) * 100
  );

  if (cart.length === 0) {
    return (
      <div className="bg-[url('/images/cartCover.jpg')] bg-cover bg-center w-full h-screen flex items-center justify-center">
        <div className="bg-gray-300 p-20 rounded-lg">
          <h2 className="text-2xl font-bold">your cart is empty</h2>
          <h2 className="ml-3">add something to the cart</h2>
        </div>
      </div>
    );
  }

  // gap-3.5 grid grid-cols-4 justify-center p-2
  return (
    <>
      <div className="bg-[url('/images/cartCover.jpg')] bg-cover bg-center w-full min-h-screen  flex items-center justify-center">
        <div className="">
          <h1 className="mt-10 text-4xl font-bold text-white">Food Cart</h1>
          <p className="mt-4 text-lg text-white">
            {cart.length || 0} items in your cart
          </p>
          {cart.map((data) => (
            <div className="relative bg-white rounded-lg mt-2 w-[800px] flex justify-between mr-100">
              <div className="w-[300px] h-[170px] overflow-hidden">
                <img
                  src={data.image}
                  alt={data.resName}
                  className="w-full h-full object-cover rounded-md hover:opacity-80"
                />
              </div>
              <div className="ml-7 relative w-[200px] bg-amber-50 rounded-lg">
                <h1 className="text-lg font-bold mt-8">{data.resName}</h1>
                <h1 className="italic">{data.cuisine}</h1>
                <h1 className="mb-1">Rating: {data.rating}</h1>
                <h1 className="mb-1">Price: {data.price}</h1>
                <h1 className="mb-1">Quantity: {data.quantity}</h1>
                <h1 className="absolute right-1 bottom-5 bg-orange-500 p-2 rounded-lg text-white">
                  {data.eta}
                </h1>
              </div>

              <div className="flex flex-col  items-center justify-center w-[100] bg-amber-50 mr-5">
                <button
                  className="bg-amber-400 w-[100px] h-[35px] font-bold text-white rounded-md ml-2 mt-2 hover:bg-orange-400"
                  onClick={() => increaseQuantity(data.id)}
                >
                  + quantity
                </button>
                <button
                  className="bg-amber-400 w-[100px] h-[35px] font-bold text-white rounded-md ml-2 mt-2 hover:bg-orange-400"
                  onClick={() => decreaseQuantity(data.id)}
                >
                  - quantity
                </button>
                <button
                  className="bg-amber-400 w-[100px] h-[35px] font-bold text-white rounded-md ml-2 mt-2 hover:bg-orange-400"
                  onClick={() => removeItem(data.id)}
                >
                  remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-40 top-70  bg-white w-[250px]  rounded-lg">
        <h1 className=" mt-10  ml-6  text-black ">Total Price :-</h1>
        <h1 className="text-3xl font-bold ml-7">₹ {discountPrice}</h1>
        <h1 className=" ml-7 line-through">₹ {offerPrice}</h1>
        <h1 className="ml-7 font-bold">{offerPercentage} % off</h1>
        <button className="bg-orange-500  w-[220px] mt-7 ml-4 p-2 rounded-lg text-white ">
          Proceed To Pay
        </button>
        <h1 className="ml-7 mt-1 mb-3">You won't be charged yet</h1>
      </div>
      <div className="w-[250px] absolute right-40 top-135  border-amber-600 bg-yellow-400 mt-2 p-2 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-black">
        <button className=" font-bold" onClick={applyCoupon}>
          Apply Coupon
        </button>
      </div>
    </>
  );
}
