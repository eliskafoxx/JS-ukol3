

const datum =(prompt("Zadej datum ve formátu dd.mm.yyyy:"))

const den = datum.slice (0, 2)
const mesic = datum.slice (3, 5)
const rok = datum.slice (6, 10)

const parseDate = "day: " + den + ", month: " + mesic + ", year: " + rok

document.body.innerHTML += parseDate
