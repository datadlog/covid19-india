
let reportstoragecovidAPIStatewise = JSON.parse( sessionStorage.storagecovidAPIStatewise );

reportstoragecovidAPIStatewise= reportstoragecovidAPIStatewise.slice(1)

let reportcovidStateWisestate = [];
let reportcovidStateWisestatecode = [];
let reportcovidStateWiseConfirmed = [];
let reportcovidStateWiseActive = [];
let reportcovidStateWisedeaths = [];
let reportcovidStateWiserecovered = [];

for (let jsonValue in reportstoragecovidAPIStatewise)
{
    reportcovidStateWisestatecode=reportcovidStateWisestatecode.concat(reportstoragecovidAPIStatewise[jsonValue].statecode);
    reportcovidStateWisestate=reportcovidStateWisestate.concat(reportstoragecovidAPIStatewise[jsonValue].state);
    reportcovidStateWiseConfirmed=reportcovidStateWiseConfirmed.concat(reportstoragecovidAPIStatewise[jsonValue].confirmed);
    reportcovidStateWiseActive=reportcovidStateWiseActive.concat(reportstoragecovidAPIStatewise[jsonValue].active);
    reportcovidStateWisedeaths=reportcovidStateWisedeaths.concat(reportstoragecovidAPIStatewise[jsonValue].deaths);
    reportcovidStateWiserecovered=reportcovidStateWiserecovered.concat(reportstoragecovidAPIStatewise[jsonValue].recovered);
}

window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 600, 70)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

if (document.getElementById("statewiseLineChart") !== null) {

    let statewiseLineChart = document.getElementById('statewiseLineChart');

    let devstatewiseLineChart = new Chart(statewiseLineChart, {
        type: 'line',
        data: {
            labels: reportcovidStateWisestatecode,
            datasets: [
                {
                    label: 'CONFIRMED',
                    data: reportcovidStateWiseConfirmed,
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    fill: true,
                    pointStyle: 'dash',
                }
                , {
                    label: 'ACTIVE',
                    data: reportcovidStateWiseActive,
                    backgroundColor: window.chartColors.orange,
                    borderColor: window.chartColors.orange,
                    pointStyle: 'dash',
                }
                , {
                    label: 'RECOVERED',
                    data: reportcovidStateWiserecovered,
                    backgroundColor: window.chartColors.green,
                    borderColor: window.chartColors.green,
                    pointStyle: 'dash',
                }
                , {
                    label: 'DECEASED',
                    data: reportcovidStateWisedeaths,
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    pointStyle: 'dash',
                }
            ]
        },
        options: {
            responsive: true,
            legend: {
                display: true,
                labels: {
                    boxWidth: 10
                }
            },
            plugins: {
                datalabels: {
                    color: 'black',
                    display:false,
                    formatter: Math.round
                }
            },
            title: {
                display: false,
                text: "Statewise Line Chart"
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true,

            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            },
            animation: {
                duration: 6000,
                onProgress: function (animation) {
                    statewiseLineChart.value = animation.currentStep / animation.numSteps;
                },
                onComplete: function () {
                    window.setTimeout(function () {
                        statewiseLineChart.value = 0;
                    }, 6000);

                }
            },
        }

    });

}

if (document.getElementById('statewiseBarChart') !== null) {

    let statewiseBarChart = document.getElementById('statewiseBarChart');

    let devstatewiseBarChart = new Chart(statewiseBarChart, {
        type: 'bar',
        data: {
            labels: reportcovidStateWisestatecode,
            datasets: [
                {
                    label: 'CONFIRMED',
                    data: reportcovidStateWiseConfirmed,
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    fill: false,
                }
                , {
                    label: 'ACTIVE',
                    data: reportcovidStateWiseActive,
                    backgroundColor: window.chartColors.orange,
                    borderColor: window.chartColors.orange,
                    fill: false,

                }
                , {
                    label: 'RECOVERED',
                    data: reportcovidStateWiserecovered,
                    backgroundColor: window.chartColors.green,
                    borderColor: window.chartColors.green,
                    fill: false,
                }
                , {
                    label: 'DECEASED',
                    data: reportcovidStateWisedeaths,
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            legend: {
                display: true,
                labels: {
                    boxWidth: 10
                }
            },
            plugins: {
                datalabels: {
                    color: 'black',
                    display:false,
                    formatter: Math.round
                }
            },
            title: {
                display: false,
                text: "Statewise Bar Chart"
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true,

            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    barPercentage: 0.8,
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            },
            animation: {
                duration: 6000,
                onProgress: function (animation) {
                    statewiseBarChart.value = animation.currentStep / animation.numSteps;
                },
                onComplete: function () {
                    window.setTimeout(function () {
                        statewiseBarChart.value = 0;
                    }, 6000);



                }
            },
        }

    });
}

for (let loopvalue in reportcovidStateWisestate) {

    /*Each State*/
    if (document.getElementById('statewiseBarChart_S'.concat(loopvalue)) !== null) {

        let eachStatewiseBarChart = document.getElementById('statewiseBarChart_S'.concat(loopvalue));

        let deveachStatewiseBarChart = new Chart(eachStatewiseBarChart, {
            type: 'horizontalBar',
            data: {
                labels: [""],
                datasets: [
                    {
                        label: 'CONFIRMED',
                        data: [reportcovidStateWiseConfirmed[loopvalue]],
                        backgroundColor: window.chartColors.blue,
                        borderColor: window.chartColors.blue,
                        fill: false,
                    }
                    , {
                        label: 'ACTIVE',
                        data: [reportcovidStateWiseActive[loopvalue]],
                        backgroundColor: window.chartColors.orange,
                        borderColor: window.chartColors.orange,
                        fill: false,

                    }
                    , {
                        label: 'RECOVERED',
                        data: [reportcovidStateWiserecovered[loopvalue]],
                        backgroundColor: window.chartColors.green,
                        borderColor: window.chartColors.green,
                        fill: false,
                    }
                    , {
                        label: 'DECEASED',
                        data: [reportcovidStateWisedeaths[loopvalue]],
                        backgroundColor: window.chartColors.red,
                        borderColor: window.chartColors.red,
                        fill: false,
                    }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display: true,
                    labels: {
                        boxWidth: 10
                    }
                },
                plugins: {
                    datalabels: {
                        color: 'black',
                        align: 'end',
                        display: function (context) {
                            return context.dataset.data[context.dataIndex] >= 0;
                        },
                        font: {
                            weight: 'lighter'

                        },
                        formatter: Math.round
                    }
                },
                title: {
                    display: true,
                    text: reportcovidStateWisestate[loopvalue]
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,

                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: false
                        },

                    }],
                    yAxes: [{

                        gridLines: {
                            display: false
                        },
                        barPercentage: 1,
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                },
                animation: {
                    duration: 5000,
                    onProgress: function (animation) {
                        eachStatewiseBarChart.value = animation.currentStep / animation.numSteps;
                    },
                    onComplete: function () {
                        window.setTimeout(function () {
                            eachStatewiseBarChart.value = 0;
                        }, 5000);
                    }
                },


            }

        });
    }
}
/*Each State*/

