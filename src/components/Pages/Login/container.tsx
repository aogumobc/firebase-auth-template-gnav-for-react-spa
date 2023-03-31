import { LoginPresenter } from "./presenter";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase/firebase";

type Props = {
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const Login: React.FC<Props> = (props: Props) => {
    const title = 'Login';
    const { setIsSignedIn } = props;
    const navigate = useNavigate();

    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                localStorage.setItem('isSignedIn', 'true');
                setIsSignedIn(true);
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleLoginWithTwitter = () => {
        console.log('Login with twitter');
    }

    return (
        <LoginPresenter title={title} onHandleLoginWithGoogle={handleLoginWithGoogle} onHandleLoginWithTwitter={handleLoginWithTwitter} />
    );
};