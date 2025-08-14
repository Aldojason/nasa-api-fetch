const API_KEY = "MC0CGSE4ghquv6LxP5bO3PpLEbbDLaojy1NdhqWv"; // Replace with your NASA API Key
const fetchBtn = document.getElementById("fetchBtn");
const dateInput = document.getElementById("dateInput");
const apodContainer = document.getElementById("apodContainer");
const loader = document.getElementById("loader");
const title = document.getElementById("title");
const apodImage = document.getElementById("apodImage");
const description = document.getElementById("description");

// Set max date to today
dateInput.max = new Date().toISOString().split("T")[0];

fetchBtn.addEventListener("click", () => {
  const date = dateInput.value;
  if (!date) {
    alert("Please select a date!");
    return;
  }

  loader.classList.remove("hidden");
  apodContainer.classList.add("hidden");

  fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
    .then(response => response.json())
    .then(data => {
      loader.classList.add("hidden");
      apodContainer.classList.remove("hidden");

      title.textContent = data.title;
      apodImage.src = data.url;
      description.textContent = data.explanation;
    })
    .catch(error => {
      loader.classList.add("hidden");
      alert("Error fetching data: " + error);
    });
});