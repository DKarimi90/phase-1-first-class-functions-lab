// Defining a function and assigning it an anonymous; 
const returnFirstTwoDrivers = function(drivers) {
return drivers.slice(0, 2);  
}

// Declaring a variable and assigning it to an anonymous function; 
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(drivers.length -2); 
}

const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
// creating a high-order function; 
function createFareMultiplier(anInteger){
        return function(fare){
          return fare*anInteger;
        };
    }

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
    return driversToReturn(arrayOfDrivers);
  };