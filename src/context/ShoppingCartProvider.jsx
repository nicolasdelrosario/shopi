import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext()

export function ShoppingCartProvider({ children }) {
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount(count + 1)
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
				increment,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	)
}

ShoppingCartProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
