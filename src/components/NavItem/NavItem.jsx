import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function NavItem({ to, children, activeStyle }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) => (isActive ? activeStyle : undefined)}
		>
			{children}
		</NavLink>
	)
}

NavItem.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	activeStyle: PropTypes.string,
}

export default NavItem
