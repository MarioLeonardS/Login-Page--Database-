import { useState } from 'react'
import './index.css'

function App() {
  // // 1. Inisialisasi State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // // 2. Fungsi saat tombol login diklik


  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah halaman refresh otomatis
    
  //   // Di sini kita bisa melihat data yang sudah "diingat" oleh useState
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
    <section className='flex'>
      <section className='p-8  w-1/2' id='loginPage'>
      {/* Form */}
        <form className="p-8" action={handleSubmit}>
          {/* Headline */}
          <div className='py-4 mb-8'>
            <h2 className='text-3xl font-bold mb-2'>Welcome Back !</h2>
            <p className='text-sm text-gray-700'>Enter to get unlimited access to feature & information</p>
          </div>
          {/* Email */}
          <div className='flex flex-col gap-2 my-4'>
            <label className='font-bold text-sm'>Email :</label>
            <input className='border border-gray-400 p-2 rounded-md text-sm shadow-sm outline-blue-700' 
            type="email" 
            name="email" 
            id="email" 
            placeholder='Enter Your Email Address'
            value={email} 
            onChange={(e)=> setEmail(e.target.value)} />
          </div>
          {/* Pass */}
          <div className='flex flex-col gap-2 my-4'>
            <label className='font-bold text-sm'>Password :</label>
            <input type={showPassword ? "text" : "password"} 
            className='border border-gray-400 p-2 rounded-md text-sm shadow-sm outline-blue-700' 
            name="email" 
            id="email" 
            value={password} 
            placeholder='Enter Your Password'
            onChange={(e)=> setPassword(e.target.value)} />
            {/* Show Password */}
            <div className='flex justify-between my-2'>
              <div className='flex flex-row gap-2 '>
                <input type="checkbox" name="checkboxShow" id="showPass" onClick={toggleShowPassword} />
                <label className='text-sm'>Show Password</label>
              </div>
              <a href="" className='text-sm text-blue-700 hover:underline active:text-violet-600'>Forgot your password ?</a>
            </div>
          </div>
          <button className='p-4 bg-blue-700 w-full text-white font-medium rounded-md shadow-sm hover:bg-blue-800 transition-colors cursor-pointer'>Log In</button>
        </form>
        {/* Divider */}
        <div>
          <div className="relative flex items-center py-4 px-8">
            {/* Garis Kiri */}
            <div className="grow border-t border-gray-400"></div>
            
            {/* Teks di Tengah */}
            <span className="shrink mx-4 text-gray-400 text-sm">Or, Login With</span>
            
            {/* Garis Kanan */}
            <div className="grow border-t border-gray-400"></div>
          </div>
        </div>
      </section>
        <section className='bg-black w-1/2'>
          
        </section>
    </section>
  );
}

export default App;