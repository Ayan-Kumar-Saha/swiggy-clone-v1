import React from 'react';
import ReactDOM from 'react-dom/client'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Support from './components/Support/Support';
import RestaurantList from './components/RestaurantList/RestaurantList';
import Error from './components/Error/Error'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import RestaurantDetails from './components/RestaurantDetails/RestaurantDetails';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <div className='s-container'>
                <Outlet />
            </div>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <RestaurantList />
            },
            {
                path: '/support',
                element: <Support />
            },
            {
                path: '/restaurants/:restaurantId',
                element: <RestaurantDetails />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);