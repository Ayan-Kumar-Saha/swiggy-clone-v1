import { useEffect, useState } from "react";

const useRestaurantList = (searchTerm) => {

    console.log('Outside', searchTerm)

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchrestaurants() {

            console.log('Inside', searchTerm);
            if (searchTerm.length <= 3) return;

            setIsLoading(true);

            const data = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=22.867114&lng=88.3674381&str=${searchTerm}&submitAction=ENTER&selectedPLTab=RESTAURANT`);
            let jsonData = await data.json();

            setListOfRestaurants(jsonData?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || []);
            setIsLoading(false);
        }

        fetchrestaurants();
    }, [searchTerm])

    return [isLoading, listOfRestaurants];
}

export default useRestaurantList;