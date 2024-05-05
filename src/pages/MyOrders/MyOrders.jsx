import { useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Layout, OrdersCard } from '../../components'
import { ShoppingCartContext } from '../../context'

function MyOrders() {
	const { order } = useContext(ShoppingCartContext)

	return (
		<Layout>
			<div className='relative mb-8 flex w-80 items-center justify-center'>
				<h1 className='text-3xl font-medium'>My Orders</h1>
			</div>
			{order.map((order, index) => (
				<Link key={index} to={`/my-orders/${index}`}>
					<OrdersCard
						totalPrice={order.totalPrice}
						totalProducts={order.totalProducts}
					/>
				</Link>
			))}
		</Layout>
	)
}

MyOrders.propTypes = {
	totalPrice: PropTypes.string,
}

export default MyOrders
