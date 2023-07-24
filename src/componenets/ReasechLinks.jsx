import SectionTitle from "./SectionTitle";
import pic from '../assets/chef.png'
import pic1 from '../assets/toyCar.png'
import pic2 from '../assets/learnSchool.png'

const ReasechLinks = () => {
    return (
        <div>
            <SectionTitle subHeading={'Reaserch'} heading={'Our reasech paper links'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">

                <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src={pic2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Educational website</h2>
                        <p>our students activites result</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src={pic1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Educational website</h2>
                        <p>our students activites result</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src={pic} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Educational website</h2>
                        <p>our students activites result</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default ReasechLinks;