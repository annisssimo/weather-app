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

function convertToFahrenheit(celsiusTemp) {
    return Math.round((celsiusTemp * 9/5) + 32);
}

function convertToCelsius(fahrenheitTemp) {
    return Math.round((fahrenheitTemp - 32) * 5/9);
}

function replaceTemperatures() {
    const weatherList = xmlDoc.getElementsByTagName("weatherRecord");

    for (let i = 0; i < weatherList.length; i++) {
        const record = weatherList[i];
        const currentCell = record.getElementsByTagName("temperature")[0];
        const currentCellValue = currentCell.textContent;

        let convertedTemp, unit;

        if (convertBtn.textContent === "Convert to Celsius") {
            convertedTemp = convertToCelsius(parseInt(currentCellValue, 10));
            unit = '°C';
        } else {
            convertedTemp = convertToFahrenheit(parseInt(currentCellValue, 10));
            unit = '°F';
        }

        currentCell.textContent = `${convertedTemp} ${unit}`;
        tableBody.rows[i].cells[2].textContent = `${convertedTemp} ${unit}`;
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