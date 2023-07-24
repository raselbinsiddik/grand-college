import Banner from "./Banner";
import SearchBox from "../SearchBox";
import Gallary from "./Gallary";

const Home = () => {
    return (
        <div>
            <SearchBox></SearchBox>
            <Banner></Banner> 
            <Gallary></Gallary>
        </div>
    );
};

export default Home;