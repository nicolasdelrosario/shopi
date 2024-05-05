import { useContext } from 'react'
import { Layout, Card, ProductDetail } from '../../components'
import { ShoppingCartContext } from '../../context'

function Home() {
	const { setSearchByTitle, filteredProducts } = useContext(ShoppingCartContext)

	const renderView = () => {
		if (filteredProducts?.length > 0) {
			return filteredProducts?.map(product => (
				<Card key={product.id} {...product} />
			))
		} else {
			return <div>We don&apos;t have any products</div>
		}
	}

	return (
		<>
			<Layout>
				<div className='relative mb-4 flex w-80 items-center justify-center'>
					<h1 className='text-3xl font-medium'>Lastest Products</h1>
				</div>
				<input
					className='mb-8 w-80 rounded-lg border border-black p-4 focus:outline-none'
					type='text'
					placeholder='Search a product'
					onChange={event => setSearchByTitle(event.target.value)}
				/>
				<div className='grid w-full max-w-screen-lg grid-cols-3 gap-6'>
					{renderView()}
				</div>
				<ProductDetail />
			</Layout>
		</>
	)
}

export default Home
