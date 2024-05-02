import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'

function CheckoutSideMenu() {
	const { isCheckoutSideMenuOpen, closeCheckoutSideMenu } =
		useContext(ShoppingCartContext)

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
		</aside>
	)
}

export default CheckoutSideMenu
