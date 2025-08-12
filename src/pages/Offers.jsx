import offersData from "../data/offers";
export default function Offers() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <main className="flex flex-col items-center justify-center bg-orange-500">
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
      <section className="bg-white w-full flex flex-col items-center justify-center">
        <h1 className="mt-7 text-lg italic font-bold text-orange-800">
          Feeling hungry ? Start here
        </h1>
        <div className="grid grid-cols-10 gap-8 mt-5 bg-gray-100 w-full">
          {array.map((items) => (
            <div className="flex items-center justify-center w-[110px] h-[150px] bg-white rounded-4xl mb-1 mt-1 shadow-md shadow-orange-500">
              {items}
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
