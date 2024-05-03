import { useContext } from 'react'
import PropTypes from 'prop-types'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'

function Card(props) {
	const { id, title, price, category, image, description } = props
	const { addProductsToCart, showProduct, cardProducts } =
		useContext(ShoppingCartContext)

	const renderIcon = () => {
		const isInCart = cardProducts.some(product => product.title === title)

		if (isInCart) {
			return (
				<button className='absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 p-1'>
					<CheckIcon className='h-6 w-6 text-white' />
				</button>
			)
		} else {
			return (
				<button
					className='absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 p-1'
					onClick={event =>
						addProductsToCart(event, {
							id,
							title,
							price,
							category,
							image,
							description,
						})
					}
				>
					<PlusIcon className='h-6 w-6 text-black' />
				</button>
			)
		}
	}

	return (
		<article
			className='h-60 w-56 cursor-pointer rounded-lg bg-white'
			onClick={() =>
				showProduct({ title, price, category, image, description })
			}
		>
			<figure className='relative mb-2 h-4/5 w-full'>
				<span className='absolute bottom-0 left-0 m-2 rounded-lg bg-white/60 px-3 py-0.5 text-xs text-black'>
					{category}
				</span>
				<img
					className='h-full w-full rounded-lg object-contain'
					src={image}
					alt={title}
				/>
				{renderIcon()}
			</figure>
			<p className='flex justify-between'>
				<span className='mr-2 truncate text-sm font-light'>{title}</span>
				<span className='text-lg font-medium'>{`$${price}`}</span>
			</p>
		</article>
	)
}

Card.propTypes = {
	id: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default Card
