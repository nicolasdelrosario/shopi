import PropTypes from 'prop-types'

function Layout({ children }) {
	return <div className='mt-20 flex flex-col items-center'>{children}</div>
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
