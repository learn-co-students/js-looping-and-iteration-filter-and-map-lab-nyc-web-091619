// Code your solution here:

// driversWithRevenueOver()
// ✓ returns an array of all matching drivers
// ✓ returns an empty array if there is no match
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver){
        return driver.revenue >revenue;
    }
    );
}

// driverNamesWithRevenueOver()
// ✓ returns an array of all matching drivers names as string
// ✓ returns an empty array if there is no match
function driverNamesWithRevenueOver(drivers, revenue){
    return driversWithRevenueOver(drivers, revenue).map (function(driver){
        return driver.name;
    }
    );
}


// exactMatch()
// ✓ returns an array of all matching drivers
// ✓ returns an empty array if there is no match
function exactMatch (drivers, matcher) {
    return drivers.filter(function (driver) {
      let matches = false;
  
      for (const key in matcher) {
        matches = driver[key] === matcher[key];
      }
  
      return matches;
    });
  }

  
//   exactMatchToList()
//   ✓ returns an array of names for all matching drivers
//   ✓ returns an empty array if there is no match
  function exactMatchToList(drivers, matcher){
    return exactMatch(drivers, matcher).map(function(driver){
        return driver.name;
    }
    );
  }