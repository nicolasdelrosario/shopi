import { createBrowserRouter } from 'react-router-dom'
import {
	Home,
	MyAccount,
	MyOrder,
	MyOrders,
	NotFound,
	SignIn,
	SignUp,
} from '../pages'

import { Navbar } from '../components'

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <Navbar />,
		errorElement: <NotFound />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'all',
				element: <Home />,
			},
			{
				path: 'electronics',
				element: <Home />,
			},
			{
				path: 'jewelery',
				element: <Home />,
			},
			{
				path: 'men-clothing',
				element: <Home />,
			},
			{
				path: 'women-clothing',
				element: <Home />,
			},
			{
				path: 'my-account',
				element: <MyAccount />,
			},
			{
				path: 'my-order',
				element: <MyOrder />,
			},
			{
				path: 'my-orders',
				element: <MyOrders />,
			},
			{
				path: 'my-orders/last',
				element: <MyOrder />,
			},
			{
				path: 'my-orders/:id',
				element: <MyOrder />,
			},
		],
	},
	{
		path: '/sign-in',
		element: <SignIn />,
		errorElement: <NotFound />,
	},
	{
		path: '/sign-up',
		element: <SignUp />,
		errorElement: <NotFound />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
])

export default appRouter
