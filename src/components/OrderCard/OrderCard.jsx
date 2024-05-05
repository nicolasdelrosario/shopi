import { useContext } from 'react'
import PropTypes from 'prop-types'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'

function OrderCard(props) {
	const { id, title, imageUrl, price, deleteCard = true } = props

	const { deleteProductToCart } = useContext(ShoppingCartContext)

	return (
		<div className='mb-6 flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				<figure className='h-20 w-20'>
					<img
						className='h-full w-full rounded-lg object-contain'
						src={imageUrl}
						alt={title}
					/>
				</figure>
				<p className='text-sm font-light'>{title}</p>
			</div>
			<div className='flex items-center gap-2'>
				<p className='text-md font-medium'>{`$${price}`}</p>
				{deleteCard && (
					<XMarkIcon
						onClick={() => deleteProductToCart(id)}
						className='h-6 w-6 cursor-pointer text-black'
					/>
				)}
			</div>
		</div>
	)
}

OrderCard.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	deleteCard: PropTypes.bool,
}

export default OrderCard
