import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext()

export function ShoppingCartProvider({ children }) {
	// Shooping Cart - Increment Quantity
	const [count, setCount] = useState(0)
	const increment = () => setCount(count + 1)

	// Product Detail - Open/Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
	const openProductDetail = () => setIsProductDetailOpen(true)
	const closeProductDetail = () => setIsProductDetailOpen(false)

	// Product Detail - Show Product
	const [productToShow, setProductToShow] = useState({})
	const showProduct = productDetail => {
		openProductDetail()
		setProductToShow(productDetail)
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
				increment,
				isProductDetailOpen,
				openProductDetail,
				closeProductDetail,
				productToShow,
				setProductToShow,
				showProduct,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}

ShoppingCartProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
