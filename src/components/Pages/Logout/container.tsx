import { LogoutPresenter } from "./presenter";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

type Props = {
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const Logout: React.FC<Props> = (props: Props) => {
    const title = 'Logout';
    const { setIsSignedIn } = props;
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('isSignedIn');
                setIsSignedIn(false);
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <LogoutPresenter title={title} onClick={handleLogout} />
    );
};