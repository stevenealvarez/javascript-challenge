// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody= d3.select("tbody");

//check data using console.log - so that correct info is displayed
console.log(tableData);

    data.forEach((sighting) => {

        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key,value]){
            console.log(key, value);

            var cell= row.append("td");
            cell.text(value);
        });
    });


// Select the submit button in the html file
var clickButton = d3.select("#filter-btn");

clickButton.on("click", function() {

d3.select("tbody").html("");

//Prevent page from refreshing---- noticed that when clicking enter for input it would refresh page
d3.event.preventDefault();

//input values 
var dateTime = d3.select("#datetime").property("value");

var selectCountry = d3.select("#country").property("value");

var selectState = d3.select("#state").property("value");

var selectCity = d3.select("#city").property("value");

var selectShape = d3.select("#shape").property("value");

// initialize tableData as filteredData
filterData = tableData;

if (dateTime) {
    filterData = filterData.filter(record => record.datetime === dateTime);
}
if (selectCountry) {
    filterData = filterData.filter(record => record.country === selectCountry);
}
if (selectState) {
    filterData = filterData.filter(record => record.state === selectState);
}
if (selectCity) {
    filterData = filterData.filter(record => record.city === selectCity);
}
if (selectShape) {
    filterData = filterData.filter(record => record.shape === selectShape);
}

// Display the filtered dataset

filterData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});
});