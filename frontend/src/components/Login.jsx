import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const phoneRegex = /^[0-9]{9,12}$/;
  
  const handleLogin = async (e) => {
    e.preventDefault();
     // Validate phone number
     if (!phoneRegex.test(phone)) {
      setError('ទូរស័ព្ទគួរតែនៅចន្លោះពី ៩ ទៅ ១២ និង ដាក់បានតែលេខប៉ុណ្នោះ ​!');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:6700/api/auth/login', { phone, pass: password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('rol', response.data.rol);
      localStorage.setItem('names', response.data.names);
      localStorage.setItem('phone', response.data.phone);
      toast.success('Login successful!', {
        position: "top-right",
        autoClose: 3000,
      });
      window.location.href = "/";
    } catch (error) {
      toast.error('លេខទូរស័ព្ទឬលេខសម្ងាត់មិនត្រឹមត្រូវ!.', {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin} className='space-y-4'>
        <div>
          <label className='block mb-2 text-sm font-bold text-gray-700'>លេខទូរស័ព្ទ</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='bg-gray-50 border border-pink-600 focus:border-pink-600 cursor-pointer text-gray-900 text-sm rounded-lg block w-full p-2.5'
            placeholder="បញ្ចូលលេខទូរស័ព្ទ"
            required
          />
           {error && <p className='text-red-600 text-sm'>{error}</p>}
        </div>

        <div>
          <label className='block mb-2 text-gray-700 w-full text-sm font-bold'>ពាក្យសម្ងាត់</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-gray-50 border border-pink-600 text-gray-900 text-sm rounded-lg block w-full p-2.5'
            required
            placeholder="បញ្ចូលពាក្យសម្ងាត់"
          />
        </div>

        <div className="flex justify-between">
          <div className="flex items-start">
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">ចូលដោយប្រើលេខទូរសព្ទ</label>
          </div>
          <a href="#" className="text-sm text-pink-700 hover:underline">ភ្លេចពាក្យសម្ងាត់ ?</a>
        </div>

        <button
          type="submit"
          className="w-full text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          disabled={loading}
        >
          {loading ? 'ចំពោះចូល...' : 'ចូល'}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
