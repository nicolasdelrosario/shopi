import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../context'
import AppRoutes from '../routes/AppRoutes'
import AppUI from './AppUI'

function App() {
	return (
		<ShoppingCartProvider>
			<BrowserRouter>
				<AppRoutes />
				<AppUI />
			</BrowserRouter>
		</ShoppingCartProvider>
	)
}

export default App
