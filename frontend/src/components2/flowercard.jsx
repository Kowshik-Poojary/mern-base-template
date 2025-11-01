import Rose from "../assets/rose.png"
export function FlowerCard({ name = "Red Roses", price = "₹299", img = Rose }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden h-[30vh] w-[40vh] m-8 text-center flex items-center">
      <img src={img} alt={name} className="h-40 object-cover" />
      <div className="p-3 text-center">
        <h3 className="font-semibold text-3xl">{name}</h3>
        <p className="text-gray-500 mb-2 text-xl">{price}</p>
        <button className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600">Buy Now</button>
      </div>
    </div>
  );
}
