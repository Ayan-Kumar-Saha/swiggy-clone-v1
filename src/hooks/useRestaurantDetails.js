import { useEffect, useState } from 'react';

const useRestaurantDetails = (restaurantId) => {
    const [restaurantDetails, setRestaurantDetails] = useState(null);

    useEffect(() => {
        async function fetchRestaurantDetails() {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.867114&lng=88.3674381&restaurantId=${restaurantId}`);
            const jsonData = await response.json();

            setRestaurantDetails(jsonData?.data);
        }

        fetchRestaurantDetails();
    }, [])

    return restaurantDetails;
}

export default useRestaurantDetails;