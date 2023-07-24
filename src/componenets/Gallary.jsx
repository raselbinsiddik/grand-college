import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";


const Gallary = () => {
    const [gallary, setGallary] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setGallary(data));
    }, [])
    
   
    return (
        <div>
            <SectionTitle subHeading={'Gallary'} heading={'our college gallary'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">

                {
                    gallary.map(gal => <p className="mx-auto" key={gal._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img className="w-full h-[300px]" src={gal.image} alt="" /></figure>
                        </div>
                    </p>)
                }
            </div>
        </div>
        
    );
};

export default Gallary;