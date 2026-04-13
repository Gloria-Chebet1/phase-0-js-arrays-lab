const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct(products){
    return products[0];
}

function addProduct(products, productName){
    products.push(productName);
    return products;
}

function updateProductName(products, index, newName){
    products[index] = newName;
    return products;
}

function removeLastProduct(products){
    products.pop();
    return products;
}