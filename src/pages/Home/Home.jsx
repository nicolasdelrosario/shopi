import { useFetch } from '../../hooks/useFetch'
import { Layout, Card, Navbar } from '../../components'

function Home() {
	const products = useFetch('https://fakestoreapi.com/products')

	return (
		<>
			<Navbar />
			<Layout>
				<div className='grid w-full max-w-screen-lg grid-cols-3 gap-6'>
					{products?.map(product => (
						<Card key={product.id} {...product} />
					))}
				</div>
			</Layout>
		</>
	)
}

export default Home
