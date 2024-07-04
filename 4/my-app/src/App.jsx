import { ColoredMessage } from "./components/ColorMessage";
import { useState } from "react";

export const App = () => {
    // Stateの定義
    const [num, setNum] = useState(0);

    // ボタンを押した時に実行する関数を定義
    const onClickButton = () => {
        setNum((prev) => prev + 1);
    };

    return (
        <>
            <h1 style={{ color: "red" }}>Hello, React!</h1>
            <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です!</ColoredMessage>
            <button onClick={onClickButton}>button</button>
            <p>{num}</p>
        </>
    );
};