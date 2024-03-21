import axios from 'axios';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';

function LoginHook() {
    const cookie = Cookies.get("token");
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    async function formsubmission(data) {
        try {
            const response = await axios.post("http://localhost:5002/prisma/loginhook", {
                email: data.email,
                password: data.password
            });
            console.log(response);
            Cookies.set("token", response.data.token, { path: "/" });
            navigate("/admin");
        } catch (err) {
            console.log(err.response.data);
        }
    }

    return (
        <> 
            {!cookie ? (
                <div className="flex items-center justify-center h-screen">
                    <form onSubmit={handleSubmit(formsubmission)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                type="text"
                                id="email"
                                placeholder="Email"
                                {...register("email", { required: true, maxLength: 25, minLength: 2 })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs italic">Email is required and must be between 2 and 25 characters.</p>}
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                {...register("password", { required: true, maxLength: 25, minLength: 4 })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-xs italic">Password is required and must be between 4 and 25 characters.</p>}
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <Navigate to="/admin" />
            )}
            
        </>  
    );
}

export default LoginHook;
