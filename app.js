'use strict'

var employees = [];
var counter = 1000;

function Employee(fullName, department, level, imgLink) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgLink = imgLink;
    this.salary = generateSalary(level);
    this.employeeID = generateEmpID();

    employees.push(this);
}

window.addEventListener('load', function () {
    const employee1 = new Employee("Ghazi Samer", "Administration", "Senior", "./images/avatar-cd104213bcc8422a34755aa323557594.jpg");
    const employee2 = new Employee("Lana Ali", "Finance", "Senior", "./images/avatar-c91d5e4db150c06a700b6607888b3fad.jpg");
    const employee3 = new Employee("Tamara Ayoub", "Marketing", "Senior", "./images/avatar-d89bf695c57f9669f52f7bf135be4810.jpg");
    const employee4 = new Employee("Safi Walid", "Administration", "Mid-Senior", "./images/avatar-cd104213bcc8422a34755aa323557594.jpg");
    const employee5 = new Employee("Omar Zaid", "Development", "Senior", "./images/avatar-bdc03af8212ca95d8506b95515cf2b1d.jpg");
    const employee6 = new Employee("Rana Saleh", "Development", "Junior", "./images/avatar-aff6c6097a7c9d198d60505ecfa8feb0.jpg");
    const employee7 = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "./images/avatar-a9222bb88c1bcaeebb82fffc34001774.jpg");

    console.log("Employee name: " + employee1.fullName + "\n" + "Employee salary: " + employee1.salary);
    console.log("Employee name: " + employee2.fullName + "\n" + "Employee salary: " + employee2.salary);
    console.log("Employee name: " + employee3.fullName + "\n" + "Employee salary: " + employee3.salary);
    console.log("Employee name: " + employee4.fullName + "\n" + "Employee salary: " + employee4.salary);
    console.log("Employee name: " + employee5.fullName + "\n" + "Employee salary: " + employee5.salary);
    console.log("Employee name: " + employee6.fullName + "\n" + "Employee salary: " + employee6.salary);
    console.log("Employee name: " + employee7.fullName + "\n" + "Employee salary: " + employee7.salary);

    for (let i = 0; i < employees.length; i++) {
        employees[i].render();
    }
})


Employee.prototype.render = function () {
    const link = document.createElement('div');
    link.className = 'card';
    const cardHtml = `
    <div id="Img"><img src="${this.imgLink}" height="300" width="300"></div>
    <p>Employee name : ${this.fullName}</p>
    <p>Department : ${this.department}</p>
    <p>Employee salary: ${this.salary}</p>
    `;
    link.innerHTML = cardHtml;
    const EmpDiv = document.getElementById("employees");
    EmpDiv.append(link);

}


function generateSalary(level) {
    if (level === "Senior") {
        let min = 1500;
        let max = 2000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (level === "Mid-Senior") {
        let min = 1000;
        let max = 1500;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (level === "Junior") {
        let min = 500;
        let max = 1000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function generateEmpID() {
    return counter++;
}