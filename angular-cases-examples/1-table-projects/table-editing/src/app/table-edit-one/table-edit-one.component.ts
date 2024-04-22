import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-edit-one',
  templateUrl: './table-edit-one.component.html',
  styleUrls: ['./table-edit-one.component.scss']
})
export class TableEditOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tableData = [
        { name: 'John Doe', age: 25 },
        { name: 'Jane Smith', age: 30 },
        { name: 'Mark Johnson', age: 45 }
    ];

    editingRow: number | null = null; // The index of the row currently being edited
    originalData: any = {}; // Object to hold the original data of the row being edited
    validationErrors: { name?: string, age?: string }[] = []; // Array to hold validation errors for each row

    isEditing(index: number): boolean {
        return this.editingRow === index;
    }

    editRow(index: number): void {
        // Start editing the row
        this.editingRow = index;

        // Store the original data of the row
        this.originalData = { ...this.tableData[index] };

        // Initialize validation errors for the row
        this.validationErrors[index] = {};
    }

    saveRow(index: number): void {
        const row = this.tableData[index];
        const errors = this.validationErrors[index];

        // Reset errors
        errors.name = '';
        errors.age = '';

        // Validate name
        if (row.name.trim() === '') {
            errors.name = 'Name cannot be empty.';
        }

        // Validate age
        if (row.age === 0 || row.age === null) {
            errors.age = 'Age must be greater than 0.';
        }

        // If there are validation errors, exit and stay in edit mode
        if (errors.name || errors.age) {
            return;
        }

        // If validation passes, clear the errors and exit edit mode
        this.editingRow = null;
    }

    cancelEdit(index: number): void {
        // Revert the changes made to the row by restoring the original data
        if (this.originalData) {
            this.tableData[index] = { ...this.originalData };
        }

        // Clear the original data and exit edit mode
        this.originalData = {};
        this.editingRow = null;

        // Clear validation errors
        this.validationErrors[index] = {};
    }

    addRow(): void {
        // Add a new row with default or empty values
        this.tableData.push({ name: '', age: 0 });

        // Start editing the new row
        this.editingRow = this.tableData.length - 1;

        // Store the original data (empty values in this case)
        this.originalData = { name: '', age: 0 };

        // Initialize validation errors for the new row
        this.validationErrors[this.tableData.length - 1] = {};
    }
}
