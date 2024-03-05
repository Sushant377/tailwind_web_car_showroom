// import axios from "axios";
// import { useEffect, useState } from "react";
// import { API_URL } from "../../config/environmentVariables";


// function Garage() {
//   // State to hold the fetched data
//   const [data, setData] = useState("");

//   // Function to fetch data from API
//   async function test() {
//     try {
//       // Fetch data from the API
//       let response = await axios.get(`${API_URL}/msg`)
//       // Log the fetched data to the console
//       console.log(response.data);
//       // Update the state with the fetched data
//       setData(response.data);
//     } catch (error) {
//       alert(error.message);
//       console.error("Error fetching activity:", error.message);
//     }
//   }
//   const [hello, setHello] = useState("");

//   async function new_msg_api() {
//     try {
//       // Fetch data from the API
//       let a = await axios.get(`${API_URL}/newmsg`)
//       // Log the fetched data to the console
//       console.log(a.data);
//       // Update the state with the fetched data
//       setHello(a.data);
//     } catch (error) {
//       alert(error.message);
//       console.error("Error fetching activity:", error.message);
//     }
//   }

//   const [hello1, setHello1] = useState("");

//   async function new_msg_api1() {
//     try {
//       // Fetch data from the API
//       let a1 = await axios.get("https://dog.ceo/api/breeds/image/random")
//       // Log the fetched data to the console
//       console.log(a1.data);
//       // Update the state with the fetched data
//       setHello1(a1.data);
//     } catch (error) {
//       alert(error.message);
//       console.error("Error fetching activity:", error.message);
//     }
//   }

//   useEffect(() => {
//     test();
//     new_msg_api();
//     new_msg_api1();
//     console.log("hello i am use effect");
//   }, [])
  



//   return (
//     <>
//       {/* Displaying "Garage" */}
//       Garage
//       {/* Button to trigger the test function */}
//       <div>
//         <button onClick={test}>Click</button>
//       </div>
//       {/* Displaying the fetched activity data */}
//       <div>{data.status}</div>

//       {/* /////forr another api /newmsg */}
         
//             <div>
//         <button onClick={new_msg_api}>CLICK</button>
//       </div>
//       <div>{hello.name}</div>

//       {/* another api */}
//       <div>
//         <button onClick={new_msg_api1}>USA API</button>
//       </div>
//       <img src={hello1.message}/>
      

//     </>
//   );
// }

// export default Garage;


import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"
import {  Outlet} from 'react-router-dom'; // Assuming you're using React Router for navigation

function Garage() {
  const params = useParams();
    const [data, setData] = useState("");     

    async function dynamicGarage() {

        try{
        const response = await axios ({
            method:"get",
            url:`http://localhost:5002/garage/${params.id}`,

        });
        console.log(response.data);
        setData(response.data);     
    } catch (err){
        console.log(err);
    }}
    useEffect(()=> {
        dynamicGarage();
    }, [params]);
    
  
  return (
    <div className="flex h-screen">
      <div className="bg-slate-500 text-white w-40 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Supercars</h1>
        </div>
        <nav className="mt-4">
          <NavLink to="/garage/1" className="block py-2 px-4 text-sm hover:bg-gray-800">BMW </NavLink>
          <NavLink to="/garage/2" className="block py-2 px-4 text-sm hover:bg-gray-800">Ferrari</NavLink>
          <NavLink to="/garage/3" className="block py-2 px-4 text-sm hover:bg-gray-800">Mercedes_Benz</NavLink>
          <NavLink to="/garage/4" className="block py-2 px-4 text-sm hover:bg-gray-800">Lamborghini</NavLink>

        </nav>
      </div>
        <Outlet/> 
        <div>
        
        <div>{data.car}</div>
         <div>{data.color}</div>
    </div>

    </div>
  );
}

export default Garage;
