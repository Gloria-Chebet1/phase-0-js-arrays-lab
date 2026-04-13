function logFirstProduct(products){
    return products[0];
}

function addProduct(products, productName){
    return [...products, productName];
}

function updateProductName(products, index, newName){
    const updated = [...products];
    updated[index] = newName;
    return updated;
}

function removeLastProduct(products){
    return products.slice(0, -1);
}