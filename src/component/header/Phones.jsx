/* eslint-disable react/prop-types */

import Phonecard from "./phonecard";


const Phones = ({phones}) => {
    console.log(phones)
    return (
        <div className=" mt-10 ">
            <h1 className="text-center text-2xl font-bold">All Ctaegories Phones</h1>

            <div className="grid lg:grid-cols-3 gap-5">
                {
                    phones?.map(phone=><Phonecard key={phone.id} phone={phone}></Phonecard>)
                }
                </div>
            
        </div>
    );
};

export default Phones;