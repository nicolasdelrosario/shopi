import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { totalPrice } from '../utils'
import { useFetch } from '../hooks/useFetch'

export const ShoppingCartContext = createContext()

export function ShoppingCartProvider({ children }) {
	// Get Products
	const products = useFetch('https://fakestoreapi.com/products')
	const [filteredProducts, setFilteredProducts] = useState(null)

	// Get Products By Title
	const [searchByTitle, setSearchByTitle] = useState('')

	const filteredItemsByTitle = (items, searchByTitle) => {
		return items?.filter(item =>
			item.title.toLowerCase().includes(searchByTitle.toLowerCase())
		)
	}

	useEffect(() => {
		if (searchByTitle)
			setFilteredProducts(filteredItemsByTitle(products, searchByTitle))
	}, [products, searchByTitle])

	// Shooping Cart - Increment Quantity
	const [count, setCount] = useState(0)
	const increment = () => setCount(count + 1)
	const decrement = () => setCount(count - 1)

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
	const [cartProducts, setCartProducts] = useState([])
	const addProductsToCart = (event, productData) => {
		event.stopPropagation()
		increment()
		closeProductDetail()
		openCheckoutSideMenu()
		setCartProducts([...cartProducts, productData])
	}
	const deleteProductToCart = id => {
		decrement()
		const filteredProduct = cartProducts.filter(product => product.id !== id)
		setCartProducts(filteredProduct)
	}

	// Shopping Cart - Checkout
	const [order, setOrder] = useState([])
	const handleCheckout = () => {
		const orderToAdd = {
			date: new Date(),
			products: cartProducts,
			totalProducts: cartProducts.length,
			totalPrice: totalPrice(cartProducts),
		}

		setOrder([...order, orderToAdd])
		setCount(0)
		setCartProducts([])
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				products,
				searchByTitle,
				setSearchByTitle,
				filteredProducts,
				count,
				setCount,
				isProductDetailOpen,
				openProductDetail,
				closeProductDetail,
				productToShow,
				showProduct,
				cartProducts,
				addProductsToCart,
				deleteProductToCart,
				isCheckoutSideMenuOpen,
				openCheckoutSideMenu,
				closeCheckoutSideMenu,
				order,
				handleCheckout,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}

ShoppingCartProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
