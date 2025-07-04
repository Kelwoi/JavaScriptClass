const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("product-list");
const clearBtn = document.getElementById("clearAllBtn");

const form = document.forms.productForm;
const nameInput = form.name;
const priceInput = form.price;
const quantityInput = form.quantity;
const colourInput = form.colour
const brandinput = form.brand;
const isElectricInput = form.electric;

addBtn.onclick = (event) => {
    event.preventDefault();

    // read form values
    const item = new product(
        nameInput.value,
        priceInput.value,
        quantityInput.value,
        colourInput.value,
        brandinput.value,
        isElectricInput.checked
    );

    tableBody.innerHTML += item.toHTMLRow();
}

clearBtn.onclick = () => {
    tableBody.innerHTML = "";
}