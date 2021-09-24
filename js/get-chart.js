jQuery(document).ready(function($) {
    getChart();
    function getChart(){
        let myChart = document.getElementById('myChart').getContext('2d');
        // Global Options
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
    
        const data = ["08/09/2021","10/12/2021","12/03/2021","25/03/2021"];
        let massPopChart = new Chart(myChart, {
            type: 'line',
            data: {
                labels: data,
                datasets: [{
                        label: 'Success',
                        yAxisID: 'A',
                        data: [0, 80000, 106000, 303600],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.6)',
                        ],
                    },
                    {
                        label: 'Error',
                        yAxisID: 'B',
                        data: [0,1],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                        ],
                    },
                    {
                        label: 'Latency',
                        yAxisID: 'B',
                        data: [0, 1],
                        backgroundColor: [
                            'gray',
                        ],
                    },
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        id: 'A',
                        type: 'linear',
                        position: 'left',
                    }, {
                        id: 'B',
                        type: 'linear',
                        position: 'right',
                        ticks: {
                            max: 1,
                            min: 0
                        }
                    }]
                }
            }
        });
    }
    
});

