import { useEffect, useState } from "react";

const useRestaurantList = (searchTerm) => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        if (searchTerm.length <= 3) return;

        async function fetchrestaurants() {
            setIsLoading(true);

            const data = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=22.867114&lng=88.3674381&str=${searchTerm}&submitAction=ENTER&selectedPLTab=RESTAURANT`);
            let jsonData = await data.json();

            setListOfRestaurants(jsonData?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || []);
            setIsLoading(false);
        }

        const timer = setTimeout(fetchrestaurants, 1000);
        return () => clearTimeout(timer);

    }, [searchTerm])

    return [isLoading, listOfRestaurants];
}

export default useRestaurantList;