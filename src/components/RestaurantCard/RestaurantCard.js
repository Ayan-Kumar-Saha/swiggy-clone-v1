import { CLOUDINARY_GREYSCALE_IMAGE_BASE_URL, CLOUDINARY_IMAGE_BASE_URL } from '../../utils/constants';
import './RestaurantCard.css'
import { HiStar } from 'react-icons/hi'

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className='relative'>
                <span className='absolute top-6 left-3 bg-gray-600 text-sm text-white rounded-sm px-1'>Ad</span>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export const ShimmerRestaurantCard = () => (
    <div className="bg-white flex justify-evenly items-center py-6 gap-4 rounded-lg max-w-[400px] animate-pulse">
        <div className="w-1/3 max-w-[80px] rounded-lg bg-gray-200 h-20"></div>
        <div className="w-2/3 flex flex-col gap-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
    </div>
);

const RestaurantCard = (props) => {
    const { name, avgRating, costForTwo, cuisines, cloudinaryImageId, availability } = props.card.card.info;
    const { minDeliveryTime, maxDeliveryTime } = props.card.card.info.sla;

    return (
        <div className='bg-white flex justify-evenly items-center py-6 gap-4 rounded-lg max-w-[400px]'>
            <div className='w-1/3 max-w-[80px] rounded-lg'>
                <img className='rounded-lg' src={(availability.opened ? CLOUDINARY_IMAGE_BASE_URL : CLOUDINARY_GREYSCALE_IMAGE_BASE_URL) + cloudinaryImageId} />
            </div>
            <div className='w-2/3 flex flex-col'>
                <h3 className='font-bold line-clamp-1'>{name}</h3>
                {
                    availability.opened &&
                    <p className='text-[#686b78] text-[14px] flex justify-items-start items-center font-bold'>
                        <span className='flex justify-center items-center'><HiStar />{avgRating}</span> * {minDeliveryTime}-{maxDeliveryTime} MINS * &#8377;{costForTwo / 100} FOR TWO
                    </p>

                }
                <p className='text-[#696b79] text-[14px] line-clamp-1'>{cuisines.join(', ')}</p>
                {
                    availability?.nextOpenTimeMessage &&
                    <p className='text-[#686b78] text-sm flex justify-items-start items-center'>
                        {availability.nextOpenTimeMessage.toUpperCase()}
                    </p>
                }
            </div>
        </div>
    );

}

export default RestaurantCard;