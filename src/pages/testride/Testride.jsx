import axios from "axios";
import "./Testride.css";
import { useState } from "react";

function Testride() {
  
  const [vcar, setVcar] = useState("");

  async function car_vdo() {
    try {
      // Fetch data from the API
      let b1 = await axios.get("http://localhost:5003/vdo")
      // Log the fetched data to the console
      console.log(b1.data);
      // Update the state with the fetched data
      setVcar(b1.data);
    } catch (error) {
      alert(error.message);
      console.error("Error fetching activity:", error.message);
    }
  }

  return (
    <div>
            {/* another api */}
            <div>
        <button onClick={car_vdo}>VDO</button>
      </div>
      <img src={vcar.video}/>
      <iframe src={vcar.video} height="200px" width="200px"></iframe>
      
    </div>  
  )
}

export default Testride