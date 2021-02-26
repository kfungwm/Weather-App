import React, {useState} from "react";

function InputArea(props) {

    const [input, setInput] = useState("");
    const [headingText, setHeadingText] = useState("");

    function handleChange(event) {
        const value = event.target.value;
   
        setInput(value);
    }

    function handleClick(event) {
        props.addClick(input);
        setHeadingText(input);
        event.preventDefault();
    }


    return (
        <div className="container">
            <h1>Welcome {headingText}</h1>
            <p>Please type your City</p>
            <input type="text" name="city" placeholder="city" onChange={handleChange} value={input} ></input>
            <button onClick={handleClick}>Search</button>

        </div>
    )
}

export default InputArea;