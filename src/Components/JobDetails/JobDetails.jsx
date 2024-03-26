import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    console.log(id, jobs);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have apply successfully');
    }
    return (
        <div>
            <h2>Job Details: {job.job_title} </h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border-2 md:col-span-3 bg-purple-50">
                    <h2 className="text-3xl">Details Coming Here</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border-2 bg-purple-100">
                    <h2 className="text-3xl">Side Things</h2>
                    <button onClick={handleApplyJob} className="btn btn-secondary">Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;