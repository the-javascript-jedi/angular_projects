const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");
const alertCtrl = document.querySelector("#alert");

const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

let totalExpenses = 0;

confirmBtn.addEventListener("click", () => {
  console.log("it works!!!");
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    // create model
    const alertIon = document.createElement("ion-alert");
    alertIon.header = "Invalid inputs";
    alertIon.message = "Please enter valid name and amount";
    alertIon.buttons = ["Oh, ok"];
    alertCtrl.appendChild(alertIon);
    alertIon.present();
    return; // this is to avoid adding new line of ion-item
  }
  console.log("enteredReason", enteredReason);
  console.log("enteredAmount", enteredAmount);

  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": $" + enteredAmount;

  expensesList.appendChild(newItem);
  //   totalExpenses += parseInt(enteredAmount);
  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

cancelBtn.addEventListener("click", clear);
