import Banner from "./Banner";
import SearchBox from "../SearchBox";
import Gallary from "./Gallary";
import ReasechLinks from "./ReasechLinks";

const Home = () => {
    return (
        <div>
            <SearchBox></SearchBox>
            <Banner></Banner> 
            <Gallary></Gallary>
            <ReasechLinks></ReasechLinks>
        </div>
    );
};

export default Home;