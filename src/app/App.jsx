import { RouterProvider } from 'react-router-dom'
import { ShoppingCartProvider } from '../context'
import appRouter from '../routes/AppRouter'
function App() {
	return (
		<ShoppingCartProvider>
			<RouterProvider router={appRouter}></RouterProvider>
		</ShoppingCartProvider>
	)
}

export default App
