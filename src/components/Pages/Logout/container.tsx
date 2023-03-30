import { LogoutPresenter } from "./presenter";
import { useNavigate } from "react-router-dom";

type Props = {
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const Logout: React.FC<Props> = (props: Props) => {
    const title = 'Logout';
    const { setIsSignedIn } = props;
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isSignedIn');
        setIsSignedIn(false);
        navigate('/');
    };

    return (
        <LogoutPresenter title={title} onClick={handleLogout} />
    );
};