export function TrainSearch() {
  return (
    <div className="bg-white shadow-lg p-6 rounded-xl w-full max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Search Trains</h2>
      <input className="border p-2 w-full mb-3 rounded-md" placeholder="From Station" />
      <input className="border p-2 w-full mb-3 rounded-md" placeholder="To Station" />
      <input type="date" className="border p-2 w-full mb-3 rounded-md" />
      <button className="bg-blue-600 w-full py-2 text-white rounded-md hover:bg-blue-700">Search</button>
    </div>
  );
}
