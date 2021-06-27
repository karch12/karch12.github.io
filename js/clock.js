const zegar = document.getElementById('czas');
const kalendarz = document.getElementById('kalendarz');
kalendarz.innerText = new Date().toLocaleDateString('pl-PL');

const setTime = () => {
  zegar.innerText = new Date().toLocaleTimeString('pl-PL');
}

setInterval(setTime, 1000);