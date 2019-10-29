// Code your solution here:


// use filter to create a new array with elements
// of drivers that pass the test of:
// driver.revenue > revenue
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(driver => driver.revenue > revenue);
}

// use map to create a new element with the results of
// passing the return from driversWithRevenueOver()
// to the inside function which returns each elements
// driver.name
function driverNamesWithRevenueOver(drivers, revenue) {
     return driversWithRevenueOver(drivers, revenue).map
     (function(driver) {
         return driver.name;
     });
}

// 
function exactMatch(drivers, attribute_match) {
    return drivers.filter(function(driver) {
        let matches = false
        for (const key in attribute_match){
            matches = driver[key] === attribute_match[key]
        }
    return matches;
    });
}


// exactMatchToList()
// 7) returns an array of names for all matching drivers
// 8) returns an empty array if there is no match
