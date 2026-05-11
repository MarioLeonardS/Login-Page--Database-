import { useState } from 'react'
import './index.css'

function App() {
  // 1. Inisialisasi State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // 2. Fungsi saat tombol login diklik


  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah halaman refresh otomatis
    
    // Di sini kita bisa melihat data yang sudah "diingat" oleh useState
    console.log("Data siap dikirim ke Backend:");
    console.log("Email:", email);
    console.log("Password:", password);
    const username = "Mario Leonard Salim";
    if (email === "mario.leonard01808@gmail.com") {
      alert(`Welcome Back, ${username}`);
    }
    else {
      alert(`Welcome Back, ${email}`)
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }


  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="p-8 bg-white shadow-md rounded-xl w-90"
      >
        <h2 className="mb-4 text-2xl font-bold text-center">LOGIN</h2>

        {/* Input Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded outline-none focus:ring-2 focus:ring-blue-400"
          value={email} // Hubungkan ke state email
          onChange={(e) => setEmail(e.target.value)} // Update state email
          required
        />

        {/* Input Password */}
        <input
          type={showPassword ? "text" : "password"} // Tipe berubah berdasarkan showPassword
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded outline-none focus:ring-2 focus:ring-blue-400"
          value={password} // Hubungkan ke state password
          onChange={(e) => setPassword(e.target.value)} // Update state password
          required
        />
        
        <input type="checkbox" name="showPass" id="showPass" onClick={toggleShowPassword} className="mb-4"/>
        <label htmlFor="showPass" className="pl-2 text-sm">
          Tampilkan Password
        </label>

        <button 
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
        >
          Masuk
        </button>
      </form>
    </div>
  );
}

export default App;