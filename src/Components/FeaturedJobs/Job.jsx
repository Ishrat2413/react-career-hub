import PropTypes from 'prop-types';

import { MdOutlineLocationOn } from "react-icons/md";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type } = job;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mt-24">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]  mr-4">{job_type}</button>
                </div>
                <div className="mt-4 flex gap-x-2 items-center">
                    <h2 className="flex items-center"><MdOutlineLocationOn className="text-2xl" />{location}</h2>
                    <h2 className="flex items-center"><LuCircleDollarSign className="text-xl mr-1" />{location}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired
}

export default Job;