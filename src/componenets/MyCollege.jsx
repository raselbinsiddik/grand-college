import { useEffect, useState } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import SectionTitle from "./SectionTitle";

const MyCollege = () => {
    const [myCollege, setMyCollege] = useState([]);
    // const { user } = useContext(AuthContext);

    const url = 'http://localhost:5000/admission'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyCollege(data));
    }, [url]);

    return (
        <div>
            <h1 className="text-8xl text-white">good</h1>
            <SectionTitle subHeading={'admission'} heading={'your addmission details'}></SectionTitle>

            {
                myCollege.map(mc => <p key={mc._id}>
                    <div className="card card-side bg-base-100 shadow-xl grid grid-cols-1 md:grid-cols-2 mx-auto mb-10">
                        <figure><img src={mc.photoUrl} alt="Movie" /></figure>
                        <div className="card-body mx-auto">
                            <h2 className="card-title text-2xl font-bold">Name: {mc.name}</h2>
                            <p className="text-xl font-bold mt-2"><span className="text-indigo-800">Subject:</span> {mc.subject }</p>
                            <p className="text-xl font-bold mt-2"><span className="text-indigo-800">Contact number:</span> {mc.phone }</p>
                            <p className="text-xl font-bold mt-2"><span className="text-indigo-800">Your Email:</span> {mc.email}</p>
                            <p className="text-xl font-bold mt-2"><span className="text-indigo-800">Your Date of Birth:</span> {mc.birth}</p>
                            <p className="text-xl font-bold mt-2"><span className="text-indigo-800">Your Address:</span> {mc.address}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Review</button>
                            </div>
                        </div>
                    </div>
                </p>)
            }
        </div>
    );
};

export default MyCollege;