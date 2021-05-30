const celciusInput = document.querySelector("#celcius > input");
const fanrienheitInput = document.querySelector("#fanrienheit > input");
const kelvinInput = document.querySelector("#kelvin > input");
function roundNum(num) {
  return Math.round(num * 100) / 100;
}
function celciusToFanrienheitToKelvin() {
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;
  fanrienheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}
function fanrienheitToCelciusAndKelvin() {
  const fTemp = parseFloat(fanrienheitInput.value);
  const cTemp = (fTemp - 32) * (5 / 9);
  const kTemp = (fTemp + 459.67) * (5 / 9);
  celciusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}
function kelvinToCelciusAndFanrienheit() {
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.35;
  const fTemp = (9 / 5) * (kTemp - 273) + 32;
  celciusInput.value = roundNum(cTemp);
  fanrienheitInput.value = roundNum(fTemp);
}
celciusInput.addEventListener("input", celciusToFanrienheitToKelvin);
fanrienheitInput.addEventListener("input", fanrienheitToCelciusAndKelvin);
kelvinInput.addEventListener("input", kelvinToCelciusAndFanrienheit);
