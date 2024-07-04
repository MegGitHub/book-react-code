export const App = () => {
    // ボタンを押した時に実行する関数を定義
    const onClickButton = () => {
        alert("ボタンを押したよ!");
    };

    return (
        <>
            <h1>Hello, React!</h1>
            <p>How are you?</p>
            <button onCrick={onClickButton}>ボタン</button>
        </>
    );
};