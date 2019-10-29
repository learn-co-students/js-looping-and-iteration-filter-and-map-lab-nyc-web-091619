function driversWithRevenueOver(drivers, amount) {
    return drivers.filter( function (driver) {
        return driver.revenue > amount
    });
}

function driverNamesWithRevenueOver(drivers, amount) {
    return driversWithRevenueOver(drivers, amount)
    .map( function (driver) {
       return driver.name
    });
}

function exactMatch(drivers, var1) {
    return drivers.filter(function (driver) {
        let isMatch = false;

        for (const key in var1) {
            isMatch = driver[key] === var1[key]
        }

        return isMatch
    });
} 

function exactMatchToList(drivers, var1) {
    return exactMatch(drivers, var1) 
    .map(function (driver) {
        return driver.name
    });
}