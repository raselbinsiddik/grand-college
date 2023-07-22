import { Outlet } from "react-router-dom";
import Navbar from "./Navber";
import Footer from "./Footer";
import Banner from "./Banner";
import SearchBox from "../SearchBox";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <SearchBox></SearchBox>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;