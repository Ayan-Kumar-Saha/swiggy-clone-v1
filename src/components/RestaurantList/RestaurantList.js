import RestaurantCard, { ShimmerRestaurantCard } from '../RestaurantCard/RestaurantCard';
import './RestaurantList.css'
import { useEffect, useState } from 'react';

const RestaurantList = () => {

    const [listOfrestaurants, setListOfrestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {        
        async function fetchrestaurants() {
            if (searchTerm.length <= 3) return;

            setIsLoading(true);

            const data = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=22.867114&lng=88.3674381&str=${searchTerm}&submitAction=ENTER&selectedPLTab=RESTAURANT`);
            let jsonData = await data.json();

            setListOfrestaurants(jsonData?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
            setIsLoading(false);
        }

        fetchrestaurants();
    }, [searchTerm]);

    const onClickTopRated = () => {
        setListOfrestaurants(listOfrestaurants.filter(res => res.card.card.info.avgRating > 4))
    }

    return (
        <>
            <div className='w-full flex justify-center items-center border-2 px-4 py-2 mb-2'>
                <input type='text'
                    className='w-full outline-0 leading-[24px] font-bold'
                    placeholder='Search for restaurants and food'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            {
                listOfrestaurants.length > 0 &&
                <div className='flex my-4'>
                    <button className='filter-btn' onClick={onClickTopRated}>Rated 4+</button>
                </div>
            }
            <div className='bg-[#f4f7f8] grid grid-cols-2 gap-4 p-4'>
                {
                    isLoading
                        ? Array.from({ length: 6 }, (_, index) => <ShimmerRestaurantCard key={index} />)
                        : listOfrestaurants.map(restaurant =>
                            <RestaurantCard key={restaurant.card.card.info.id} {...restaurant} />
                        )
                }
            </div>
        </>
    );
}

export default RestaurantList;