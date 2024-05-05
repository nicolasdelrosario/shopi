import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function NavItem({ to, children, activeStyle, onClick }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) => (isActive ? activeStyle : undefined)}
			onClick={onClick}
		>
			{children}
		</NavLink>
	)
}

NavItem.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	activeStyle: PropTypes.string,
	onClick: PropTypes.func,
}

export default NavItem
