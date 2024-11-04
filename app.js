document.addEventListener("DOMContentLoaded", function () {
    const weatherData = {
        stockholm: {
            city: "Stockholm",
            country: "Sverige",
            temperature: "5°C",
            description: "Molnigt",
            humidity: "50%",
            icon: "☁️",
            background: "linear-gradient(to right, #4e73df, #1cc88a)",
            iconColor: "#4e73df"
        },
        madrid: {
            city: "Madrid",
            country: "Spanien",
            temperature: "25°C",
            description: "Soligt",
            humidity: "30%",
            icon: "☀️",
            background: "linear-gradient(to right, #f6d365, #fda085)",
            iconColor: "#f6b73c"
        }
    };

    function updateWeather(city) {
        const data = weatherData[city];
        if (data) {
            document.getElementById("todaysWeatherIcon").innerHTML = data.icon;
            document.getElementById("todaysTemp").textContent = data.temperature;
            document.getElementById("humidity").textContent = `Luftfuktighet: ${data.humidity}`;
            document.getElementById("cityName").textContent = `${data.city}, ${data.country}`;
            document.getElementById("description").textContent = data.description;

            document.getElementById("weather-container").style.background = data.background;
            document.getElementById("todaysWeatherIcon").style.color = data.iconColor;
        } else {
            document.getElementById("todaysWeatherIcon").innerHTML = "";
            document.getElementById("todaysTemp").textContent = "--";
            document.getElementById("humidity").textContent = "Luftfuktighet: --%";
            document.getElementById("cityName").textContent = "Stad";
            document.getElementById("description").textContent = "Beskrivning";

            document.getElementById("weather-container").style.background = "#f8f9fa";
            document.getElementById("todaysWeatherIcon").style.color = "#333";
        }
    }

    document.getElementById("citySelector").addEventListener("change", (event) => {
        updateWeather(event.target.value);
    });
});
