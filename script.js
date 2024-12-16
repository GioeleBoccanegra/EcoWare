const nkwh = document.querySelector("[data-em-kwh]");
const nkm = document.querySelector("[data-em-km]");
const nkg = document.querySelector("[data-em-kg]");
const convertkwh = document.querySelector("[data-kwh-convert]");
const convertkm = document.querySelector("[data-km-convert]");
const convertkg = document.querySelector("[data-kg-convert]");
const resultkwh = document.querySelector("[data-em-kwh-r]");
const resultkm = document.querySelector("[data-em-km-r]");
const resultkg = document.querySelector("[data-em-kg-r]");
const converttotale = document.querySelector("[data-totale-convert]");
const resulttotale = document.querySelector("[data-totale]");



function kwhemissioni(kwh) {
  return Number(kwh * 0.233)
}

function kmemissioni(km) {
  return Number(km * 0.21)
}

function kgemissioni(kg) {
  return Number(kg * 7.1)
}


function totale(kwh, km, kg) {
  const emissioniEnergetiche = kwhemissioni(kwh);
  const emissioniTrasporto = kmemissioni(km);
  const emissioniCarne = kgemissioni(kg)
  return emissioniEnergetiche + emissioniTrasporto + emissioniCarne;
}



convertkwh.addEventListener("click", function () {
  if (!isNaN(Number(nkwh.value)) && nkwh.value != "") {
    console.log(kwhemissioni(nkwh.value))
    resultkwh.innerHTML = ` hai emesso ${kwhemissioni(nkwh.value)} kg di C02 utilizzando ${nkwh.vale} kwh `
  } else {
    alert("inserisci un numero per la conversione")
  }
})

convertkm.addEventListener("click", function () {
  if (!isNaN(Number(nkm.value)) && nkm.value != "") {
    console.log(kmemissioni(nkm.value))
    resultkm.innerHTML = ` hai emesso ${kwhemissioni(nkm.value)} kg di C02 utilizzando ${nkm.vale} km `
  } else {
    alert("inserisci un numero per la conversione")
  }
})


convertkg.addEventListener("click", function () {
  if (!isNaN(Number(nkg.value)) && nkg.value != "") {
    console.log(kgemissioni(nkm.value))
    resultkg.innerHTML = ` hai emesso ${kgemissioni(nkg.value)} kg di C02 utilizzando ${nkg.vale} km `
  } else {
    alert("inserisci un numero per la conversione")
  }
  return
})


converttotale.addEventListener("click", function () {
  if (resultkwh.textContent != "" && resultkm.textContent != "" && resultkg.textContent != "") {
    console.log(totale(nkwh.value, nkm.value, nkg.value))
    resulttotale.innerHTML = ` hai emesso in totale ${totale(nkwh.value, nkm.value, nkg.value)} kg di C02`
  } else {
    alert("compila e converti tutti i campi")
    return
  }

})




