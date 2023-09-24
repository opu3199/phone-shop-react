import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhonesCard from "./PhonesCard";


const Phone = () => {
    const [phones,setphones]=useState()
    const {id}=useParams()
    const phone=useLoaderData()
    useEffect(()=>{
        const findphone=phone?.find(phones=>phones.id===id)
        setphones(findphone)
    },[id,phone])
    return (
        <div className="mx-20">
            <div className="bg-emerald-200 p-10 ">
            <h1 className="text-3xl font-bold text-center">Phone Details</h1>
            </div> 
           <div className="my-10 ">
            <PhonesCard phones={phones}></PhonesCard>
           </div>
         </div>    
            
    );
};

export default Phone;