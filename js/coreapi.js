var covidapiurl = "https://api.covid19india.org/data.json"

function Get(covidapiurl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", covidapiurl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

var apidata = JSON.parse(Get(covidapiurl));
var covidAPIsummary = apidata


var covidAPIStatewise = apidata["statewise"]

sessionStorage.storagecovidAPIStatewise=JSON.stringify(covidAPIStatewise);