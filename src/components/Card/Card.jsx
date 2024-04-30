import { useContext } from 'react'
import PropTypes from 'prop-types'
import { ShoppingCartContext } from '../../context'

function Card({ title, price, category, image }) {
	const { increment } = useContext(ShoppingCartContext)

	return (
		<article className='h-60 w-56 cursor-pointer rounded-lg bg-white'>
			<figure className='relative mb-2 h-4/5 w-full'>
				<span className='absolute bottom-0 left-0 m-2 rounded-lg bg-white/60 px-3 py-0.5 text-xs text-black'>
					{category}
				</span>
				<img
					className='h-full w-full rounded-lg object-contain'
					src={image}
					alt={title}
				/>
				<button
					className='absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-white p-1'
					onClick={increment}
				>
					+
				</button>
			</figure>
			<p className='flex justify-between'>
				<span className='mr-2 truncate text-sm font-light'>{title}</span>
				<span className='text-lg font-medium'>{`$${price}`}</span>
			</p>
		</article>
	)
}

Card.propTypes = {
	price: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
}

export default Card
