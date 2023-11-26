document.addEventListener("DOMContentLoaded", function() {
  // Pizza bilgileri
  var pizzaMenu = [
      { name: "Pizza Kebap", description: "rinforzo di carne € 2,00", baby: 8, normal: 10, maxi: 24 },
      { name: "Fabry/Marco", description: "", baby: 9, normal: 11, maxi: 26 },
      { name: "Pizza Ata", description: "", baby: 10, normal: 12, maxi: 27 },
      { name: "Marinara", description: "", baby: 4, normal: 5, maxi: 12 },
      { name: "Margherita", description: "", baby: 5, normal: 6, maxi: 14 },
      { name: "Greca", description: "", baby: 6, normal: 7, maxi: 18 },
      { name: "Funghi", description: "", baby: 6, normal: 7, maxi: 18 },
      { name: "Wurstel", description: "", baby: 6, normal: 7, maxi: 18 },
      { name: "Prosciutto", description: "", baby: 6, normal: 7, maxi: 18 },
      { name: "Salsiccia", description: "", baby: 6, normal: 7, maxi: 18 },
      { name: "Patatine", description: "", baby: 6, normal: 7, maxi: 18 },
      { name: "Tonno", description: "", baby: 6, normal: 7, maxi: 18 },
      { name: "Rucola", description: "", baby: 6, normal: 7, maxi: 18 },
      { name: "Gorgonzola", description: "", baby: 6, normal: 7, maxi: 18 },
      { name: "Napoli", description: "", baby: 6, normal: 7, maxi: 18 },
      { name: "Biancaneve", description: "", baby: 6, normal: 7, maxi: 18 },
      { name: "Diavola", description: "", baby: 6, normal: 7, maxi: 18 },
      { name: "Wurstel e patatine", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Genovese", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Viennese", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Prosciutto e funghi", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Bismark", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Tonno e cipolla", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Tonno e carciofini", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Tonno e peperoni", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Vegetariana", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Primavera", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Rustica", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Boscaiola", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Parmigiana", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Valdostana", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Gorgo e cotto", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Gorgo e salamino", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Tirolese", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "Margherita speciale", description: "", baby: 7, normal: 8, maxi: 20 },
      { name: "4 Stagioni", description: "", baby: 7.50, normal: 9, maxi: 20 },
      { name: "4 Formaggi", description: "", baby: 7.50, normal: 9, maxi: 20 },
      { name: "Prosciutto e panna", description: "", baby: 7.50, normal: 9, maxi: 20 },
      { name: "Siciliana", description: "", baby: 7.50, normal: 9, maxi: 20 },
      { name: "Bufala", description: "", baby: 7.50, normal: 9, maxi: 20 },
      { name: "Crudo", description: "", baby: 7.50, normal: 9, maxi: 20 },
      { name: "Speck", description: "", baby: 7.50, normal: 9, maxi: 20 },
      { name: "Stracchino e rucola", description: "", baby: 7.50, normal: 9, maxi: 20 },
      { name: "Fresca", description: "", baby: 8, normal: 10, maxi: 24 },
      { name: "Speck e brie", description: "", baby: 8, normal: 10, maxi: 24 },
      { name: "Capricciosa", description: "", baby: 8, normal: 10, maxi: 24 },
      { name: "4 Salumi", description: "", baby: 8, normal: 10, maxi: 24 },
      { name: "Popeye", description: "", baby: 8, normal: 10, maxi: 24 },
      { name: "Saporita", description: "", baby: 8, normal: 10, maxi: 24 },
      { name: "Deliziosa", description: "", baby: 8, normal: 10, maxi: 24 },
      { name: "Delux", description: "", baby: 8, normal: 10, maxi: 24 },
      { name: "Vulcano", description: "", baby: 8, normal: 10, maxi: 24 },
      { name: "Pizzaiola", description: "", baby: 8, normal: 10, maxi: 24 },
      { name: "Salsiccia e friarielli", description: "", baby: 8, normal: 10, maxi: 24 },
      { name: "Bella Genova", description: "", baby: 8, normal: 10, maxi: 24 },
      { name: "Americana", description: "", baby: 8, normal: 10, maxi: 22 },
      { name: "Pizza Nutella", description: "", baby: 5, normal: 7, maxi: 14 },
    
  ];

  var focacceMenu = [
    { name: "Focaccia", description: "", baby: 4, normal: 5, maxi: 12.50 },
    { name: "Prosciutto crudo", description: "", baby: 6, normal: 7, maxi: 14 },
    { name: "Pomodorini e rucola", description: "", baby: 6, normal: 7, maxi: 14 },
    { name: "Crudo e bufala", description: "", baby: 7, normal: 8, maxi: 16 },
    { name: "Focaccia fresca", description: "", baby: 8, normal: 10, maxi: 18 }

];

var calzoniMenu = [
  { name: "Calzone Kebap", description: "rinforzo di carne € 2,00", baby: 8, normal: 10},
  { name: "Calzone prosciutto", description: "", baby: 6, normal: 8},
  { name: "Calzone farcito", description: "", baby: 8, normal: 10},
  { name: "Calzone diavola", description: "", baby: 6, normal: 8},
  { name: "Calzone liscio", description: "", baby: 6, normal: 7 }

];

var antipastiMenu = [
  { name: "Mini Prosciutto cotto", description: "", prezzo: 2.50 },
  { name: "Mini Salamino", description: "", prezzo: 2.50 },
  { name: "Mini Pomodoro", description: "", prezzo: 2.50 },
  { name: "Mini Wurstel", description: "", prezzo: 2.50 },
  { name: "Mini Funghi", description: "", prezzo: 2.50 },
  { name: "Mini Kebap", description: "", prezzo: 2.50 },
  { name: "Hot Dog", description: "", prezzo: 2.50 },
  { name: "Farinata Classica", description: "", prezzo: 4 },
  { name: "Farinata Farcita", description: "", prezzo: 5 },
  { name: "Trancio Margherita", description: "", prezzo: 3 },
  { name: "Trancio Farcito", description: "", prezzo: 3.50 },
  { name: "Trancio Margherita + Carne", description: "", prezzo: 5 },

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


    // Get the focacce body
    var focacceBody = document.getElementById("focacce-body");

    // Display each focaccia in the focacce table
    focacceMenu.forEach(function(focaccia) {
      var row = document.createElement("tr");

      var nameCell = document.createElement("td");
      nameCell.innerHTML = "<strong>" + focaccia.name + "</strong><p>" + focaccia.description + "</p></td>";

      var babyPriceCell = document.createElement("td");
      babyPriceCell.textContent = "€" + focaccia.baby;

      var normalPriceCell = document.createElement("td");
      normalPriceCell.textContent = "€" + focaccia.normal;

      var maxiPriceCell = document.createElement("td");
      maxiPriceCell.textContent = "€" + focaccia.maxi;

      row.appendChild(nameCell);
      row.appendChild(babyPriceCell);
      row.appendChild(normalPriceCell);
      row.appendChild(maxiPriceCell);

      focacceBody.appendChild(row);
  });

  // Calzoni

      // Get the focacce body
      var calzoniBody = document.getElementById("calzoni-body");

      // Display each focaccia in the focacce table
      calzoniMenu.forEach(function(calzone) {
        var row = document.createElement("tr");
  
        var nameCell = document.createElement("td");
        nameCell.innerHTML = "<strong>" + calzone.name + "</strong><p>" + calzone.description + "</p></td>";
  
        var babyPriceCell = document.createElement("td");
        babyPriceCell.textContent = "€" + calzone.baby;
  
        var normalPriceCell = document.createElement("td");
        normalPriceCell.textContent = "€" + calzone.normal;
  

  
        row.appendChild(nameCell);
        row.appendChild(babyPriceCell);
        row.appendChild(normalPriceCell);

  
        calzoniBody.appendChild(row);
    });


      // Antipasti

      // Get the focacce body
      var antipastiBody = document.getElementById("antipasti-body");

      // Display each focaccia in the focacce table
      antipastiMenu.forEach(function(antipasto) {
        var row = document.createElement("tr");
  
        var nameCell = document.createElement("td");
        nameCell.innerHTML = "<strong>" + antipasto.name + "</strong><p>" + antipasto.description + "</p></td>";
  
        var prezzoPriceCell = document.createElement("td");
        prezzoPriceCell.textContent = "€" + antipasto.prezzo;
  
  

  
        row.appendChild(nameCell);
        row.appendChild(prezzoPriceCell);

        antipastiBody.appendChild(row);
    });
  
  
});
