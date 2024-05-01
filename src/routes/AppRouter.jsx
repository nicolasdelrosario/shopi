import { createBrowserRouter } from 'react-router-dom'
import { Home, MyAccount, MyOrder, MyOrders, NotFound, SignIn } from '../pages'

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: '/my-account',
		element: <MyAccount />,
		errorElement: <NotFound />,
	},
	{
		path: '/my-order',
		element: <MyOrder />,
		errorElement: <NotFound />,
	},
	{
		path: '/my-orders',
		element: <MyOrders />,
		errorElement: <NotFound />,
	},
	{
		path: '/sign-in',
		element: <SignIn />,
		errorElement: <NotFound />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
])

export default appRouter
