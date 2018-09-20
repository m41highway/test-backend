let timeSeriesData = []

// ----------------------------------------------------------------
// Always keep the latest 5 prices in the memory data store
// ---------------------------------------------------------------- 
let storeData = function (priceData) { 
 if (timeSeriesData.length == 5) {
   timeSeriesData.shift()
 }
 timeSeriesData.push(priceData)
}

let getAveragePrice = () => {
 return {
  average: timeSeriesData.map(data => data.price).reduce( function (a,b) { return Number(a) + Number(b) }) / timeSeriesData.length,
  data: timeSeriesData
 }
}

module.exports = {
 getAveragePrice: getAveragePrice,
 storeData: storeData
}