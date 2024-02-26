import axios from "axios";
import { useEffect, useState } from "react";

function Garage() {
  // State to hold the fetched data
  const [data, setData] = useState("");

  // Function to fetch data from API
  async function test() {
    try {
      // Fetch data from the API
      let response = await axios.get("http://localhost:5002/msg")
      // Log the fetched data to the console
      console.log(response.data);
      // Update the state with the fetched data
      setData(response.data);
    } catch (error) {
      alert(error.message);
      console.error("Error fetching activity:", error.message);
    }
  }
  const [hello, setHello] = useState("");

  async function new_msg_api() {
    try {
      // Fetch data from the API
      let a = await axios.get("http://localhost:5002/newmsg")
      // Log the fetched data to the console
      console.log(a.data);
      // Update the state with the fetched data
      setHello(a.data);
    } catch (error) {
      alert(error.message);
      console.error("Error fetching activity:", error.message);
    }
  }

  const [hello1, setHello1] = useState("");

  async function new_msg_api1() {
    try {
      // Fetch data from the API
      let a1 = await axios.get("https://dog.ceo/api/breeds/image/random")
      // Log the fetched data to the console
      console.log(a1.data);
      // Update the state with the fetched data
      setHello1(a1.data);
    } catch (error) {
      alert(error.message);
      console.error("Error fetching activity:", error.message);
    }
  }

  useEffect(() => {
    test();
    new_msg_api();
    new_msg_api1();
    console.log("hello i am use effect");
  }, [])
  



  return (
    <>
      {/* Displaying "Garage" */}
      Garage
      {/* Button to trigger the test function */}
      <div>
        <button onClick={test}>Click</button>
      </div>
      {/* Displaying the fetched activity data */}
      <div>{data.status}</div>

      {/* /////forr another api /newmsg */}
         
            <div>
        <button onClick={new_msg_api}>CLICK</button>
      </div>
      <div>{hello.name}</div>

      {/* another api */}
      <div>
        <button onClick={new_msg_api1}>USA API</button>
      </div>
      <img src={hello1.message}/>
      

    </>
  );
}

export default Garage;