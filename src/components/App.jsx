import React, {useState} from "react";
import './App.css';
import InputArea from "./InputArea";
import Weather from "./Weather";



function App() {

  const [cityValue, setCityValue] = useState();

  function cityName(input) {
    
      console.log("new " + input);
      setCityValue(input);
  
  }
  console.log(cityValue);

  return (
    <div className="App">

     <InputArea addClick={cityName} />
     <Weather addCity={cityValue}/>
    </div>
  );
}

export default App;
