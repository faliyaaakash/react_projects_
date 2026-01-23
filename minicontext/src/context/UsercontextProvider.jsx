import React from "react";
import userContext from "./usecontext";
import { useState } from "react";

export default function UsercontextProvider({children}){
  const [user,setUser]=useState()
    return (
    <>
     <userContext.Provider value={{user,setUser}}>
           {children}
     </userContext.Provider>
    
    </>
   )
}