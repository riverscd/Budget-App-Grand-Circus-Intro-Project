// Create variables
let monthlyIncome = 0; // Numerical value
let expenses = []; // Array of objects with name and amount properties
let expenseTotal = 0; // Numerical value
let balance = 0; // Numerical value

// Create references to HTML elements
let monthlyBudget = document.getElementById("monthly_budget"); // Paragraph
let incomeInput = document.getElementById ("income_input");
let updateBudgetButton = document.getElementById("update_budget_button");

let nameInput = document.getElementById("name_input");
let amountInput = document.getElementById("amount_input");
let addExpenseButton = document.getElementById("add_expense_button");

let expenseList = document.getElementById("expense_list"); // DIV
let totalExpenses = document.getElementById("total_expenses"); // Paragraph
let remainingBalance = document.getElementById("remaining_balance"); // Paragraph

/* This is a block comment
he showed us how to do it so I wanted to include the example
so I could find it later I suppose */

// Build a function that saves the user input of the monthly budget form
// and displays the value in the app
function updateBudget(event) {
    console.log("updateBudget fired!");
    // This function will fire when I click the form button.
    // It takes an event as an argument; this is an object.
    event.preventDefault(); // Stop auto-refresh of browser
    monthlyIncome = parseInt(incomeInput.value); // Parse input to number type
    monthlyBudget.innerText = "$" + monthlyIncome;
    // Update the balance
    updateBalance();
}

// Add updateBudget as onclick handler for update budget button
updateBudgetButton.onclick = updateBudget;

// Build a helper function that updates the remaining balance
// when changes to the budget or expenses occur
function updateBalance() {
    console.log("updateBalance fired!");
    // Determine new balance
    balance = monthlyIncome - expenseTotal;
    // Show result in the app
    remainingBalance.innerText = "$" + balance;
    // Change color of the text based on remaining balance
    if (balance <0){
        remainingBalance.classList.remove("green");
        remainingBalance.classList.add("red");
    }
    else {
        remainingBalance.classList.add("green");
        remainingBalance.classList.remove("red");
    }
}

// Build a function which saves a new expense to the expenses array
// and displays the new expense in the app
function addExpense(event) {
    console.log("addExpense fired!");
        // Prevent refresh of page
        event.preventDefault();
        // Build a new expense object
        let newExpense = {
            name: nameInput.value,
            amount: parseInt(amountInput.value) // Parse into integer
        };
        // Add to expenses array
        expenses.push(newExpense);
        // Add the new expense to the app
        let newElement = document.createElement("p");
        newElement.innerText = newExpense.name + ": $" + newExpense.amount;
        expenseList.appendChild(newElement);
        // Update expense total 
        updateExpenseTotal();
}

// Add the addExpense function to add expense as onclick
addExpenseButton.onclick = addExpense;

// Build a helper function that will calculate the total of the expenses
function updateExpenseTotal() {
    console.log("updateExpenseTotal fired!");
    // Reset expense total 
    expenseTotal = 0;
    // Loop through all expenses and re-calculate total
    for(let i = 0; i < expenses.length; i++) {
        let currentExpense = expenses[i];
        expenseTotal = expenseTotal + currentExpense.amount;
    }
    // Display total in the app
    totalExpenses.innerText = "$" + expenseTotal;
    // Update the balance
    updateBalance();
}