import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHouse,
    faArrowRightToBracket,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

export const GlobalNavPresenter: React.FC = () => {

    return (
        <nav className="global-nav">

            <Link to={"/"}>
                <FontAwesomeIcon icon={faHouse} />
                Home
            </Link>

            <Link to={"/login"}>
                <FontAwesomeIcon icon={ faArrowRightToBracket } />
                Login
            </Link>

            <Link to={"/logout"}>
                <FontAwesomeIcon icon={ faArrowRightFromBracket } />
                Logout
            </Link>

        </nav>
    );
};