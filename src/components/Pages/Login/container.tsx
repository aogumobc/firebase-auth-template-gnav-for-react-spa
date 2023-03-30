import { LoginPresenter } from "./presenter";

export const Login: React.FC = () => {
    const title = 'Login';

    return (
        <LoginPresenter title={title} />
    );
};