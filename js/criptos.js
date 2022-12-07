let binance = 'https://api.binance.com/api/v3/ticker/price'
fetch(binance)
    .then(respuesta => respuesta.json())
    .then(datos => mostrarData(datos))
    .catch(error => console.log(error))


const mostrarData = async (data) => {
  
    document.getElementById('btcusdt').innerHTML = `<tr><td>${data[11].symbol}</td><td>${data[11].price}</td></tr>`
    document.getElementById('ethusdt').innerHTML = `<tr><td>${data[12].symbol}</td><td>${data[12].price}</td></tr>`
    document.getElementById('bnbusdt').innerHTML = `<tr><td>${data[98].symbol}</td><td>${data[98].price}</td></tr>`
    
}
