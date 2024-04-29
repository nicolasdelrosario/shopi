import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '../routes/AppRoutes'
import AppUI from './AppUI'

function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
			<AppUI />
		</BrowserRouter>
	)
}

export default App
