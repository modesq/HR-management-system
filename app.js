let employee = { employeeID, fullName, department, level, imgLink, salary };

var counter = 1000;

function generateEmpID(employee) {
    employee.employeeID = counter;
    this.counter++;
    return employee;
}

function generateSalary(employee) {
    if (employee.level === "Senior") {
        let min = 1500;
        let max = 2000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (employee.level === "Mid-Senior") {
        let min = 1000;
        let max = 1500;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (employee.level === "Junior") {
        let min = 500;
        let max = 1000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

var employee1 = new employee(generateEmpID(employee1), "Ghazi Samer", "Administration", "Senior", "/images/avatar-cd104213bcc8422a34755aa323557594.jpg", generateSalary(employee1));
console.log("Employee name: " + employee.fullName + "\n" + "Employee salary: " + employee.salary)