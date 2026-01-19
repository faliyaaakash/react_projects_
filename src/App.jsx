import { useCallback, useEffect, useState , useRef} from 'react'
import './App.css'

function App() {
  const [length,setlength]=useState(8);
  const [isNumber,setisNumber]=useState(false);
  const [ischar,setisChar]=useState(false);
  const [password,setpassword]=useState("");
  
  const passref=useRef(null)

  const passgenerator=useCallback(()=>{
       let pass="";
       let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
       let nums="1234567890"
       let chars="~!@#$%^&*()_-+/.][|"
       
       if(isNumber)str+=nums;
       if(ischar)str+=chars;

       for(let i=1;i<=length;i++){
        let char=Math.floor(Math.random()*str.length);
        pass+=str.charAt(char);

       }
       setpassword(pass);

  },[length,isNumber,ischar,setpassword])
  
const copytoclipboard=useCallback(()=>{
     passref.current?.select();
     window.navigator.clipboard.writeText(password)
},[password])

   useEffect(()=>{
      passgenerator();
   },[length,isNumber,ischar]);



  return (
    <>
    <div className='h-screen w-screen bg-black'>
           
           <h1 className='text-2xl text-white text-center'>Password Generator</h1> 
           <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 bg-gray-800 text-orange-400">
                  <div className="flex shadow rounded-lg overflow-hidden mb-4">
                  <input type="text"
                     value={password}
                     className="outline-none w-full py-1 px-3 bg-white text-2xl"
                     placeholder='Password'
                     readOnly
                     ref={passref}
                  /> 
                  <button className='outline-none bg-sky-400 text-black px-4 py-2.5 shrink-0 text-xl cursor-pointer focus:bg-sky-500 '
                   onClick={copytoclipboard}
                  >
                   copy
                  </button>
            </div>    

             <div className='flex text-sm gap-x-3 w-max'> 
                <div className='flex items-center gap-x-1'>
                  <input type="range"
                     min={6}
                     max={100}
                     value={length}
                     className='cursor-pointer'
                     onChange={(e)=>{setlength(e.target.value)}}
                   />
                   <label>Length : {length}</label>
                </div>
                 <div className='flex items-center gap-x-1'>
                  <input type="checkbox"
                      id='Number'
                      defaultChecked={isNumber}
                      onChange={(e)=>{
                          setisNumber((pre)=>!pre);
                      }}
                   />
                   <label htmlFor="Number">Number</label>
                </div> 
                <div className='flex items-center gap-x-1'>
                      <input type="checkbox"
                      id='char'
                      defaultChecked={ischar}
                     onChange={(e)=>{
                         setisChar((pre)=>!pre);
                     }}
                   />
                   <label htmlFor="char">characters</label>
                </div>
             </div>
           </div>
                 
    </div>
     
      
    </>
  )
}

export default App
