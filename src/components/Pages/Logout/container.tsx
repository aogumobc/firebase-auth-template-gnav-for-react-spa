import { LogoutPresenter } from "./presenter";

export const Logout: React.FC = () => {
    const title = 'Logout';

    return (
        <LogoutPresenter title={title} />
    );
};