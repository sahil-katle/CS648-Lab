"use strict";

let empCount = 0;

window.onload = function () {

    const form = document.getElementById("addForm");
    const table = document.getElementById("employees");
    const output = document.getElementById("empCount");
    const idField = document.getElementById("id");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const id = document.getElementById("id").value;
        const name = document.getElementById("name").value;
        const extension = document.getElementById("extension").value;
        const email = document.getElementById("email").value;
        const department = document.getElementById("department").value;

        // Insert new row
        let row = table.insertRow();

        // Create cells
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();
        let cell5 = row.insertCell();
        let cell6 = row.insertCell();

        // Add text nodes to cells
        cell1.appendChild(document.createTextNode(id));
        cell2.appendChild(document.createTextNode(name));
        cell3.appendChild(document.createTextNode(extension));
        cell4.appendChild(document.createTextNode(email));
        cell5.appendChild(document.createTextNode(department));

        // Create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger btn-sm";
        deleteBtn.appendChild(document.createTextNode("X"));

        cell6.appendChild(deleteBtn);

        // Update employee count
        empCount++;
        output.textContent = `(${empCount})`;

        // Delete functionality
        deleteBtn.addEventListener("click", function (e) {
            if (confirm("Are you sure you want to delete this employee?")) {
                let row = e.target.parentNode.parentNode;
                table.deleteRow(row.rowIndex);
                empCount--;
                output.textContent = `(${empCount})`;
            }
        });

        // Reset form
        form.reset();
        idField.focus();
    });

};