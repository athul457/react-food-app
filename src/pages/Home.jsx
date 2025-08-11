import restaurantData from "../data/restaurantData";

export default function Home() {
  const data = restaurantData;
  return (
    <main>
      <header>welcome to the app</header>
      <section className="grid grid-cols-5 gap-4">
        {data.map((data) => (
          <div key={data.id} className="border-1 p-2 mr-2 ml-2 rounded-lg">
            <List data={data} />
          </div>
        ))}
      </section>
    </main>
  );
}

function List({ data }) {
  return (
    <>
      <h1>{data.resName}</h1>
      <h1>{data.cuisine}</h1>
      <h1>{data.rating}</h1>
      <h1>{data.eta}</h1>
      <img
        src={data.image}
        alt={data.resName}
        className="w-[200px] h-[170px]"
      />
      <button className="mt-2 bg-yellow-400 p-2 rounded-lg">cart</button>
    </>
  );
}
