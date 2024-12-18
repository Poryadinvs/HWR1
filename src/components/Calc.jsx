import Button from "./Button";
import { useState } from "react";

export default function Calc() {
    const [count, setCount] = useState(0);
    let countElem = document.querySelector('.count')

    return (
        <div style={{display: "flex", gap: 20, alignItems: "center", justifyContent: "center"}}>
            <Button
                onClick={() => setCount(count + 1)}
                text="Увеличить"
                status="success"
            />
            <div className="count">{count}</div>
            <Button
                onClick={() => { if (count != 0) setCount(count - 1)}}
                text="Уменьшить"
                status="danger"
            />
        </div>
    )
}
