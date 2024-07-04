import { ColoredMessage } from "./components/ColorMessage";

export const App = () => {
    // ボタンを押した時に実行する関数を定義
    const onClickButton = () => {
        alert("ボタンを押したよ!");
    };

    return (
        <>
            <h1 style={{ color: "red" }}>Hello, React!</h1>
            <ColoredMessage color="blue" message="お元気ですか?"/>
            <ColoredMessage color="pink" message="元気です!"/>
            <button onCrick={onClickButton}>button</button>
        </>
    );
};