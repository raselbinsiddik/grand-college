import { useLoaderData } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const CollegeDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const { name, image, events_details, sports_categories, sports } = details;
    return (
        <div>
            <img className="w-full h-[500px]" src={image} alt="" />
            <div>
                <h1 className="text-4xl font-bold mt-5 text-red-600">College Name: {name}</h1>
                <SectionTitle subHeading={'events'}heading={'there are some of events in our college'}></SectionTitle>
                <p className="text-2xl font-bold mt-5 text-green-600">Event Name: {events_details.event_name}</p>
                <p className="text-2xl font-bold mt-5 text-green-600">Event Date: {events_details.event_date}</p>
                <p className="text-2xl font-bold mt-5 text-green-600 mb-5">Event Description: {events_details.event_description}</p>
            </div>
            
            <div>
                <SectionTitle subHeading={'Sports'} heading={'there are some of sports in our college'}></SectionTitle>

                <p className="text-2xl font-bold mt-5 text-blue-600">Sports Categories: {sports_categories[0]}, {sports_categories[1]}, {sports_categories[3]}</p>
                <p className="text-2xl font-bold mt-5 text-blue-600 mb-10">Sports Name: {sports[0]}, {sports[1]}, {sports[2]}</p>
                
            </div>
        </div>
        
    );
};

export default CollegeDetails;