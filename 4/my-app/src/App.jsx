export const App = () => {
    // ボタンを押した時に実行する関数を定義
    const onClickButton = () => {
        alert("ボタンを押したよ!");
    };

    // cssオブジェクトを定義
    const contentStyle = {
        color: "blue",
        fontSize: "20px",
    }

    return (
        <>
            <h1 style={{ color: "red" }}>Hello, React!</h1>
            <p style={contentStyle}>How are you?</p>
            <button onCrick={onClickButton}>ボタン</button>
        </>
    );
};