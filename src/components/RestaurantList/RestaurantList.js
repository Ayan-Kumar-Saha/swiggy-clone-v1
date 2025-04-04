import { Link } from 'react-router';
import RestaurantCard, { ShimmerRestaurantCard } from '../RestaurantCard/RestaurantCard';
import './RestaurantList.css'
import { useState, useEffect } from 'react';
import useRestaurantList from '../../hooks/useRestaurantList';
import { LuCross, LuSearch, LuX } from 'react-icons/lu';

const RestaurantList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, listOfRestaurants] = useRestaurantList(searchTerm);
    const [filteredListOfRestaurants, setFilteredListofRestaurants] = useState([]);

    const onClickTopRated = () => {
        let filteredRestaurants = listOfRestaurants.filter(res => res.card.card.info.avgRating > 4);
        setFilteredListofRestaurants(filteredRestaurants);
    }

    useEffect(() => {
        setFilteredListofRestaurants(listOfRestaurants);
    }, [listOfRestaurants]);

    return (
        <>
            <div className='w-full flex justify-center items-center border-2 px-4 py-2 mb-2'>
                <input type='text'
                    className='w-full outline-0 leading-[24px] font-bold'
                    placeholder='Search for restaurants and food'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />

                {
                    searchTerm && (
                        <div className='flex justify-center items-center w-[20px] h-[20px] cursor-pointer'
                            onClick={() => setSearchTerm("")}>
                            <LuX className='text-2xl' />
                        </div>
                    )
                }
            </div>
            {
                filteredListOfRestaurants?.length > 0 &&
                <div className='flex my-4'>
                    <button className='filter-btn' onClick={onClickTopRated}>Rated 4+</button>
                </div>
            }
            <div className='bg-[#f4f7f8] grid grid-cols-2 gap-4 p-4'>
                {
                    isLoading
                        ? Array.from({ length: 6 }, (_, index) => <ShimmerRestaurantCard key={index} />)
                        : filteredListOfRestaurants?.map(restaurant =>
                            <Link key={restaurant.card.card.info.id}
                                to={'/restaurants/' + restaurant.card.card.info.id}>
                                <RestaurantCard  {...restaurant} />
                            </Link>
                        )
                }
            </div>
        </>
    );
}

export default RestaurantList;