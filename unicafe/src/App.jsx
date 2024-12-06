import { useState } from "react";

const Button = ({ handleClick, text }) => {
    // console.log({handleClick, text});
    return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
    // console.log({ text, value });
    return text === "positive" ? (
        <tr>
            <td>
                <p>{text}</p>
            </td>
            <td>
                <p>{value} %</p>
            </td>
        </tr>
    ) : (
        <tr>
            <td>
                <p>{text}</p>
            </td>
            <td>
                <p>{value}</p>
            </td>
        </tr>
    );
};

const Statistics = ({ good, neutral, bad }) => {
    // console.log({ good, neutral, bad });
    return (
        <>
            <h1>statistics</h1>
            {good === 0 && neutral === 0 && bad === 0 ? (
                <h5>No feedback given</h5>
            ) : (
                <>
                    <table>
                        <tbody>
                            <StatisticLine text={"good"} value={good} />
                            <StatisticLine text={"neutral"} value={neutral} />
                            <StatisticLine text={"bad"} value={bad} />
                            <StatisticLine
                                text={"all"}
                                value={good + neutral + bad}
                            />
                            <StatisticLine
                                text={"average"}
                                value={
                                    (good * 1 + neutral * 0 + bad * -1) /
                                    (good + neutral + bad)
                                }
                            />
                            <StatisticLine
                                text={"positive"}
                                value={(good / (good + neutral + bad)) * 100}
                            />
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
};

const App = () => {
    // guardar los clics de cada botón en su propio estado
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h1>give feedback</h1>

            <Button handleClick={() => setGood(good + 1)} text={"good"} />
            <Button
                handleClick={() => setNeutral(neutral + 1)}
                text={"neutral"}
            />
            <Button handleClick={() => setBad(bad + 1)} text={"bad"} />

            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

export default App;
