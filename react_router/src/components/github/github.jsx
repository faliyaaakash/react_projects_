import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data=useLoaderData();
//     const [data,setData]=useState([]);
//    useEffect(
//     ()=>{
//       fetch('https://api.github.com/users/faliyaaakash')
//       .then((res)=>res.json())
//       .then((data)=>{
//           console.log(data)
//           setData(data)

//       })

//     },[])
    return(
        <>
        <section className="max-h-screen min-h-screen">
             <div className="text-center text-2xl bg-gray-600 text-amber-50 m-5 p-3">Github followers : {data.followers}</div>
        </section>
          
        </> 
    );
}


export const githubinfoloader=async()=>{
    const res=await fetch('https://api.github.com/users/faliyaaakash')
     return res.json();
}