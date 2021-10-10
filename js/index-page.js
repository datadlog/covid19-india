let elemcovidConfirmedAll = document.getElementById("covidConfirmedAll");
if (elemcovidConfirmedAll !== null) {
    document.getElementById("covidConfirmedAll").innerHTML = covidAPIStatewise[0]["confirmed"];
}

let elemcovidDeltaConfirmedAll = document.getElementById("covidDeltaConfirmedAll");
if (elemcovidDeltaConfirmedAll !== null) {
    document.getElementById("covidDeltaConfirmedAll").innerHTML = covidAPIStatewise[0]["deltaconfirmed"];
}

let elemcovidActiveAll = document.getElementById("covidActiveAll");
if (elemcovidActiveAll !== null) {
    document.getElementById("covidActiveAll").innerHTML = covidAPIStatewise[0]["active"];
}

let elemcovidRecoveredAll = document.getElementById("covidRecoveredAll");
if (elemcovidRecoveredAll !== null) {
    document.getElementById("covidRecoveredAll").innerHTML = covidAPIStatewise[0]["recovered"];
}

let elemcovidDeltaRecoveredAll = document.getElementById("covidDeltaRecoveredAll");
if (elemcovidDeltaRecoveredAll !== null) {
    document.getElementById("covidDeltaRecoveredAll").innerHTML = covidAPIStatewise[0]["deltarecovered"];
}
let elemcovidDeathsAll = document.getElementById("covidDeathsAll");
if (elemcovidDeathsAll !== null) {
    document.getElementById("covidDeathsAll").innerHTML = covidAPIStatewise[0]["deaths"];
}

let elemcovidDeltaDeathsAll = document.getElementById("covidDeltaDeathsAll");
if (elemcovidDeltaDeathsAll !== null) {
    document.getElementById("covidDeltaDeathsAll").innerHTML = covidAPIStatewise[0]["deltadeaths"];
}



var titles = ["state", "confirmed", "active", "recovered", "deaths"]

var table = d3.select('#d3StatewiseData').append('table').classed("table align-items-center table-flush", true)

var headers = table.append('thead').classed("thead-light", true)
    .append('tr')
    .selectAll('th')
    .data(titles).
    enter()
    .append('th')
    .attr("scope", "col")
    .text(function(d) {
        return d.toUpperCase();
    })
    .on('click', function(d) {
        headers.attr('class', 'header');

        if (sortAscending) {
            rows.sort(function(a, b) {
                return b[d] < a[d];
            });
            sortAscending = false;
            this.className = 'aes';
        } else {
            rows.sort(function(a, b) {
                return b[d] > a[d];
            });
            sortAscending = true;
            this.className = 'des';
        }

    });



var rows = table.selectAll('tr')
    .data(covidAPIStatewise.slice(0)).enter()
    .append('tr');

rows.selectAll('td')
    .data(function(d) {
        return titles.map(function(k) {
            return {
                'value': d[k],
                'name': k
            };
        });
    }).enter()
    .append('td')
    .attr("scope", "row")
    .attr('data-th', function(d) {
        return d.name;
    })
    .text(function(d) {
        return d.value;
    });


/* StateWise Daily */

var stateWiseDailytitles = ["state", "deltaconfirmed", "deltarecovered", "deltadeaths"]


var stateWiseDailytable = d3.select('#d3StatewiseDataDaily').append('table').classed("table align-items-center table-flush", true)

var stateWiseDailyheaders = stateWiseDailytable.append('thead').classed("thead-light", true)
    .append('tr')
    .selectAll('th')
    .data(stateWiseDailytitles).
    enter()
    .append('th')
    .attr("scope", "col")
    .text(function(d) {
        return d.toUpperCase();
    })


var stateWiseDailyrows = stateWiseDailytable.selectAll('tr')
    .data(covidAPIStatewise.slice(0)).enter()
    .append('tr');

stateWiseDailyrows.selectAll('td')
    .data(function(d) {
        return stateWiseDailytitles.map(function(k) {
            return {
                'value': d[k],
                'name': k
            };
        });
    }).enter()
    .append('td')
    .attr("scope", "row")
    .attr('data-th', function(d) {
        return d.name;
    })
    .text(function(d) {
        return d.value;
    });