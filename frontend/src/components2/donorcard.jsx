export function DonorCard({ name = "Amit Sharma", blood = "B+", city = "Mumbai" }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border-t-4 border-red-500 h-[30vh] w-[40vh] m-8 text-center">
      <h3 className="font-bold text-3xl">{name}</h3>
      <p className="text-gray-600 text-xl">Blood Group: <span className="text-red-600 font-medium text-xl">{blood}</span></p>
      <p className="text-xl">Location: {city}</p>
      <button className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 ">Contact</button>
    </div>
  );
}
