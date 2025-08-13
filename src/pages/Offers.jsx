import offersData from "../data/offers";
import offerImages from "../data/offerImages";

export default function Offers() {
  return (
    <main className=" justify-cente">
      <div className="flex flex-col items-center bg-[url('/images/coverImage.jpg')] bg-cover  opacity-80 w-[98%] ml-4 mt-6 rounded-lg drop-shadow-md shadow-gray-900">
        <h1 className="text-2xl font-bold uppercase mt-8 text-white">
          food special offers
        </h1>
        <div className="w-full max-w-[800px] overflow-x-auto hide-scrollbar p-4">
          <div className="flex gap-4 mt-8 ">
            {offersData.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[200px] hover:scale-110 "
              >
                <OfferList item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="bg-white w-full flex flex-col items-center justify-center">
        <h1 className="mt-7 text-lg italic font-bold text-orange-800">
          Feeling hungry ? Start here
        </h1>
        <div className="grid grid-cols-10 gap-1 mt-5 bg-gray-100 w-full ">
          {offerImages.map((items) => (
            <div className="flex flex-col items-center justify-center w-[110px] h-[150px] bg-white rounded-4xl mb-5 mt-5 shadow-md shadow-gray-500 overflow-hidden ml-5">
              <img
                src={items.image}
                alt={items.id}
                className="w-[80px] h-[75px]  object-cover  rounded-4xl shadow-md shadow-gray-600"
              ></img>
              <div className="flex items-center justify-center mt-6 text-orange-600">
                {items.name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function OfferList({ item }) {
  return (
    <>
      <img
        src={item.image}
        alt="offers"
        className="w-[180px] h-[150px] rounded-lg object-cover transition-all duration-300  hover:shadow-md hover:shadow-gray-400"
      />
    </>
  );
}
