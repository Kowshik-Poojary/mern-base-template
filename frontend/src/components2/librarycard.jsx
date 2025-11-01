export function BookCard({ title = "Clean Code", author = "Robert C. Martin", status = "Available" }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md border-l-4 border-green-500 h-[30vh] w-[40vh] m-8 text-center">
      <h3 className="font-semibold text-3xl">{title}</h3>
      <p className="text-gray-600 text-xl">by {author}</p>
      <span className={`inline-block mt-2 px-2 py-1 rounded text-sm ${status === "Available" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
        {status}
      </span>
    </div>
  );
}
