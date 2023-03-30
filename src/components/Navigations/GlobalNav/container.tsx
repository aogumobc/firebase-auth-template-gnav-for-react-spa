import "../../../style/GlobalNav.css";
import { GlobalNavPresenter } from "./presenter";

type Props = {
    isSignedIn: boolean;
}

export const GlobalNav: React.FC<Props> = (props: Props) => {
    const { isSignedIn } = props;

    return (
        <GlobalNavPresenter isSignedIn={isSignedIn}/>
    );
};