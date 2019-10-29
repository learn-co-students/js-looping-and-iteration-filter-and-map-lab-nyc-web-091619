// Code your solution here:


// use filter to create a new array with elements
// of drivers that pass the test of:
// driver.revenue > revenue
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(driver => driver.revenue > revenue);
}

// use map() method on the results (return) of the
// driversWithRevenueOver() (above) to process/iterate
// through each of the drivers in the array and return
// a new, non-destructively created array that contains
// the driver.name of each element of the old array
function driverNamesWithRevenueOver(drivers, revenue) {
     return driversWithRevenueOver(drivers, revenue).map
     (function(driver) {
         return driver.name;
     });
}

// pass array of drivers objects in format:
// { name: 'Sally', revenue: 400 },
// through a filter.  Set boolean variable of matches
// to false, to start, then iterate through each of
// the keys of the second argument, attribute match,
// which comes in the form of:
// { name: 'Sally' }
// if the data stored at the driver[key] value matches
// the attribute data at the same key, then set the
// boolean matches to the truthy or falsey result.
// This will then be passed up to the 'filter()' method
// which will return all truthy results as parts of its
// newly created, non-destructive, array to be caller
// to the caller

function exactMatch(drivers, attribute_match) {
    return drivers.filter(function(driver) {
        let matches = false
        for (const key in attribute_match){
            matches = driver[key] === attribute_match[key]
        }
        return matches;
    });
}

// Takes the return from the exactMatch function, which
// will return an array with all matching javascript obs
// and then uses map() method to iterate over each and to
// create a new, non-destruvely created array that will 
// return the driver.name of each of the elements.

function exactMatchToList(drivers, attribute_match) {
    return exactMatch(drivers, attribute_match).map(function(driver) {
        return driver.name;
    });
}
