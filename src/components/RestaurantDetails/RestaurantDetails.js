import { useEffect, useState } from 'react';
import MenuItemCategory from '../MenuItemCategory/MenuItemCategory';
import './RestaurantDetails.css';
import { useParams } from 'react-router';

const RestaurantDetails = () => {

    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const { restaurantId } = useParams();

    useEffect(() => {
        async function fetchRestaurantDetails() {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.867114&lng=88.3674381&restaurantId=${restaurantId}`);
            const jsonData = await response.json();

            setRestaurantDetails(jsonData?.data);
        }

        fetchRestaurantDetails();
    }, [])

    const name = restaurantDetails?.cards[0]?.card?.card?.text;
    const itemGroups = restaurantDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(card => card?.card?.card?.categoryId)

    return (
        <div className='px-4 mt-8'>
            <h1 className='text-3xl font-bold mb-4'>{name}</h1>
            <div className='bg-[#f4f7f8]'>
                {itemGroups?.map(group => <MenuItemCategory key={group?.card?.card?.categoryId} {...group?.card?.card} />)}
            </div>
        </div>
    );

}

export default RestaurantDetails;