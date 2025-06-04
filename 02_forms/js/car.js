class product {
    constructor(name, price, quantity,colour, brand, isElectric) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.colour = colour;
        this.brand = brand;
        this.isElectric = isElectric;
    }

    get electricStatus() {
        return this.isElectric ? 'Yes' : 'No';
    }

    toHTMLRow() {
        return `<tr>
                    <td>${this.name}</td>
                    <td>${this.price}</td>
                    <td>${this.quantity}</td>
                    <td>${this.colour}</td>
                    <td>${this.brand}</td>
                    <td>${this.electricStatus}</td>
                </tr>`;
    }
}

function capitalizeFirstLetter(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}