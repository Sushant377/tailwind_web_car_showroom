import { useEffect, useState } from "react";
import SignedinTableData from "./components/SignedinTableData";
import SigninForm from "./components/SigninForm";
import axios from "axios";


function Signinhook() {
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
       <div>
        <SigninForm  />
        <SignedinTableData signformData={prismaData}/>
       </div>
    );
}

export default Signinhook;
