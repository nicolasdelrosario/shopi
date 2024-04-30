import { useRoutes } from 'react-router-dom'
import { Home, MyAccount, MyOrder, MyOrders, NotFound, SignIn } from '../pages'

function AppRoutes() {
	const ROUTER = useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/my-account',
			element: <MyAccount />,
		},
		{
			path: '/my-order',
			element: <MyOrder />,
		},
		{
			path: '/my-orders',
			element: <MyOrders />,
		},
		{
			path: '/sign-in',
			element: <SignIn />,
		},
		{
			path: '*',
			element: <NotFound />,
		},
	])

	return ROUTER
}

export default AppRoutes
