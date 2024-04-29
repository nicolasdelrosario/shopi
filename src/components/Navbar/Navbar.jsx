import NavItem from '../NavItem'

function Navbar() {
	const activeStyle = 'underline underline-offset-4'

	return (
		<nav className='fixed z-10 flex w-full items-center justify-between px-8 py-5 text-sm font-normal'>
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
					<NavItem to='/clothes' activeStyle={activeStyle}>
						Clothes
					</NavItem>
				</li>
				<li>
					<NavItem to='/electronics' activeStyle={activeStyle}>
						Electronics
					</NavItem>
				</li>
				<li>
					<NavItem to='/furnitures' activeStyle={activeStyle}>
						Furnitures
					</NavItem>
				</li>
				<li>
					<NavItem to='/toys' activeStyle={activeStyle}>
						Toys
					</NavItem>
				</li>
				<li>
					<NavItem to='/others' activeStyle={activeStyle}>
						Others
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
				<li>icon 0</li>
			</ul>
		</nav>
	)
}

export default Navbar
