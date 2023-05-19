// on window load
window.onload = function () {
  function getIncomeValues() {
    // get input value for january income
    var januaryIncome = document.getElementById("januaryIncome").value;
    // get input value for february income
    var februaryIncome = document.getElementById("februaryIncome").value;
    // get input value for march income
    var marchIncome = document.getElementById("marchIncome").value;
    // get input value for april income
    var aprilIncome = document.getElementById("aprilIncome").value;
    return [januaryIncome, februaryIncome, marchIncome, aprilIncome];
  }

  function getExpenseValues() {
    // get input value for january expense
    var januaryExpense = document.getElementById("januaryExpenses").value;
    // get input value for february expense
    var februaryExpense = document.getElementById("februaryExpenses").value;
    // get input value for march expense
    var marchExpense = document.getElementById("marchExpenses").value;
    // get input value for april expense
    var aprilExpense = document.getElementById("aprilExpenses").value;
    return [januaryExpense, februaryExpense, marchExpense, aprilExpense];
  }

  // create chart js bar chart for id myChart
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    // type of chart
    type: "bar",
    // data
    data: {
      // labels
      labels: ["January", "February", "March", "April"],
      // datasets
      datasets: [
        {
          // label
          label: "Expenses",
          // data
          data: getExpenseValues(),
          // backgroundColor
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          // borderColor
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          // borderWidth
          borderWidth: 1,
        },
        {
          // label
          label: "Income",
          // data
          data: getIncomeValues(),
          // backgroundColor
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          // borderColor
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          // borderWidth
          borderWidth: 1,
        },
      ],
    },
    // options
    options: {
      // scales
      scales: {
        // yAxes
        yAxes: [
          {
            // ticks
            ticks: {
              // beginAtZero
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  // download function
  document.getElementById("download").addEventListener("click", function () {
    // get canvas
    var canvas = document.getElementById("myChart");
    // get image
    var image = canvas.toDataURL("image/png", 1.0);
    // create link
    var link = document.createElement("a");
    // set href
    link.href = image;
    // set download
    link.download = "myChart.png";
    // click link
    link.click();
  });
  // click handler for chart-tab
  document.getElementById("chart-tab").addEventListener("click", function () {
    myChart.data.datasets[0].data = getExpenseValues();
    myChart.data.datasets[1].data = getIncomeValues();
    // update chart
    myChart.update();
  });
};
