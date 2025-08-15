import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../service/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = { email, password };
      const { data } = await loginUser(formData);
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      alert(data.message || "login successfull");
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-[url('/images/login3.jpg')] bg-cover bg-center">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-orange-400 text-white p-3 rounded-lg hover:bg-orange-600"
        >
          {loading ? "Loging..." : "Login"}
        </button>

        <p
          className="mt-4 text-blue-500 cursor-pointer text-center"
          onClick={() => navigate("/register")}
        >
          Don’t have an account?{" "}
          <span className="text-orange-600">Register</span>
        </p>
      </form>
    </div>
  );
}
