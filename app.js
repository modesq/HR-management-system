'use strict'
var counter = 1000;

let employee1 = {
    employeeID: function generateEmpID() {
        employeeID = counter;
        counter++;
        return this.counter;
    },
    fullName: "Ghazi Samer",
    department: "Administration",
    level: "Senior",
    imgLink: "./images/avatar-cd104213bcc8422a34755aa323557594.jpg",
    salary: function generateSalary() {
        let min = 1500;
        let max = 2000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
console.log("Employee name: " + employee1.fullName + "\n" + "Employee salary: " + employee1.salary);

let employee2 = {
    employeeID: function generateEmpID() {
        employeeID = counter;
        counter++;
        console.log(this.counter);
    },
    fullName: "Lana Ali",
    department: "Finance",
    level: "Senior",
    imgLink: "./images/avatar-c91d5e4db150c06a700b6607888b3fad.jpg",
    salary: function generateSalary() {
        let min = 1500;
        let max = 2000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
console.log("Employee name: " + employee2.fullName + "\n" + "Employee salary: " + employee2.salary);

let employee3 = {
    employeeID: function generateEmpID() {
        employeeID = counter;
        counter++;
        console.log(this.counter);
    },
    fullName: "Tamara Ayoub",
    department: "Marketing",
    level: "Senior",
    imgLink: "./images/avatar-d89bf695c57f9669f52f7bf135be4810.jpg",
    salary: function generateSalary() {
        let min = 1500;
        let max = 2000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
console.log("Employee name: " + employee3.fullName + "\n" + "Employee salary: " + employee3.salary);

let employee4 = {
    employeeID: function generateEmpID() {
        employeeID = counter;
        counter++;
        console.log(this.counter);
    },
    fullName: "Safi Walid",
    department: "Administration",
    level: "Mid-Senior",
    imgLink: "./images/avatar-cd104213bcc8422a34755aa323557594.jpg",
    salary: function generateSalary() {
        let min = 1000;
        let max = 1500;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
console.log("Employee name: " + employee4.fullName + "\n" + "Employee salary: " + employee4.salary);

let employee5 = {
    employeeID: function generateEmpID() {
        employeeID = counter;
        counter++;
        console.log(this.counter);
    },
    fullName: "Omar Zaid",
    department: "Development",
    level: "Senior",
    imgLink: "./images/avatar-bdc03af8212ca95d8506b95515cf2b1d.jpg",
    salary: function generateSalary() {
        let min = 1500;
        let max = 2000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
console.log("Employee name: " + employee5.fullName + "\n" + "Employee salary: " + employee5.salary);

let employee6 = {
    employeeID: function generateEmpID() {
        employeeID = counter;
        counter++;
        console.log(this.counter);
    },
    fullName: "Rana Saleh",
    department: "Development",
    level: "Junior",
    imgLink: "./images/avatar-aff6c6097a7c9d198d60505ecfa8feb0.jpg",
    salary: function generateSalary() {
        let min = 500;
        let max = 1000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
console.log("Employee name: " + employee6.fullName + "\n" + "Employee salary: " + employee6.salary);

let employee7 = {
    employeeID: function generateEmpID() {
        employeeID = counter;
        counter++;
        console.log(this.counter);
    },
    fullName: "Hadi Ahmad",
    department: "Finance",
    level: "Mid-Senior",
    imgLink: "./images/avatar-a9222bb88c1bcaeebb82fffc34001774.jpg",
    salary: function generateSalary() {
        let min = 1000;
        let max = 1500;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
console.log("Employee name: " + employee7.fullName + "\n" + "Employee salary: " + employee7.salary);

// function generateEmpID() {
//     employee1.employeeID = counter;
//     counter++;
//     console.log(this.counter);
//     return employee.employeeID;
// }

function generateSalary() {
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

//  console.log("Employee name: " + employee.fullName + "\n" + "Employee salary: " + employee.salary);