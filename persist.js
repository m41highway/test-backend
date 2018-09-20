let getAverage = function (timeSeriesData) {
 return {
  average: timeSeriesData.map(data => data.price).reduce( (a,b) => a + b) / timeSeriesData.length,
  data: timeSeriesData
 }
}

module.exports = {
 getAverage: getAverage
}