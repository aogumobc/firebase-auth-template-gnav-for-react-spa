import { HomePresenter } from "./presenter";

export const Home: React.FC = () => {
    const title = 'Home';

    return (
        <HomePresenter title={title} />
    );
};