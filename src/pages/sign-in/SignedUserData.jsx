import axios from "axios";
import { useEffect, useState} from "react";

export default function SignedinTableData() {

  const [prismaData, setPrismaData] = useState([]);   // To get data from backend
 

  // Function to fetch data from backend
  async function tableData() {
    try {
      const response = await axios.get("http://localhost:5002/home/signinData");
      setPrismaData(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    tableData();
  }, []);
  
  return (
<div className="mb-9">
        {/* Display prisma data */}
        <div>
          <table className="border-collapse bg-slate-300 w-1/2">
            <thead>
              <tr>
                <th className="p-2 bg-slate-500 border border-black">id</th>
                <th className="p-2 bg-slate-500 border border-black">Name</th>
                <th className="p-2 bg-slate-500 border border-black">Email</th>
                <th className="p-2 bg-slate-500 border border-black">Password</th>

              
                {/* Add Actions column */}
              </tr>
            </thead>
            <tbody>
              {prismaData.map((value) => (
                <tr key={value.id}>
                  <td className="p-2 border border-black">{value.id}</td>
                  <td className="p-2 border border-black">{value.name}</td>
                  <td className="p-2 border border-black">{value.email}</td>
                  <td className="p-2 border border-black">{value.password}</td>

                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}