const name = document.querySelector("#name")
const city = document.querySelector("#city")
const search = document.querySelector("#search")
const pic = document.querySelector("#pic")
const temp = document.querySelector("#temperature")
const humid = document.querySelector("#humidity")
const wind = document.querySelector("#wind")
const weather = document.querySelector("#weather")
const history = document.querySelector("#history")
const days = document.querySelector("#days")

let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

const APIK = "252319c9d59965743b1509362af81204";
