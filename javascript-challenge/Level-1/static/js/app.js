// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody= d3.select("tbody");

//check data using console.log - so that correct info is displayed
console.log(tableData);

//using data from data.js add data to the table
function createTable(data){
    tbody.html("");

    data.forEach((sighting) => {

        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key,value]){
            console.log(key, value);

            var cell= row.append("td");
            cell.text(value);
        });
    });
}

//selecting button function
 function clickButton() {
     var inputElement = d3.select("#datetime");

     var inputValue= inputElement.property("value");
     let filterData = tableData;

     console.log(inputValue);
     console.log(tableData);

     if (inputValue){
         filterData= tableData.filter(sightings => sightings.datetime === inputValue);
     }

     console.log(filterData);
    
     createTable(filterData);
 }

 var button= d3.select("#filter-btn");
 button.on("click", clickButton);

 createTable(tableData);
