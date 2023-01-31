
let searchButton = document.querySelector("#search-button");
let cityTitle = document.querySelector("#city-name")
let wind = document.querySelector("#wind")
let temp = document.querySelector("#temp")
let humidity = document.querySelector("#humidity")
let today = moment()
let historyDiv = document.querySelector("#history")

let temp1 = document.querySelector("#temp1")
let wind1 = document.querySelector("#wind1")
let hum1 = document.querySelector("#hum1")
let icon1 = document.querySelector("#icon1")
let cardTitle1 = document.querySelector("#card-title1")

let temp2 = document.querySelector("#temp2")
let wind2 = document.querySelector("#wind2")
let hum2 = document.querySelector("#hum2")
let icon2 = document.querySelector("#icon2")
let cardTitle2 = document.querySelector("#card-title2")

let temp3 = document.querySelector("#temp3")
let wind3 = document.querySelector("#wind3")
let hum3 = document.querySelector("#hum3")
let icon3 = document.querySelector("#icon3")
let cardTitle3 = document.querySelector("#card-title3")

let temp4 = document.querySelector("#temp4")
let wind4 = document.querySelector("#wind4")
let hum4 = document.querySelector("#hum4")
let icon4 = document.querySelector("#icon4")
let cardTitle4 = document.querySelector("#card-title4")

let temp5 = document.querySelector("#temp5")
let wind5 = document.querySelector("#wind5")
let hum5 = document.querySelector("#hum5")
let icon5 = document.querySelector("#icon5")
let cardTitle5 = document.querySelector("#card-title5")



searchButton.addEventListener("click", search)

// historyDiv.addEventListener("click", (event){

//     event.target("button").value

// })



function search(event) {

    event.preventDefault();

    let cityInput = document.querySelector("#search-input").value


    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&appid=107a7d6c443c023117142972cf673c10")
    .then(response => response.json())
    .then(data =>{

        let latitude = data[0].lat
        let longitude = data[0].lon
        let cityName = data[0].name

        cityTitle.textContent = cityName + " (" + today.format("D/MMM/YYYY") + ")"
        cardTitle1.textContent = today.add(1, "day").format("D/MMM/YYYY")
        cardTitle2.textContent = today.add(1, "day").format("D/MMM/YYYY")
        cardTitle3.textContent = today.add(1, "day").format("D/MMM/YYYY")
        cardTitle4.textContent = today.add(1, "day").format("D/MMM/YYYY")
        cardTitle5.textContent = today.add(1, "day").format("D/MMM/YYYY")

        console.log(data)
       

    

        let historyButton = document.createElement("button");
        

        historyButton.textContent = cityInput
        

        historyDiv.appendChild(historyButton);

        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=107a7d6c443c023117142972cf673c10`)

       
    })




    .then(response => response.json())
    .then(data => {

        console.log(data.list)

        temp.textContent = "Temp: " +  Math.round(data.list[0].main.temp - 273.15) + "C"
        wind.textContent = "Wind: " + data.list[0].wind.speed + "KPH"
        humidity.textContent = "Humidity: " + data.list[0].main.humidity + "%"

        
        temp1.textContent = "Temp: " +  Math.round(data.list[1].main.temp - 273.15) + "C"
        wind1.textContent = "Wind: " + data.list[1].wind.speed + "KPH"
        hum1.textContent = "Humidity: " + data.list[1].main.humidity + "%"
        let iconWeather = data.list[1].weather[0].icon
        icon1.src = "http://openweathermap.org/img/wn/" + iconWeather + "@2x.png"

        temp2.textContent = "Temp: " +  Math.round(data.list[2].main.temp - 273.15) + "C"
        wind2.textContent = "Wind: " + data.list[2].wind.speed + "KPH"
        hum2.textContent = "Humidity: " + data.list[2].main.humidity + "%"
        let iconWeather2 = data.list[2].weather[0].icon
        icon2.src = "http://openweathermap.org/img/wn/" + iconWeather2 + "@2x.png"

        temp3.textContent = "Temp: " +  Math.round(data.list[3].main.temp - 273.15) + "C"
        wind3.textContent = "Wind: " + data.list[3].wind.speed + "KPH"
        hum3.textContent = "Humidity: " + data.list[3].main.humidity + "%"
        let iconWeather3 = data.list[3].weather[0].icon
        icon3.src = "http://openweathermap.org/img/wn/" + iconWeather3 + "@2x.png"

        temp4.textContent = "Temp: " +  Math.round(data.list[4].main.temp - 273.15) + "C"
        wind4.textContent = "Wind: " + data.list[4].wind.speed + "KPH"
        hum4.textContent = "Humidity: " + data.list[4].main.humidity + "%"
        let iconWeather4 = data.list[4].weather[0].icon
        icon4.src = "http://openweathermap.org/img/wn/" + iconWeather4 + "@2x.png"

        temp5.textContent = "Temp: " +  Math.round(data.list[5].main.temp - 273.15) + "C"
        wind5.textContent = "Wind: " + data.list[5].wind.speed + "KPH"
        hum5.textContent = "Humidity: " + data.list[5].main.humidity + "%"
        let iconWeather5 = data.list[5].weather[0].icon
        icon5.src = "http://openweathermap.org/img/wn/" + iconWeather5 + "@2x.png"

    })

 
    
}