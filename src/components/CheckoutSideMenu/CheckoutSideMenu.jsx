import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'
import { OrderCard } from '../index'
import { totalPrice } from '../../utils'

function CheckoutSideMenu() {
	const {
		isCheckoutSideMenuOpen,
		closeCheckoutSideMenu,
		cartProducts,
		handleCheckout,
	} = useContext(ShoppingCartContext)

	return (
		<aside
			className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} fixed right-0 top-[68px] 
			z-10 h-[calc(100vh-80px)] w-[360px] flex-col rounded-lg border border-black bg-white`}
		>
			<div className='flex items-center justify-between p-6'>
				<h2 className='text-xl font-medium'>My Order</h2>
				<XMarkIcon
					className='h-6 w-6 cursor-pointer text-black'
					onClick={() => closeCheckoutSideMenu()}
				/>
			</div>
			<div className='flex-1 overflow-y-scroll px-6'>
				{cartProducts.map(product => (
					<OrderCard
						key={product.id}
						id={product.id}
						title={product.title}
						imageUrl={product.image}
						price={product.price}
					/>
				))}
			</div>
			<div className='px-6'>
				<p className='flex items-center justify-between'>
					<span className='font-light'>Total: </span>
					<span className='text-xl font-medium'>
						${totalPrice(cartProducts)}
					</span>
				</p>
				<Link to='/my-orders/last'>
					<button
						className='mb-6 mt-3 w-full rounded-lg bg-black py-3 text-white'
						onClick={() => handleCheckout()}
					>
						Checkout
					</button>
				</Link>
			</div>
		</aside>
	)
}

export default CheckoutSideMenu
