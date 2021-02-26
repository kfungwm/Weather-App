import React, {useEffect} from "react";
import InputArea from "./InputArea";
import axios from "axios";

function Weather(props) {

    const   APIKEY = "",
            city = props.addCity,
            days = "5"
    const url = "https://api.weatherapi.com/v1/forecast.json?key=" + APIKEY + "&q=" + city + "&days=" + days + "&aqi=no&alerts=no";

    useEffect(() => {
        axios  
            .get(url)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    console.log(props.addCity);
    return (
        <h1>hello</h1>
    )
}

export default Weather;