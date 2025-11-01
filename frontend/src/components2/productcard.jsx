import tshirt from "../assets/tshirt.png"

export function ProductCard({ name = "T-Shirt", price = "₹499", image = tshirt }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition h-[50vh] w-[40vh] m-8 text-center ">
      <img src={image} alt={name} className="rounded-md mb-3 flex justify-center mx-auto" />
      <h3 className="font-semibold text-3xl">{name}</h3>
      <p className="text-gray-500 mb-2 text-xl">{price}</p>
      <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">Add to Cart</button>
    </div>
  );
}
