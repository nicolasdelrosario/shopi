/**
 * Calculates the total price of an array of products.
 *
 * @param {Array<{price: number}>} products - An array of products, each with a price property.
 * @return {number} The total price of all the products.
 */
function totalPrice(products) {
	let total = 0
	products.forEach(product => {
		total += product.price
	})
	return total.toFixed(2)
}

export default totalPrice
