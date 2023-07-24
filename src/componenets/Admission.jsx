import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";

const Admission = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data));
    }, [])
    return (
        <div>
            <h1 className="text-8xl text-white">good</h1>

            <SectionTitle  subHeading={'Admission'} heading={'admission now'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">

               
                    {
                        colleges.map(c => <p className="mx-auto" key={c._id}>
                            <Link to="/admissionform">
                                <div className="card link-hover w-96 bg-base-100 shadow-xl">

                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {c.name}
                                            <div className="badge badge-secondary">NEW</div>
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </p>)
                    }
                
            </div>
        </div>
    );
};

export default Admission;