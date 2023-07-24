import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserInfo = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1 className="text-8xl text-white">good</h1>

            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-5">
                <figure><img src={user.photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">User Name: {user.displayName }</h2>
                    <p>User Email: {user.email }</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Uptdate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;