export function StudentCard({ name = "Kowshik Poojary", roll = "IT2334", course = "B.E. IT" }) {
  return (
    <div className="bg-white p-4 shadow rounded-lg h-[30vh] w-[40vh] m-8 text-center">
      <h2 className="font-semibold text-3xl">{name}</h2>
      <p>Roll No: {roll}</p>
      <p>Course: {course}</p>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">View Details</button>
    </div>
  );
}
