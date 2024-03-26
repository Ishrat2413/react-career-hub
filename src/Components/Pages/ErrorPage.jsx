import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Ooopppsssssss!</h2>
            <button><Link to="/">Go back to Home</Link></button>
        </div>
    );
};

export default ErrorPage;