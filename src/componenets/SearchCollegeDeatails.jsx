import { useLoaderData } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const SearchCollegeDeatails = () => {
    const details = useLoaderData();
    console.log(details);
    const { name, image, events_details, sports_categories, sports, admission_process, admission_dates } = details;
    return (
        <div>
            <img className="w-full h-[500px]" src={image} alt="" />
            <div>
                <h1 className="text-4xl font-bold mt-5 text-green-700">College Name: {name}</h1>
                <SectionTitle subHeading={'Admission'} heading={'admission proces in our college'}></SectionTitle>
                <p className="font-bold text-2xl"><span className="text-lime-600 font-bold text-2xl">Admission Date:</span> {admission_dates}</p>
                <p><span className="text-lime-600 font-bold text-2xl">Admission Process:</span> {admission_process }</p>
                <SectionTitle subHeading={'events'} heading={'there are some of events in our college'}></SectionTitle>
                <p className="text-2xl font-bold mt-5"><span className="text-2xl font-bold mt-5 text-green-600">Event Name:</span> {events_details.event_name}</p>
                <p className="text-2xl font-bold mt-5 text-green-600"><span className="text-2xl font-bold mt-5 text-green-600">Event Date:</span> {events_details.event_date}</p>
                <p className="text-2xl font-bold mt-5 text-green-600 mb-5"><span className="text-2xl font-bold mt-5 text-green-600">Event Description:</span> {events_details.event_description}</p>
            </div>

            <div>
                <SectionTitle subHeading={'Sports'} heading={'there are some of sports in our college'}></SectionTitle>

                <p className="text-2xl font-bold mt-5"><span className="text-2xl font-bold mt-5 text-green-600">Sports Categories:</span> {sports_categories[0]}, {sports_categories[1]}, {sports_categories[3]}</p>
                <p className="text-2xl font-bold mt-5 mb-10"> <span className="text-2xl font-bold mt-5 text-green-600">Sports Name:</span> {sports[0]}, {sports[1]}, {sports[2]}</p>

            </div>
        </div>
    );
};

export default SearchCollegeDeatails;