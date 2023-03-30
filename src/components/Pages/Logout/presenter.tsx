type Props = {
    title: string;
    onClick: () => void;
};

export const LogoutPresenter: React.FC<Props> = (props: Props) => {
    const { title, onClick } = props;

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={onClick}>Logout</button>
        </div>
    );
};