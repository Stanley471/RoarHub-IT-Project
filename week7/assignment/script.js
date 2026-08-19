// define dom elements
const weatherForm = document.getElementById("weatherForm");
const checkBtn = document.getElementById("submitBtn");
const latInput = document.getElementById("lat");
const lonInput = document.getElementById("lon");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", async () => {
  event.preventDefault();
  const lat = latInput.value.trim();
  const lon = lonInput.value.trim();
  if (!lat || !lon) {
    resultDiv.innerHTML = "<p style='color: red;'>Error: Please enter both Latitude and Longitude.</p>";
    return;
  }
  resultDiv.textContent = "Loading...";
  try {8
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const result = await fetch(url);
    const data = await result.json();
    const temp = data.current_weather.temperature;
    const windspeed = data.current_weather.windspeed;

    resultDiv.innerHTML = `
          <p>Temperature: ${temp}°C</p>
          <p>Wind Speed: ${windspeed} km/h</p>
        `;
  } catch (error) {
    resultDiv.textContent = "Error: " + error.message;
  }
});
