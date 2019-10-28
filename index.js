function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function(driver){
        return driver.revenue > revenue
    })
}

// function driverNamesWithRevenueOver(drivers, revenue) {
//     return drivers.filter(function(driver){
//         return driver.revenue > revenue 
//     }).map(function(driver){
//         return driver.name
//     })
// }

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue)
    .map(function(driver){
        return driver.name
    })
}

function exactMatch(drivers, attributeObj) {
    return drivers.filter(function(driver){
        let same = false
        for (const key in attributeObj) {
            same = driver[key] === attributeObj[key]
        }
    return same;
    })
}

// function exactMatchToList(drivers, attributeObj) {
//     return drivers.filter(function(driver){
//         let same = false
//         for (const key in attributeObj) {
//             same = driver[key] === attributeObj[key]
//         }
//     return same
//     }).map(function(driver){
//         debugger;
//         return driver.name
//     })
// }

function exactMatchToList(drivers, attributeObj) {
    return exactMatch(drivers, attributeObj)
    .map(function(driver){
    return driver.name
    })
}
