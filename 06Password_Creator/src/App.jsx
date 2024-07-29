import { useState ,useCallback,useEffect, useRef} from 'react'



function App() {
  let [length,setlength]=useState(8);
  let[number,setnumber]=useState(false);
  let[character,setcharacter]=useState(false);
  let[password,setpassword]=useState("");
  const passwordRef=useRef(null);
  let PasswordGenerator=useCallback(function(){
    let password="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number){str+="0123456789";}
    if(character){str+="!@#$&";}
    for(let i=1;i<=length;i++)
      {
        let char=(Math.floor(Math.random() * str.length));
        // console.log(char);
       password+=str.charAt(char);
      }

      setpassword(password); 

  },[length,number,character,setpassword])

  let copyToClipboard=()=>{
    
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

  }    
useEffect(()=>{
  PasswordGenerator();
},[length,number,character,PasswordGenerator])

  return (
   <>
   
   <div className=' max-w-md mx-auto rounded-lg px-4 py-2 my-8 text-black bg-white text-center'>
   <h1 className='text-4xl text-center text-black my-3'>Password Generator</h1>
     <div className='flex rounded-lg overflow-hidden '>
      <input type="text" value={password} className='outline-none w-full px-3 py-1 bg-slate-300' placeholder='Password' readOnly ref={passwordRef}/>
      <button className='bg-blue-700 px-2 py-1 text-white' onClick={copyToClipboard}>Copy</button>
     </div>
     <div className='text-sm gap-x-3 flex'>
      <div className='flex gap-x-1 items-center'>
        <input type="range" name="" id="" 
        min={6} max={20}
        value={length}
        className='cursor-pointer ' onChange={(e)=>{setlength(e.target.value)}}/>
        <label htmlFor="" >Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" name="" id="numberinput" 
        onChange={()=>{setnumber((previous)=>!previous)}}
        defaultChecked={number}
       />
       <label htmlFor="numberinput">Numbers</label>
      </div>


      <div className='flex items-center gap-x-1'>
        <input type="checkbox" name="" id="charInput" 
        onChange={()=>{setcharacter((previous)=>!previous)}}
        defaultChecked={character}
       />
       <label htmlFor="charInput">Characters</label>
      </div>
     </div>

   </div>
   </>
  )
}

export default App
