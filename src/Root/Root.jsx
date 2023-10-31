import { Outlet } from "react-router-dom";
import Navber from "../Component/Navbar/Navber";


const Root = () => {
    return (
        <div>
          
         <Navber></Navber>  
           <Outlet></Outlet> 
        </div>
    );
};

export default Root;