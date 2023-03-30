type Props = {
    title: string;
};

export const LogoutPresenter: React.FC<Props> = (props: Props) => {
    const { title } = props;

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};