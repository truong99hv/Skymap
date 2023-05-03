import getData from "./getData.js";
import { Api } from "./router.js";

async function drawChart() {
  const chart = await getData(Api.chartDetail);
  const Xvalues = [];
  const Yvalues = [];
  const chartData = chart.hesinhthai;
  chartData.forEach((data) => {
    Xvalues.push(data.ten);
    Yvalues.push(data.species_count);
  });
  var barColors = ["#000", "#333", "#9b4f96", "#d81e05", "#fc7f3f"];
  new Chart("myChart", {
    type: "doughnut",
    data: {
      // labels: Xvalues,

      datasets: [
        {
          backgroundColor: barColors,
          data: Yvalues,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}
export default drawChart;
