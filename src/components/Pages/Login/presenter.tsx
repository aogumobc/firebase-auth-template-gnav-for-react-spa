type Props = {
    title: string;
    onHandleLoginWithGoogle: () => void;
    onHandleLoginWithTwitter: () => void;
};

export const LoginPresenter: React.FC<Props> = (props: Props) => {
    const { title, onHandleLoginWithGoogle, onHandleLoginWithTwitter } = props;

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={ onHandleLoginWithGoogle }>Login with google</button>
            <button onClick={ onHandleLoginWithTwitter }>Login with twitter</button>
        </div>
    );
};