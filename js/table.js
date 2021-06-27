var shops = [
    {"Miejscowość": "Bydgoszcz",
    "Ulica": "Kościuszki",
    "Kod pocztowy": "85-461",
    "Numer telefonu": "+48 693 334 748",
    "Właściciel": "Marian Górski"
    },
    {"Miejscowość": "Świecie",
    "Ulica": "Wojska Polskiego",
    "Kod pocztowy": "86-100",
    "Numer telefonu": "+48 598 235 475",
    "Właściciel": "Marta Sosna"
    },
    {"Miejscowość": "Poznań",
    "Ulica": "Piotrowo",
    "Kod pocztowy": "60-967",
    "Numer telefonu": "+48 111 224 322",
    "Właściciel": "Zenon Lew"
    },
    {"Miejscowość": "Gdynia",
    "Ulica": "Świętojańska",
    "Kod pocztowy": "81-222",
    "Numer telefonu": "+48 756 643 258",
    "Właściciel": "Jakub Malinowski"
    },
    {"Miejscowość": "Gdańsk",
    "Ulica": "Długa",
    "Kod pocztowy": "80-761",
    "Numer telefonu": "+48 233 888 669",
    "Właściciel": "Małgorzata Lipa"
    },
    {"Miejscowość": "Warszawa",
    "Ulica": "Marszałkowska",
    "Kod pocztowy": "01-464",
    "Numer telefonu": "+48 789 654 123",
    "Właściciel": "Wojciech Mak"
    },
    {"Miejscowość": "Wrocław",
    "Ulica": "Oławska",
    "Kod pocztowy": "51-416",
    "Numer telefonu": "+48 321 789 546",
    "Właściciel": "Lena Kowalska"
    },
    {"Miejscowość": "Kraków",
    "Ulica": "Mariacka",
    "Kod pocztowy": "31-403",
    "Numer telefonu": "+48 741 369 528",
    "Właściciel": "Zbigniew Nowak"
    },
    {"Miejscowość": "Białystok",
    "Ulica": "Prosta",
    "Kod pocztowy": "15-102",
    "Numer telefonu": "+48 254 697 135",
    "Właściciel": "Magdalena Tracz"
    },
    {"Miejscowość": "Katowice",
    "Ulica": "Stroma",
    "Kod pocztowy": "40-203",
    "Numer telefonu": "+48 645 289 327",
    "Właściciel": "Mariusz Cegła"
    },
    {"Miejscowość": "Rzeszów",
    "Ulica": "Lipowa",
    "Kod pocztowy": "35-085",
    "Numer telefonu": "+48 493 317 846",
    "Właściciel": "Antoni Walec"
    },
]

var col = [];
for (var i = 0; i < shops.length; i++) {
    for (var key in shops[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}

var table = document.createElement("table");
table.style.cssText = "width: 100%;"

var tr = table.insertRow(-1);

for (var i = 0; i < col.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = col[i];
    tr.appendChild(th);
}

for (var i = 0; i < shops.length; i++) {

    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = shops[i][col[j]];
    }
}

var divContainer = document.getElementById("showData");
divContainer.innerHTML = "";
divContainer.appendChild(table);
