import React, { useEffect, useRef, lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import RestaurantList from './components/RestaurantList/RestaurantList';
import Error from './components/Error/Error'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import RestaurantDetails from './components/RestaurantDetails/RestaurantDetails';
import useNetworkStatus from './hooks/useNetworkStatus';
import toast, { Toaster } from 'react-hot-toast';
import UserContext, { UserProvider } from './contexts/UserContext';
import { Provider } from 'react-redux';
import appStore from './redux/store';
import Cart from './components/Cart/Cart';

const Support = lazy(() => import('./components/Support/Support'));

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
        <Provider store={appStore}>
            <UserProvider>
                <div className='app'>
                    <Navbar />
                    <div className='s-container'>
                        <Outlet />
                    </div>
                    <Toaster position='bottom-center' />
                </div>
            </UserProvider>
        </Provider>
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
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Support />
                    </Suspense>
                )
            },
            {
                path: '/restaurants/:restaurantId',
                element: <RestaurantDetails />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);