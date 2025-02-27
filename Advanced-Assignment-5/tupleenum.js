"use strict";
var DriverStatus;
(function (DriverStatus) {
    DriverStatus[DriverStatus["Available"] = 0] = "Available";
    DriverStatus[DriverStatus["OnTrip"] = 1] = "OnTrip";
    DriverStatus[DriverStatus["Offline"] = 2] = "Offline";
})(DriverStatus || (DriverStatus = {}));
const driver = [101, "Diya", DriverStatus.Available];
console.log(driver);
