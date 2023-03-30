import { Link } from "react-router-dom";

export const GlobalNavPresenter: React.FC = () => {

    return (
        <nav className="global-nav">

            <Link to={"/"}>
                Home
            </Link>

            <Link to={"/login"}>
                Login
            </Link>

            <Link to={"/logout"}>
                Logout
            </Link>

        </nav>
    );
};