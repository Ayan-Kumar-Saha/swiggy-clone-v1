import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Support from './components/Support/Support';
import RestaurantList from './components/RestaurantList/RestaurantList';
import Error from './components/Error/Error'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import RestaurantDetails from './components/RestaurantDetails/RestaurantDetails';
import useNetworkStatus from './hooks/useNetworkStatus';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
    const isOnline = useNetworkStatus();
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (isOnline) {
            toast.custom(
                <div className='flex justify-between items-center gap-2 w-[400px] bg-black text-white rounded-md p-4'>
                    <div className='flex flex-col w-2/3'>
                        <span>Connection Established</span>
                        <span className='text-sm'>Please try refreshing the page now</span>
                    </div>
                    <button onClick={() => window.location.reload()}>Reload</button>
                </div>
            )
        } else {
            toast.custom(
                <div className='flex justify-between items-center gap-2 w-[400px] bg-black text-white rounded-md p-4'>
                    <div className='flex flex-col w-2/3'>
                        <span>Connection Error</span>
                        <span className='text-sm'>Please check your internet connection now</span>
                    </div>
                    <span></span>
                </div>
            )
        }

    }, [isOnline])

    return (
        <div className='app'>
            <Navbar />
            <div className='s-container'>
                <Outlet />
            </div>
            <Toaster position='bottom-center' />
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