
let searchButton = document.querySelector("#search-button");


searchButton.addEventListener("click", function(event) {

    event.preventDefault();
    let cityName = document.querySelector("#search-input").value


    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=107a7d6c443c023117142972cf673c10")
    .then(response => response.json())
    .then(data =>{

        let latitude = data[0].lat
        let longitude = data[0].lon

        console.log(data)
        console.log(latitude)
        console.log(longitude)

        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=107a7d6c443c023117142972cf673c10`)
    })

    .then(response => response.json())
    .then(data => {

        console.log(data)

    })

})



   // searchButton.addEventListener("click", function(event) {

//    event.preventDefault();

    //  let cityName = document.querySelector("#search-input").value
    // let queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=107a7d6c443c023117142972cf673c10"

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(function(response) {

    //     console.log(response)

    //     let latitude = response[0].lat
    //     let longitude = response[0].lon

    //     console.log(latitude)
    //     console.log(longitude)

        

    //   })

    //  let weatherURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=107a7d6c443c023117142972cf673c10"


      
    //   $.ajax({
    //       url: weatherURL,
    //       method: "GET"
    //     }).then(function(response) {

    //       console.log(response)
    //     })

    //  })


  
    