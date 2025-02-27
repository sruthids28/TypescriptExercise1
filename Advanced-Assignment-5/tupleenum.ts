enum DriverStatus {
    Available,
    OnTrip,
    Offline
}

type DriverInfo = [number, string, DriverStatus];
const driver: DriverInfo = [101, "Diya", DriverStatus.Available];
console.log(driver);