import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Signinhook() {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    
  async function onSubmit(data) {
  
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5002/prisma/signinhook",
        data: {  email:data.email,
            username:data.name,
             password:data.password },
      });
      console.log(response.data)
          navigate("/loginhook");
    } catch (err) {
      console.log(err);
      
    }
  }

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        {...register("name", { required: true })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.name && <p className="text-red-500 text-xs italic">Name is required.</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">Valid email is required.</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        {...register("password", { required: true, minLength: 8 })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.password && <p className="text-red-500 text-xs italic">Password is required and must be at least 8 characters.</p>}
                </div>
                
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signinhook;
