import MenuItemCategory, { ShimmerMenuItemCategory } from '../MenuItemCategory/MenuItemCategory';
import './RestaurantDetails.css';
import { useParams } from 'react-router';
import useRestaurantDetails from '../../hooks/useRestaurantDetails';


const ShimmerRestaurantDetails = () => {
    return (
        <div className='px-4 mt-8'>
            <h1 className='h-6 w-1/5 bg-gray-200'></h1>
            <div className='bg-[#f4f7f8]'>
                {Array.from({ length: 4 }, (_, index) => <ShimmerMenuItemCategory key={index} />)}
            </div>
        </div>
    );
}

const RestaurantDetails = () => {

    const { restaurantId } = useParams();
    const restaurantDetails = useRestaurantDetails(restaurantId);

    const name = restaurantDetails?.cards[0]?.card?.card?.text;
    const itemGroups = restaurantDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(card => card?.card?.card?.categoryId) || []

    if (!restaurantDetails) {
        return <ShimmerRestaurantDetails />
    }

    return (
        <div className='px-4 mt-8' >
            <h1 className='text-3xl font-bold mb-4'>{name}</h1>
            <div className='bg-[#f4f7f8]'>
                {itemGroups?.map(group => <MenuItemCategory key={group?.card?.card?.categoryId} {...group?.card?.card} />)}
            </div>
        </ div>
    );

}

export default RestaurantDetails;