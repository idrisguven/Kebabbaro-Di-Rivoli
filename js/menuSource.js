document.addEventListener("DOMContentLoaded", function() {
  // Pizza bilgileri
  var pizzaMenu = [
      { name: "Pizza Kebap", description: "", baby: 8.99, normal: 12.99, maxi: 16.99 },
      { name: "Fabry/Marco", description: "", baby: 9.99, normal: 14.99, maxi: 18.99 },
      { name: "Pizza Ata", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Marinara", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Margherita", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Greca", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Funghi", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Wurstel", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Prosciutto", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Salsiccia", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Patatine", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Tonno", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Rucola", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Gorgonzola", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Napoli", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Biancaneve", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Diavola", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Wurstel e patatine", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Genovese", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Viennese", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Prosciutto e funghi", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Bismark", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Tonno e cipolla", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Tonno e carciofini", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Tonno e peperoni", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Vegetariana", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Primavera", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Rustica", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Boscaiola", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Parmigiana", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Valdostana", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Gorgo e cotto", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Gorgo e salamino", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Tirolese", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Margherita speciale", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "4 Stagioni", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Prosciutto e panna", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Siciliana", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Bufala", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Crudo", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Speck", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Stracchino e rucola", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Fresca", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Speck e brie", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Capricciosa", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "4 Salumi", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Popeye", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Saporita", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Deliziosa", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Delux", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Vulcano", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Pizzaiola", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Salsiccia e friarielli", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Bella Genova", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Americana", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 },
      { name: "Pizza Nutella", description: "", baby: 10.99, normal: 15.99, maxi: 20.99 }


      
  ];

  // Menu bodysi
  var menuBody = document.getElementById("menu-body");

  // Pizza tablosu ayar
  pizzaMenu.forEach(function(pizza) {
      var row = document.createElement("tr");

      var nameCell = document.createElement("td");
      nameCell.innerHTML = "<strong>" + pizza.name + "</strong><p>" + pizza.description + "</p></td>";

      var babyPriceCell = document.createElement("td");
      babyPriceCell.textContent = "€" + pizza.baby;

      var normalPriceCell = document.createElement("td");
      normalPriceCell.textContent = "€" + pizza.normal;

      var maxiPriceCell = document.createElement("td");
      maxiPriceCell.textContent = "€" + pizza.maxi;

      row.appendChild(nameCell);
      row.appendChild(babyPriceCell);
      row.appendChild(normalPriceCell);
      row.appendChild(maxiPriceCell);

      menuBody.appendChild(row);
  });
});