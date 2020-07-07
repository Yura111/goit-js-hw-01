let country = prompt("Введите страну");
if (country !== null) {
  country = country.toLowerCase();
}
let price;
switch (country) {
  case "китай":
    price = 100;
    break;
  case "чили":
    price = 250;
    break;
  case "австралия":
    price = 170;
    break;
  case "индия":
    price = 80;
    break;
  case "ямайка":
    price = 120;
    break;
  default:
    price = -1;
}
if (price !== -1) {
  country = country.charAt(0).toUpperCase() + country.slice(1);
  alert(`Доставка в ${country} будит стоить ${price} кредитов`);
} else {
  alert("В вашей стране доставка не доступна");
}
