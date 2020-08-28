import React from 'react';

const useState = React.useState;

export default function CurrentCount() {
    const [count, setCount] = useState(0);

    const onButtonClick = () => {
        setCount(count + 1);
    };
    const onResetClick = () => {
        setCount(0);
    };

    return (
        <div>
            <button onClick={onButtonClick}>Click Me</button>
            <button onClick={onResetClick}>Reset Count</button>
            <h1>Current Count: {count}</h1>
        </div>
    );
}
