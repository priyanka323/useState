import React, {useState} from "react";

const App = () => {

    let [score, setScore] = useState(0);

    return (
        <div>
            <p>Score is {score}</p>
            <button onClick={()=>(score<=9)?setScore(score+1):""}>increment</button>
            <button onClick={()=>(score>=1)?setScore(score-1):""}>decrement</button>
            <button onClick={()=>{setScore(0)}}>reset</button>
        </div>
    )
}
export default App;