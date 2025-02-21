document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const birthdayDate = document.getElementById("birthdayDate").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const country = document.getElementById("country").value;

    const gender = document.querySelector(
      'input[name="inlineRadioOptions"]:checked'
    ).nextElementSibling.innerText;

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Birthday:", birthdayDate);
    console.log("Phone Number:", phoneNumber);
    console.log("Country:", country);
    console.log("Gender:", gender);

    var table = document
      .getElementById("myTable")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);

    const fullName = firstName + " " + lastName;
    const rowData = [fullName, birthdayDate, phoneNumber, country, gender];

    for (let i = 0; i < rowData.length; i++) {
      newRow.insertCell(i).innerHTML = rowData[i];
    }
    const lastCell = newRow.insertCell(5);
    lastCell.innerHTML = `
            <button class="btn btn-sm" onclick="deleteRow(this)">
                <img src="trash3-fill.svg" alt="Delete" width="20" height="20">
            </button>
            <button class="btn btn-sm" onclick="secondFunction(this)">
                <img src="pen.svg" alt="Second Action" width="20" height="20">
            </button>`;

    form.reset();
  });
});

function deleteRow(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}

function secondFunction(button) {
  const row = button.parentElement.parentElement;

  const cells = row.getElementsByTagName("td");
  const fullName = cells[0].textContent.split(" ");
  const birthdayDate = cells[1].textContent;
  const phoneNumber = cells[2].textContent;
  const country = cells[3].textContent;
  const gender = cells[4].textContent;

  document.getElementById("firstName").value = fullName[0];
  document.getElementById("lastName").value = fullName[1];
  document.getElementById("birthdayDate").value = birthdayDate;
  document.getElementById("phoneNumber").value = phoneNumber;
  document.getElementById("country").value = country;

  if (gender === "Female") {
    document.getElementById("femaleGender").checked = true;
  } else {
    document.getElementById("maleGender").checked = true;
  }

  row.remove();
}
