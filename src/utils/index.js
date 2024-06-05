/**
 * This function calculates the total price of all products in the cart
 * @param {Array} products cartProduct: Array of Objects  
 * @returns {Number} Total price of all products
 */
export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0);
}