import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'
import { NavItem, CheckoutSideMenu } from '../../components'

function Navbar() {
	const { count, setSearchByCategory } = useContext(ShoppingCartContext)

	const activeStyle = 'underline underline-offset-4'
	return (
		<>
			<nav className='fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-white px-8 py-5 text-sm font-normal'>
				<ul className='flex items-center gap-3'>
					<li className='text-lg font-semibold'>
						<NavItem to='/'>Shopi</NavItem>
					</li>
					<li>
						<NavItem to='/all' activeStyle={activeStyle}>
							All
						</NavItem>
					</li>
					<li>
						<NavItem
							to='/electronics'
							activeStyle={activeStyle}
							onClick={() => setSearchByCategory('electronics')}
						>
							Electronics
						</NavItem>
					</li>
					<li>
						<NavItem
							to='/jewelery'
							activeStyle={activeStyle}
							onClick={() => setSearchByCategory('jewelery')}
						>
							Jewelery
						</NavItem>
					</li>
					<li>
						<NavItem
							to='/men-clothing'
							activeStyle={activeStyle}
							onClick={() => setSearchByCategory(`men's clothing`)}
						>
							Men
						</NavItem>
					</li>
					<li>
						<NavItem
							to='/women-clothing'
							activeStyle={activeStyle}
							onClick={() => setSearchByCategory(`women's clothing`)}
						>
							Women
						</NavItem>
					</li>
				</ul>
				<ul className='flex items-center gap-3'>
					<li className='text-black/60'>contact@nicolasdelrosario.com</li>
					<li>
						<NavItem to='/my-orders' activeStyle={activeStyle}>
							My Orders
						</NavItem>
					</li>
					<li>
						<NavItem to='/my-account' activeStyle={activeStyle}>
							My Account
						</NavItem>
					</li>
					<li>
						<NavItem to='/sign-in' activeStyle={activeStyle}>
							Sign in
						</NavItem>
					</li>
					<li className='flex items-center'>
						<ShoppingBagIcon className='mr-3 h-6 w-6 text-black' />
						{count}
					</li>
				</ul>
			</nav>
			<CheckoutSideMenu />
			<Outlet />
		</>
	)
}

export default Navbar
