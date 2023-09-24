import { useLoaderData } from "react-router-dom";
import Banner from "../component/header/Banner";
import Phones from "../component/header/Phones";

const Home = () => {
    const phones=useLoaderData()
   
    return (
        <div className="mx-20 ">
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;