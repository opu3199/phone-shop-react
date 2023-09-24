import { useEffect, useState } from "react";
import Phonecard from "../component/header/phonecard";

const Favourites = () => {
   const [favourites,setfavourites]=useState([])
   const [nofound,setnofound]=useState(false)
   const [isshow,setisshow]=useState(false)
   useEffect(()=>{
    const favouritesitems=JSON.parse(localStorage.getItem('favourites'))
  if(favouritesitems){
    setfavourites(favouritesitems)
  }else{
    setnofound('No  data found')

  }  
   },[])

   const handledelete=()=>{
    localStorage.clear()
    setfavourites([])
    setnofound('No  data found')

   }

    return (
        <div>
            <div className="flex justify-center items-center">
            {favourites.length > 0 && <button onClick={handledelete} className="text-xl font-bold bg-red-500 p-2 rounded-lg ">Delete All Data</button>}
            </div>
            {nofound ? <p className="text-3xl font-bold flex justify-center items-center">No Data Found </p> :<div className="grid mx-5 md:grid-cols-3 lg:mx-20 gap-10 my-10 ">
                {
                  isshow ?favourites.map(phone=><Phonecard key={phone.id} phone={phone}></Phonecard>)  : 
                  favourites.slice(0,3).map(phone=><Phonecard key={phone.id} phone={phone}></Phonecard>) 
                }
                
                </div>}
                {
                   favourites.length > 2 &&   <div className="flex  justify-center my-8">
            
                   <button onClick={()=>setisshow(!isshow)} className="bg-emerald-500 p-2 rounded-lg font-bold">{isshow ? 'See Less':'See More'}</button>
                   </div>
                }
               
                
               
        </div>
    );
};

export default Favourites;