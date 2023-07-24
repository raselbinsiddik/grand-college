import { useEffect, useRef, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import SectionTitle from "./componenets/SectionTitle";


const SearchBox = () => {
    const [search, setSearch] = useState('');
    const serachRef = useRef(null);
    const [college, setCollege] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/colleges?search=${search}`)
            .then(res => res.json())
            .then(data => setCollege(data));
    }, [search])
    
    const handleSearch = () => {
        console.log(serachRef.current.value)
        setSearch(serachRef.current.value);
    }


    return (
        <div className="mb-5">
<h1 className="text-8xl text-white">good</h1>
            <div className="overflow-x-auto">

                <div>
                    <div className="form-control mb-5">
                        <div className="input-group">
                            <input ref={serachRef} type="text" placeholder="Search…" className="input input-bordered" />
                            <button onClick={handleSearch}  className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
               
            </div>
            <div>
                <SectionTitle subHeading={'POPULAR'} heading={'top popular college in bangladesh'}></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        college.slice(0, 3).map(coll => <p className="mx-auto" key={coll._id}>
                            <div className="card card-compact w-96 h-[700px] bg-base-100 shadow-xl">
                                <figure><img className="w-96 h-72" src={coll.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-violet-900 font-bold">{coll.name}</h2>
                                    <p className="text-xl font-bold">Rating: <Rating className="text-yellow-500"
                                        placeholderRating={coll.rating}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}>
                                    </Rating>
                                        <span>{coll.rating}</span>
                                    </p>
                                    <p className="font-bold"><span className="text-violet-800">Admission Date</span>: {coll.admission_dates}
                                    </p>
                                    <p className="font-bold"><span className="text-violet-800">Name Of Reaserch Works:</span> {coll.research_works.title}
                                    </p>
                                    <p className="font-bold"> <span className="text-violet-800">Reaserch Works Description:</span> {coll.research_works.abstract}</p>

                                    <p className="font-bold"> <span className="text-violet-800">Events:</span> {coll.events_details.event_name} And Description: {coll.events_details.event_description}</p>

                                    <p className="font-bold"> <span className="text-violet-800">Sports:</span> {coll.sports[0]}, {coll.sports[1]}, {coll.sports[2]}</p>
                                    <div className="card-actions justify-end">

                                        <Link to={`/searchcollegedetails/${coll._id}`} className="btn btn-primary">Details</Link>
                                    </div>
                                </div>
                            </div>
                        </p>)
                    }
                </div>
           </div>
        </div>
    );
};

export default SearchBox;