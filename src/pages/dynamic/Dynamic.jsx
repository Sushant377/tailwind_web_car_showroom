import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Dynamic() {
    const params = useParams();
    const [data, setData] = useState("");     

    async function dynamicCall() {

        try{
        const response = await axios ({
            method:"get",
            url:`http://localhost:5002/dynamic/${params.id}`,

        });
        console.log(response.data);
        setData(response.data);     
    } catch (err){
        console.log(err);
    }}
    useEffect(()=> {
        dynamicCall();
    }, [] );
    
  return (
    <div><div>{data.name}</div>
         <div>{data.roll}</div>
    </div>
  )
}

export default Dynamic