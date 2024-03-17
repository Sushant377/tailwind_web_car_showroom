import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Testingform() {
  // To get data from backend
  const [prismaData, setPrismaData] = useState([]);
  const [error, setError] = useState(null); // State to store error messages
  const [updateMessage, setUpdateMessage] = useState(""); // State to store update message
  const { register, handleSubmit, setValue, watch , formState:{errors} } = useForm(); // useForm hook
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  // Function to fetch data from backend
  async function prismafn() {
    try {
      const response = await axios.get("http://localhost:5002/prisma");
      setPrismaData(response.data);
    } catch (err) {
      setError(err.message); // Set error message on failure
      console.log(err.message);
    }
  }

  useEffect(() => {
    prismafn();
  }, []);

  // Function to handle user deletion
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5002/prisma/${userId}`);
      prismafn(); // Refresh data after deletion
      setError(null); // Clear error state
      handleUpdate(); 
    } catch (err) {
      console.log(err.response.data);
      setError(err.message);
    }
  };
  

  // Function to handle user selection
  const handleSelect = (user) => {
    setValue("id", user.id); // Fill the form with selected user's ID
    setValue("name", user.name); // Fill the form with selected user's name
    setValue("email", user.email); // Fill the form with selected user's email
  };

  // Function to handle user update
  const handleUpdate = async () => {
    try {
      const id = watch("id"); // Get the user ID from the form
      const response = await axios.put(
        `http://localhost:5002/prisma/update/${id}`,
        {
          name: watch("name"),
          email: watch("email"),
        }
      );

      if (response && response.data) {
        prismafn(); // Refresh data after update
        setError(null); // Clear error state
        setUpdateMessage("Data updated successfully."); // Set update message
      } else {
        setError("Failed to update data."); // Set error message
      }
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data); // Set error message returned by backend
    }
  };

  // Form submission handler
  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5002/prisma", {
        name: data.name,
        email: data.email,
      });
      prismafn();
      setError(null); // Clear error state
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data); // Set error message returned by backend
    }
  };

  //update using another way which changes submit button to update on clicking select
  async function updateData(data) {
    console.log(data);
    setUpdateId(data.id);
    setIsUpdate(true);
    setValue("name", data.name);
    setValue("email", data.email);
  }
  async function updateSubmission(data) {
    console.log("update: ", data);
    try{
      const res = await axios({
        method: "PUT",
        url: `http://localhost:5000/prisma/${updateId}`,
        data: { name: data.name, email: data.email },
      });
     prismafn();
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex items-center">
      <div>
        <form
          className="flex flex-col bg-lime-400"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="ID"
            {...register("id", { required: "enter id" })}
          />
          <div className="text-red-600">{errors?.id?.message}</div>
          <input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: true,
              maxLength: 20,
              minLength: 1,
            })}
          />
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <div className="flex mt-2">
            <input className="bg-green-600" type="submit" value="Submit" />
            <button
              className="bg-yellow-600 text-white px-3 py-1 rounded ml-2"
              onClick={handleUpdate}
            >
              Update
            </button>
            {/* Update button */}
          </div>
          {error && <p className="text-red-600">{error.message || error}</p>}{" "}
          {/* Display error message if error exists */}
          {updateMessage && (
            <p className="text-green-600">{updateMessage}</p>
          )}
          {/* Display update message if exists */}
        </form>
      </div>

      <div className="mb-9">
        {/* Display prisma data */}
        <div>
          <table className="border-collapse bg-slate-300 w-1/2">
            <thead>
              <tr>
                <th className="p-2 bg-slate-500 border border-black ">id</th>
                <th className="p-2 bg-slate-500 border border-black">Name</th>
                <th className="p-2 bg-slate-500 border border-black">Email</th>
                <th className="p-2 bg-slate-500 border border-black">
                  Actions
                </th>
                {/* Add Actions column */}
              </tr>
            </thead>
            <tbody>
              {prismaData.map((value) => (
                <tr key={value.id}>
                  <td className="p-2 border border-black">{value.id}</td>
                  <td className="p-2 border border-black">{value.name}</td>
                  <td className="p-2 border border-black">{value.email}</td>
                  <td className="p-2 border border-black">
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(value.id)}
                    >
                      Delete
                    </button>{" "}
                    {/* Delete button */}
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded ml-2"
                      onClick={() => handleSelect(value)}
                    >
                      Select
                    </button>{" "}
                    {/* Select button */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
