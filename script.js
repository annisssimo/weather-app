xmlDoc = loadXMLDoc("weatherReport.xml");

const tableBody = document.querySelector("#weather-table-body");
const convertBtn = document.querySelector('#unit');

function createWeatherTable() {
    const weatherList = xmlDoc.getElementsByTagName("weatherRecord");

    for (let i = 0; i < weatherList.length; i++) {
        const record = weatherList[i];
        const row = tableBody.insertRow(i);
        row.insertCell(0).textContent = record.getElementsByTagName("date")[0].textContent;
        row.insertCell(1).textContent = record.getElementsByTagName("city")[0].textContent;
        row.insertCell(2).textContent = `${record.getElementsByTagName("temperature")[0].textContent} °C`;
    }
}

function toggleButton() {
    if (convertBtn.textContent === "Convert to Celsius") {
        convertBtn.textContent = "Convert to Fahrenheit";
    } else {
        convertBtn.textContent = "Convert to Celsius";
    }
}

createWeatherTable();

convertBtn.addEventListener('click', () => {
    replaceTemperatures();
    toggleButton();
});