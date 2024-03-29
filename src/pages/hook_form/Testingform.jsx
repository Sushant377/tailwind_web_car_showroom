import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Testingform() {
  // To get data from backend
  const [prismaData, setPrismaData] = useState([]);
  const [error, setError] = useState(null); // State to store error messages
  const [updateMessage, setUpdateMessage] = useState(""); // State to store update message
  const { register, handleSubmit, setValue , formState:{errors} } = useForm(); // useForm hook
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
      setUpdateMessage("User deleted successfully."); // Set update message
    } catch (err) {
      console.log(err.response.data);
      setError(err.message);
    }
  };

  // Function to handle user selection
  const handleSelect = (data) => {
    setIsUpdate(true);
    setUpdateId(data.id);
    setValue("id", data.id); // Fill the form with selected user's ID
    setValue("name", data.name); // Fill the form with selected user's name
    setValue("email", data.email); // Fill the form with selected user's email
  };

  // Form post submission handler
  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5002/prisma", {
        name: data.name,
        email: data.email,
      });
      prismafn();
      setUpdateMessage("Data updated successfully.");
      setError(null); // Clear error state
    } catch (err) {
      console.log(err.response.data);
      setError(err.response.data); // Set error message returned by backend
    }
  };

  // Function to handle user update
  async function updateSubmission(data) {
    console.log("update: ", data);
    try {
      const res = await axios({
        method: "PUT",
        url: `http://localhost:5002/prisma/update/${updateId}`,
        data: { name: data.name, email: data.email },
      });
      prismafn();
      setUpdateMessage("Data updated successfully.");
      console.log(res.data)
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  return (
    <div className="flex items-center">
      <div>
        <form
          className="flex flex-col bg-lime-400"
          onSubmit={handleSubmit(isUpdate ? updateSubmission : onSubmit)}
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
            {!isUpdate ? (
              <button
                type="submit"
                className="bg-green-600 text-white px-3 py-1 rounded ml-2"
              >
                Submit
              </button>
            ) : (
              <button
                className="bg-yellow-600 text-white px-3 py-1 rounded ml-2"
                onClick={handleSubmit(updateSubmission)}
              >
                Update
              </button>
            )}
          </div>
          {error && <p className="text-red-600">{error}</p>}{" "}
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
                <th className="p-2 bg-slate-500 border border-black">id</th>
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
                    </button>
                    {/* Delete button */}
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded ml-2"
                      onClick={() => handleSelect(value)}
                    >
                      Select
                    </button>
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
