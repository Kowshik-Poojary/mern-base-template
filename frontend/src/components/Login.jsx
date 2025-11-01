import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


export default function Auth() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegister) {
  // 🟢 Register API call
  const res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json();
  alert(data.message);
} else {
  // 🔵 Login API call
  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  alert(data.message);

  if (res.ok) {
    // ✅ Store login info in localStorage
    localStorage.setItem("user", JSON.stringify(data.user));

    // Redirect to home page
    navigate("/");
    window.location.reload(); // 🔄 reload to update Navbar login state
  }
}
  };

  return (
    <div className="flex justify-center items-center h-[80vh] bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-6 w-96"
      >
        <h2 className="text-2xl font-semibold mb-5 text-center text-gray-800">
          {isRegister ? "Create Account" : "Login"}
        </h2>

        {isRegister && (
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 w-full mb-3 rounded-md focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3 rounded-md focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3 rounded-md focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-md font-medium transition duration-200"
        >
          {isRegister ? "Register" : "Login"}
        </button>

        <p className="text-center mt-4 text-sm text-gray-600">
          {isRegister ? "Already have an account?" : "Don’t have an account?"}{" "}
          <span
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            {isRegister ? "Login" : "Register"}
          </span>
        </p>
      </form>
    </div>
  );
}
