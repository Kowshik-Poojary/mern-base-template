export function ResumePreview({ name = "Neal Mudaliar", role = "Software Engineer", skills = ["React", "Node", "SQL"] }) {
  return (
    <div className="bg-white p-6 shadow-xl rounded-lg w-full max-w-md mx-auto h-[30vh] w-[40vh] m-8 text-center">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-gray-600 mb-3 text-xl">{role}</p>
      <h3 className="font-semibold mb-2">Skills:</h3>
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">{skill}</span>
        ))}
      </div>
    </div>
  );
}
