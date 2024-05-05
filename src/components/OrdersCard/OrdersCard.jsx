import PropTypes from 'prop-types'
import {
	CalendarIcon,
	ShoppingBagIcon,
	ChevronRightIcon,
} from '@heroicons/react/24/solid'
import { currentDate } from '../../utils'

function OrdersCard(props) {
	const { totalPrice, totalProducts } = props

	return (
		<div className='mb-6 flex w-80 items-center justify-between rounded-lg border border-black p-4'>
			<div className='flex w-full justify-between'>
				<p className='flex flex-col'>
					<span className='flex items-center gap-2 font-light'>
						<CalendarIcon className='h-4 w-4 cursor-pointer text-black' />
						{currentDate()}
					</span>
					<span className='flex items-center gap-2 font-light'>
						<ShoppingBagIcon className='h-4 w-4 cursor-pointer text-black' />
						{totalProducts} Articles
					</span>
				</p>
				<p className='flex items-center gap-2'>
					<span className='text-xl font-medium'>{totalPrice}</span>
					<ChevronRightIcon className='h-6 w-6 cursor-pointer text-black' />
				</p>
			</div>
		</div>
	)
}

OrdersCard.propTypes = {
	totalPrice: PropTypes.string.isRequired,
	totalProducts: PropTypes.number.isRequired,
}

export default OrdersCard
