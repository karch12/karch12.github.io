let licznik = localStorage.getItem("licznik");

if (!licznik) {
  licznik = 0;
}
licznik++;

localStorage.setItem("licznik", licznik);
document.getElementById('licznik').innerText = licznik;