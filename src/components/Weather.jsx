import React, {useState, useEffect} from "react";
import axios from "axios";

function Weather(props) {

    const [weather, setWeather] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const   APIKEY = "7fcd4996794249d0874132232212502",
            city = props.addCity,
            days = "5"
    const url = "https://api.weatherapi.com/v1/forecast.json?key=" + APIKEY + "&q=" + city + "&days=" + days + "&aqi=no&alerts=no";

    
    const api_call = async () => {
        const request = axios.get(url);
        const response = await request;
        console.log(response.data);
        setWeather(response.data);
        setIsLoading(false);
    }
   

    useEffect(() => {
        if(props.addCity === undefined) {
         return <p>Loading</p>;   
        } else if(url === "1003") {
            return null
        } else {
            api_call();
            console.log(url);
        }
    }, [props] );

    console.log("Child2 " + props.addCity); 

    return (
        <div className="container">
            <div className="row">
                <div className="col col-12">
                    {isLoading ? null : <div>            
                        <h2>{weather.location.name}</h2>
                        <div className=" justify-content-center">
                            <div className="col-2">
                            <img src={weather.current.condition.icon}/><p>{weather.current.condition.text}</p>
                            </div>
                            
                                
                                <p>{weather.current.temp_c} degree</p>
                            
                        </div>
                        
                       
                        <p>{weather.forecast.forecastday.[0].astro.sunrise} Sunrise</p>
                        <p>{weather.forecast.forecastday.[0].astro.sunset} Sunset</p>
                    </div>
                    }
                </div>
            </div>
            
        </div>
        
    )
}

export default Weather;


