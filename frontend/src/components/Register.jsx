// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';


// const Register = () => {
//   const [names, setNames] = useState('');
//   const [phone, setPhone] = useState('');
//   const [pass, setPass] = useState('');
//   const [rol, setRol] = useState('user');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:6700/api/auth/register', { names, phone, pass, rol });
//       console.log('Registration successful:', response.data);
//       window.location.href = "/";
//       toast.success('Registration successful!', {
//         position: "top-right",
//         autoClose: 3000,
//       });
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         // Check if the error response has a message
//         toast.error(error.response.data.message || 'លេខទូរស័ព្ទនេះត្រូវបានប្រើរួចហើយ!', {
//           position: "top-right",
//           autoClose: 3000,
//         });
//       } else {
//         toast.error('Registration failed. Please try again later.', {
//           position: "top-right",
//           autoClose: 3000,
//         });
//       }
//     }
//   };

//   return (
//     <div className=''>
//       <form onSubmit={handleRegister}>
//         <div className='mb-5'>
//           <label className='block mb-2 text-sm font-bold text-gray-900'>ឈ្មោះ</label>
//           <input
//             type="text"
//             value={names}
//             onChange={(e) => setNames(e.target.value)}
//             className='bg-gray-50 border  border-pink-600 text-gray-900 text-sm rounded-lg block w-full p-2.5'
//             placeholder="បញ្ចូលឈ្មោះ"
//             required
//           />
//         </div>
//         <div className='mb-5'>
//           <label className='block mb-2 w-full text-sm font-bold text-gray-900'>លេខទូរស័ព្ទ</label>
//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className='bg-gray-50 border  border-pink-600 text-gray-900 text-sm rounded-lg block w-full p-2.5'
//             required
//             placeholder="បញ្ចូលលេខទូរស័ព្ទ"
//           />
//         </div>



//         <div className=''>
//           <label className='block mb-2 text-gray-700 w-full text-sm font-bold'>បង្កើតពាក្យសម្ងាត់ផ្ទាល់ខ្លួនរបស់អ្នក</label>
//           <input
//             type="password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//             className='bg-gray-50 border  border-pink-600 text-gray-900 text-sm rounded-lg block w-full p-2.5'
//             required
//             placeholder="បង្កើតពាក្យសម្ងាត់ផ្ទាល់ខ្លួនរបស់អ្នក"
//           />
//         </div>
//         <div className='mb-5'>
//           <label className='block mb-2 w-full text-sm font-bold text-gray-900'>User Type</label>
//           <select
//             value={rol}
//             onChange={(e) => setRol(e.target.value)}
//             className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
//           >
//             <option value="manager">Manager</option>
//             <option value="admin">Admin</option>
//             <option value="sale">Sale</option>
//             <option value="user">User</option>
//           </select>
//         </div>

//         <button type="submit" class="w-full text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ចូល</button>

//       </form>
//     </div>
//   );
// };

// export default Register;







import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [names, setNames] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [rol, setRol] = useState('user');
  const [error, setError] = useState('');

  const phoneRegex = /^[0-9]{9,12}$/;

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (!phoneRegex.test(phone)) {
      setError('ទូរស័ព្ទគួរតែនៅចន្លោះពី ៩ ទៅ ១២ និង ដាក់បានតែលេខប៉ុណ្នោះ ​!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:6700/api/auth/register', { names, phone, pass, rol });
      console.log('Registration successful:', response.data);
      toast.success('Registration successful!', {
        position: "top-right",
        autoClose: 3000,
      });
      window.location.href = "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message || 'លេខទូរស័ព្ទឬលេខសម្ងាត់មិនត្រឹមត្រូវ!', {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.error('Registration failed. Please try again later.', {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-bold text-gray-900'>ឈ្មោះ</label>
          <input
            type="text"
            value={names}
            onChange={(e) => setNames(e.target.value)}
            className='bg-gray-50 border border-pink-600 text-gray-900 text-sm rounded-lg block w-full p-2.5'
            placeholder="បញ្ចូលឈ្មោះ"
            required
          />
        </div>

        <div className='mb-5'>
          <label className='block mb-2 w-full text-sm font-bold text-gray-900'>លេខទូរស័ព្ទ</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='bg-gray-50 border border-pink-600 text-gray-900 text-sm rounded-lg block w-full p-2.5'
            required
            placeholder="បញ្ចូលលេខទូរស័ព្ទ"
          />
          {error && <p className='text-red-600 text-sm'>{error}</p>}
        </div>

        <div className=''>
          <label className='block mb-2 text-gray-700 w-full text-sm font-bold'>បង្កើតពាក្យសម្ងាត់ផ្ទាល់ខ្លួនរបស់អ្នក</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className='bg-gray-50 border border-pink-600 text-gray-900 text-sm rounded-lg block w-full p-2.5'
            required
            placeholder="បង្កើតពាក្យសម្ងាត់ផ្ទាល់ខ្លួនរបស់អ្នក"
          />
        </div>
        
        <div className='mb-5'>
          <label className='block mb-2 w-full text-sm font-bold text-gray-900'>User Type</label>
          <select
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
          >
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
            <option value="sale">Sale</option>
            <option value="user">User</option>
          </select>
        </div>

        <button type="submit" className="w-full text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ចូល</button>
      </form>
    </div>
  );
};

export default Register;
