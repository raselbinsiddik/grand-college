import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import addmi from '../assets/authentication.gif';

const AdmissionForm = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = user?.email;
        const subject = form.subject.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const photoUrl = form.photo.value;
        const birth = form.birth.value;

        const userDetails = { name, email, subject, address, phone, photoUrl, birth };
        console.log(userDetails);

        fetch('https://college-server-weld.vercel.app/admission', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'user added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    
    return (
        <div>
            <h1 className="text-8xl text-white">good</h1>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Admission now!</h1>
                        <img className="w-full" src={addmi} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-10">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required/>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" defaultValue={user?.email}/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" name="subject" placeholder="subject" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="phone" name="phone" placeholder="phone number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date of birth</span>
                                </label>
                                <input type="date" name="birth" placeholder="Date of birth" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="address" name="address" placeholder="Address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="photo" name="photo" placeholder="photoUrl" className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="submit" />
                            </div>
                        </form>
                       
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdmissionForm;