import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from "react-router-dom";



const Colleges = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('https://college-server-weld.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setColleges(data));
    },[])
    return (
        <div>
            <h1 className="text-8xl text-white">good</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    colleges.map(col => <p className="mx-auto" key={col.id}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className="w-96 h-72" src={col.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{col.name}</h2>
                                <p className="text-xl font-bold">Rating: <Rating className="text-yellow-500"
                                    placeholderRating={col.rating}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}>
                                </Rating>
                                    <span>{col.rating}</span>
                                </p>
                                <p className="font-bold">Admission Date: {col.admission_dates}</p>
                                <p className="font-bold">Number Of Research: 1.{col.number_of_research[0]}.
                                    2.{col.number_of_research[2]}.
                                    3.{col.number_of_research[3]}.</p>
                                <div className="card-actions justify-end">

                                    <Link to={`/collegedetails/${col._id}`} className="btn btn-primary">Details</Link>
                                </div>
                            </div>
                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Colleges;