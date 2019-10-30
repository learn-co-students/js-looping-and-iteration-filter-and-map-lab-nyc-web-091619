// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
    const matchingDrivers = drivers.filter(driver => driver.revenue > amount);
    return matchingDrivers;
};

function driverNamesWithRevenueOver(drivers, amount) {
    const matchingDriverNames = driversWithRevenueOver(drivers, amount).map(function(driver) {
        return driver.name;
    });

    return matchingDriverNames;
};

function exactMatch(drivers, person) {
    const matchingDriverObjs = drivers.filter(driver => driver.name === person.name || driver.revenue === person.revenue);

    return matchingDriverObjs;
}

function exactMatchToList(drivers, person) {
    const matchingDriverArray = exactMatch(drivers, person).map(driver => driver.name);

    return matchingDriverArray;
}
