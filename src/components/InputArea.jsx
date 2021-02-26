import React, {useState} from "react";

function InputArea(props) {

    const [input, setInput] = useState("");
    const [headingText, setHeadingText] = useState("");
    const [isMousedOver, setMouseOver] = useState(false);

    function handleChange(event) {
        const value = event.target.value;
   
        setInput(value);
    }

    function handleClick(event) {
        props.addClick(input);
        setHeadingText(input);
        event.preventDefault();
        setInput("")
    }

    function handleMouseOver() {
        setMouseOver(true);
      }
    
      function handleMouseOut() {
        setMouseOver(false);
      }

    return (
        <div className="container">
            <div className="nContainer">
                <h1>Welcome {headingText}</h1>
                <p>Please type your City</p>
            
                <input className="customInput" type="text" name="city" placeholder="City Name" onChange={handleChange} value={input} ></input>
                <button 
                    className="customButton" 
                    onClick={handleClick}
                    style={{ backgroundColor: isMousedOver ? "black" : "white" }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    >Search</button>
                <hr></hr>
            </div>
            
        </div>
    )
}

export default InputArea;