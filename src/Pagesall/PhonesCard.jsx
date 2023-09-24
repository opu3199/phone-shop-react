/* eslint-disable react/prop-types */

import swal from "sweetalert";



const PhonesCard = ({phones}) => {
const {id, image,phone_name} = phones || {}
const handlebutton= ()=>{
    const addfav=[]

    const favouritesitems=JSON.parse(localStorage.getItem('favourites'))
    if(!favouritesitems){
        addfav.push(phones)
        localStorage.setItem('favourites',JSON.stringify(addfav))
    }else{

        const isexsits = favouritesitems.find(phone=>phone.id === id)
        if(!isexsits){
            addfav.push(...favouritesitems,phones)
            localStorage.setItem('favourites',JSON.stringify(addfav))
            swal("Good job!", "You clicked the button!", "success");
        }else{
           
            swal("Oops!", "You Have Already Select this!", "error");
        }

      
    }
   
}
    return (
        <div className="lg:mx-80  p-5 gap-5 lg:flex justify-center items-center shadow-md mt-10">
            <img className="w-80" src={image} alt="" />
            <div className="space-y-4">
                {/* <h2 className="text-xl font-bold">{brand_name}</h2> */}
                <h1 className="text-2xl font-bold">{phone_name}</h1>
                <button onClick={()=>handlebutton()} className="btn bg-green-300 p-3 rounded-md text-pink-600 font-bold">ADD TO FAVOURITES</button>
            </div>
        </div>
    );
};

export default PhonesCard;