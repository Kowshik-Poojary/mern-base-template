export function DoctorCard({ name = "Dr. Snehal Mhatre", specialization = "Cardiologist", contact = "9876543210" }) {
  return (
    <div className="bg-white shadow-md p-5 rounded-lg text-center border-t-4 border-blue-500 h-[30vh] w-[40vh] m-8">
      <h2 className="font-semibold text-3xl">{name}</h2>
      <p className="text-gray-600 text-xl">{specialization}</p>
      <p className="text-gray-500 text-sm mt-2 text-xl">📞 {contact}</p><br/>
      <button className="mt-3 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Book Appointment</button>
    </div>
  );
}
