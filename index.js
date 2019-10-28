function driversWithRevenueOver(coll, amount) {
  return coll.filter(function(driver) {
    return driver.revenue > amount;
  });
}

function driverNamesWithRevenueOver(coll, amount) {
  return driversWithRevenueOver(coll, amount).map(driver => driver.name);
}

function exactMatch(coll, attr) {
  const key = Object.keys(attr)[0];
  const value = attr[key];
  return coll.filter(driver => driver[key] === value);
}

function exactMatchToList(coll, attr) {
  return exactMatch(coll, attr).map(driver => driver.name);
}
