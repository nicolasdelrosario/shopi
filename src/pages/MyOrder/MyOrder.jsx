import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Layout, OrderCard } from '../../components'
import { ShoppingCartContext } from '../../context'

function MyOrder() {
	const { order } = useContext(ShoppingCartContext)
	const params = useParams()
	const indexOrderPath = Number(params.id)

	return (
		<Layout>
			<div className='relative mb-8 flex w-80 items-center justify-center'>
				<Link to='/my-orders' className='absolute left-0'>
					<ChevronLeftIcon className='h-6 w-6 cursor-pointer text-black' />
				</Link>
				<h1 className='text-3xl font-medium'>My Order</h1>
			</div>
			<div className='flex w-80 flex-col'>
				{(isNaN(indexOrderPath)
					? order?.slice(-1)[0]
					: order[indexOrderPath]
				)?.products.map(product => (
					<OrderCard
						key={product.id}
						id={product.id}
						title={product.title}
						imageUrl={product.image}
						price={product.price}
						deleteCard={false}
					/>
				))}
			</div>
		</Layout>
	)
}

export default MyOrder
