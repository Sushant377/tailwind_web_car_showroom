import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState("");

  async function onSubmit(data) {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5002/hook_form",
        data: data
      });
      console.log(response.data);
      setFormData(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <div className="mb-4 pr-7">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="First_Name">First Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-2 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="First_Name" type="text" placeholder="First Name" {...register("firstname", {
                required: "First name is required",
                maxLength: { message: "Can't enter more than 10", value: 10 },
                minLength: { message: "Can't enter less than 3", value: 3 }
              })} />
              <div className="text-red-500 text-xs italic">{errors?.firstname?.message}</div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Last_Name">Last Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-2 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Last_Name" type="text" placeholder="Last Name" {...register("lastname", {
                required: "Last name is required",
                maxLength: { message: "Can't enter more than 10", value: 10 },
                minLength: { message: "Can't enter less than 3", value: 3 }
              })} />
              <div className="text-red-500 text-xs italic">{errors?.lastname?.message}</div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="email" placeholder="Email" {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/,
                message: "Invalid email address"
              }
            })} />
            <div className="text-red-500 text-xs italic">{errors?.Email?.message}</div>
          </div>
          <div className="flex">
            <div className="mb-4 pr-7">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Gender">Gender</label>
              <select className="shadow appearance-none border rounded w-full py-2 px-2 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Gender" {...register("Gender", { required: "Gender is required" })}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              <div className="text-red-500 text-xs italic">{errors?.Gender?.message}</div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Age">Age</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-2 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Age" type="number" placeholder="Age" {...register("Age", {
                required: "Age is required",
                min: { message: "Age must be at least 18", value: 18 },
                max: { message: "Age must not exceed 150", value: 150 }
              })} />
              <div className="text-red-500 text-xs italic">{errors?.Age?.message}</div>
            </div>
          </div>
          <div><label >Message:</label></div>
          <textarea {...register("Message", { required: true })} />
          <div><input type="checkbox" placeholder="Terms" {...register("Terms", { required: true })} />
            <label > I accept the Terms and Conditions</label></div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </div>
        </form>

        {Object.keys(formData).length > 0 ? (
          <div>
            <h2>Form Data</h2>
           {Object.entries(formData).map(([key, value]) => (
          <p className=" flex p-2  justify-left " key={key}>
          <div>{key === "agree" ? "Agree to terms" : key}:</div>
          {typeof value === "boolean" ? (value ? "yes" : "no") : value}
        </p>
        ))}
          </div>
        ) : (
          <p>No form data submitted yet.</p>
        )}
      </div>
    </div>
  );
}
