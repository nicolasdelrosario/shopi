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

	// Checkout Side Menu - Open/Close
	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
	const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
	const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

	// Product Detail - Show Product
	const [productToShow, setProductToShow] = useState({})
	const showProduct = productDetail => {
		openProductDetail()
		setProductToShow(productDetail)
	}

	// Shopping Cart - Add Product to cart
	const [cardProducts, setCardProducts] = useState([])
	const addProductsToCart = (event, productData) => {
		event.stopPropagation()
		increment()
		closeProductDetail()
		openCheckoutSideMenu()
		setCardProducts([...cardProducts, productData])
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
				isProductDetailOpen,
				openProductDetail,
				closeProductDetail,
				productToShow,
				showProduct,
				cardProducts,
				addProductsToCart,
				isCheckoutSideMenuOpen,
				openCheckoutSideMenu,
				closeCheckoutSideMenu,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}

ShoppingCartProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
