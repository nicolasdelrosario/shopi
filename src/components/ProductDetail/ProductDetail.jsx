import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'

function ProductDetail() {
	const { isProductDetailOpen, closeProductDetail, productToShow } =
		useContext(ShoppingCartContext)
	console.log(productToShow)

	return (
		<aside
			className={`${isProductDetailOpen ? 'flex' : 'hidden'} fixed right-0 top-[68px] 
			z-10 h-[calc(100vh-80px)] w-[360px] flex-col rounded-lg border border-black bg-white`}
		>
			<div className='flex items-center justify-between p-6'>
				<h2 className='text-xl font-medium'>Detail</h2>
				<XMarkIcon
					className='h-6 w-6 cursor-pointer text-black'
					onClick={() => closeProductDetail()}
				/>
			</div>
			<figure className='max-h-[40%] px-6'>
				<img
					className='h-full w-full object-contain p-4'
					src={productToShow.image}
					alt={productToShow.title}
				/>
			</figure>
			<p className='flex flex-col p-6'>
				<span className='text-2xl font-medium'>{`$${productToShow.price}`}</span>
				<span className='text-md font-medium'>{productToShow.title}</span>
				{/* description */}
				<span className='text-sm font-light'>{productToShow.category}</span>
			</p>
		</aside>
	)
}

export default ProductDetail
