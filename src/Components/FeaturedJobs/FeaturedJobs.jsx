import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div>
            <div>
                <h2 className="text-5xl text-center font-bold">Featured Jobs: {jobs.length}</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;