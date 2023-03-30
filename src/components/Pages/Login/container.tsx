import { LoginPresenter } from "./presenter";
import { useNavigate } from "react-router-dom";

type Props = {
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const Login: React.FC<Props> = (props: Props) => {
    const title = 'Login';
    const { setIsSignedIn } = props;
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('isSignedIn', 'true');
        setIsSignedIn(true);
        navigate('/');
    };

    return (
        <LoginPresenter title={title} onClick={handleLogin} />
    );
};