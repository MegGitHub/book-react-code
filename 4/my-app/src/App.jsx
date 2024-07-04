import { ColoredMessage } from "./components/ColorMessage";

export const App = () => {
    // ボタンを押した時に実行する関数を定義
    const onClickButton = () => {
        alert("ボタンを押したよ!");
    };

    // cssオブジェクトを定義
    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px",
    };

    return (
        <>
            <h1 style={{ color: "red" }}>Hello, React!</h1>
            <ColoredMessage />
            <p style={contentPinkStyle}>Fine!</p>
            <button onCrick={onClickButton}>button</button>
        </>
    );
};