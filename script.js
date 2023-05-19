// on window load
window.onload = function() {
    // create chart js bar chart for id myChart
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        // type of chart
        type: 'bar',
        // data
        data: {
            // labels
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            // datasets
            datasets: [{
                // label
                label: '# of Votes',
                // data
                data: [12, 19, 3, 5, 2, 3],
                // backgroundColor
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                  ],
                  // borderColor
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                  ],
                  // borderWidth
                  borderWidth: 1
            }]
        },
        // options
        options: {
            // scales
            scales: {
                // yAxes
                yAxes: [{
                    // ticks
                    ticks: {
                        // beginAtZero
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}