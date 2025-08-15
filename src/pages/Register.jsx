import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../service/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const formData = { name, email, password };
      const { data } = await registerUser(formData);
      alert(data.message || "registration successfull");
      navigate("/login");
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input
          type="text"
          placeholder="name"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-400 text-white p-3 rounded-lg hover:bg-orange-600"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p
          className="mt-4 text-blue-500 cursor-pointer text-center"
          onClick={() => navigate("/login")}
        >
          Already have an account?{" "}
          <span className="text-orange-600">Login</span>
        </p>
      </form>
    </div>
  );
}
