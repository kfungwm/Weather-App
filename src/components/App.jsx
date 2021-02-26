import React, {useState} from "react";
import './App.css';
import InputArea from "./InputArea";
import Weather from "./Weather";



function App() {

  const [cityValue, setCityValue] = useState();

  function cityName(input) {
    
      console.log("Child 1 New input " + input);
      setCityValue(input);
  
  }
  console.log("Parent " + cityValue);

  

  return (
    <div className="App container">
      <div className="row">
        <div className="col col-sm">
          <InputArea addClick={cityName}  />
          <Weather addCity={cityValue}/>
        </div>
      </div>
    </div>
  );
}

export default App;
