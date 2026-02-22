"use strict";

let employees = [];

// Build the grid
function buildGrid() {
    const tbody = document.querySelector("#empTable tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < employees.length; i++) {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${employees[i].id}</td>
            <td>${employees[i].name}</td>
            <td>${employees[i].extension}</td>
            <td>${employees[i].email}</td>
            <td>${employees[i].department}</td>
            <td><button class="btn btn-danger btn-sm delete" data-index="${i}">X</button></td>
        `;

        tbody.appendChild(row);
    }

    document.getElementById("empCount").textContent = `(${employees.length})`;

    localStorage.setItem("employees", JSON.stringify(employees));
}

// Add employee
function addEmployee(e) {
    e.preventDefault();

    let employee = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        extension: document.getElementById("extension").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value
    };

    employees.push(employee);

    buildGrid();

    document.getElementById("addForm").reset();
    document.getElementById("id").focus();
}

// Delete employee
function deleteEmployee(e) {
    if (e.target.classList.contains("delete")) {
        let index = e.target.getAttribute("data-index");

        if (confirm("Are you sure you want to delete this employee?")) {
            employees.splice(index, 1);
            buildGrid();
        }
    }
}

// Initialize app
window.onload = function () {

    if (localStorage.getItem("employees")) {
        employees = JSON.parse(localStorage.getItem("employees"));
    } else {
        employees = [
            { id: 12345678, name: "John Smith", extension: 1234, email: "john@company.com", department: "Engineering" },
            { id: 23456789, name: "Jane Doe", extension: 2345, email: "jane@company.com", department: "Marketing" },
            { id: 34567890, name: "Mike Brown", extension: 3456, email: "mike@company.com", department: "Sales" },
            { id: 45678901, name: "Lisa White", extension: 4567, email: "lisa@company.com", department: "QA" },
            { id: 56789012, name: "Tom Green", extension: 5678, email: "tom@company.com", department: "Executive" }
        ];
    }

    buildGrid();

    document.getElementById("addForm").addEventListener("submit", addEmployee);
    document.querySelector("#empTable tbody").addEventListener("click", deleteEmployee);
};